import { useEffect, useRef, useState } from 'react';
import type { GameState, StructureName, TraitName } from '@/types/game';
import { STRUCTURES } from '@/data/structures';
import { Button } from '@/components/ui/Button';
import { buildDeathPrompt } from '@/game/buildEraPrompt';
import { streamSummary } from '@/services/gemini';

interface Props {
  state: GameState;
  onNewLife: () => void;
}

const TRAIT_LABEL: Record<TraitName, string> = {
  n: 'Neuro.',
  e: 'Ekstra.',
  o: 'Otwar.',
  a: 'Ugod.',
  c: 'Sumien.',
};

function dominantStructure(state: GameState): StructureName {
  const entries = Object.entries(state.brainInfluence) as [StructureName, number][];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

function caseNumber(state: GameState): string {
  const seed = (state.player.age * 17 + state.flags.length * 31) % 9000 + 1000;
  return `ZMS-${seed}/${state.player.age}`;
}

export function SummaryScreen({ state, onNewLife }: Props) {
  const dom = dominantStructure(state);
  const domMeta = STRUCTURES[dom];
  const domCount = state.brainInfluence[dom];
  const total = Object.values(state.brainInfluence).reduce((s, v) => s + v, 0);

  const [finalAge] = useState(() => {
    const min = Math.min(state.player.age, 80);
    return Math.floor(Math.random() * (100 - min)) + min;
  });

  const [narrative, setNarrative] = useState('');
  const [done, setDone] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    streamSummary(
      buildDeathPrompt(state, finalAge),
      (chunk) => setNarrative((prev) => prev + chunk),
      ctrl.signal,
    )
      .then(() => setDone(true))
      .catch((err) => {
        if (err instanceof Error && err.name === 'AbortError') return;
        console.error('[Death LLM]', err);
        setDone(true);
      });

    return () => ctrl.abort();
  }, []);

  const deathLabel = state.deathReason ? 'Śmierć nagła / nieprawidłowości' : 'Naturalna';

  return (
    <main className="min-h-screen bg-canvas bg-polka flex items-start justify-center px-4 py-10">
      <div className="max-w-xl w-full">

        {/* Dokument kostnicy */}
        <div className="bg-[#fdfbf4] border-[2px] border-[#5a5a4a] shadow-[6px_6px_0_#1a1a1a] relative">

          {/* Nagłówek dokumentu */}
          <div className="border-b-[2px] border-[#5a5a4a] px-6 py-4 flex justify-between items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#3a3a2a] font-bold">
                Zakład Medycyny Sądowej
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#5a5a4a] mt-0.5">
                Protokół Sekcji Zwłok
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-[#5a5a4a]">Nr akt: {caseNumber(state)}</p>
              <p className="font-mono text-xs text-[#9a9a8a] mt-0.5">Str. 1 / 1</p>
            </div>
          </div>

          {/* Pieczęć "ZGON POTWIERDZONY" */}
          <div className="absolute top-16 right-5 rotate-6 border-[2.5px] border-red-700/65 px-3 py-1 pointer-events-none">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-red-700/65">
              Zgon potwierdzony
            </p>
          </div>

          {/* Dane identyfikacyjne */}
          <div className="px-6 py-4 border-b border-dashed border-[#9a9a8a] grid grid-cols-2 gap-x-6 gap-y-4">
            <Field label="Wiek w chwili zgonu" value={`${finalAge} lat`} />
            <Field label="Charakter zgonu" value={deathLabel} />
            <Field label="Dom. struktura mózgu" value={domMeta.label} valueColor={domMeta.color} />
            <Field label="Łączna liczba decyzji" value={String(total)} />
          </div>

          {/* Narracja LLM */}
          <div className="px-6 py-5 border-b border-dashed border-[#9a9a8a]">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7a7a6a] mb-3">
              Opis okoliczności i przebiegu życia
            </p>
            {narrative ? (
              <p className="font-mono text-sm leading-relaxed text-[#1a1a0e] whitespace-pre-wrap">
                {narrative}
                {!done && <span className="animate-pulse">▍</span>}
              </p>
            ) : (
              <div className="space-y-2 animate-pulse">
                {[100, 90, 95, 80, 88].map((w, i) => (
                  <div key={i} className="h-2.5 bg-[#c8c8b4] rounded-sm" style={{ width: `${w}%` }} />
                ))}
              </div>
            )}
          </div>

          {/* Profil psychologiczny — pionowe słupki */}
          <div className="px-6 py-4 border-b border-dashed border-[#9a9a8a]">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#7a7a6a] mb-4">
              Badanie psychologiczne pośmiertne
            </p>
            <div className="flex gap-4 items-end">
              {(Object.keys(state.player.big5) as TraitName[]).map((t) => {
                const v = state.player.big5[t];
                return (
                  <div key={t} className="flex flex-col items-center gap-1.5 flex-1">
                    <div className="w-full h-20 bg-[#e8e4d4] border border-[#c0bca8] relative">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-[#3a3a2a]"
                        style={{ height: `${v}%` }}
                      />
                    </div>
                    <p className="font-mono text-[10px] text-[#5a5a4a] text-center leading-tight">
                      {TRAIT_LABEL[t]}
                    </p>
                  </div>
                );
              })}
              {/* Dominująca struktura */}
              <div className="flex flex-col items-center gap-1.5 w-20 shrink-0">
                <div
                  className="w-full h-20 border-2 flex items-center justify-center p-1"
                  style={{ borderColor: domMeta.color, backgroundColor: `${domMeta.color}18` }}
                >
                  <p
                    className="font-mono text-[10px] text-center leading-tight"
                    style={{ color: domMeta.color }}
                  >
                    {domMeta.label}
                  </p>
                </div>
                <p className="font-mono text-[10px] text-[#5a5a4a] text-center leading-tight">
                  {domCount}/{total} dec.
                </p>
              </div>
            </div>
          </div>

          {/* Stopka z podpisem */}
          <div className="px-6 py-4 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] text-[#7a7a6a]">
                Podpis lekarza prowadzącego:
              </p>
              <p className="font-mono text-xs mt-6 border-t border-[#9a9a8a] pt-1 text-[#3a3a2a]">
                dr n. med. K. Wiśniewska
              </p>
            </div>
            <Button variant="secondary" onClick={onNewLife} disabled={!done}>
              {done ? 'Nowe życie' : '...'}
            </Button>
          </div>

        </div>

        {/* Dolna adnotacja */}
        <p className="font-mono text-[10px] text-center text-[#9a9a8a] mt-3 uppercase tracking-widest">
          Dokument poufny — do użytku wewnętrznego
        </p>

      </div>
    </main>
  );
}

function Field({
  label,
  value,
  valueColor,
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-[#7a7a6a]">{label}</p>
      <p className="font-mono text-sm font-bold text-[#1a1a0e] mt-1" style={valueColor ? { color: valueColor } : undefined}>
        {value}
      </p>
    </div>
  );
}

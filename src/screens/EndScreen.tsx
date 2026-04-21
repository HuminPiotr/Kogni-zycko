import type { GameState, StructureName, TraitName } from '@/types/game';
import { STRUCTURES } from '@/data/structures';
import { Button } from '@/components/ui/Button';

interface Props {
  state: GameState;
  onNewLife: () => void;
}

const TRAIT_LABEL: Record<TraitName, string> = {
  n: 'Neurotyczność',
  e: 'Ekstrawersja',
  o: 'Otwartość',
  a: 'Ugodowość',
  c: 'Sumienność',
};

// Heurystyka opisowych tytułów na końcu — PRD sek. 4.3.
function describeTrait(trait: TraitName, value: number): string {
  const map: Record<TraitName, [string, string]> = {
    n: ['Stoik z granitu', 'Hipochondryk / Panikarz'],
    e: ['Domator', 'Dusza towarzystwa'],
    o: ['Konwencjonalny Pragmatyk', 'Szalony Eksplorator'],
    a: ['Sceptyczny Wojownik', 'Empatyczny Anioł'],
    c: ['Kreatywny Chaos', 'Maszyna Produktywności'],
  };
  return value >= 50 ? map[trait][1] : map[trait][0];
}

// Dominująca struktura — najwyższa z Big5 mapuje na strukturę.
function dominantStructure(state: GameState): StructureName {
  const { n, e, o, a, c } = state.player.big5;
  const pairs: [StructureName, number][] = [
    ['amygdala', n],
    ['caudate', e],
    ['hippocampus', o],
    ['insula', a],
    ['pfc', c],
  ];
  pairs.sort((x, y) => y[1] - x[1]);
  return pairs[0][0];
}

export function EndScreen({ state, onNewLife }: Props) {
  const isNatural = state.deathReason === null;
  const dom = dominantStructure(state);
  const domMeta = STRUCTURES[dom];

  return (
    <main className="min-h-screen bg-canvas bg-polka flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-surface border-[3px] border-border-cartoon rounded-2xl shadow-cartoon-l p-8 space-y-6">
        <header className="text-center border-b-2 border-border-subtle pb-4">
          <p className="font-mono text-xs uppercase tracking-widest opacity-70">
            Koniec życia
          </p>
          <h1 className="font-display text-5xl">{state.player.age} lat</h1>
          <p className="mt-2 text-text-secondary">
            {isNatural
              ? 'System przetrwał pomyślnie! Pełne życie od narodzin do naturalnego końca.'
              : `Przyczyna: ${state.deathReason}`}
          </p>
        </header>

        <section>
          <h2 className="font-display text-xl mb-3">Profil psychologiczny</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(Object.keys(state.player.big5) as TraitName[]).map((t) => {
              const v = state.player.big5[t];
              return (
                <div
                  key={t}
                  className="border-2 border-border-subtle rounded px-3 py-2 bg-surface-warm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm">{TRAIT_LABEL[t]}</span>
                    <span className="font-mono text-xs">{v}/100</span>
                  </div>
                  <div className="text-sm mt-1 text-text-secondary">
                    {describeTrait(t, v)}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          className="border-[3px] rounded-xl p-4 bg-surface-warm"
          style={{ borderColor: domMeta.color }}
        >
          <h2 className="font-display text-xl mb-2">Raport dominującej struktury</h2>
          <p>
            Autopsja wykazała, że stery najczęściej przejmowało{' '}
            <strong style={{ color: domMeta.color }}>{domMeta.label}</strong> —{' '}
            <em>{domMeta.archetype}</em>. {domMeta.tagline}
          </p>
        </section>

        {state.flags.length > 0 && (
          <section>
            <h2 className="font-display text-sm mb-2 opacity-70">Flagi z życia</h2>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {state.flags.map((f) => (
                <span
                  key={f}
                  className="px-2 py-1 border border-border-subtle rounded bg-surface"
                >
                  {f}
                </span>
              ))}
            </div>
          </section>
        )}

        <div className="flex justify-center pt-2">
          <Button variant="primary" onClick={onNewLife}>
            Zagraj ponownie (Nowe życie)
          </Button>
        </div>
      </div>
    </main>
  );
}

import type { GameState, StructureName, TraitName } from '@/types/game';
import { STRUCTURES } from '@/data/structures';
import { getEnding } from '@/data/endings';
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

const TRAIT_DESC: Record<TraitName, [string, string]> = {
  n: ['Spokojny jak tafla lodu.', 'Wrażliwy, niespokojny, reaktywny.'],
  e: ['Zamknięty w sobie, obserwator.', 'Energia skierowana na zewnątrz.'],
  o: ['Pragmatyczny, przewidywalny.', 'Ciekawy — zwłaszcza tego jak rzeczy działają w środku.'],
  a: ['Inni ludzie to dane, nie partnerzy.', 'Empatyczny, kooperatywny.'],
  c: ['Chaotyczny, impulsywny.', 'Skupiony — jeśli chce.'],
};

function dominantStructure(state: GameState): StructureName {
  const entries = Object.entries(state.brainInfluence) as [StructureName, number][];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

function totalDecisions(state: GameState): number {
  return Object.values(state.brainInfluence).reduce((s, v) => s + v, 0);
}

export function EndScreen({ state, onNewLife }: Props) {
  const ending = getEnding(state.flags);
  const dom = dominantStructure(state);
  const domMeta = STRUCTURES[dom];
  const domCount = state.brainInfluence[dom];
  const total = totalDecisions(state);

  return (
    <main className="min-h-screen bg-canvas bg-polka flex items-center justify-center px-4 py-8">
      <div className="max-w-xl w-full bg-surface border-[3px] border-border-cartoon rounded-2xl shadow-cartoon-l p-8 space-y-6">

        <header className="text-center space-y-2">
          <p className="font-display text-5xl">{ending.icon}</p>
          <h1 className="font-display text-3xl leading-tight">{ending.name}</h1>
          <p className="text-base leading-relaxed text-text-secondary pt-1">
            {ending.text}
          </p>
        </header>

        <div className="border-t-2 border-border-subtle pt-4 space-y-1">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-3">
            Autopsja mózgu
          </p>
          {(Object.keys(state.player.big5) as TraitName[]).map((t) => {
            const v = state.player.big5[t];
            const desc = v >= 50 ? TRAIT_DESC[t][1] : TRAIT_DESC[t][0];
            return (
              <div key={t} className="mb-3">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-display text-sm">{TRAIT_LABEL[t]}</span>
                  <span className="font-mono text-xs">{v}</span>
                </div>
                <div className="w-full h-2 bg-border-subtle rounded-sm overflow-hidden border border-border-cartoon mb-1">
                  <div className="h-full bg-text-primary" style={{ width: `${v}%` }} />
                </div>
                <p className="text-xs text-text-secondary">{desc}</p>
              </div>
            );
          })}
        </div>

        <div
          className="border-[3px] rounded-xl p-4 bg-surface-warm"
          style={{ borderColor: domMeta.color }}
        >
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
            Dominująca struktura
          </p>
          <p className="font-display text-lg" style={{ color: domMeta.color }}>
            {domMeta.label}
          </p>
          <p className="text-sm text-text-secondary mt-1">
            {domCount} z {total} decyzji — {domMeta.tagline}
          </p>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" onClick={onNewLife}>
            Zagraj ponownie
          </Button>
        </div>
      </div>
    </main>
  );
}

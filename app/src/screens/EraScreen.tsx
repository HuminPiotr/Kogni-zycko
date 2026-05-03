import type { Era } from '@/types/game';
import { ERAS, ERA_SUMMARIES } from '@/data/eras';
import { Button } from '@/components/ui/Button';

interface Props {
  era: Era;
  onContinue: () => void;
}

export function EraScreen({ era, onContinue }: Props) {
  const eraIndex = ERAS.indexOf(era);
  const eraNumber = eraIndex + 1;
  const summary = ERA_SUMMARIES[eraNumber as keyof typeof ERA_SUMMARIES];

  return (
    <main className="min-h-screen bg-canvas bg-polka flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full bg-surface border-[3px] border-border-cartoon rounded-2xl shadow-cartoon-l p-8 space-y-6">
        <header className="text-center pb-4 border-b-2 border-border-subtle">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
            Era {era.roman}
          </p>
          <h1 className="font-display text-4xl mb-2">{era.name}</h1>
          <p className="text-lg text-text-secondary italic">{era.vibe}</p>
        </header>

        <div className="space-y-4 bg-background rounded-lg p-6 border border-border-subtle">
          <p className="text-sm leading-relaxed text-text-primary whitespace-pre-wrap">
            {summary}
          </p>
        </div>

        <Button variant="primary" onClick={onContinue} className="w-full justify-center">
          Następna Era →
        </Button>
      </div>
    </main>
  );
}

import { useEffect, useRef, useState } from 'react';
import type { Era, GameState } from '@/types/game';
import { ERAS, ERA_SUMMARIES } from '@/data/eras';
import { Button } from '@/components/ui/Button';
import { buildEraPrompt } from '@/game/buildEraPrompt';
import { streamSummary } from '@/services/gemini';

interface Props {
  era: Era;
  state: GameState;
  onContinue: () => void;
}

export function EraScreen({ era, state, onContinue }: Props) {
  const eraIndex = ERAS.indexOf(era);
  const eraNumber = eraIndex + 1;

  const [narrative, setNarrative] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    streamSummary(
      buildEraPrompt(state, eraNumber),
      (chunk) => setNarrative((prev) => prev + chunk),
      ctrl.signal,
    )
      .then(() => setDone(true))
      .catch((err) => {
        if (err instanceof Error && err.name === 'AbortError') return;
        console.error('[Era LLM]', err);
        setError(true);
        setDone(true);
      });

    return () => ctrl.abort();
  }, []);

  const fallback = ERA_SUMMARIES[eraNumber as keyof typeof ERA_SUMMARIES];
  const displayText = error ? fallback : narrative;

  const bgFile: Record<number, string> = { 2: '1', 3: '2' };
  const bg = bgFile[eraNumber];

  return (
    <main
      className="h-dvh relative flex flex-col overflow-hidden"
      style={bg ? {
        backgroundImage: `url('${import.meta.env.BASE_URL}Ery/${bg}.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : { backgroundColor: 'var(--color-canvas)' }}
    >
      {bg && <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75 pointer-events-none" />}

      <div className="relative z-10 flex flex-col h-full max-w-sm mx-auto w-full px-5 py-8">

        {/* nagłówek ery */}
        <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
          <p className={`font-mono text-[10px] uppercase tracking-widest ${bg ? 'text-white/50' : 'opacity-50'}`}>
            Era {era.roman}
          </p>
          <h1 className={`font-display text-5xl leading-none ${bg ? 'text-white' : 'text-text-primary'}`}>
            {era.name}
          </h1>
          <p className={`text-sm italic leading-snug max-w-xs ${bg ? 'text-white/70' : 'text-text-secondary'}`}>
            {era.vibe}
          </p>
        </div>

        {/* box z narracją LLM */}
        <div className={`mb-5 rounded-2xl p-5 ${bg ? 'bg-black/50 backdrop-blur-sm border border-white/15' : 'bg-surface border-[3px] border-border-cartoon'}`}>
          <p className={`font-mono text-[10px] uppercase tracking-widest mb-3 ${bg ? 'text-white/40' : 'opacity-50'}`}>
            Raport mózgowy
          </p>

          {displayText ? (
            <p className={`text-sm leading-relaxed ${bg ? 'text-white/90' : ''}`}>
              {displayText}
              {!done && <span className="animate-pulse ml-0.5">▍</span>}
            </p>
          ) : (
            <div className="space-y-2 animate-pulse">
              <div className={`h-3 rounded w-full ${bg ? 'bg-white/10' : 'bg-border-subtle'}`} />
              <div className={`h-3 rounded w-5/6 ${bg ? 'bg-white/10' : 'bg-border-subtle'}`} />
              <div className={`h-3 rounded w-4/6 ${bg ? 'bg-white/10' : 'bg-border-subtle'}`} />
            </div>
          )}
        </div>

        <Button
          variant="primary"
          onClick={onContinue}
          className="w-full justify-center"
          disabled={!done}
        >
          {done ? 'Następna era →' : 'Ładowanie...'}
        </Button>
      </div>
    </main>
  );
}

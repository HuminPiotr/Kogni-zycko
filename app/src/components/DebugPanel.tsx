import { useState } from 'react';
import type { GameState } from '@/types/game';

interface Props {
  state: GameState;
}

export function DebugPanel({ state }: Props) {
  const [open, setOpen] = useState(false);
  const { big5 } = state.player;

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 font-mono text-xs px-2 py-1 border-2 border-border-cartoon rounded bg-surface shadow-cartoon-s opacity-50 hover:opacity-100"
        aria-label="Panel debug"
      >
        🔧 Debug
      </button>

      {open && (
        <div className="fixed top-0 right-0 h-full w-64 z-50 bg-text-primary text-text-on-dark border-l-4 border-border-cartoon shadow-xl overflow-y-auto">
          <div className="p-4 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm">🔧 Debug</span>
              <button
                onClick={() => setOpen(false)}
                className="opacity-60 hover:opacity-100 px-1"
              >
                ✕
              </button>
            </div>

            <section>
              <p className="uppercase tracking-widest opacity-50 mb-1 text-[10px]">Big5</p>
              {(['n', 'e', 'o', 'a', 'c'] as const).map((t) => (
                <div key={t} className="flex justify-between">
                  <span className="uppercase">{t}:</span>
                  <span>{big5[t]}</span>
                </div>
              ))}
            </section>

            <section>
              <p className="uppercase tracking-widest opacity-50 mb-1 text-[10px]">Flagi</p>
              {state.flags.length === 0 ? (
                <span className="opacity-40">brak</span>
              ) : (
                state.flags.map((f) => (
                  <div key={f} className="text-lime truncate">{f}</div>
                ))
              )}
            </section>

            <section>
              <p className="uppercase tracking-widest opacity-50 mb-1 text-[10px]">Wpływ struktur</p>
              {Object.entries(state.brainInfluence).map(([s, v]) => (
                <div key={s} className="flex justify-between">
                  <span className="truncate">{s}:</span>
                  <span>{v}</span>
                </div>
              ))}
            </section>

            <section>
              <p className="uppercase tracking-widest opacity-50 mb-1 text-[10px]">Event</p>
              <span className="opacity-80 break-all">{state.currentEventId ?? '—'}</span>
            </section>

            <section>
              <p className="uppercase tracking-widest opacity-50 mb-1 text-[10px]">Faza</p>
              <span className="text-lime">{state.phase}</span>
            </section>

            <section>
              <p className="uppercase tracking-widest opacity-50 mb-1 text-[10px]">Zasoby</p>
              <div className="flex justify-between"><span>🔋</span><span>{state.resources.energy}</span></div>
              <div className="flex justify-between"><span>😊</span><span>{state.resources.mood}</span></div>
              <div className="flex justify-between"><span>🧠</span><span>{state.resources.willpower}</span></div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

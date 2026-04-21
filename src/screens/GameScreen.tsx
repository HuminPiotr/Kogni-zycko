import type { UseGameState } from '@/game/useGameState';
import { StatusBar } from '@/components/StatusBar';
import { SceneView } from '@/components/SceneView';
import { DecisionDeck } from '@/components/DecisionDeck';
import { RevealPanel } from '@/components/RevealPanel';

interface Props {
  game: UseGameState;
}

export function GameScreen({ game }: Props) {
  const { state, currentEvent, chooseDecision, advanceTurn } = game;

  const lastDecision =
    state.lastDecisionId && currentEvent
      ? currentEvent.decisions.find((d) => d.id === state.lastDecisionId) ?? null
      : null;

  return (
    <div className="min-h-screen bg-canvas bg-polka flex flex-col">
      <StatusBar player={state.player} resources={state.resources} />

      <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-6 space-y-6">
        {currentEvent ? (
          <>
            <SceneView event={currentEvent} />

            {state.phase === 'scene' && (
              <DecisionDeck
                decisions={currentEvent.decisions}
                resources={state.resources}
                onPick={chooseDecision}
              />
            )}

            {state.phase === 'reveal' && lastDecision && (
              <RevealPanel
                decision={lastDecision}
                deltas={state.lastDeltas}
                onAdvance={advanceTurn}
              />
            )}
          </>
        ) : (
          <EmptyYear onAdvance={advanceTurn} />
        )}
      </main>

      <footer className="mx-auto max-w-5xl w-full px-4 py-3 text-xs font-mono opacity-60 flex items-center justify-between">
        <span>Flagi: {state.flags.length > 0 ? state.flags.join(', ') : '—'}</span>
        <span>Odegrane: {state.eventLog.length}</span>
      </footer>
    </div>
  );
}

function EmptyYear({ onAdvance }: { onAdvance: () => void }) {
  return (
    <section className="bg-surface border-2 border-border-cartoon rounded-xl p-6 shadow-cartoon-m space-y-4 text-center">
      <p className="text-lg">Rok minął bez szczególnych zdarzeń. Życie toczy się dalej.</p>
      <button
        className="font-display uppercase text-sm px-5 py-2 bg-electric-rose text-white border-2 border-border-cartoon shadow-cartoon-s"
        onClick={onAdvance}
      >
        Następny rok →
      </button>
    </section>
  );
}

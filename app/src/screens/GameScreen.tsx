import { useState } from 'react';
import type { UseGameState } from '@/game/useGameState';
import { StatusBar } from '@/components/StatusBar';
import { SceneView } from '@/components/SceneView';
import { DecisionDeck } from '@/components/DecisionDeck';
import { RevealPanel } from '@/components/RevealPanel';
import { SilentPanel } from '@/components/SilentPanel';
import { VoicesInline } from '@/components/VoicesInline';
import { StatsSheet } from '@/components/StatsSheet';

interface Props {
  game: UseGameState;
}

export function GameScreen({ game }: Props) {
  const { state, currentEvent, chooseDecision, advanceTurn } = game;
  const [showStats, setShowStats] = useState(false);

  const lastDecision =
    state.lastDecisionId && currentEvent
      ? (currentEvent.decisions ?? []).find((d) => d.id === state.lastDecisionId) ?? null
      : null;

  return (
    <div className="h-dvh bg-canvas bg-polka flex items-stretch justify-center">
      <div className="w-full max-w-sm flex flex-col overflow-hidden">
        <StatusBar
          player={state.player} resources={state.resources}
          onStatsClick={() => setShowStats(true)}
        />

        {state.phase === 'silent' && currentEvent ? (
          <SilentPanel event={currentEvent} onAdvance={advanceTurn} />
        ) : (
          <main className="flex-1 flex flex-col overflow-hidden px-3 py-2 gap-3 min-h-0">
            {currentEvent && (
              <>
                <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto">
                  <SceneView event={currentEvent} />
                  <VoicesInline
                    voices={currentEvent.voices ?? []}
                    eventId={currentEvent.id}
                  />
                </div>
                <div className="shrink-0 h-[42vh]">
                  <DecisionDeck
                    decisions={currentEvent.decisions ?? []} resources={state.resources}
                    onPick={chooseDecision}
                  />
                </div>
              </>
            )}
          </main>
        )}

        <StatsSheet
          player={state.player} resources={state.resources}
          lastDeltas={state.lastDeltas}
          open={showStats}
          onClose={() => setShowStats(false)}
        />

        <RevealPanel
          open={state.phase === 'reveal'}
          decision={lastDecision}
          deltas={state.lastDeltas}
          onAdvance={advanceTurn}
        />
      </div>
    </div>
  );
}

import type { GameEvent } from '@/types/game';

interface Props {
  event: GameEvent;
}

export function SceneView({ event }: Props) {
  const isTurningPoint = event.type === 'turning_point';

  return (
    <section
      className={`bg-surface rounded-xl px-4 py-3 shadow-cartoon-s shrink-0 ${
        isTurningPoint
          ? 'border-[3px] border-sunset'
          : 'border-2 border-border-cartoon'
      }`}
    >
      {isTurningPoint && (
        <div className="font-display text-[10px] uppercase tracking-widest text-sunset mb-1">
          ⚡ Punkt zwrotny
        </div>
      )}
      <div className="max-h-[140px] overflow-y-auto pr-1">
        <p className="text-base leading-relaxed">{event.sceneText}</p>
      </div>
    </section>
  );
}

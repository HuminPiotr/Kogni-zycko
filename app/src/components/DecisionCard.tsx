import { useState } from 'react';
import type { CardType, Decision, Resources } from '@/types/game';
import { canAfford } from '@/game/resources';
import { useSound } from '@/hooks/useSound';

interface Props {
  decision: Decision;
  resources: Resources;
  onPick: (id: string) => void;
}

const TYPE_LABEL: Record<CardType, string> = {
  rational: 'Racjonalna',
  active: 'Aktywna',
  empathic: 'Empatyczna',
  impulsive: 'Impulsywna',
  avoidant: 'Unikająca',
};

const TYPE_COLOR: Record<CardType, string> = {
  rational: 'var(--color-card-rational)',
  active: 'var(--color-card-active)',
  empathic: 'var(--color-card-empathic)',
  impulsive: 'var(--color-card-impulsive)',
  avoidant: 'var(--color-card-avoidant)',
};

const shakeStyles = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-8px); }
  }
  .shake {
    animation: shake 0.4s ease-in-out;
  }
`;

export function DecisionCard({ decision, resources, onPick }: Props) {
  const [isShaking, setIsShaking] = useState(false);
  const affordable = canAfford(resources, decision.costs);
  const playSwich = useSound('swich');

  const handleClick = () => {
    if (!affordable) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
      return;
    }
    playSwich();
    onPick(decision.id);
  };

  return (
    <>
      <style>{shakeStyles}</style>
      <div className="h-full">
        <button
          type="button"
          onClick={handleClick}
          className={`
            w-full h-full flex flex-col bg-surface
            border-[3px] border-border-cartoon rounded-2xl
            shadow-[6px_6px_0_#1a1a1a] overflow-hidden
            active:translate-x-[2px] active:translate-y-[2px]
            active:shadow-[4px_4px_0_#1a1a1a]
            transition-[transform,box-shadow] duration-100
            ${!affordable ? 'grayscale cursor-not-allowed' : 'cursor-pointer'}
            ${isShaking ? 'shake' : ''}
          `}
        >
          {/* Color strip */}
          <div
            className="h-3 w-full shrink-0"
            style={{ backgroundColor: TYPE_COLOR[decision.type] }}
          />

          {/* Centered body */}
          <div className="flex-1 px-5 py-4 flex flex-col items-center justify-center gap-3 min-h-0">
            <span
              className="font-display text-[10px] uppercase tracking-widest text-center"
              style={{ color: TYPE_COLOR[decision.type] }}
            >
              {TYPE_LABEL[decision.type]}
            </span>
            <p className="text-base leading-snug text-center">{decision.text}</p>
          </div>

          {/* Footer with costs */}
          <div
            className="px-5 py-3 border-t-2 border-border-subtle shrink-0 flex flex-col gap-2"
            style={{ backgroundColor: `color-mix(in srgb, ${TYPE_COLOR[decision.type]} 12%, transparent)` }}
          >
            {decision.costs.length > 0 && (
              <div className="flex flex-wrap gap-1 justify-center">
                {decision.costs.map((c) => (
                  <span
                    key={c.resource}
                    className="font-mono text-xs px-2 py-1 border border-border-cartoon rounded bg-electric-rose text-white"
                  >
                    {c.resource === 'energy' ? '🔋' : c.resource === 'mood' ? '😊' : '🧠'} -{c.amount}
                  </span>
                ))}
              </div>
            )}
            <span className="font-display text-sm uppercase tracking-wide opacity-70 text-center">
              Wybierz →
            </span>
          </div>
        </button>
      </div>
    </>
  );
}

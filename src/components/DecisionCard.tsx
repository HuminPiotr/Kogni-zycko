import type { CardType, Decision, ResourceName, Resources } from '@/types/game';
import { canAfford } from '@/game/resources';

const RESOURCE_ICON: Record<ResourceName, string> = {
  energy: '🔋',
  mood: '😊',
  willpower: '🧠',
};

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
  rational: 'var(--color-pfc)',
  active: 'var(--color-caudate)',
  empathic: 'var(--color-insula)',
  impulsive: 'var(--color-amygdala)',
  avoidant: 'var(--color-sunset)',
};

export function DecisionCard({ decision, resources, onPick }: Props) {
  const affordable = canAfford(resources, decision.cost);

  return (
    <div className={`h-full ${!affordable ? 'opacity-40 pointer-events-none' : ''}`}>
      <button
        type="button"
        onClick={() => onPick(decision.id)}
        className="
          w-full h-full flex flex-col bg-surface
          border-[3px] border-border-cartoon rounded-2xl
          shadow-[6px_6px_0_#1a1a1a] overflow-hidden
          active:translate-x-[2px] active:translate-y-[2px]
          active:shadow-[4px_4px_0_#1a1a1a]
          transition-[transform,box-shadow] duration-100
        "
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

        {/* Footer */}
        <div
          className="px-5 py-3 border-t-2 border-border-subtle shrink-0 flex items-center justify-between"
          style={{ backgroundColor: `color-mix(in srgb, ${TYPE_COLOR[decision.type]} 12%, transparent)` }}
        >
          {decision.cost && decision.cost.amount > 0 ? (
            <span className="font-mono text-sm font-bold" style={{ color: TYPE_COLOR[decision.type] }}>
              {RESOURCE_ICON[decision.cost.resource]} -{decision.cost.amount}
            </span>
          ) : (
            <span className="font-mono text-xs opacity-40">bezpł.</span>
          )}
          <span className="font-display text-sm uppercase tracking-wide opacity-70">
            Wybierz →
          </span>
        </div>
      </button>
    </div>
  );
}

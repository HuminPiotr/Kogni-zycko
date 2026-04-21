import type { CardType, Decision, Resources } from '@/types/game';
import { canAfford } from '@/game/resources';

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

const RESOURCE_ICON: Record<string, string> = {
  energy: '🔋',
  mood: '😊',
  willpower: '🧠',
};

export function DecisionCard({ decision, resources, onPick }: Props) {
  const affordable = canAfford(resources, decision.cost);
  const isFree = !decision.cost || decision.cost.amount === 0;

  // Hazardowy pattern dla kart darmowych (desing-guide sek. 5.1).
  const freePatternClass =
    decision.type === 'impulsive' ? 'bg-hazard-rose' : 'bg-hazard-sunset';

  return (
    <button
      type="button"
      disabled={!affordable}
      onClick={() => onPick(decision.id)}
      className={`
        group relative text-left flex flex-col min-h-[220px]
        border-[3px] border-border-cartoon rounded-xl
        ${affordable
          ? 'bg-surface shadow-cartoon-m hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-cartoon-l transition-transform duration-100'
          : 'bg-border-subtle opacity-60 cursor-not-allowed shadow-cartoon-s'}
        overflow-hidden
      `}
    >
      {/* Górna belka z kolorem akcentu */}
      <div
        className="px-4 py-2 border-b-2 border-border-cartoon flex items-center justify-between"
        style={{ backgroundColor: TYPE_COLOR[decision.type] }}
      >
        <span className="font-display uppercase text-xs tracking-wider" style={{ color: '#1A1A2E' }}>
          {TYPE_LABEL[decision.type]}
        </span>
        {isFree && (
          <span
            className="font-display text-xs px-2 py-0.5 border-2 border-border-cartoon bg-surface"
            title="Karta darmowa — brak kosztu, ale NEGATYWNE konsekwencje"
          >
            ⚠️ DARMOWE
          </span>
        )}
      </div>

      {/* Hazardowe paski na tle treści dla kart darmowych */}
      {isFree && (
        <div className={`absolute inset-0 top-[40px] ${freePatternClass} opacity-15 pointer-events-none`} />
      )}

      {/* Treść decyzji */}
      <div className="flex-1 px-4 py-4 relative z-10">
        <p className="text-base leading-snug">{decision.text}</p>
      </div>

      {/* Koszt */}
      <div className="px-4 py-2 border-t-2 border-border-subtle flex items-center justify-between relative z-10 bg-surface/90">
        {decision.cost && decision.cost.amount > 0 ? (
          <span className="font-mono text-sm">
            {RESOURCE_ICON[decision.cost.resource]} −{decision.cost.amount}
          </span>
        ) : (
          <span className="font-mono text-xs uppercase tracking-widest opacity-70">
            Bez kosztu
          </span>
        )}
        {!affordable && <span className="text-xs">🔒</span>}
      </div>
    </button>
  );
}

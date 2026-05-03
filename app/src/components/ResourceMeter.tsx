import type { ResourceName } from '@/types/game';

const LABELS: Record<ResourceName, { icon: string; name: string }> = {
  energy: { icon: '🔋', name: 'Energia' },
  mood: { icon: '😊', name: 'Nastrój' },
  willpower: { icon: '🧠', name: 'Siła Woli' },
};

interface Props {
  resource: ResourceName;
  value: number;
  trend?: number;
}

function stateColor(value: number): string {
  if (value > 60) return 'var(--color-state-good)';
  if (value >= 30) return 'var(--color-state-warning)';
  return 'var(--color-state-critical)';
}

export function ResourceMeter({ resource, value, trend }: Props) {
  const label = LABELS[resource];
  const color = stateColor(value);

  return (
    <div className="flex flex-col gap-1 min-w-[120px]">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1 text-text-on-dark text-xs font-bold">
          <span>{label.icon}</span>
          <span className="uppercase tracking-wider">{label.name}</span>
        </span>
        <div className="flex items-center gap-1">
          <span className="font-mono text-xs text-text-on-dark">{value}</span>
          {trend !== undefined && (
            <span
              className={`font-mono text-[9px] ${trend >= 0 ? 'text-lime' : 'text-electric-rose'}`}
              title="Regeneracja na turę"
            >
              {trend >= 0 ? `+${trend}` : trend}↺
            </span>
          )}
        </div>
      </div>
      <div className="w-full h-3 bg-border-cartoon/40 rounded-sm overflow-hidden border border-border-cartoon">
        <div
          className="h-full transition-[width] duration-300"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

import type { Player, Resources } from '@/types/game';
import { getEra } from '@/utils/getEra';

interface Props {
  player: Player;
  resources: Resources;
  onStatsClick: () => void;
}

const RESOURCE_ICON = { energy: '🔋', mood: '😊', willpower: '🧠' } as const;

function resourceColor(v: number): string {
  if (v > 60) return '#cdd629';
  if (v >= 30) return '#f37826';
  return '#ec1763';
}

export function StatusBar({ player, resources, onStatsClick }: Props) {
  const era = getEra(player.age);

  return (
    <header className="bg-text-primary text-text-on-dark px-4 py-2 flex items-center justify-between gap-3 shrink-0 border-b-2 border-border-cartoon">
      <div className="flex items-baseline gap-2 min-w-0">
        <span className="font-display text-3xl leading-none">{player.age}</span>
        <span className="font-body text-xs opacity-60 truncate">{era.name}</span>
      </div>

      <div className="flex items-center gap-3">
        {(['energy', 'mood', 'willpower'] as const).map((r) => (
          <span
            key={r}
            className="font-mono text-sm font-bold"
            style={{ color: resourceColor(resources[r]) }}
          >
            {RESOURCE_ICON[r]}{resources[r]}
          </span>
        ))}
      </div>

      <button
        onClick={onStatsClick}
        className="font-mono text-xs px-2 py-1 border border-text-on-dark/30 rounded opacity-60 hover:opacity-100 shrink-0"
        aria-label="Statystyki"
      >
        📊
      </button>
    </header>
  );
}

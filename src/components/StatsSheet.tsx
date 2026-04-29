import type { Player, Resources, TraitName } from '@/types/game';
import { computeRegenDeltas } from '@/game/resources';
import { BottomSheet } from '@/components/BottomSheet';
import { StatBar } from '@/components/StatBar';
import { ResourceMeter } from '@/components/ResourceMeter';

interface Props {
  player: Player;
  resources: Resources;
  lastDeltas?: Partial<Record<TraitName, number>> | null;
  open: boolean;
  onClose: () => void;
}

export function StatsSheet({ player, resources, lastDeltas, open, onClose }: Props) {
  const trends = computeRegenDeltas(player.big5);

  return (
    <BottomSheet open={open} onClose={onClose} maxHeight="80vh">
      <div className="p-4 pb-8 space-y-6 bg-text-primary text-text-on-dark rounded-t-2xl">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg">Osobowość &amp; Zasoby</h2>
          <button
            onClick={onClose}
            className="font-mono text-sm opacity-60 hover:opacity-100 px-2 py-1"
          >
            ✕
          </button>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-50 mb-3">
            Big Five
          </p>
          <StatBar big5={player.big5} lastDeltas={lastDeltas} />
        </div>

        <div className="space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">
            Zasoby
          </p>
          <ResourceMeter resource="energy" value={resources.energy} trend={trends.energy} />
          <ResourceMeter resource="mood" value={resources.mood} trend={trends.mood} />
          <ResourceMeter resource="willpower" value={resources.willpower} trend={trends.willpower} />
        </div>
      </div>
    </BottomSheet>
  );
}

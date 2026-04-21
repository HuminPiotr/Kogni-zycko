import type { Player, Resources, TraitName } from '@/types/game';
import { getEra } from '@/utils/getEra';
import { computeRegenDeltas } from '@/game/resources';
import { StatBar } from '@/components/StatBar';
import { ResourceMeter } from '@/components/ResourceMeter';

interface Props {
  player: Player;
  resources: Resources;
  lastDeltas?: Partial<Record<TraitName, number>> | null;
}

export function StatusBar({ player, resources, lastDeltas }: Props) {
  const era = getEra(player.age);
  const trends = computeRegenDeltas(player.big5);

  return (
    <header className="bg-text-primary text-text-on-dark border-b-2 border-border-cartoon shadow-cartoon-m">
      <div className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap items-center gap-x-8 gap-y-3 justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
              Wiek
            </span>
            <span className="font-display text-3xl leading-none">{player.age}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
              Era {era.roman}
            </span>
            <span className="font-display text-sm text-sunset">{era.name}</span>
          </div>
        </div>

        <StatBar big5={player.big5} lastDeltas={lastDeltas} />

        <div className="flex flex-wrap gap-4">
          <ResourceMeter resource="energy" value={resources.energy} trend={trends.energy} />
          <ResourceMeter resource="mood" value={resources.mood} trend={trends.mood} />
          <ResourceMeter resource="willpower" value={resources.willpower} trend={trends.willpower} />
        </div>
      </div>
    </header>
  );
}

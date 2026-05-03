import type { Big5, Player, StatImpact, TraitName } from '@/types/game';
import { plasticityMultiplier } from '@/data/plasticity';

const GENETIC_RANGE = 30; // PRD sek. 3.3 — cechy dziedziczne w 40–60%, ±30 od startu
const MIN = 0;
const MAX = 100;

function clampToCorridor(value: number, startValue: number): number {
  const low = Math.max(MIN, startValue - GENETIC_RANGE);
  const high = Math.min(MAX, startValue + GENETIC_RANGE);
  return Math.max(low, Math.min(high, value));
}

export function effectiveDelta(age: number, delta: number): number {
  return Math.round(delta * plasticityMultiplier(age));
}

export function applyStatImpact(player: Player, impact: StatImpact): Player {
  const next: Big5 = { ...player.big5 };
  (Object.keys(impact) as TraitName[]).forEach((trait) => {
    const rawDelta = impact[trait] ?? 0;
    if (rawDelta === 0) return;
    const applied = effectiveDelta(player.age, rawDelta);
    const raw = next[trait] + applied;
    next[trait] = clampToCorridor(raw, player.big5Start[trait]);
  });
  return { ...player, big5: next };
}

// Dla RevealPanel — co się faktycznie zmieniło.
export function previewStatImpact(
  player: Player,
  impact: StatImpact,
): Partial<Record<TraitName, number>> {
  const result: Partial<Record<TraitName, number>> = {};
  (Object.keys(impact) as TraitName[]).forEach((trait) => {
    const raw = impact[trait] ?? 0;
    if (raw === 0) return;
    const applied = effectiveDelta(player.age, raw);
    const before = player.big5[trait];
    const after = clampToCorridor(before + applied, player.big5Start[trait]);
    result[trait] = after - before;
  });
  return result;
}

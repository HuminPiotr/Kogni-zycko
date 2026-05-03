import type { GameEvent, GameState, ResourceCondition, TraitCondition } from '@/types/game';

function matchesResourceCondition(
  condition: ResourceCondition | undefined,
  state: GameState,
): boolean {
  if (!condition) return true;
  const val = state.resources[condition.resource];
  switch (condition.op) {
    case '<':  return val < condition.value;
    case '>':  return val > condition.value;
    case '<=': return val <= condition.value;
    case '>=': return val >= condition.value;
  }
}

function matchesTraitCondition(
  condition: TraitCondition | undefined,
  state: GameState,
): boolean {
  if (!condition) return true;
  const val = state.player.big5[condition.trait];
  switch (condition.op) {
    case '<':  return val < condition.value;
    case '>=': return val >= condition.value;
  }
}

function baseFilter(event: GameEvent, state: GameState): boolean {
  if (state.eventLog.includes(event.id)) return false;
  const [min, max] = event.ageRange;
  if (state.player.age < min || state.player.age > max) return false;
  if (event.requiresFlag && !state.flags.includes(event.requiresFlag)) return false;
  if (event.excludesFlag && state.flags.includes(event.excludesFlag)) return false;
  if (event.requiresAnyFlag && !event.requiresAnyFlag.some((f) => state.flags.includes(f))) return false;
  if (!matchesResourceCondition(event.resourceCondition, state)) return false;
  if (!matchesTraitCondition(event.traitCondition, state)) return false;
  return true;
}

export function selectEvent(
  state: GameState,
  pool: GameEvent[],
  rng: () => number = Math.random,
): GameEvent | null {
  const eligible = pool.filter((e) => baseFilter(e, state));
  if (eligible.length === 0) return null;

  const turningPoints = eligible.filter((e) => e.type === 'turning_point');
  if (turningPoints.length > 0) return pickRandom(turningPoints, rng);

  const mainPool = eligible.filter(
    (e) => !e.type || e.type === 'normal' || e.type === 'full' || e.type === 'silent',
  );
  if (mainPool.length > 0) return pickRandom(mainPool, rng);

  return pickRandom(eligible, rng);
}

function pickRandom<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

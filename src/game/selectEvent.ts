import type { GameEvent, GameState, ResourceCondition } from '@/types/game';
import { shouldTriggerCrisis } from '@/game/death';

function matchesResourceCondition(
  condition: ResourceCondition | undefined,
  state: GameState,
): boolean {
  if (!condition) return true;
  const val = state.resources[condition.resource];
  switch (condition.op) {
    case '<':
      return val < condition.value;
    case '>':
      return val > condition.value;
    case '<=':
      return val <= condition.value;
    case '>=':
      return val >= condition.value;
  }
}

function baseFilter(event: GameEvent, state: GameState): boolean {
  if (state.eventLog.includes(event.id)) return false;
  const [min, max] = event.ageRange;
  if (state.player.age < min || state.player.age > max) return false;
  if (event.requiresFlag && !state.flags.includes(event.requiresFlag)) return false;
  if (event.excludesFlag && state.flags.includes(event.excludesFlag)) return false;
  if (!matchesResourceCondition(event.resourceCondition, state)) return false;
  return true;
}

// PRD sek. 5 — filter → priorytet crisis/rescue → random.
export function selectEvent(
  state: GameState,
  pool: GameEvent[],
  rng: () => number = Math.random,
): GameEvent | null {
  const eligible = pool.filter((e) => baseFilter(e, state));
  if (eligible.length === 0) return null;

  if (shouldTriggerCrisis(state)) {
    const crisis = eligible.filter((e) => e.type === 'crisis');
    if (crisis.length > 0) return pickRandom(crisis, rng);
  }

  // Eventy rescue wchodzą jeśli gracz ma flagę destrukcyjną
  // i nie jest jeszcze w crisis — dają drugą szansę zanim się wali.
  const rescueEligible = eligible.filter((e) => e.type === 'rescue');
  if (rescueEligible.length > 0 && Math.random() < 0.3) {
    return pickRandom(rescueEligible, rng);
  }

  const normal = eligible.filter((e) => !e.type || e.type === 'normal');
  if (normal.length > 0) return pickRandom(normal, rng);

  return pickRandom(eligible, rng);
}

function pickRandom<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

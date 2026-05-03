import type { Big5, DecisionCost, Resources } from '@/types/game';
import { getWillpowerCapForEra } from '@/data/eras';

const MIN = 0;
const MAX = 100;

function clamp(v: number): number {
  return Math.max(MIN, Math.min(MAX, v));
}

// Base era refresh calculation from Big5 traits
export function baseRefresh(big5: Big5): Resources {
  return {
    // C (Conscientiousness) → Willpower
    willpower: big5.c < 35 ? 15 : big5.c < 60 ? 25 : 35,
    // E (Extraversion) → Energy
    energy: big5.e < 35 ? 20 : big5.e < 60 ? 30 : 40,
    // N (Neuroticism) → Mood (inverse)
    mood: big5.n > 70 ? 15 : big5.n > 45 ? 25 : 35,
  };
}

// Apply flag-based modifiers to era refresh
export function applyFlagModifiers(refresh: Resources, flags: string[]): Resources {
  const modifiers: Record<string, Partial<Resources>> = {
    niewolnik_impulsu: { willpower: -8 },
    koneser_cierpienia: { mood: -8 },
    igranie_ze_śmiercią: { energy: -10 },
    wstrząs_neurogenny: { willpower: -100 }, // Will be clamped to 0
    żelazna_dyscyplina: { willpower: 8 },
    zimny_pragmatyk: { energy: 5 },
    analityk_krwi: { willpower: 5 },
  };

  let result = { ...refresh };
  for (const flag of flags) {
    const mod = modifiers[flag];
    if (mod) {
      result.willpower = (result.willpower ?? 0) + (mod.willpower ?? 0);
      result.energy = (result.energy ?? 0) + (mod.energy ?? 0);
      result.mood = (result.mood ?? 0) + (mod.mood ?? 0);
    }
  }

  // Clamp to valid range
  return {
    willpower: clamp(result.willpower),
    energy: clamp(result.energy),
    mood: clamp(result.mood),
  };
}

// Calculate complete era refresh including flags
export function calculateEraRefresh(big5: Big5, flags: string[]): Resources {
  const base = baseRefresh(big5);
  return applyFlagModifiers(base, flags);
}

// Sprawdź czy gracza stać na wszystkie koszty karty.
export function canAfford(resources: Resources, costs: DecisionCost[]): boolean {
  return costs.every((c) => c.amount <= 0 || resources[c.resource] >= c.amount);
}

export function payCost(resources: Resources, costs: DecisionCost[]): Resources {
  let result = { ...resources };
  for (const c of costs) {
    if (c.amount > 0) {
      result = { ...result, [c.resource]: clamp(result[c.resource] - c.amount) };
    }
  }
  return result;
}

export function applyResourceDelta(
  resources: Resources,
  delta: { energy?: number; mood?: number; willpower?: number },
): Resources {
  return {
    energy: clamp(resources.energy + (delta.energy ?? 0)),
    mood: clamp(resources.mood + (delta.mood ?? 0)),
    willpower: clamp(resources.willpower + (delta.willpower ?? 0)),
  };
}

// Clamp resources with era-based willpower maximum
export function clampWithEraCap(resources: Resources, eraNumber: number): Resources {
  const willpowerCap = getWillpowerCapForEra(eraNumber);
  return {
    energy: clamp(resources.energy),
    mood: clamp(resources.mood),
    willpower: Math.max(MIN, Math.min(willpowerCap, resources.willpower)),
  };
}

// Używane przez karty ratunkowe — reset częściowy.
export function resetToFloor(resources: Resources, floor = 40): Resources {
  return {
    energy: Math.max(floor, resources.energy),
    mood: Math.max(floor, resources.mood),
    willpower: Math.max(floor, resources.willpower),
  };
}

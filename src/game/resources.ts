import type { Big5, Resources } from '@/types/game';

const MIN = 0;
const MAX = 100;

function clamp(v: number): number {
  return Math.max(MIN, Math.min(MAX, v));
}

// PRD sek. 3.4 — bazowa regeneracja + modyfikatory z Big5.
export function regenerateResources(resources: Resources, big5: Big5): Resources {
  let dEnergy = 3;
  let dMood = 2;
  let dWillpower = 2;

  if (big5.n > 70) dMood -= 1;
  if (big5.n > 90) dMood -= 1;
  if (big5.c > 60) dWillpower += 1;
  if (big5.c < 30) dWillpower -= 1;
  if (big5.e > 60) dEnergy += 1;
  if (big5.e < 30) dEnergy -= 1;
  if (big5.a > 70) {
    dMood += 1;
    dWillpower -= 1;
  }
  if (big5.o > 70) {
    dEnergy += 1;
    dWillpower -= 1;
  }

  return {
    energy: clamp(resources.energy + dEnergy),
    mood: clamp(resources.mood + dMood),
    willpower: clamp(resources.willpower + dWillpower),
  };
}

// Sprawdź czy gracza stać na kartę (PRD sek. 3.5 — blokowanie kart).
export function canAfford(
  resources: Resources,
  cost?: { resource: keyof Resources; amount: number },
): boolean {
  if (!cost || cost.amount <= 0) return true;
  return resources[cost.resource] >= cost.amount;
}

export function payCost(
  resources: Resources,
  cost?: { resource: keyof Resources; amount: number },
): Resources {
  if (!cost || cost.amount <= 0) return resources;
  return {
    ...resources,
    [cost.resource]: clamp(resources[cost.resource] - cost.amount),
  };
}

// Ile zasobu wróci w tej turze (bez modyfikowania stanu) — używane do wyświetlania "+X/tura".
export function computeRegenDeltas(big5: Big5): Resources {
  let dEnergy = 3;
  let dMood = 2;
  let dWillpower = 2;

  if (big5.n > 70) dMood -= 1;
  if (big5.n > 90) dMood -= 1;
  if (big5.c > 60) dWillpower += 1;
  if (big5.c < 30) dWillpower -= 1;
  if (big5.e > 60) dEnergy += 1;
  if (big5.e < 30) dEnergy -= 1;
  if (big5.a > 70) { dMood += 1; dWillpower -= 1; }
  if (big5.o > 70) { dEnergy += 1; dWillpower -= 1; }

  return { energy: dEnergy, mood: dMood, willpower: dWillpower };
}

// Używane przez karty ratunkowe — reset częściowy.
export function resetToFloor(resources: Resources, floor = 40): Resources {
  return {
    energy: Math.max(floor, resources.energy),
    mood: Math.max(floor, resources.mood),
    willpower: Math.max(floor, resources.willpower),
  };
}

import type { GameState } from '@/types/game';

// PRD sek. 3.7 — warunki, które wprowadzają eventy zagrażające życiu do puli.
export function shouldTriggerCrisis(state: GameState): boolean {
  const { resources, player, flags } = state;

  // Dwa lub więcej zasobów < 10.
  const critical = [resources.energy, resources.mood, resources.willpower].filter(
    (v) => v < 10,
  ).length;
  if (critical >= 2) return true;

  // Wiek + niskie zasoby (starość).
  if (player.age > 60 && resources.energy < 20) return true;

  // Kumulacja destrukcyjnych flag.
  const destructive: string[] = ['uzalezniony', 'samotny', 'depresja'];
  const hits = destructive.filter((f) => flags.includes(f)).length;
  if (hits >= 3) return true;

  // Pojedyncze ekstremalne flagi.
  const lethalFlags: string[] = ['ciezka_choroba'];
  if (lethalFlags.some((f) => flags.includes(f))) return true;

  return false;
}

// Proste etykiety przyczyn śmierci — rozbudowywane przez autorów crisis-eventów.
export const DEFAULT_DEATH_REASON = 'Przeciążenie allostatyczne';

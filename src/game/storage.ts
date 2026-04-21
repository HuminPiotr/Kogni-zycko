import type { GameState } from '@/types/game';

const KEY = 'kognizycko:save:v1';

export function loadSave(): GameState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GameState;
    if (!parsed || typeof parsed.player?.age !== 'number') return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeSave(state: GameState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // quota exceeded — ignorujemy, gra działa dalej w pamięci
  }
}

export function clearSave(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(KEY);
}

export function hasSave(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(KEY) !== null;
}

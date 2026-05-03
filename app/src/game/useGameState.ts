import { useCallback, useEffect, useMemo, useReducer } from 'react';
import type { GameEvent, GameState } from '@/types/game';
import { freshState, makeReducer } from '@/game/reducer';
import { loadSave, writeSave, clearSave } from '@/game/storage';
import { EVENTS } from '@/data/events';

export interface UseGameState {
  state: GameState;
  currentEvent: GameEvent | null;
  startNewLife: () => void;
  continueSavedRun: () => void;
  chooseDecision: (decisionId: string) => void;
  advanceTurn: () => void;
  reset: () => void;
  hasSavedRun: boolean;
}

export function useGameState(): UseGameState {
  const reducer = useMemo(() => makeReducer(EVENTS), []);
  const [state, dispatch] = useReducer(reducer, undefined, freshState);

  // Autosave po każdej mutacji (poza 'start').
  useEffect(() => {
    if (state.phase === 'start') return;
    writeSave(state);
  }, [state]);

  // Zostaw czysty 'gameover' w pamięci tylko do czasu resetu — wyczyść zapis.
  useEffect(() => {
    if (state.phase === 'gameover') {
      // Nie czyścimy natychmiast — chcemy, żeby odświeżenie strony pokazało
      // ekran końcowy. Zapis zniknie dopiero przy starcie nowego życia.
    }
  }, [state.phase]);

  const startNewLife = useCallback(() => {
    clearSave();
    dispatch({ type: 'NEW_LIFE' });
  }, []);

  const continueSavedRun = useCallback(() => {
    const saved = loadSave();
    if (saved) dispatch({ type: 'LOAD_SAVE', state: saved });
  }, []);

  const chooseDecision = useCallback((decisionId: string) => {
    dispatch({ type: 'CHOOSE_DECISION', decisionId });
  }, []);

  const advanceTurn = useCallback(() => {
    dispatch({ type: 'ADVANCE_TURN' });
  }, []);

  const reset = useCallback(() => {
    clearSave();
    dispatch({ type: 'RESET' });
  }, []);

  const currentEvent = useMemo(
    () => EVENTS.find((e) => e.id === state.currentEventId) ?? null,
    [state.currentEventId],
  );

  return {
    state,
    currentEvent,
    startNewLife,
    continueSavedRun,
    chooseDecision,
    advanceTurn,
    reset,
    hasSavedRun: Boolean(loadSave()),
  };
}

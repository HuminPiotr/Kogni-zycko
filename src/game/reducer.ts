import type {
  Decision,
  GameAction,
  GameEvent,
  GameState,
  Player,
  Resources,
} from '@/types/game';
import { applyStatImpact, previewStatImpact } from '@/game/bigFive';
import { applyResourceDelta, canAfford, payCost, regenerateResources, resetToFloor } from '@/game/resources';
import { selectEvent } from '@/game/selectEvent';
import { DEFAULT_DEATH_REASON } from '@/game/death';

export const INITIAL_BIG5 = { n: 50, e: 50, o: 50, a: 50, c: 50 } as const;
export const INITIAL_RESOURCES: Resources = { energy: 70, mood: 70, willpower: 70 };

export function initialPlayer(): Player {
  return {
    age: 0,
    big5: { ...INITIAL_BIG5 },
    big5Start: { ...INITIAL_BIG5 },
  };
}

export function freshState(): GameState {
  return {
    phase: 'start',
    player: initialPlayer(),
    resources: { ...INITIAL_RESOURCES },
    flags: [],
    currentEventId: null,
    lastDecisionId: null,
    lastDeltas: null,
    eventLog: [],
    deathReason: null,
  };
}

function pickNextEvent(state: GameState, pool: GameEvent[]): GameState {
  const ev = selectEvent(state, pool);
  if (!ev) {
    // Brak eventów — pusty rok, naturalny drift z wiekiem.
    return { ...state, phase: 'scene', currentEventId: null, lastDecisionId: null };
  }
  const phase = ev.type === 'silent' ? 'silent' : 'scene';
  return { ...state, phase, currentEventId: ev.id, lastDecisionId: null };
}

// Znajdź event + decyzję po ID. Jeśli nie znaleziono → null.
function findDecision(
  eventId: string | null,
  decisionId: string,
  pool: GameEvent[],
): { event: GameEvent; decision: Decision } | null {
  if (!eventId) return null;
  const event = pool.find((e) => e.id === eventId);
  if (!event) return null;
  const decision = (event.decisions ?? []).find((d) => d.id === decisionId);
  if (!decision) return null;
  return { event, decision };
}

export function makeReducer(pool: GameEvent[]) {
  return function reducer(state: GameState, action: GameAction): GameState {
    switch (action.type) {
      case 'NEW_LIFE': {
        const fresh = freshState();
        return pickNextEvent(fresh, pool);
      }

      case 'LOAD_SAVE': {
        return action.state;
      }

      case 'RESET':
        return freshState();

      case 'PICK_EVENT':
        return pickNextEvent(state, pool);

      case 'CHOOSE_DECISION': {
        const hit = findDecision(state.currentEventId, action.decisionId, pool);
        if (!hit) return state;
        const { event, decision } = hit;

        // Blokada — gracza nie stać.
        if (!canAfford(state.resources, decision.cost)) return state;

        let nextResources = payCost(state.resources, decision.cost);
        let nextFlags = [...state.flags];

        if (decision.setsFlags) {
          for (const f of decision.setsFlags) {
            if (!nextFlags.includes(f)) nextFlags.push(f);
          }
        }
        if (decision.clearsFlags) {
          nextFlags = nextFlags.filter((f) => !decision.clearsFlags!.includes(f));
        }

        const deltas = previewStatImpact(state.player, decision.statImpact);
        const nextPlayer = applyStatImpact(state.player, decision.statImpact);

        // Karta ratunkowa — reset zasobów do podłogi 40, zjedz „najgorsze" flagi destrukcyjne.
        if (decision.isRescueCard) {
          nextResources = resetToFloor(nextResources, 40);
          nextFlags = nextFlags.filter(
            (f) => !['uzalezniony', 'samotny', 'depresja'].includes(f),
          );
        }

        // Karta śmierci — przejście do game over, bez regeneracji i advance.
        if (decision.isDeathCard) {
          return {
            ...state,
            player: nextPlayer,
            resources: nextResources,
            flags: nextFlags,
            lastDecisionId: decision.id,
            lastDeltas: deltas,
            phase: 'gameover',
            deathReason: event.deathReason ?? DEFAULT_DEATH_REASON,
          };
        }

        return {
          ...state,
          player: nextPlayer,
          resources: nextResources,
          flags: nextFlags,
          lastDecisionId: decision.id,
          lastDeltas: deltas,
          phase: 'reveal',
        };
      }

      case 'ADVANCE_TURN': {
        // reveal (normalnie), scene z pustym eventem (fallback „rok minął") lub cicha tura
        const canAdvance =
          state.phase === 'reveal' ||
          (state.phase === 'scene' && state.currentEventId === null) ||
          state.phase === 'silent';
        if (!canAdvance) return state;

        // Aplikuj efekty cichego eventu przed regeneracją
        let workingState = state;
        if (state.phase === 'silent' && state.currentEventId) {
          const silentEv = pool.find((e) => e.id === state.currentEventId);
          if (silentEv?.statImpact) {
            const si = silentEv.statImpact;
            const big5Impact = { n: si.n, e: si.e, o: si.o, a: si.a, c: si.c };
            const nextPlayer = applyStatImpact(workingState.player, big5Impact);
            const nextResources = applyResourceDelta(workingState.resources, si);
            workingState = { ...workingState, player: nextPlayer, resources: nextResources };
          }
          if (silentEv?.setsFlags) {
            const nextFlags = [...workingState.flags];
            for (const f of silentEv.setsFlags) {
              if (!nextFlags.includes(f)) nextFlags.push(f);
            }
            workingState = { ...workingState, flags: nextFlags };
          }
        }

        const newAge = workingState.player.age + 1;
        const eventLog = workingState.currentEventId
          ? [...workingState.eventLog, workingState.currentEventId]
          : workingState.eventLog;
        const regenerated = regenerateResources(workingState.resources, workingState.player.big5);

        // Naturalna śmierć po 100. roku.
        if (newAge > 100) {
          return {
            ...workingState,
            eventLog,
            resources: regenerated,
            player: { ...workingState.player, age: newAge },
            phase: 'gameover',
            deathReason: null, // null = naturalna śmierć
          };
        }

        const advanced: GameState = {
          ...workingState,
          eventLog,
          resources: regenerated,
          player: { ...workingState.player, age: newAge },
          currentEventId: null,
          lastDecisionId: null,
          lastDeltas: null,
        };

        return pickNextEvent(advanced, pool);
      }

      default:
        return state;
    }
  };
}

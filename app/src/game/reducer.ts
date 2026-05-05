import type {
  Decision,
  GameAction,
  GameEvent,
  GameState,
  Player,
  Resources,
  StructureName,
} from "@/types/game";
import { applyStatImpact, previewStatImpact } from "@/game/bigFive";
import {
  applyResourceDelta,
  canAfford,
  calculateEraRefresh,
  payCost,
  resetToFloor,
  clampWithEraCap,
} from "@/game/resources";
import { selectEvent } from "@/game/selectEvent";
import { DEFAULT_DEATH_REASON } from "@/game/death";
import { ARCHETYPE_BIG5_START, ARCHETYPE_FLAGS_START } from "@/data/archetype";
import { getEraNumber } from "@/data/eras";

export const INITIAL_RESOURCES: Resources = {
  energy: 50,
  mood: 40,
  willpower: 25,
};

const ALL_STRUCTURES: StructureName[] = [
  "amygdala",
  "pfc",
  "nacc",
  "hippocampus",
  "insula",
  "thalamus",
];

function zeroBrainInfluence(): Record<StructureName, number> {
  return Object.fromEntries(ALL_STRUCTURES.map((s) => [s, 0])) as Record<
    StructureName,
    number
  >;
}

export function initialPlayer(): Player {
  return {
    age: 0,
    big5: { ...ARCHETYPE_BIG5_START },
    big5Start: { ...ARCHETYPE_BIG5_START },
  };
}

export function freshState(): GameState {
  return {
    phase: "start",
    player: initialPlayer(),
    resources: { ...INITIAL_RESOURCES },
    flags: [...ARCHETYPE_FLAGS_START],
    brainInfluence: zeroBrainInfluence(),
    currentEventId: null,
    lastDecisionId: null,
    lastDeltas: null,
    eventLog: [],
    deathReason: null,
    eraShown: 0,
  };
}

function checkEraTransition(state: GameState): GameState | null {
  // Jeśli weszliśmy w nową erę (poza pierwszą) i nie pokazaliśmy jeszcze jej summary, pokaż
  const currentEra = getEraNumber(state.player.age);
  if (currentEra > state.eraShown && currentEra > 1) {
    return {
      ...state,
      phase: "era_summary",
      eraShown: currentEra,
    };
  }
  return null;
}

function pickNextEvent(state: GameState, pool: GameEvent[]): GameState {
  // Sprawdź czy weszliśmy w nową erę
  const eraTransition = checkEraTransition(state);
  if (eraTransition) return eraTransition;

  // Spróbuj aktualnego wieku.
  let ev = selectEvent(state, pool);
  if (ev) {
    const phase = ev.type === "silent" ? "silent" : "scene";
    return { ...state, phase, currentEventId: ev.id, lastDecisionId: null };
  }

  // Auto-skip: przeskakuj lata bez eventów.
  let current = state;
  while (current.player.age < 100) {
    const nextAge = current.player.age + 1;
    current = {
      ...current,
      player: { ...current.player, age: nextAge },
      lastDecisionId: null,
      lastDeltas: null,
    };

    // Sprawdź czy weszliśmy w nową erę podczas auto-skip
    const eraCheck = checkEraTransition(current);
    if (eraCheck) return eraCheck;

    ev = selectEvent(current, pool);
    if (ev) {
      const phase = ev.type === "silent" ? "silent" : "scene";
      return { ...current, phase, currentEventId: ev.id, lastDecisionId: null };
    }
  }

  // Wiek > 100 — naturalna śmierć.
  return {
    ...current,
    phase: "gameover",
    deathReason: null,
    currentEventId: null,
  };
}

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
      case "NEW_LIFE": {
        const fresh = freshState();
        return pickNextEvent(fresh, pool);
      }

      case "LOAD_SAVE": {
        // Uzupełnij brainInfluence jeśli zapis ze starszej wersji nie ma pola.
        const loaded = action.state;
        if (!loaded.brainInfluence) {
          return { ...loaded, brainInfluence: zeroBrainInfluence() };
        }
        if (loaded.eraShown === undefined) {
          return { ...loaded, eraShown: 0 };
        }
        return loaded;
      }

      case "RESET":
        return freshState();

      case "PICK_EVENT":
        return pickNextEvent(state, pool);

      case "CHOOSE_DECISION": {
        const hit = findDecision(state.currentEventId, action.decisionId, pool);
        if (!hit) return state;
        const { decision } = hit;

        const effectiveCosts = decision.costs;
        if (!canAfford(state.resources, effectiveCosts)) return state;

        const deltas = previewStatImpact(state.player, decision.statImpact);

        return {
          ...state,
          lastDecisionId: decision.id,
          lastDeltas: deltas,
          phase: "reveal",
        };
      }

      case "DISMISS_REVEAL": {
        return {
          ...state,
          phase: "scene",
          lastDecisionId: null,
          lastDeltas: null,
        };
      }

      case "ADVANCE_TURN": {
        // Z ekranu podsumowania ery — idź do następnego eventu.
        if (state.phase === "era_summary") {
          const eraRefresh = calculateEraRefresh(state.player.big5, state.flags);
          const refreshed = applyResourceDelta(state.resources, eraRefresh);
          const eraNum = getEraNumber(state.player.age + 1);
          const clamped = clampWithEraCap(refreshed, eraNum);
          return pickNextEvent({ ...state, resources: clamped }, pool);
        }

        // Z ekranu rewelacji Big5 — nie inkrementuj wieku, po prostu idź dalej.
        if (state.phase === "revelation") {
          const phase = state.currentEventId
            ? pool.find((e) => e.id === state.currentEventId)?.type === "silent"
              ? "silent"
              : "scene"
            : "scene";
          return { ...state, phase };
        }

        let workingState = state;
        if (state.phase === "reveal") {
          const hit = findDecision(state.currentEventId, state.lastDecisionId, pool);
          if (!hit) return state;
          const { event, decision } = hit;

          let nextResources = payCost(state.resources, decision.costs);
          if (decision.effects) {
            nextResources = applyResourceDelta(nextResources, decision.effects);
            const currentEra = getEraNumber(state.player.age);
            nextResources = clampWithEraCap(nextResources, currentEra);
          }

          let nextFlags = [...state.flags];
          if (decision.setsFlags) {
            for (const f of decision.setsFlags) {
              if (!nextFlags.includes(f)) nextFlags.push(f);
            }
          }
          if (decision.clearsFlags) {
            nextFlags = nextFlags.filter(
              (f) => !decision.clearsFlags!.includes(f),
            );
          }

          const nextPlayer = applyStatImpact(state.player, decision.statImpact);
          const nextBrainInfluence = { ...state.brainInfluence };
          nextBrainInfluence[decision.hiddenStructure] =
            (nextBrainInfluence[decision.hiddenStructure] ?? 0) + 1;

          if (decision.isRescueCard) {
            nextResources = resetToFloor(nextResources, 40);
            nextFlags = nextFlags.filter(
              (f) => !["uzalezniony", "samotny", "depresja"].includes(f),
            );
          }

          if (decision.isDeathCard) {
            return {
              ...state,
              player: nextPlayer,
              resources: nextResources,
              flags: nextFlags,
              brainInfluence: nextBrainInfluence,
              phase: "gameover",
              deathReason: event.deathReason ?? DEFAULT_DEATH_REASON,
            };
          }

          workingState = {
            ...state,
            player: nextPlayer,
            resources: nextResources,
            flags: nextFlags,
            brainInfluence: nextBrainInfluence,
            phase: "scene",
          };
        }

        const canAdvance =
          workingState.phase === "silent" ||
          (workingState.phase === "scene" && workingState.lastDecisionId !== null) ||
          (workingState.phase === "scene" && workingState.currentEventId === null);
        if (!canAdvance) return state;

        // Aplikuj efekty cichego eventu przed regeneracją.
        if (state.phase === "silent" && state.currentEventId) {
          const silentEv = pool.find((e) => e.id === state.currentEventId);
          if (silentEv?.statImpact) {
            const si = silentEv.statImpact;
            const big5Impact = { n: si.n, e: si.e, o: si.o, a: si.a, c: si.c };
            const nextPlayer = applyStatImpact(workingState.player, big5Impact);
            const nextResources = applyResourceDelta(
              workingState.resources,
              si,
            );
            workingState = {
              ...workingState,
              player: nextPlayer,
              resources: nextResources,
            };
          }
          if (silentEv?.setsFlags) {
            const nextFlags = [...workingState.flags];
            for (const f of silentEv.setsFlags) {
              if (!nextFlags.includes(f)) nextFlags.push(f);
            }
            workingState = { ...workingState, flags: nextFlags };
          }
        }

        // Sprawdź czy poprzedni event był końcem gry.
        const prevEvent = workingState.currentEventId
          ? pool.find((e) => e.id === workingState.currentEventId)
          : null;

        const newAge = workingState.player.age + 1;
        const eventLog = workingState.currentEventId
          ? [...workingState.eventLog, workingState.currentEventId]
          : workingState.eventLog;

        // Naturalna śmierć po 100. roku.
        if (newAge > 100) {
          return {
            ...workingState,
            eventLog,
            resources: workingState.resources,
            player: { ...workingState.player, age: newAge },
            phase: "gameover",
            deathReason: null,
          };
        }

        const advanced: GameState = {
          ...workingState,
          eventLog,
          resources: workingState.resources,
          player: { ...workingState.player, age: newAge },
          currentEventId: null,
          lastDecisionId: null,
          lastDeltas: null,
        };

        // Event był końcem gry → gameover.
        if (prevEvent?.isGameEnd) {
          return { ...advanced, phase: "gameover", deathReason: null };
        }

        const withNextEvent = pickNextEvent(advanced, pool);

        // Poprzedni event wymagał rewelacji → wejdź w fazę 'revelation' z już wybranym eventem.
        if (prevEvent?.isRevelation) {
          return { ...withNextEvent, phase: "revelation" };
        }

        return withNextEvent;
      }

      default:
        return state;
    }
  };
}

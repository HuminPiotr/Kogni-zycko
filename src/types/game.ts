export type StructureName =
  | 'amygdala' // Ciało Migdałowate
  | 'pfc'      // Kora Przedczołowa
  | 'nacc'     // Jądro Półleżące (NAcc)
  | 'hippocampus' // Hipokamp
  | 'insula'   // Wyspa
  | 'thalamus'; // Wzgórze

export type TraitName = 'n' | 'e' | 'o' | 'a' | 'c';

export type ResourceName = 'energy' | 'mood' | 'willpower';

export type CardType =
  | 'rational'
  | 'active'
  | 'empathic'
  | 'impulsive'
  | 'avoidant';

export type EventType = 'normal' | 'crisis' | 'rescue' | 'full' | 'silent' | 'turning_point';

export type Flag = string;

export type Big5 = Record<TraitName, number>;
export type Resources = Record<ResourceName, number>;

export interface Era {
  roman: string;
  name: string;
  range: [number, number];
  vibe: string;
}
export interface Player {
  age: number;
  big5: Big5;
  big5Start: Big5;
}

export interface VoiceLine {
  structure: StructureName;
  text: string;
}

export interface DecisionCost {
  resource: ResourceName;
  amount: number;
}

export interface StatImpact {
  n?: number;
  e?: number;
  o?: number;
  a?: number;
  c?: number;
}

export interface Decision {
  id: string;
  text: string;
  type: CardType;
  costs: DecisionCost[]; // pusta tablica = karta darmowa
  hiddenStructure: StructureName;
  flavorReveal: string;
  statImpact: StatImpact;
  effects?: Partial<Resources>; // bezpośredni wpływ na zasoby
  setsFlags?: Flag[];
  clearsFlags?: Flag[];
  isDeathCard?: boolean;
  isRescueCard?: boolean;
}

export interface SilentImpact {
  n?: number;
  e?: number;
  o?: number;
  a?: number;
  c?: number;
  energy?: number;
  mood?: number;
  willpower?: number;
}

export interface ResourceCondition {
  resource: ResourceName;
  op: '<' | '>' | '<=' | '>=';
  value: number;
}

export interface TraitCondition {
  trait: TraitName;
  op: '<' | '>=';
  value: number;
}

export interface GameEvent {
  id: string;
  type?: EventType;
  ageRange: [number, number];
  sceneText: string;
  voices?: VoiceLine[];
  decisions?: Decision[];
  requiresFlag?: Flag;
  excludesFlag?: Flag;
  requiresAnyFlag?: Flag[]; // OR: wystarczy jedna z flag
  resourceCondition?: ResourceCondition;
  traitCondition?: TraitCondition;
  isRevelation?: boolean;  // po tym evencie pokaż ekran rewelacji Big5
  isGameEnd?: boolean;     // po tym evencie zakończ grę
  deathReason?: string;
  postSceneText?: string;
  statImpact?: SilentImpact;
  setsFlags?: Flag[];
}

// ===== Stan gry =====

export type GamePhase = 'start' | 'scene' | 'silent' | 'reveal' | 'revelation' | 'era_summary' | 'gameover';

export interface GameState {
  phase: GamePhase;
  player: Player;
  resources: Resources;
  flags: Flag[];
  brainInfluence: Record<StructureName, number>;
  currentEventId: string | null;
  lastDecisionId: string | null;
  lastDeltas: Partial<Record<TraitName, number>> | null;
  eventLog: string[];
  deathReason: string | null;
  eraShown: number; // track which era summary screen we've already shown (0 = none, 1-5 = eras)
}

// ===== Akcje reducera =====

export type GameAction =
  | { type: 'NEW_LIFE' }
  | { type: 'LOAD_SAVE'; state: GameState }
  | { type: 'PICK_EVENT'; eventId: string }
  | { type: 'CHOOSE_DECISION'; decisionId: string }
  | { type: 'ADVANCE_TURN' }
  | { type: 'RESET' };

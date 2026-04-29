// Główne typy gry Kogniżyćko.
// Zmiana tutaj propaguje się wszędzie — autocomplete + błędy kompilacji chronią zespół.

export type StructureName =
  | 'amygdala' // Ciało Migdałowate
  | 'pfc' // Kora Przedczołowa
  | 'caudate' // Jądro Ogoniaste
  | 'hippocampus' // Hipokamp
  | 'insula' // Wyspa
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

export type Flag = string; // snake_case, walidator sprawdza spójność w całej puli.

export type Big5 = Record<TraitName, number>;
export type Resources = Record<ResourceName, number>;

export interface Player {
  age: number;
  big5: Big5;
  big5Start: Big5; // wartości startowe — potrzebne do korytarza genetycznego ±30
}

export interface VoiceLine {
  structure: StructureName;
  text: string;
}

export interface DecisionCost {
  resource: ResourceName;
  amount: number; // dodatnia — tyle zostanie odjęte. 0 lub brak = karta darmowa.
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
  cost?: DecisionCost; // brak = karta darmowa (impulsywna/unikająca)
  hiddenStructure: StructureName;
  flavorReveal: string;
  statImpact: StatImpact;
  setsFlags?: Flag[];
  clearsFlags?: Flag[];
  isDeathCard?: boolean; // tylko w eventach crisis
  isRescueCard?: boolean; // tylko w eventach crisis
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

export interface GameEvent {
  id: string;
  type?: EventType; // domyślnie 'normal'
  ageRange: [number, number];
  sceneText: string;
  voices?: VoiceLine[];
  decisions?: Decision[];
  requiresFlag?: Flag;
  excludesFlag?: Flag;
  resourceCondition?: ResourceCondition;
  deathReason?: string; // używane gdy wybrana zostanie isDeathCard
  postSceneText?: string; // tylko dla silent — neuronaukowe wyjaśnienie pod sceną
  statImpact?: SilentImpact; // tylko dla silent — auto-aplikowane efekty
  setsFlags?: Flag[]; // tylko dla silent — flagi ustawiane bez wyboru karty
}

// ===== Stan gry =====

export type GamePhase = 'start' | 'scene' | 'silent' | 'reveal' | 'gameover';

export interface GameState {
  phase: GamePhase;
  player: Player;
  resources: Resources;
  flags: Flag[];
  currentEventId: string | null;
  lastDecisionId: string | null; // do pokazania w RevealPanel
  lastDeltas: Partial<Record<TraitName, number>> | null; // faktyczne zmiany Big5 po decyzji (po plastyczności + korytarzu)
  eventLog: string[]; // ID odegranych eventów
  deathReason: string | null;
}

// ===== Akcje reducera =====

export type GameAction =
  | { type: 'NEW_LIFE' }
  | { type: 'LOAD_SAVE'; state: GameState }
  | { type: 'PICK_EVENT'; eventId: string }
  | { type: 'CHOOSE_DECISION'; decisionId: string }
  | { type: 'ADVANCE_TURN' }
  | { type: 'RESET' };

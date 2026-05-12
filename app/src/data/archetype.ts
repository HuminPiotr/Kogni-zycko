import type { Big5, Flag, StructureName } from '@/types/game';

export interface Archetype {
  id: string;
  name: string;
  bio: string;
  hint: string;
  big5: Big5;
  flags: Flag[];
  loudStructures: StructureName[];
  quietStructures: StructureName[];
}

export const ARCHETYPES: Archetype[] = [
  {
    id: 'michal',
    name: 'Michał',
    bio: `Urodziłeś się jako Michał. Nie płakałeś przy porodzie. Pielęgniarka powiedziała „spokojne dziecko". Mama powiedziała „dzielne dziecko". Nikt nie powiedział „dziwne dziecko". Jeszcze nie.`,
    hint: `Ten mózg nie czuje strachu. Nie wiadomo jeszcze, czy to dar, czy wyrok.`,
    big5: { n: 15, e: 68, o: 50, a: 18, c: 45 },
    flags: ['brak_lęku', 'urok_osobisty', 'zimna_krew'],
    loudStructures: ['pfc', 'nacc'],
    quietStructures: ['amygdala', 'insula'],
  },
];

// backward compat — reducer.ts używa tych stałych bezpośrednio
const DEFAULT = ARCHETYPES[0];
export const ARCHETYPE_BIO = DEFAULT.bio;
export const ARCHETYPE_HINT = DEFAULT.hint;
export const ARCHETYPE_BIG5_START: Big5 = DEFAULT.big5;
export const ARCHETYPE_FLAGS_START: Flag[] = DEFAULT.flags;
export const LOUD_STRUCTURES: StructureName[] = DEFAULT.loudStructures;
export const QUIET_STRUCTURES: StructureName[] = DEFAULT.quietStructures;

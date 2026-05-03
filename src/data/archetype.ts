import type { Big5, Flag, StructureName } from '@/types/game';

export const ARCHETYPE_BIO = `Urodziłeś się jako Michał. Nie płakałeś przy porodzie. Pielęgniarka powiedziała „spokojne dziecko". Mama powiedziała „dzielne dziecko". Nikt nie powiedział „dziwne dziecko". Jeszcze nie.`;

export const ARCHETYPE_HINT = `Ten mózg nie czuje strachu. Nie wiadomo jeszcze, czy to dar, czy wyrok.`;

export const ARCHETYPE_BIG5_START: Big5 = {
  n: 15,
  e: 68,
  o: 50,
  a: 18,
  c: 45,
};

export const ARCHETYPE_FLAGS_START: Flag[] = [
  'brak_lęku',
  'urok_osobisty',
  'zimna_krew',
];

export const LOUD_STRUCTURES: StructureName[] = ['pfc', 'nacc'];
export const QUIET_STRUCTURES: StructureName[] = ['amygdala', 'insula'];

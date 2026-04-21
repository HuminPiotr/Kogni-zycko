import type { StructureName } from '@/types/game';

export interface StructureMeta {
  id: StructureName;
  label: string; // polska nazwa
  archetype: string; // „Panikarz", „Biurokrata"… z desing-guide sek. 3
  color: string; // var(--color-...)
  tagline: string; // 1 zdanie — rola w grze
  role: string; // rola neurologiczna (z PRD sek. 3.2)
}

export const STRUCTURES: Record<StructureName, StructureMeta> = {
  amygdala: {
    id: 'amygdala',
    label: 'Ciało Migdałowate',
    archetype: 'Panikarz',
    color: 'var(--color-amygdala)',
    tagline: 'Strach, panika, reakcja walcz-lub-uciekaj.',
    role: 'Przetwarzanie emocji, szczególnie strachu.',
  },
  pfc: {
    id: 'pfc',
    label: 'Kora Przedczołowa',
    archetype: 'Biurokrata',
    color: 'var(--color-pfc)',
    tagline: 'Planowanie, hamowanie impulsów, racjonalne decyzje.',
    role: 'Funkcje wykonawcze, kontrola poznawcza.',
  },
  caudate: {
    id: 'caudate',
    label: 'Jądro Ogoniaste',
    archetype: 'Hype Man',
    color: 'var(--color-caudate)',
    tagline: 'Impulsy, nawyki, pęd ku nagrodzie.',
    role: 'Część jąder podstawy, układ nagrody.',
  },
  hippocampus: {
    id: 'hippocampus',
    label: 'Hipokamp',
    archetype: 'Dziadek, który wszystko pamięta',
    color: 'var(--color-hippocampus)',
    tagline: 'Pamięć, kojarzenie faktów, kontekst.',
    role: 'Tworzenie i odtwarzanie wspomnień.',
  },
  insula: {
    id: 'insula',
    label: 'Wyspa (Insula)',
    archetype: 'Empatka z czujnikami',
    color: 'var(--color-insula)',
    tagline: 'Sygnały z ciała, empatia, „przeczucia".',
    role: 'Interocepcja, świadomość stanów ciała.',
  },
  thalamus: {
    id: 'thalamus',
    label: 'Wzgórze',
    archetype: 'Dyspozytor Ruchu',
    color: 'var(--color-thalamus)',
    tagline: 'Filtrowanie bodźców, przekazywanie sygnałów.',
    role: 'Stacja przekaźnikowa informacji sensorycznych.',
  },
};

export const ALL_STRUCTURE_NAMES = Object.keys(STRUCTURES) as StructureName[];

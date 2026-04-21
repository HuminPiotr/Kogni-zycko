// Ery życia z PRD sek. 7.
export interface Era {
  roman: string;
  name: string;
  range: [number, number];
  vibe: string;
}

export const ERAS: Era[] = [
  { roman: 'I', name: 'Firmware', range: [0, 2], vibe: 'Instalacja bazowego oprogramowania.' },
  { roman: 'II', name: 'Patch Notes', range: [3, 5], vibe: 'Pierwsze patche świadomości.' },
  { roman: 'III', name: 'Early Access', range: [6, 12], vibe: 'Szkoła, reguły, socjalizacja.' },
  { roman: 'IV', name: 'Open Beta', range: [13, 18], vibe: 'Hormony, bunt, tożsamość.' },
  { roman: 'V', name: 'Release 1.0', range: [19, 25], vibe: 'Premiera w świecie dorosłych.' },
  { roman: 'VI', name: 'DLC: Kariera', range: [26, 40], vibe: 'Odpowiedzialność, rutyna, kryzysy.' },
  { roman: 'VII', name: 'Midlife Patch', range: [41, 60], vibe: 'Bilans, zmiany, akceptacja.' },
  { roman: 'VIII', name: 'Legacy Mode', range: [61, 80], vibe: 'Spowolnienie, mądrość.' },
  { roman: 'IX', name: 'End of Support', range: [81, 100], vibe: 'Podsumowanie dzieła życia.' },
];

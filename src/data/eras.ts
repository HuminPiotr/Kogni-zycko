import type { Era } from '@/types/game';

export const ERAS: Era[] = [
  {
    roman: 'I',
    name: 'Early Access',
    range: [0, 12],
    vibe: 'Formowanie fundamentów. Dzieciństwo, w którym odkrywasz, że Twój mózg działa inaczej.',
  },
  {
    roman: 'II',
    name: 'Open Beta',
    range: [13, 18],
    vibe: 'Testowanie granic. Hormony, presja rówieśnicza, pierwsze poważne konsekwencje.',
  },
  {
    roman: 'III',
    name: 'Release 1.0',
    range: [19, 25],
    vibe: 'Ostateczna weryfikacja. Decyzje o życiu i śmierci. Koniec gry.',
  },
];

export function getEraNumber(age: number): number {
  for (const era of ERAS) {
    if (age >= era.range[0] && age <= era.range[1]) {
      const index = ERAS.indexOf(era);
      return index + 1;
    }
  }
  return 3; // fallback to Era III for age > 25
}

export function getEraByNumber(num: number): Era | null {
  return ERAS[num - 1] ?? null;
}

export function getWillpowerCapForEra(eraNumber: number): number {
  const caps = [50, 75, 100];
  return caps[eraNumber - 1] ?? 100;
}

export const ERA_SUMMARIES: Record<number, string> = {
  1: '[Era I — Early Access. Formowanie fundamentów. AI wygeneruje tutaj historię na podstawie twoich wyborów]',
  2: '[Era II — Open Beta. Testowanie granic. AI wygeneruje tutaj historię na podstawie twoich wyborów]',
  3: '[Era III — Release 1.0. Ostateczna weryfikacja. AI wygeneruje tutaj historię na podstawie twoich wyborów]',
};

import type { Era } from "@/types/game";

export const ERAS: Era[] = [
  {
    roman: "I",
    name: "Dzieniństwo",
    range: [0, 12],
    vibe: "Formowanie fundamentów. Dzieciństwo, w którym odkrywasz jak działa Twój mózg.",
  },
  {
    roman: "II",
    name: "Nastolatek",
    range: [13, 21],
    vibe: "Testowanie granic. Hormony, presja rówieśnicza, pierwsze poważne konsekwencje.",
  },
  {
    roman: "III",
    name: "Dorosłość",
    range: [22, 80],
    vibe: "Ostateczna weryfikacja. Decyzje o życiu i śmierci. Konsekwencje.",
  },
];

export function getEraNumber(age: number): number {
  for (let i = 0; i < ERAS.length; i++) {
    const era = ERAS[i];
    if (age >= era.range[0] && age <= era.range[1]) return i + 1;
  }
  return 3;
}

export function getEraByNumber(num: number): Era | null {
  return ERAS[num - 1] ?? null;
}

export function getWillpowerCapForEra(eraNumber: number): number {
  const caps = [50, 75, 100];
  return caps[eraNumber - 1] ?? 100;
}

export const ERA_SUMMARIES: Record<number, string> = {
  1: `Pierwsze lata to budowanie oprogramowania z materiałów, które dostałeś bez możliwości zwrotu. Hipokamp archiwizuje wszystko — nie pyta czy chcesz pamiętać. Ciało migdałowate uczy się czego się bać, zanim kora przedczołowa zdążyła zrozumieć co to strach.

Twoje fundamenty zostały właśnie wylane. Nie wiesz jeszcze co z nich wyrośnie.`,
  2: `Kora przedczołowa — ta część mózgu która mówi „poczekaj" i „zastanów się" — skończy się rozwijać dopiero po dwudziestym piątym roku życia. Przez te lata decyzje podejmujesz głównie ciałem migdałowatym i jądrem półleżącym. To dlatego wszystko wydaje się ważniejsze i groźniejsze niż jest.

To nie wada. To wersja testowa. Niestety — działająca.`,
  3: `Kora przedczołowa jest nareszcie online. Mniej więcej. Masz teraz zdolność do myślenia o konsekwencjach, planowania i regulacji impulsów — narzędzia których przez poprzednie ery nie miałeś.
Wzorce zachowań są już głęboko zapisane. Gra zaczyna się na poważnie.`,
};

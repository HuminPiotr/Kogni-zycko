import type { GameState, StructureName } from '@/types/game';
import { ERAS } from '@/data/eras';
import { STRUCTURES } from '@/data/structures';
import type { LLMPrompt } from '@/services/gemini';

function dominantStructure(state: GameState): StructureName {
  const entries = Object.entries(state.brainInfluence) as [StructureName, number][];
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

function getCharacterTendency(state: GameState): string {
  const { a, n, c, e } = state.player.big5;

  if (a < 45 && c > 55) return 'spokojny i metodyczny, ale chłodny — nie nawiązuje relacji, robi swoje';
  if (a < 45 && n > 55) return 'wybuchowy i impulsywny — reaguje gwałtownie, potem żałuje (albo nie)';
  if (a < 45 && e > 60) return 'towarzyski i charyzmatyczny, ale traktuje ludzi instrumentalnie';
  if (n > 60 && a > 55) return 'wrażliwy i przejmujący się, podatny na wpływ innych';
  if (c > 60 && n < 40) return 'zdyscyplinowany i opanowany, ale emocjonalnie niedostępny';
  return 'przeciętny — nie wyróżnia się ani w złą, ani w dobrą stronę';
}

// ─── era summary ─────────────────────────────────────────────────────────────

const ERA_SYSTEM_PROMPT = `Jesteś narratorem w grze "Kogniżyćko". Opisujesz życie postaci między erami — jak narrator kreskówki dokumentalnej o ludziach.

Napisz dokładnie 3 zdania opisujące co robiła postać w tej erze życia. Pisz w 2. osobie ("spędziłeś", "miałeś", "lubiłeś"). Opisuj konkretne, codzienne sytuacje — takie które mogłyby naprawdę się zdarzyć. Ton: suchy, obserwacyjny, lekko ironiczny. Trzy zdania = trzy różne aspekty życia (co robił, jak wyglądały relacje, czym się wyróżniał). Zero dramatyzmu, zero patosu, zdania krótkie i proste.

Odpowiedź to wyłącznie gotowe 3 zdania — żadnych nagłówków, etykiet, wstępów ani komentarzy.

Przykład dla dziecka chłodnego i metodycznego:
Dzieciństwo spędziłeś głównie sam, na dokładnym sortowaniu klocków według rozmiaru i koloru. Inne dzieci zapraszały cię do zabawy — zazwyczaj raz. Miałeś opinię spokojnego, grzecznego dziecka, co było technicznie prawdą.

Przykład dla wybuchowego nastolatka z dużą grupą znajomych:
Większość szkoły średniej spędziłeś na korytarzach, bo w klasie było za cicho żeby wytrzymać. Miałeś dużo znajomych i jedną poważną bójkę na semestr, co wszyscy uznawali za normę. Nauczyciele pamiętali twoje imię z przyczyn administracyjnych.`;

export function buildEraPrompt(state: GameState, eraNumber: number): LLMPrompt {
  const completedEra = ERAS[eraNumber - 2];
  const startingEra = ERAS[eraNumber - 1];
  const dom = dominantStructure(state);
  const domLabel = STRUCTURES[dom].label;
  const tendency = getCharacterTendency(state);
  const flagList = state.flags.length > 0 ? state.flags.slice(-6).join(', ') : 'brak';

  const user =
    `Era właśnie zakończona: ${completedEra.name} (wiek ${completedEra.range[0]}–${completedEra.range[1]})\n` +
    `Era rozpoczynana: ${startingEra.name}\n` +
    `\n` +
    `Charakter postaci: ${tendency}\n` +
    `Dominująca struktura mózgu: ${domLabel}\n` +
    `Cechy: C:${state.player.big5.c} E:${state.player.big5.e} N:${state.player.big5.n} A:${state.player.big5.a} O:${state.player.big5.o}\n` +
    `Flagi (rzeczy które się wydarzyły): ${flagList}`;

  return { system: ERA_SYSTEM_PROMPT, user };
}

// ─── death summary ────────────────────────────────────────────────────────────

const DEATH_SYSTEM_PROMPT = `Jesteś narratorem w grze "Kogniżyćko". Kończysz historię postaci.

Dostaniesz opis sytuacji w której zamknęła się ścieżka postaci (aresztowanie, skandal, starość) oraz dokładny wiek w chwili śmierci. Napisz dokładnie 3 zdania i jedno epitafium po myślniku. Pisz w 3. osobie. Sytuacja ze wstępu to punkt wyjścia — nie śmierć sama w sobie, wymyśl dalszy ciąg. Bądź konkretny i realistyczny. Ton: suchy, lekko ironiczny, jak nekrolog w lokalnej gazecie.

Struktura odpowiedzi:
Zdanie 1: co działo się po sytuacji kończącej (lata które nastąpiły).
Zdanie 2: MUSI zawierać dokładnie ten wiek który podano jako "Wiek w chwili śmierci" — w formie "Umarł w wieku X lat" lub "Zginął w wieku X lat". Nie parafrazuj, nie zastępuj słownym zapisem liczby — użyj cyfry lub słownego zapisu który jednoznacznie odpowiada podanemu wiekowi.
Zdanie 3: co zostawił po sobie.
Epitafium po myślniku: gorzkie, jedno zdanie.

Odpowiedź to wyłącznie gotowy tekst — żadnych nagłówków, etykiet, wstępów ani komentarzy.

Przykład — aresztowanie w wieku 26, śmierć w wieku 50:
Spędził dwadzieścia cztery lata w zakładzie karnym w Rzeszowie, gdzie zdobył opinię człowieka którego lepiej nie denerwować i tytuł mistrza szachów więziennych. Umarł w wieku 50 lat podczas buntu, trafiony gumową kulą w klatkę piersiową — biegły stwierdził że serce i tak nie było w najlepszym stanie. Zostawił po sobie jedną paczkę papierosów i list do siostry który nigdy nie wysłał.
— Miał plan. Zawsze miał plan.

Przykład — naturalna śmierć w wieku 87:
Ostatnie lata spędził w tym samym fotelu przy oknie, oglądając jak sąsiedzi zmieniają samochody. Umarł w wieku 87 lat spokojnie w nocy, co było jedyną spokojną rzeczą jaka mu się przydarzyła. Zostawił troje dzieci które przychodziły na pogrzeb głównie dla formalności.
— Żył długo. Niekoniecznie dobrze.`;

export function buildDeathPrompt(state: GameState, finalAge: number): LLMPrompt {
  const dom = dominantStructure(state);
  const domLabel = STRUCTURES[dom].label;
  const flagList = state.flags.length > 0 ? state.flags.join(', ') : 'brak';
  const tendency = getCharacterTendency(state);

  const endingSituation = state.deathReason
    ? `W wieku ${state.player.age} lat: ${state.deathReason}`
    : `Naturalna śmierć — postać przeżyła do starości.`;

  const user =
    `Sytuacja kończąca historię:\n` +
    `${endingSituation}\n` +
    `Wiek w chwili śmierci: ${finalAge} lat\n` +
    `\n` +
    `Charakter postaci: ${tendency}\n` +
    `Dominująca struktura mózgu: ${domLabel}\n` +
    `Cechy Big5: C:${state.player.big5.c} E:${state.player.big5.e} N:${state.player.big5.n} A:${state.player.big5.a} O:${state.player.big5.o}\n` +
    `Flagi z życia: ${flagList}`;

  return { system: DEATH_SYSTEM_PROMPT, user };
}

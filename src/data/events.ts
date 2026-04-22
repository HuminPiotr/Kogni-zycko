import type { GameEvent } from '@/types/game';

// Seed eventów dla Kogniżyćko.
// Struktura: ageRange → filtr wiekowy. voices → 2-3 komentarze struktur. decisions → 3 karty.
// Więcej w CONTRIBUTING.md sekcja „Jak dodać nowe wydarzenie".

export const EVENTS: GameEvent[] = [
  // ═══════════════════════════════════════════════════════════
  // ERA I — Firmware (0–2) — odruchy, przywiązanie
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evt_era1_strange_face',
    ageRange: [0, 1],
    sceneText: 'Ktoś wielki nachyla się nad łóżeczkiem. Zapach inny niż mama.',
    voices: [
      { structure: 'amygdala', text: 'OBCY. Alarm. Płacz, już.' },
      { structure: 'thalamus', text: 'Przetwarzam bodziec. Filtr włącza się w 3, 2...' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Wrzask na cały dom',
        type: 'impulsive',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate jeszcze przed świadomą myślą włączyło alarm. Lęk separacyjny zaczyna się około 6. miesiąca — mózg uczy się, że "swoi" to bezpieczeństwo.',
        statImpact: { n: 4 },
      },
      {
        id: 'dec_2',
        text: 'Wpatruj się w nieznajomego',
        type: 'rational',
        cost: { resource: 'willpower', amount: 2 },
        hiddenStructure: 'hippocampus',
        flavorReveal:
          'Hipokamp zapisuje nową twarz. Każda nowa osoba to nowy wpis w katalogu "świat".',
        statImpact: { o: 3, n: -1 },
      },
      {
        id: 'dec_3',
        text: 'Uśmiechnij się odruchowo',
        type: 'empathic',
        cost: { resource: 'mood', amount: 2 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa zareagowała na mikroekspresje obcego. Niemowlęta czytają emocje twarzą w twarz — to prekursor empatii.',
        statImpact: { a: 3, e: 2 },
      },
    ],
  },
  {
    id: 'evt_era1_parent_leaves',
    ageRange: [1, 2],
    sceneText: 'Rodzic znika za drzwiami. Cały świat właśnie się rozpadł.',
    voices: [
      { structure: 'amygdala', text: 'KONIEC ŚWIATA. Nikt nigdy już nie wróci.' },
      { structure: 'hippocampus', text: 'Statystycznie... ostatnio wracali w 14 na 14 przypadków.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Rozpacz pełna gębą',
        type: 'impulsive',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Protest (faza 1 wg Bowlby\'ego) — ciało migdałowate krzyczy o powrót opiekuna. Biologicznie funkcjonalne: głośny płacz zwiększa szansę na powrót.',
        statImpact: { n: 5 },
        setsFlags: ['lek_separacyjny'],
      },
      {
        id: 'dec_2',
        text: 'Pobaw się misiem',
        type: 'active',
        cost: { resource: 'energy', amount: 2 },
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste szuka nagrody w zabawie — dopamina odciąga uwagę od nieobecności. To zaczątek zdrowej samoregulacji.',
        statImpact: { c: 2, n: -2 },
      },
      {
        id: 'dec_3',
        text: 'Poczekaj w ciszy',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa (jeszcze w powijakach!) próbuje utrzymać obraz opiekuna w pamięci roboczej. U dwulatka to ogromne osiągnięcie — stałość obiektu.',
        statImpact: { c: 4, n: -3 },
      },
    ],
  },
  {
    id: 'evt_era1_hot_stove',
    ageRange: [1, 2],
    sceneText: 'Czerwone kółko na kuchence. Świeci tak ładnie.',
    voices: [
      { structure: 'caudate', text: 'Dotknij! Błyszczy = nagroda.' },
      { structure: 'insula', text: 'Ciepło... robi się coraz cieplej... CZEKAJ.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Chwyć',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste popchnęło rękę, zanim wyspa zdążyła ostrzec. Klasyczny konflikt "chcę" vs "czuję" — u dziecka wygrywa "chcę".',
        statImpact: { n: 3, o: 1 },
        setsFlags: ['oparzenie_rekki'],
      },
      {
        id: 'dec_2',
        text: 'Zatrzymaj rękę pół metra wcześniej',
        type: 'empathic',
        cost: { resource: 'mood', amount: 2 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa zintegrowała sygnały z termoreceptorów skóry. To moment, kiedy ciało uczy mózg o świecie szybciej niż rozumowanie.',
        statImpact: { c: 3, n: -1 },
      },
      {
        id: 'dec_3',
        text: 'Popatrz na rodzica najpierw',
        type: 'rational',
        cost: { resource: 'willpower', amount: 2 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Social referencing — kora przedczołowa czyta ekspresję rodzica zamiast testować świat na własnej skórze. Najszybsza droga do nauki.',
        statImpact: { c: 4, a: 2 },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ERA II — Patch Notes (3–5) — eksplozja "dlaczego?"
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evt_era2_monster_closet',
    ageRange: [3, 5],
    sceneText: 'Światło zgaszone. Szafa... skrzypi. Albo nie skrzypi. Trudno powiedzieć.',
    voices: [
      { structure: 'amygdala', text: 'W SZAFIE. JEST. POTWÓR.' },
      { structure: 'pfc', text: 'Statystycznie potwory w szafach są rzadkie, prawda?' },
      { structure: 'hippocampus', text: 'Pamiętam ten dźwięk. Chyba. Albo nie.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Pod kołdrę, nie wychodź',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate uruchomiło freeze-response. Nadaktywne u dzieci — całkiem racjonalne, gdy nie masz pojęcia, co jest w szafie.',
        statImpact: { n: 5 },
        setsFlags: ['trauma_ciemnosci'],
      },
      {
        id: 'dec_2',
        text: 'Zawołaj rodzica',
        type: 'empathic',
        cost: { resource: 'mood', amount: 2 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa wyczuła potrzebę bezpieczeństwa i wybrała attachment figure. Współregulacja emocjonalna to normalny mechanizm w tym wieku.',
        statImpact: { a: 3, n: -2 },
      },
      {
        id: 'dec_3',
        text: 'Sprawdź szafę sam',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa przetestowała hipotezę empirycznie. Rzadkie osiągnięcie u pięciolatka — wymaga przełamania odruchu ucieczki.',
        statImpact: { c: 5, n: -3, o: 2 },
      },
    ],
  },
  {
    id: 'evt_era2_ate_crayon',
    ageRange: [3, 4],
    sceneText: 'Fioletowa kredka wygląda jak cukierek. Smakuje jednak... inaczej.',
    voices: [
      { structure: 'caudate', text: 'Błyszczy + kolor = jedzenie. Wrzuć.' },
      { structure: 'insula', text: 'Smak... woskowy? Coś tu nie gra.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Pogryź dalej, może to nowa klasa deseru',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Układ nagrody odpalił się na zapach i kolor, zanim smak zdążył się przebić. Podobny mechanizm działa w reklamach jedzenia — u dorosłych.',
        statImpact: { o: 2, c: -3 },
      },
      {
        id: 'dec_2',
        text: 'Wypluj i zapamiętaj',
        type: 'rational',
        cost: { resource: 'willpower', amount: 2 },
        hiddenStructure: 'hippocampus',
        flavorReveal:
          'Hipokamp właśnie zapisał asocjację: fiolet-wosk = nie-jedzenie. Jedna próba, jedna nauka — conditioned taste aversion.',
        statImpact: { c: 3, o: 1 },
      },
      {
        id: 'dec_3',
        text: 'Pokaż rodzicowi i spytaj „co to?"',
        type: 'empathic',
        cost: { resource: 'mood', amount: 2 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa szuka informacji w społecznym kontekście zamiast testować na sobie. To początek meta-poznania.',
        statImpact: { c: 2, a: 2, o: 3 },
      },
    ],
  },
  {
    id: 'evt_era2_why_sky_blue',
    ageRange: [4, 5],
    sceneText: 'Niebo jest niebieskie. Ale dlaczego? A dlaczego trawa zielona? A dlaczego "dlaczego"?',
    voices: [
      { structure: 'pfc', text: 'Zadawaj pytania. Tak się buduje model świata.' },
      { structure: 'caudate', text: 'Każda odpowiedź = dopamina. KONTYNUUJ.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Zapytaj 47 razy z rzędu',
        type: 'active',
        cost: { resource: 'energy', amount: 3 },
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste zapętliło pętlę "pytanie → odpowiedź → dopamina". Zdrowe — tak dzieci budują wiedzę o świecie.',
        statImpact: { o: 5, e: 2 },
      },
      {
        id: 'dec_2',
        text: 'Wymyśl odpowiedź sam',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa poszła w tryb "hipoteza bez danych". To fundament myślenia naukowego — i wczesne oznaki twórczości.',
        statImpact: { o: 5, c: 2 },
      },
      {
        id: 'dec_3',
        text: 'Odpuść, zajmij się misiem',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate uznało natłok pytań za przeciążenie poznawcze i wybrało znajomy obiekt. Adaptacyjne, ale uczy unikania niepewności.',
        statImpact: { o: -2, n: 2 },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ERA III — Early Access (6–12) — szkoła, reguły, socjalizacja
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evt_era3_first_school_day',
    ageRange: [6, 7],
    sceneText: 'Wszyscy znają już swoje miejsca. Ty stoisz w drzwiach z plecakiem.',
    voices: [
      { structure: 'amygdala', text: '30 obcych. Wycofaj się natychmiast.' },
      { structure: 'insula', text: 'Czuję ich ciekawość... chyba? Albo lęk? Hmm.' },
      { structure: 'pfc', text: 'Plan: wejdź, usiądź, oddychaj.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Usiądź w ostatniej ławce i milcz',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate zminimalizowało ekspozycję społeczną. Chroni przed odrzuceniem — ale też odcina od okazji do uczenia się przez kontakt.',
        statImpact: { n: 3, e: -2 },
        setsFlags: ['niesmialosc'],
      },
      {
        id: 'dec_2',
        text: 'Zagadaj do pierwszej osoby',
        type: 'empathic',
        cost: { resource: 'mood', amount: 3 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa wyczuła że inni też są zestresowani — wspólny dyskomfort to paradoksalnie świetny punkt startowy do przyjaźni.',
        statImpact: { e: 4, a: 3 },
        setsFlags: ['ma_przyjaciel'],
      },
      {
        id: 'dec_3',
        text: 'Zadaj pytanie nauczycielowi',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa wybrała strukturę autorytetu zamiast rówieśników — mniej ryzyko, ale też mniejsze zyski społeczne.',
        statImpact: { c: 3, o: 2 },
      },
    ],
  },
  {
    id: 'evt_era3_basement_dare',
    ageRange: [8, 10],
    requiresFlag: 'trauma_ciemnosci',
    sceneText: 'Kolega proponuje wejście do starej piwnicy. „Sprawdzimy, co tam jest".',
    voices: [
      { structure: 'amygdala', text: 'TO JAK TA SZAFA. UCIEKAJ.' },
      { structure: 'hippocampus', text: 'Ciemność + skrzypienie + sam... znamy ten film.' },
      { structure: 'caudate', text: 'Ale wyglądałbyś odważnie przed kolegą...' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Wchodzę pierwszy',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste zagrało na wartość społeczną nagrody (status) przeciwko sygnałowi amygdali. To dopaminergiczny risk-taking — rośnie w tym wieku.',
        statImpact: { n: -3, e: 3, o: 3 },
        clearsFlags: ['trauma_ciemnosci'],
      },
      {
        id: 'dec_2',
        text: 'Stanowcze "nie" — idziemy gdzie indziej',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zintegrowała wspomnienie traumy z aktualną sytuacją i wybrała asertywność. Nie lęk — świadoma decyzja.',
        statImpact: { c: 4, n: -1 },
      },
      {
        id: 'dec_3',
        text: 'Ucieknij bez słowa',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate wygenerowało pełny flight response. Trauma z wieku 4 lat utrwaliła się — "ciemność = niebezpieczeństwo" zapisało się w ciele.',
        statImpact: { n: 5, e: -3 },
        setsFlags: ['lek_spoleczny'],
      },
    ],
  },
  {
    id: 'evt_era3_cheat_test',
    ageRange: [9, 12],
    sceneText: 'Ściąga leży w piórniku. Nauczyciel patrzy w okno.',
    voices: [
      { structure: 'caudate', text: 'Piątka = dopamina. Weź.' },
      { structure: 'pfc', text: 'Konsekwencje. Zasady. To nie jest opłacalne długoterminowo.' },
      { structure: 'insula', text: 'Coś mi w brzuchu mówi, że to nie tak.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Ściągnij',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Układ nagrody przeważył nad etyką. W tym wieku kora przedczołowa jeszcze słabo hamuje — stąd tyle drobnych „przestępstw" wczesnoszkolnych.',
        statImpact: { c: -4, a: -2 },
      },
      {
        id: 'dec_2',
        text: 'Napisz co wiesz, odpuść resztę',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zahamowała impuls krótkoterminowej nagrody na rzecz tożsamości ucznia uczciwego. Długoterminowo się opłaca.',
        statImpact: { c: 5, a: 2 },
      },
      {
        id: 'dec_3',
        text: 'Pokaż ściągę koledze — pomóż mu zamiast sobie',
        type: 'empathic',
        cost: { resource: 'mood', amount: 3 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa uruchomiła empatię. Paradoks: "dla kumpla" wydaje się mniej niemoralne niż "dla siebie" — błąd poznawczy wspólny dla dzieci i dorosłych.',
        statImpact: { a: 4, c: -2 },
      },
    ],
  },
  {
    id: 'evt_era3_group_project',
    ageRange: [10, 12],
    sceneText: 'Projekt grupowy. Trzy osoby nic nie robią. Termin jutro.',
    voices: [
      { structure: 'pfc', text: 'Zróbmy plan. Podzielmy zadania.' },
      { structure: 'amygdala', text: 'Olej ich, zrób sam, zaraz będzie krzyk.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Zrób wszystko sam do nocy',
        type: 'active',
        cost: { resource: 'energy', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa przejęła kontrolę. Dobre krótkoterminowo, ale uczy, że współpraca się nie opłaca — toksyczny wzorzec sumienności.',
        statImpact: { c: 4, n: 2 },
      },
      {
        id: 'dec_2',
        text: 'Zmobilizuj grupę, rozdziel zadania',
        type: 'empathic',
        cost: { resource: 'mood', amount: 3 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa wyczuła, że inni też się stresują. Empatyczne przywództwo opiera się na interocepcji — czuciu, co dzieje się w grupie.',
        statImpact: { e: 3, a: 3, c: 2 },
      },
      {
        id: 'dec_3',
        text: 'Nie zrób nic — "wszyscy dostaną jedynkę"',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate wybrało wycofanie. Passive aggression — obrona ego kosztem osiągnięć. Krótkoterminowa ulga, długoterminowy nawyk.',
        statImpact: { c: -3, a: -3 },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ERA IV — Open Beta (13–18) — hormony, bunt, tożsamość
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evt_era4_first_party',
    ageRange: [14, 16],
    sceneText: 'Impreza u kogoś, kogo prawie nie znasz. Muzyka za głośna. Ktoś podaje ci kubek.',
    voices: [
      { structure: 'caudate', text: 'Nowe! Nieznane! Potencjalnie niesamowite!' },
      { structure: 'amygdala', text: 'Nie wiesz co tam jest. Nie bierz.' },
      { structure: 'pfc', text: 'W adolescencji działam na pół gwizdka. Przepraszam za kłopot.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Wypij bez pytania',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste pracuje w adolescencji na pełnych obrotach, gdy kora przedczołowa dojrzewa dopiero do ~25. roku. Stąd risk-taking nastolatków.',
        statImpact: { o: 3, c: -4, n: -2 },
        setsFlags: ['wieczorek_eksperymentalny'],
      },
      {
        id: 'dec_2',
        text: 'Spytaj co to',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zdołała się odezwać przez dopaminergiczny hałas. Dobra wiadomość: da się ćwiczyć samokontrolę nawet w tym wieku.',
        statImpact: { c: 3, o: 2 },
      },
      {
        id: 'dec_3',
        text: 'Wyjdź bokiem',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate wygrało konflikt z ciekawością. Bezpiecznie dziś — ale też -1 punkt do "comfort zone". Eksploracja w adolescencji kosztuje.',
        statImpact: { n: 2, e: -3 },
      },
    ],
  },
  {
    id: 'evt_era4_rebellion',
    ageRange: [15, 17],
    sceneText: 'Rodzic: „Masz być w domu o 22:00". Impreza kończy się o 2:00.',
    voices: [
      { structure: 'caudate', text: 'Zostań. Teraz jest życie.' },
      { structure: 'pfc', text: 'Potrafisz negocjować. Spróbuj.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Wróć o 4:00 i kłam',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Układ nagrody zdominował. Kłamstwo daje natychmiastową ulgę — ale hipokamp zapisuje je jako strategię. Nawyk się utrwala.',
        statImpact: { c: -3, a: -2, e: 2 },
      },
      {
        id: 'dec_2',
        text: 'Zadzwoń, wynegocjuj do 1:00',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zrobiła coś trudnego: komunikację zamiast buntu. Negocjowanie uczy autonomii w bezpiecznych warunkach.',
        statImpact: { c: 4, a: 3, o: 2 },
      },
      {
        id: 'dec_3',
        text: 'Siedź, biercz, nie wrzeszcz',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate wybrało kompromis z autorytetem — unikanie konfliktu. Ugodowość rośnie, ale kosztem autonomii.',
        statImpact: { a: 2, c: 1, e: -2 },
      },
    ],
  },
  {
    id: 'evt_era4_crush',
    ageRange: [14, 17],
    sceneText: 'Osoba z równoległej klasy. Patrzy. Na ciebie. Chyba. Albo na ścianę za tobą.',
    voices: [
      { structure: 'amygdala', text: 'UPADNIESZ. SKOMPROMITUJESZ SIĘ.' },
      { structure: 'caudate', text: 'Idź. Teraz. Ta dopamina to najlepsze w życiu.' },
      { structure: 'insula', text: 'Serce bije w uszach. To jest... uczucie.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Podejdź i zagadaj',
        type: 'active',
        cost: { resource: 'energy', amount: 5 },
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste kazało iść w stronę największej nagrody. Niezależnie od wyniku — mózg zapamięta, że próbowanie się opłaca.',
        statImpact: { e: 4, o: 3, n: -2 },
      },
      {
        id: 'dec_2',
        text: 'Napisz za pośrednikiem',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa wybrała pół-kanał. Bezpieczniej, ale też pośrednio — ciało migdałowate dalej zapisuje „kontakt = niebezpieczny".',
        statImpact: { c: 2, n: -1 },
      },
      {
        id: 'dec_3',
        text: 'Odwróć wzrok, udawaj że nic się nie dzieje',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate wygrało — strach przed odrzuceniem > pragnienie kontaktu. Niegroźnie dzisiaj, ale utrwala wzorzec wycofania.',
        statImpact: { n: 3, e: -3 },
        setsFlags: ['niesmialosc'],
      },
    ],
  },
  {
    id: 'evt_era4_exam_matura',
    ageRange: [17, 18],
    sceneText: 'Matura. Sala. Zegar. Ręka dygocze nad arkuszem.',
    voices: [
      { structure: 'amygdala', text: 'JEDEN BŁĄD I CAŁE ŻYCIE SPLUWA.' },
      { structure: 'pfc', text: 'Masz 4 godziny. Zacznij od tego, co znasz.' },
      { structure: 'hippocampus', text: 'Wszystko pamiętam. Chyba. Może. Daj mi sekundę.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Zacznij od najtrudniejszego, daj z siebie 200%',
        type: 'active',
        cost: { resource: 'energy', amount: 5 },
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste wybrało high-risk/high-reward. Strategia działa, jeśli pamięć robocza się nie zakorkuje stresem.',
        statImpact: { c: 3, n: 2, o: 2 },
      },
      {
        id: 'dec_2',
        text: 'Oddychaj, zacznij od najłatwiejszego',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zahamowała panikę amygdali poprzez kontrolę oddechu — aktywuje nerw błędny, który wycisza układ współczulny.',
        statImpact: { c: 5, n: -3 },
      },
      {
        id: 'dec_3',
        text: 'Oddaj pustą kartkę',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate przejęło stery — klasyczna reakcja freeze. Zakorkowało dostęp do hipokampu, więc wiedza stała się niedostępna.',
        statImpact: { n: 7, c: -5 },
        setsFlags: ['lek_egzaminacyjny'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ERA V — Release 1.0 (19–25) — studia, praca, relacje
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evt_era5_colloquium',
    ageRange: [19, 22],
    sceneText: 'Wchodzisz na salę napisać kolokwium. Mózg robi factory reset.',
    voices: [
      { structure: 'amygdala', text: 'O nie. Uciekaj. Wyjście awaryjne jest po lewej.' },
      { structure: 'pfc', text: 'Oddychaj. Mamy na to 90 minut.' },
      { structure: 'hippocampus', text: 'Wiedziałem to 5 minut temu. Gdzie zniknęło?' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Oddaj pustą kartkę i wyjdź',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate przejęło stery. Uruchomiło reakcję walcz-lub-uciekaj szybciej niż świadoma myśl, blokując dostęp do hipokampu.',
        statImpact: { n: 10, c: -5 },
      },
      {
        id: 'dec_2',
        text: 'Oddychaj. Zacznij od najłatwiejszego',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zapanowała nad stresem. Pozwala hamować impulsy ucieczki i otworzyć zamknięty przez stres hipokamp.',
        statImpact: { n: -3, c: 8 },
      },
      {
        id: 'dec_3',
        text: 'Ściągnij z telefonu',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Układ nagrody obszedł etykę dla krótkoterminowej ulgi. Dopamina z "uratowania się" jest silniejsza niż ryzyko złapania.',
        statImpact: { c: -4, a: -3, n: -2 },
      },
    ],
  },
  {
    id: 'evt_era5_job_interview',
    ageRange: [21, 25],
    sceneText: 'Rozmowa o pracę. „Proszę opowiedzieć o swoich słabościach".',
    voices: [
      { structure: 'amygdala', text: 'PRZYZNAJ SIĘ DO WSZYSTKIEGO. BŁAGAJ.' },
      { structure: 'pfc', text: 'Self-presentation. Pamiętasz zasady.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Powiedz, że „jesteś perfekcjonistą" (klasyk)',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zagrała społeczną heurystyką. Skuteczna, ale każdy rekruter to słyszy — autentyczność bije wyuczoną formułę.',
        statImpact: { c: 2, a: -1 },
      },
      {
        id: 'dec_2',
        text: 'Szczerze o trudnościach i jak sobie radzisz',
        type: 'empathic',
        cost: { resource: 'mood', amount: 3 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa zadziałała z autentyczności. Vulnerability + agency = najbardziej przekonująca kombinacja w rozmowach o pracę (Brené Brown miałaby rację).',
        statImpact: { a: 4, o: 3, e: 2 },
      },
      {
        id: 'dec_3',
        text: 'Wyjdź w środku rozmowy',
        type: 'impulsive',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate uznało sytuację za niemożliwą do przeżycia. Flight response — krótkoterminowa ulga, długoterminowa spirala unikania.',
        statImpact: { n: 6, e: -4, c: -3 },
        setsFlags: ['lek_spoleczny'],
      },
    ],
  },
  {
    id: 'evt_era5_relationship',
    ageRange: [20, 25],
    sceneText: 'Osoba, z którą jesteś od miesięcy, pyta: „Gdzie jesteśmy z tym wszystkim?"',
    voices: [
      { structure: 'insula', text: 'Coś w środku mówi „to jest realne".' },
      { structure: 'amygdala', text: 'A JAK CIĘ ODRZUCI? A JAK CIĘ ZASTĄPI?' },
      { structure: 'pfc', text: 'Mamy dane. Możemy się zaangażować.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: '„Jestem z tobą na serio"',
        type: 'empathic',
        cost: { resource: 'mood', amount: 4 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa zintegrowała sygnały ciała (serce + spokój) i zatwierdziła przywiązanie. Oksytocyna plus wazopresyna — chemia zaangażowania.',
        statImpact: { a: 4, e: 3, n: -2 },
        setsFlags: ['w_zwiazku'],
      },
      {
        id: 'dec_2',
        text: '„Porozmawiajmy o konkretnych rzeczach — plany, granice"',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa kazała nazwać rzeczy. Mniej romantyczne, za to długoterminowo stabilizuje relację — redukuje niedomówienia.',
        statImpact: { c: 4, a: 2 },
        setsFlags: ['w_zwiazku'],
      },
      {
        id: 'dec_3',
        text: '„Zbyt szybko, potrzebuję przestrzeni"',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate rozpoznało intymność jako zagrożenie. Styl przywiązania unikający — skuteczna ochrona, za to kosztem bliskości.',
        statImpact: { n: 3, a: -3, e: -2 },
        setsFlags: ['samotny'],
      },
    ],
  },
  {
    id: 'evt_era5_all_nighter',
    ageRange: [19, 24],
    sceneText: 'Egzamin za 8 godzin. Materiału na 14. Kawa już nie działa.',
    voices: [
      { structure: 'caudate', text: 'Jeszcze jedna energetyczna. Damy radę.' },
      { structure: 'insula', text: 'Ciało sygnalizuje koniec zasobów.' },
      { structure: 'pfc', text: 'Dwie godziny nauki + 6 snu > 8 godzin nauki bez snu.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Zarwij nockę',
        type: 'active',
        cost: { resource: 'energy', amount: 5 },
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste kazało wyciskać maksimum — ale bez snu hipokamp nie skonsoliduje pamięci. Efektywnie uczenie się bez zapisu.',
        statImpact: { c: 2, n: 3 },
      },
      {
        id: 'dec_2',
        text: 'Ucz się 2h, potem śpij 6h',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zna fizjologię snu. Faza REM konsoliduje pamięć — bez niej wiedza parami zapomina się do rana.',
        statImpact: { c: 4, o: 2 },
      },
      {
        id: 'dec_3',
        text: 'Odpuść i idź spać',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate wybrało ucieczkę przed wyzwaniem. Akceptacja porażki może być zdrowa, ale uczy, że trudności omija się snem.',
        statImpact: { n: 2, c: -3 },
      },
    ],
  },
  {
    id: 'evt_era5_moving_out',
    ageRange: [20, 25],
    sceneText: 'Twój pokój. Pudełka. Pierwsze prawdziwe mieszkanie w innym mieście.',
    voices: [
      { structure: 'hippocampus', text: '18 lat wspomnień. Które zabierasz?' },
      { structure: 'caudate', text: 'NOWE. WOLNOŚĆ. BAR Z PIWEM W WALKING DISTANCE.' },
      { structure: 'amygdala', text: 'A jak coś się stanie i nikt nie przyjdzie?' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Wyjedź bez oglądania się',
        type: 'active',
        cost: { resource: 'energy', amount: 4 },
        hiddenStructure: 'caudate',
        flavorReveal:
          'Układ nagrody wybrał nowość zamiast ciągłości. Biologicznie — migracja to adaptacja. Psychicznie — kosztuje, ale uczy autonomii.',
        statImpact: { o: 4, e: 3, n: 2 },
      },
      {
        id: 'dec_2',
        text: 'Zabierz konkrety, zostaw sentymenty',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zrobiła klasyfikację: przedmioty użytkowe vs tożsamościowe. Minimalizm emocjonalny — bywa zdrowy, bywa ucieczką.',
        statImpact: { c: 4, o: 2 },
      },
      {
        id: 'dec_3',
        text: 'Przesuń wyjazd o miesiąc',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate kupiło sobie czas przed zmianą. Krótkoterminowa ulga, ale uczy, że nieznane omija się odroczeniem — wzorzec prokrastynacji.',
        statImpact: { n: 3, o: -2 },
      },
    ],
  },

  {
    id: 'evt_era5_first_substance',
    ageRange: [19, 28],
    sceneText:
      'Piątkowa noc. Ktoś proponuje ci coś „żeby się rozluźnić". Pierwszy raz.',
    voices: [
      { structure: 'caudate', text: 'WOW. Takiego uderzenia dopaminy nie miałem nigdy.' },
      { structure: 'pfc', text: 'Wiem jak to działa. Mechanizm uzależnienia zaczyna się tu.' },
      { structure: 'insula', text: 'Ciało mówi: powtórz. Powtórz. Powtórz.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Bierz dalej, przez cały weekend',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Układ nagrody właśnie nauczył się nowego, silniejszego źródła dopaminy niż cokolwiek naturalnego. Tolerancja zacznie rosnąć — naturalne nagrody stracą moc.',
        statImpact: { o: 2, c: -5, n: -2 },
        setsFlags: ['uzalezniony'],
      },
      {
        id: 'dec_2',
        text: 'Spróbuj raz, na tym skończ',
        type: 'rational',
        cost: { resource: 'willpower', amount: 5 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa dostała dwa sygnały: "powtórz" od caudate i "widziałam, co to robi z ludźmi" od hipokampu. Wygrała pamięć — trudne, ale możliwe.',
        statImpact: { c: 3, o: 3 },
      },
      {
        id: 'dec_3',
        text: 'Grzecznie odmów i wyjdź',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate przejęło stery — lęk przed nieznanym wygrał z ciekawością. Strategia skuteczna dziś, ale może utrwalać wycofanie społeczne.',
        statImpact: { n: 2, e: -1, c: 2 },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ERA V — dodatkowe eventy milestones (20–25), autorzy: zespół
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evt_sesja_neuroanatomia',
    ageRange: [20, 20],
    sceneText:
      'Tydzień sesji. Pięć egzaminów w dziesięć dni. Siedzisz nad notatkami z neuroanatomii o 2 w nocy. Notatka numer 47: „Wymień jądra wzgórza i ich funkcje." Twój mózg, z wyraźną ironią, przetwarza to pytanie za pomocą tych samych jąder wzgórza.',
    voices: [
      {
        structure: 'hippocampus',
        text: 'Czekaj... jądra brzuszne tylno-boczne. Widziałem to. Biblioteka, drugi tydzień semestru, zapach herbaty jaśminowej. Mam to na slajdzie numer... czy to był slajd trzeci czy piąty?',
      },
      {
        structure: 'amygdala',
        text: 'SESJA. Każda noc bez snu to śmierć komórek. Widziałem statystyki. Studenci przez stres tracą neurony hipokampa. WŁAŚNIE TERAZ. WŁAŚNIE TY.',
      },
      {
        structure: 'pfc',
        text: 'Okay. Mamy plan. Podział materiału na bloki, dwie godziny na temat, przerwa piętnaście minut. To wykonalne. Jeśli uda mi się... em... skupić na tym co mówię.',
      },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Zarywaj noc — ucz się do świtu',
        type: 'impulsive',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate uruchomiło kaskadę stresową: kortyzol przenika barierę krew–mózg i wiąże się z receptorami glukokortykoidowymi w hipokampie. Paradoks: reakcja walcz-lub-uciekaj tłumi właśnie hipokamp — kluczowy dla konsolidacji pamięci. Zarywasz noc, żeby więcej zapamiętać, i robisz dokładnie odwrotnie. Po ponad 24 h bez snu efektywność konsolidacji hipokampalnej spada o ok. 40%.',
        statImpact: { n: 5, e: -2, o: -1, c: -3 },
      },
      {
        id: 'dec_2',
        text: 'Zrób plan i idź spać o 23:00',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa aktywowała sieć kontroli wykonawczej, modulując połączenia z jądrem ogoniastym (hamowanie scrollowania) i ciałem migdałowatym (obniżenie kortyzolu). Sen jest kluczowy: podczas NREM hipokamp odtwarza wzorce aktywności z dnia, a podczas REM kora nowa wgrywa je w trwałe sieci semantyczne. Bez snu hipokamp nie może wykonać tego transferu.',
        statImpact: { n: -2, o: 2, c: 5 },
        setsFlags: ['zaplanowana_sesja'],
      },
      {
        id: 'dec_3',
        text: 'Narysuj mapy pojęciowe — połącz struktury z funkcjami',
        type: 'active',
        cost: { resource: 'energy', amount: 3 },
        hiddenStructure: 'hippocampus',
        flavorReveal:
          'Hipokamp buduje engramy — fizyczne ślady pamięci w sieciach neuronalnych. Tworzenie mapy angażuje jednocześnie pamięć epizodyczną (kontekst) i semantyczną (fakty). Hipokamp integruje informacje z różnych modalności w jeden ślad — dlatego skojarzenia przestrzenne są tak skuteczne. Powtarzana aktywacja tych samych połączeń prowadzi do długotrwałego wzmocnienia synaptycznego (LTP).',
        statImpact: { o: 5, c: 3 },
      },
    ],
  },
  {
    id: 'evt_impreza_legendarna',
    ageRange: [21, 21],
    sceneText:
      'Znajomi opowiadają, że to była NAJLEPSZA impreza. Wszyscy mają zdjęcia. Nie pamiętasz nic po 23:00. Hipokamp miał wieczór wolny.',
    voices: [
      {
        structure: 'hippocampus',
        text: 'Mam... fragmenty. Jakaś melodia. Ktoś miał na sobie żółty sweter. Potem czarna dziura. To niepokojące. NIEPOKOJĄCE JEST ŻE NIE MAM TEGO ZAPISANEGO.',
      },
      {
        structure: 'caudate',
        text: 'Bro. BRO. Dopamina pobiła własny rekord. Nie pamiętasz szczegółów bo szczegóły nie były ważne. STAN był ważny. Zróbmy to znowu w piątek.',
      },
      {
        structure: 'pfc',
        text: 'Okay więc... nie pamiętamy. Co to mówi o naszych wyborach na wcześniejszym etapie? Nic. Mówi nic. Idziemy dalej.',
      },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Kontynuuj — noc jest młoda',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste eskaluje pętlę dopaminergiczną: każda nagroda wzmacnia szlak mezokortykolimbiczny. Im więcej dopaminy, tym silniejszy sygnał „chcę więcej" — i tym słabsza kontrola hamująca kory przedczołowej. Nadmierne pobudzenie układu nagrody nasila wanting (oczekiwanie), który jest silniejszy od faktycznej przyjemności (liking). Eskalujesz, choć nie czujesz więcej satysfakcji.',
        statImpact: { n: 3, e: 5, o: 1, a: -1, c: -4 },
      },
      {
        id: 'dec_2',
        text: 'Wróć do domu — jutro trzeba żyć',
        type: 'rational',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa wzięła pod uwagę odroczone konsekwencje — planowanie, ocena ryzyka, hamowanie impulsów. W wieku 21 lat kPFC jeszcze dojrzewa (mielinizacja trwa do ok. 25 r.ż.), ale już zaczyna wygrywać debaty z jądrem ogoniastym. Sen po aktywności społecznej pozwala hipokampowi skompresować i zaindeksować przeżyte doświadczenia.',
        statImpact: { n: -1, e: -1, c: 4 },
      },
      {
        id: 'dec_3',
        text: 'Zastanów się, czemu nic nie pamiętasz',
        type: 'active',
        cost: { resource: 'energy', amount: 2 },
        hiddenStructure: 'hippocampus',
        flavorReveal:
          'Alkohol (etanol) blokuje receptory NMDA w hipokampie, uniemożliwiając indukcję LTP. Bez LTP nie ma enkodowania nowych wspomnień. Wynikiem jest amnezja anterogradowa — dokładnie jak w filmie Memento: nie jesteś niezdolny do pamiętania przeszłości, tylko nie możesz tworzyć nowych wspomnień podczas działania substancji.',
        statImpact: { n: 2, e: -1, o: 4, c: 2 },
        setsFlags: ['refleksja_pamieci'],
      },
    ],
  },
  {
    id: 'evt_pierwsze_mieszkanie',
    ageRange: [22, 22],
    excludesFlag: 'w_zwiazku',
    sceneText:
      'Pierwsze własne mieszkanie. Wolność absolutna i rachunki za prąd jednocześnie. Siedzisz na materacu na podłodze bo łóżko przyjeżdża za tydzień. Na ścianie wisią notatki z anatomii. Na kuchennym stole — niezrozumiały formularz od dostawcy gazu.',
    voices: [
      {
        structure: 'caudate',
        text: 'WŁASNE MIESZKANIE. Możesz jeść o 3 w nocy. Możesz grać głośno. Możesz nie sprzątać PRZEZ TYDZIEŃ. Dopamina melduje gotowość do działania. WSZYSTKICH DZIAŁAŃ.',
      },
      {
        structure: 'hippocampus',
        text: 'Dom rodziców... piątkowy zapach obiadu. Mama odkurzała w niedzielę rano. Ciepło kaloryferu przy biurku. To były bardzo stabilne warunki do nauki, wiesz.',
      },
      {
        structure: 'insula',
        text: 'Jest coś dziwnego w tym milczeniu. Nie złego. Tylko... inne. Jak nowy rodzaj ciszy. Coś w żołądku mówi mi, że to ważny moment.',
      },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Zadzwoń do rodziców — zapytaj jak to wszystko działa',
        type: 'empathic',
        cost: { resource: 'mood', amount: 3 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa przetwarza bodźce interoceptywne — sygnały z wnętrza ciała — oraz jest kluczowa dla empatii i świadomości własnych emocji. „Zadzwoń po pomoc" angażuje wyspę przez interoceptywną świadomość własnej bezradności i przez empatię — rozumiesz, że rodzice chcą być potrzebni. Wyspa współpracuje z korą zakrętu obręczy i ciałem migdałowatym, tworząc sieć afektywną.',
        statImpact: { n: -1, e: 1, a: 5, c: 2 },
      },
      {
        id: 'dec_2',
        text: 'Ogarnij wszystko sam — YouTube i cierpliwość',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa uruchomiła planowanie i rozwiązywanie problemów. Samodzielne rozwiązywanie nowych problemów aktywuje układ nagrody przez zjawisko kompetencji: dopamina uwalniana jest nie tylko na sygnał nagrody, ale też w anticipacji jej — samo planowanie staje się nagradzające. To podstawa uczenia się przez działanie.',
        statImpact: { n: 1, o: 3, a: -1, c: 5 },
        setsFlags: ['niezaleznosc'],
      },
      {
        id: 'dec_3',
        text: 'Zamów pizzę i zignoruj formularz do rana',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste uczestniczy w automatyzacji zachowań nagradzanych. Ignorowanie dyskomfortu na rzecz natychmiastowej gratyfikacji to klasyczny sygnał dominacji układu limbiczno-prążkowiowego nad korą przedczołową. W wieku 22 lat proporcja ta jest jeszcze niekorzystna: prążkowie „wygrywa" częściej niż po 25 r.ż.',
        statImpact: { e: 3, c: -4 },
      },
    ],
  },
  {
    id: 'evt_wypalenie_studenckie',
    ageRange: [23, 23],
    sceneText:
      'Środek semestru. Siódmy tydzień z rzędu bez weekendu. Otwierasz e-mail z kolejnym zadaniem i czujesz... nic. Nie stres, nie złość — nic. Twój mózg wyłączył alarm przeciwpożarowy, bo alarm dzwonił tak długo, że przestał być informacją.',
    voices: [
      {
        structure: 'amygdala',
        text: 'Próbuję. Naprawdę próbuję. Słuchaj — wysyłam stres, wysyłam kortyzol, wysyłam szybkie bicie serca. Nie reagujesz. To nieprawidłowe. Jestem zaniepokojona własną skutecznością.',
      },
      {
        structure: 'hippocampus',
        text: 'Rok pierwszy, inauguracja. Byłeś taki podekscytowany. Pamiętam dokładnie — kawa w kubku papierowym, zapach nowego plecaka. To był ktoś inny. Albo ty. Nie wiem już.',
      },
      {
        structure: 'pfc',
        text: 'To jest wypalenie. Mam definicję: chroniczny stres niezarządzany przez mechanizmy regeneracyjne. Wiemy co zrobić. Czemu nic nie robimy?',
      },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Walcz dalej — to tylko słabość',
        type: 'impulsive',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Przy chronicznym stresie ciało migdałowate ulega strukturalnej hipertrofii, a hipokamp — atrofii. Kortyzol w nadmiarze hamuje neurogenezę w zakręcie zębatym hipokampa: dosłownie hamuje powstawanie nowych neuronów. „Walcz dalej" to instrukcja dla ciała migdałowatego, by eskalowało reakcję, której ofiara — hipokamp — nie może znieść.',
        statImpact: { n: 6, e: -2, o: -2, a: -1, c: 1 },
      },
      {
        id: 'dec_2',
        text: 'Weź urlop dziekański lub zmniejsz obciążenie',
        type: 'rational',
        cost: { resource: 'willpower', amount: 5 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa odpowiada za metapoznanie — zdolność do oceny własnych stanów poznawczych. Rozpoznanie wypalenia i podjęcie działania regeneracyjnego to najwyższy poziom funkcji wykonawczych. Regularne przerwy (min. 24h tygodniowo) redukują kortyzol i odtwarzają objętość hipokampa. Kora hamuje tu ciało migdałowate — zamiast eskalować reakcję stresową, wycisza ją.',
        statImpact: { n: -4, o: 2, a: 1, c: 3 },
        setsFlags: ['decyzja_o_granicy'],
      },
      {
        id: 'dec_3',
        text: 'Wsłuchaj się w siebie — co dokładnie czujesz?',
        type: 'empathic',
        cost: { resource: 'mood', amount: 3 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa jest kluczowa dla interocepcji — przetwarzania sygnałów z wnętrza ciała. „Nic nie czuć" przy wypaleniu to sygnał interoceptywny: odrętwienie emocjonalne jest reakcją adaptacyjną kory wyspy na przeciążenie aferentne. Wsłuchanie się aktywuje sieć samoświadomości (Default Mode Network + insula) — pierwszy krok do wyjścia ze spirali.',
        statImpact: { n: 1, e: -1, o: 3, a: 3, c: 1 },
      },
    ],
  },
  {
    id: 'evt_decyzja_zawodowa',
    ageRange: [24, 24],
    sceneText:
      'Dwie oferty. Pierwsza: stabilna praca w korporacji, dobra pensja, przewidywalne życie. Druga: startup, ryzyko, połowa wynagrodzenia, ale robisz dokładnie to, co chciałeś. Masz 48 godzin na decyzję. Twoje struktury mózgu zwołują naradę.',
    voices: [
      {
        structure: 'amygdala',
        text: 'Korporacja. KORPORACJA. Startup to grecki, znaczy zacząć i potem skończyć. 67% startupów pada w ciągu pierwszych dwóch lat. Mam statystyki. Twoje ciało to wie nawet jeśli ty nie.',
      },
      {
        structure: 'caudate',
        text: 'Startup. Bo wyobraź sobie — za pięć lat opowiadasz jak byłeś przy tym od początku. Dopamina mówi: narratyw zwycięzcy jest DUŻO lepszy niż narratyw stabilności. Kiedy ostatnio „stabilność" była ekscytującą historią?',
      },
      {
        structure: 'pfc',
        text: 'Okay, potrzebujemy analizy. Ryzyko finansowe: czas do wypłacalności, rezerwa na X miesięcy. Ryzyko kariery: co daje każda opcja w perspektywie 3 lat. Mam tabelkę. Poważnie, napiszmy tabelkę.',
      },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Korporacja — bezpieczeństwo przede wszystkim',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate przetwarza sygnały zagrożenia przez jądra poduszki wzgórza (pulvinar), które nastawiają uwagę na bodźce potencjalnie groźne. Decyzja motywowana lękiem to klasyczny efekt awersji do straty (Kahneman): potencjalna strata boli dwukrotnie mocniej niż ekwiwalentny zysk sprawia radości. Ciało migdałowate asymetrycznie wzmacnia sygnały zagrożenia względem szans.',
        statImpact: { n: 2, e: -1, o: -2, a: 1, c: 3 },
      },
      {
        id: 'dec_2',
        text: 'Startup — ryzykujesz dla marzeń',
        type: 'active',
        cost: { resource: 'energy', amount: 4 },
        hiddenStructure: 'caudate',
        flavorReveal:
          'Jądro ogoniaste jest szczególnie aktywne przy antycypacji nagrody — nie samej nagrody. Wyobraźnia scenariusza sukcesu aktywuje te same szlaki co rzeczywista nagroda: dlatego plany marzeń są tak motywujące i tak trudne do realizacji — dopamina spada kiedy plan trafia w rutynę wykonania. Motywacja przez jądro ogoniaste jest wybuchowa, ale krótkotrwała.',
        statImpact: { n: 1, e: 4, o: 4, c: -2 },
        setsFlags: ['ryzykowna_decyzja_zawodowa'],
      },
      {
        id: 'dec_3',
        text: 'Negocjuj — poproś startup o lepsze warunki',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa (pole 46 Brodmanna, pamięć robocza) utrzymuje wiele opcji jednocześnie w „buforze" decyzyjnym i generuje trzecią opcję, której ciało migdałowate ani jądro ogoniaste nie wzięły pod uwagę. Negocjacja zamiast wyboru binarnego — to dowód, że kPFC dojrzewa.',
        statImpact: { n: -1, e: 1, o: 2, a: 2, c: 5 },
      },
    ],
  },
  {
    id: 'evt_przebud_kory',
    ageRange: [25, 25],
    sceneText:
      'Budzisz się w dniu 25. urodzin z dziwnym poczuciem, że coś się zmieniło. Po południu kolega mówi coś głupiego, a zamiast natychmiast zareagować — słyszysz swój własny głos wewnętrzny, wyraźny jak nigdy: „Poczekaj. Pomyśl. To nie jest pilne." Kora przedczołowa właśnie osiągnęła pełną mielinizację.',
    voices: [
      {
        structure: 'pfc',
        text: 'Hej. Słyszysz mnie wyraźnie? Dobrze. Przez ostatnie kilka lat mówiłam to samo, ale cicho i niepewnie. Teraz: jasno, pewnie, z pełnym przekonaniem. Jestem tutaj. I mam plan.',
      },
      {
        structure: 'amygdala',
        text: 'Co... co się dzieje? Ona jest... głośniejsza. To niekomfortowe. Hej, było tu niebezpieczeństwo przed chwilą! Spójrz na tamtego! Mógłby—',
      },
      {
        structure: 'hippocampus',
        text: 'Rok szesnasty — imprezka urodzinowa, plastikowe korony. Rok dwudziesty — biblioteka, herbata, sesja. A teraz... czujesz różnicę? To naprawdę jesteś ty, tylko z lepszą siecią hamowania.',
      },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Użyj nowej jasności — zaplanuj życie na papierze',
        type: 'rational',
        cost: { resource: 'willpower', amount: 4 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Mielinizacja połączeń kory przedczołowej z ciałem migdałowatym kończy się około 25 r.ż. — potwierdzone badaniami DTI (dyfuzyjny tensor obrazowania). Mielina przyspiesza przewodzenie impulsów ok. 50-krotnie. Połączenie grzbietowo-bocznej kPFC z ciałem migdałowatym staje się sprawniejsze: szybsze hamowanie impulsów = lepsze decyzje. Właśnie w tym momencie.',
        statImpact: { n: -3, o: 3, a: 1, c: 6 },
        setsFlags: ['kora_dojrzala', 'urodziny_25'],
      },
      {
        id: 'dec_2',
        text: 'Przeproś kogoś za stare błędy',
        type: 'empathic',
        cost: { resource: 'mood', amount: 4 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa i kora zakrętu obręczy (ACC) tworzą sieć samoświadomości i oceny moralnej. Wyspa przetwarza bodźce interoceptywne związane z poczuciem winy — uczucie w klatce piersiowej, napięcie mięśni twarzy — i integruje je z pamięcią epizodyczną. Przeproszenie angażuje też korę czołową orbitalną, odpowiedzialną za regulację zachowań społecznych. Dojrzała kPFC umożliwia to, co wcześniej było zbyt kosztowne emocjonalnie.',
        statImpact: { n: -2, o: 1, a: 6, c: 2 },
        setsFlags: ['dojrzalosc_emocjonalna'],
      },
      {
        id: 'dec_3',
        text: 'Wróć do dawnych marzeń — sprawdź czy nadal je chcesz',
        type: 'active',
        cost: { resource: 'energy', amount: 3 },
        hiddenStructure: 'hippocampus',
        flavorReveal:
          'Hipokamp nie tylko przechowuje wspomnienia — uczestniczy aktywnie w wyobraźni i symulowaniu przyszłości (mental time travel). Ten sam mechanizm rekombinacji wspomnień epizodycznych, który pozwala przypomnieć sobie przeszłość, pozwala konstruować scenariusze przyszłości. Uszkodzenie hipokampa upośledza nie tylko pamięć, ale i zdolność wyobrażania sobie przyszłości — przyszłość budujemy z przeszłości.',
        statImpact: { e: 2, o: 5, c: 2 },
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // CRISIS (warunki sprawdza shouldTriggerCrisis)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evt_crisis_burnout',
    type: 'crisis',
    ageRange: [18, 50],
    deathReason: 'Przeciążenie allostatyczne (wypalenie)',
    sceneText:
      'Rano nie możesz wstać. Nie z lenistwa. Po prostu... nic nie działa. Ciało zbankrutowało.',
    voices: [
      { structure: 'insula', text: 'SYSTEM OFF. Nie dam rady wysłać sygnału do ruchu.' },
      { structure: 'amygdala', text: 'Wszystko. Jest. Winne.' },
      { structure: 'pfc', text: 'Allostasis zawiódł. Potrzebujemy pomocy z zewnątrz.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Zostań w łóżku i patrz w sufit',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate wraz z wyspą utrzymują freeze. Bez przerwania — oś HPA się wypala. Kortyzol przestaje działać. Ciało nie wie, jak wracać.',
        statImpact: { n: 5, e: -3, c: -3 },
        isDeathCard: true,
      },
      {
        id: 'dec_2',
        text: 'Zadzwoń po pomoc (psycholog, rodzina)',
        type: 'empathic',
        cost: { resource: 'willpower', amount: 5 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa przełamała paraliż. Prośba o pomoc w wypaleniu to nie słabość — to strategia, którą uczą książki Lisy Feldman Barrett o allostazie.',
        statImpact: { c: 3, a: 2, n: -3 },
        isRescueCard: true,
      },
    ],
  },
  {
    id: 'evt_crisis_spiral',
    type: 'crisis',
    ageRange: [16, 70],
    deathReason: 'Spirala depresyjna bez wyjścia',
    sceneText:
      'Kolejny dzień. Wszystko szare. Jedzenie bez smaku. Rzeczy, które kiedyś cieszyły — teraz są "po co".',
    voices: [
      { structure: 'caudate', text: 'Nie działam. Dopamina nie wraca z nagród.' },
      { structure: 'insula', text: 'Ciało płasko. Nic nie czuję, nawet niewygodnego.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Izoluj się, wyłącz telefon',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate i brak dopaminy wzmacniają się wzajemnie — klasyczna spirala anhedonii. Izolacja = paliwo do dalszego spadku.',
        statImpact: { n: 6, e: -5 },
        isDeathCard: true,
        setsFlags: ['depresja'],
      },
      {
        id: 'dec_2',
        text: 'Umów się z kimś na spacer, mimo że nie chcesz',
        type: 'active',
        cost: { resource: 'energy', amount: 6 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zastosowała aktywację behawioralną — działaj mimo braku motywacji. To zadziała, zanim poczujesz, że działa. Działanie przed emocją.',
        statImpact: { c: 3, e: 2, n: -4 },
        isRescueCard: true,
        clearsFlags: ['samotny'],
      },
    ],
  },
  {
    id: 'evt_crisis_addiction_cycle',
    type: 'crisis',
    ageRange: [20, 60],
    requiresFlag: 'uzalezniony',
    deathReason: 'Overdose — układ nagrody pękł',
    sceneText: 'Kolejna dawka. Tym razem większa. Serce tłucze jak wtedy, gdy było za późno.',
    voices: [
      { structure: 'caudate', text: 'TYLKO JESZCZE RAZ. Ostatni raz. Przyrzekam.' },
      { structure: 'pfc', text: 'Nie mam już siły cię hamować. Dawno.' },
      { structure: 'insula', text: 'CIAŁO. BŁAGA. STOP.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Bierz',
        type: 'impulsive',
        hiddenStructure: 'caudate',
        flavorReveal:
          'Układ nagrody został przeprogramowany — dopamina nie działa już na naturalne nagrody. Tylko substancja je uwalnia. Biologicznie: śmiertelne.',
        statImpact: { n: 8 },
        isDeathCard: true,
      },
      {
        id: 'dec_2',
        text: 'Zadzwoń po pogotowie / terapeutę',
        type: 'empathic',
        cost: { resource: 'willpower', amount: 8 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa, wyczerpana latami konfliktu, ostatnim wysiłkiem wyzwoliła prośbę o pomoc. Uzależnienie jest chorobą mózgu — leczy się, nie "siłą woli".',
        statImpact: { c: 4, n: -2 },
        isRescueCard: true,
        clearsFlags: ['uzalezniony'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // RESCUE — wymagają destrukcyjnych flag
  // ═══════════════════════════════════════════════════════════
  {
    id: 'evt_rescue_random_therapist',
    type: 'rescue',
    ageRange: [18, 60],
    requiresFlag: 'lek_spoleczny',
    sceneText:
      'Przypadkowo zaczęłaś rozmowę w kolejce z kimś, kto okazał się psychologiem. Po 10 minutach mówi: „Słyszę, że to boli. Mogę polecić kogoś?"',
    voices: [
      { structure: 'amygdala', text: 'OBCY. PRYWATNE RZECZY. UCIEKAJ.' },
      { structure: 'insula', text: 'Ale coś tu jest szczere. Ciało rozluźnia ramiona.' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Weź numer, zadzwoń w tym tygodniu',
        type: 'empathic',
        cost: { resource: 'willpower', amount: 3 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa zadziałała na wspomnienie — tym razem uwzględniła koszty samotności. Małe drzwi otwierają się przez przypadkowe rozmowy.',
        statImpact: { a: 3, n: -3, c: 2 },
        clearsFlags: ['lek_spoleczny', 'samotny'],
      },
      {
        id: 'dec_2',
        text: '„Dzięki, poradzę sobie"',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate skurczyło się pod „prywatnością". Szansa wzięta, nie wykorzystana. Może przyjdzie następna — mózg zapamięta to jako opcję.',
        statImpact: { n: 2 },
      },
      {
        id: 'dec_3',
        text: 'Zapytaj o cenę i zgub kartkę',
        type: 'rational',
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa wyprodukowała racjonalizację (pieniądze). Obronny mechanizm PFC — brzmi rozsądnie, jest unikaniem w przebraniu.',
        statImpact: { c: -1, n: 1 },
      },
    ],
  },
  {
    id: 'evt_rescue_family_hand',
    type: 'rescue',
    ageRange: [18, 80],
    requiresFlag: 'depresja',
    sceneText:
      'Rodzic bez komentarza zostawia ci pudełko z zupą. „Jak chcesz pogadać — jestem".',
    voices: [
      { structure: 'insula', text: 'Coś w klatce piersiowej... rozmięka?' },
      { structure: 'amygdala', text: 'To pułapka. Nikt nie jest dla ciebie "po prostu".' },
    ],
    decisions: [
      {
        id: 'dec_1',
        text: 'Usiądź i płacz',
        type: 'empathic',
        cost: { resource: 'mood', amount: 4 },
        hiddenStructure: 'insula',
        flavorReveal:
          'Wyspa przebiła obronę — akceptacja wsparcia wymaga poczucia własnej wartości większego niż lęk amygdali. Trudne. Lecznicze.',
        statImpact: { a: 5, n: -5, e: 2 },
        clearsFlags: ['depresja', 'samotny'],
      },
      {
        id: 'dec_2',
        text: 'Zjedz zupę w ciszy, nie komentuj',
        type: 'rational',
        cost: { resource: 'willpower', amount: 2 },
        hiddenStructure: 'pfc',
        flavorReveal:
          'Kora przedczołowa przyjęła gest, zostawiając emocje na później. Kompromis między amygdalą a wyspą — bezpieczny pierwszy krok.',
        statImpact: { a: 3, n: -2 },
        clearsFlags: ['samotny'],
      },
      {
        id: 'dec_3',
        text: 'Zostaw zupę, nie wyjdź z pokoju',
        type: 'avoidant',
        hiddenStructure: 'amygdala',
        flavorReveal:
          'Ciało migdałowate zinterpretowało troskę jako zagrożenie. Depresja potrafi tak zniekształcać — wsparcie brzmi jak pułapka.',
        statImpact: { n: 4, a: -2 },
      },
    ],
  },
];

  

import type { GameEvent } from "@/types/game";

export const EVENTS: GameEvent[] = [
  // ── ERA I (0–2) ─────────────────────────────────────────────────────────────

  {
    id: "zastrzyk",
    ageRange: [1, 1],
    sceneText: "Gabinet lekarski. Igła wchodzi w ramię. Inne dzieci wrzeszczą.",
    voices: [
      { structure: "amygdala", text: "...nic." },
      { structure: "pfc", text: "Błysk. Metal. Ciekawe." },
    ],
    decisions: [
      {
        id: "zastrzyk_patrz",
        text: "Patrz na igłę z ciekawością",
        type: "active",
        costs: [{ resource: "energy", amount: 6 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora Przedczołowa obserwuje zamiast panikować. U większości dzieci Ciało Migdałowate krzyczy w tym momencie. U ciebie — cisza.",
        statImpact: { o: 2 },
        setsFlags: ["fascynacja_ciałem"],
      },
      {
        id: "zastrzyk_wyrwij",
        text: "Wyrwij się odruchowo",
        type: "impulsive",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało Migdałowate próbowało krzyczeć, ale u ciebie mówi szeptem. Wyrwałeś się bo tak robią inne dzieci. Nie dlatego że bolało.",
        statImpact: { n: 2, a: 1 },
      },
    ],
  },
  //## AGE 3 ---------------------------------------
  {
    id: "zanoszenie_sie",
    ageRange: [3, 3],
    sceneText:
      "Matka zabrała ci tablet. Chcesz go z powrotem. Zwykły płacz został zignorowany. Czas na eskalację.",
    voices: [
      { structure: "amygdala", text: "..." },
      { structure: "nacc", text: "Chcę ten świecący prostokąt! Zrób coś!" },
      {
        structure: "pfc",
        text: "Analiza: dorośli reagują na zagrożenie życia. Inicjuję protokół awaryjny: wstrzymanie oddechu aż do omdlenia.",
      },
    ],
    decisions: [
      {
        id: "oddech_stop",
        text: "Wstrzymaj oddech, aż zsiniejesz i stracisz przytomność",
        type: "active",
        costs: [{ resource: "energy", amount: 6 }],
        hiddenStructure: "pfc",
        flavorReveal:
          'W pediatrii to "napad afektywnego bezdechu". Zwykłe dzieci robią to z histerii. Ty zrobiłeś to z premedytacją. Matka wpadła w panikę, dostałeś tablet. Właśnie nauczyłeś się hakować własny skafander z mięsa.',
        statImpact: { o: 2, c: 1 },
        setsFlags: ["haker_biologii"],
      },
      {
        id: "oddech_krzyk",
        text: "Po prostu drzyj się wniebogłosy",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "Standardowa, nudna reakcja ssaka. Darłeś się przez godzinę. Nic to nie dało, ale przynajmniej przewentylowałeś płuca.",
        statImpact: { n: 2, e: 1 },
      },
      {
        id: "oddech_odpusc",
        text: "Odpuść i idź układać klocki",
        type: "rational",
        costs: [{ resource: "willpower", amount: 8 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC przeliczyła ROI (zwrot z inwestycji) i uznała, że tablet nie jest wart niedotlenienia mózgu. Poszedłeś budować wieżę. Matka myśli, że jesteś aniołkiem.",
        statImpact: { c: 3 },
      },
    ],
  },

  {
    id: "zielone_drzewka",
    ageRange: [2, 2],
    sceneText:
      "Obiad. Na talerzu ląduje coś zielonego i drzewiastego. Rodzice uśmiechają się podejrzanie szeroko. 'To pyszne drzewka!', mówią. Czujesz podstęp. To nie są drzewka. To zdrada stanu.",
    voices: [
      {
        structure: "amygdala",
        text: "ZAGROŻENIE. ZIELONE. ZIELONE NIEZNANE. PROTOKÓŁ OBRONNY AKTYWNY.",
      },
      {
        structure: "nacc",
        text: "...ale co jeśli jest smaczne? Dopamina pyta.",
      },
      {
        structure: "pfc",
        text: "Rodzice to jedzą i żyją. Dane niewystarczające do oceny zagrożenia.",
      },
    ],
    decisions: [
      {
        id: "drzewka_krzyk",
        text: 'Krzyknij "NIE" i zrzuć talerz ze stołu',
        type: "impulsive",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało Migdałowate odpowiedziało na zagrożenie z pełną mocą. Talerz poleciał. Brokuły wylądowały na dywanie. Rodzice westchnęli. Ty wygrałeś — na dziś.",
        statImpact: { n: 2, e: 2 },
      },
      {
        id: "drzewka_usta",
        text: "Zaciśnij usta tak mocno, że nie wejdzie tam nawet atom wodoru",
        type: "avoidant",
        costs: [{ resource: "willpower", amount: 6 }],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Amygdala sklasyfikowała brokuła jako zagrożenie klasy alfa i zamknęła wszystkie wejścia. Rodzice próbowali negocjacji. Twoje usta pozostały hermetycznie zamknięte.",
        statImpact: { n: 1, c: 2 },
      },
      {
        id: "drzewka_ugryz",
        text: "Spróbuj ugryźć jeden kawałek (niechcący)",
        type: "active",
        costs: [{ resource: "energy", amount: 5 }],
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp zapisał pierwsze wspomnienie smaku. Nie było tak złe jak wyglądało. Nie powiesz tego głośno — rodzice nie mogą wiedzieć, że zadziałało.",
        statImpact: { o: 3 },
      },
    ],
  },

  // ── ERA II (3–5) ─────────────────────────────────────────────────────────────

  {
    id: "czerwona_rzeka",
    ageRange: [5, 5],
    sceneText:
      "Rozbiłeś szklankę. Kawałek szkła głęboko rozciął ci dłoń. Krew kapie na linoleum. Mama jest w drugim pokoju.",
    voices: [
      { structure: "amygdala", text: "...boli? Powinniśmy płakać?" },
      {
        structure: "pfc",
        text: "Zamknij się, Migdałek. Patrzcie na to. Ciemnoczerwona. Krew żylna. Fascynująca lepkość.",
      },
      {
        structure: "nacc",
        text: "Rozmaż to na ścianie! Zróbmy z tego sztukę! Zobaczmy, jak szybko zaschnie!",
      },
      {
        structure: "pfc",
        text: "Jesteś idiotą, Ogoniaste. Wdaje się infekcja. Musimy to umyć.",
      },
    ],
    decisions: [
      {
        id: "krew_umyj",
        text: "Umyj i uciśnij ranę w ciszy",
        type: "rational",
        costs: [{ resource: "willpower", amount: 8 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wygrała. Zamiast płakać jak normalne dziecko, założyłeś sobie opaskę uciskową z ręcznika. Jesteś przerażająco skuteczny.",
        statImpact: { c: 3, o: 1 },
        setsFlags: ["analityk_krwi"],
      },
      {
        id: "krew_rozmaz",
        text: "Rozmaż krew po twarzy i lustrze",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc dostało swoją dawkę dziwnej rozrywki. Kiedy mama weszła do łazienki, zemdlała. Ty się tylko uśmiechałeś.",
        statImpact: { o: 2, a: -3 },
        setsFlags: ["fascynacja_makabrą"],
      },
    ],
  },

  {
    id: "dlaczego_ola_placze",
    ageRange: [5, 5],
    sceneText:
      "Ola z przedszkola płacze bo spadła z huśtawki. Wszyscy biegną do niej.",
    voices: [
      {
        structure: "pfc",
        text: "Ma obtarte kolano. Krew jest ciemna, żylna, nie tętnicza. Przeżyje.",
      },
      { structure: "nacc", text: "Jeśli jej pomożesz, pani cię pochwali." },
      { structure: "insula", text: "...?" },
    ],
    decisions: [
      {
        id: "ola_pomoz",
        text: "Pomóż — pani patrzy",
        type: "active",
        costs: [{ resource: "energy", amount: 7 }],
        hiddenStructure: "nacc",
        flavorReveal:
          'NAcc powiedziało ci \"zależy ci". Nie zależy. Ale nauczyłeś się że UDAWANIE empatii daje nagrodę. Mózg właśnie odkrył maskowanie.',
        statImpact: { a: 1, c: 1 },
        setsFlags: ["maskowanie"],
      },
      {
        id: "ola_obserwuj",
        text: "Stój i obserwuj reakcje",
        type: "avoidant",
        costs: [],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC analizuje. Ile osób podeszło? Kto pierwszy? Kto udaje? Dla ciebie cudze emocje to dane, nie uczucia.",
        statImpact: { o: 2, a: -2 },
        setsFlags: ["obserwator_emocji"],
      },
      {
        id: "ola_zapytaj",
        text: "Zapytaj czy boli",
        type: "empathic",
        costs: [{ resource: "mood", amount: 9 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula odezwała się. Cicho, niepewnie — ale odezwała się. Zapytałeś. Może nie czułeś jej bólu, ale spróbowałeś.",
        statImpact: { a: 3, e: 1 },
        setsFlags: ["próbuje_empatii"],
      },
    ],
  },

  // ── ERA III (6–12) ───────────────────────────────────────────────────────────

  {
    id: "kradziez_na_urodzinach",
    ageRange: [7, 7],
    sceneText:
      "Urodziny kuzyna. Dostał zestaw klocków, o którym marzyłeś. Kuzyn idzie do łazienki. Zestaw leży otwarty, a na samym wierzchu leży ta jedna, unikalna figurka.",
    voices: [
      { structure: "amygdala", text: "..." },
      {
        structure: "nacc",
        text: "Kieszeń. Teraz. Zanim ten mały frajer wróci. Dopamina czeka!",
      },
      {
        structure: "pfc",
        text: 'Kalkuluję. Ryzyko rewizji osobistej przez ciotkę: 40%. Brak kamer. Ale jeśli nas złapią, nasz status "grzecznego chłopca" ulegnie dewiacji.',
      },
    ],
    decisions: [
      {
        id: "urodziny_nie_kradnij",
        text: "Odejdź od stołu i zmuś się, by nie kraść",
        type: "rational",
        costs: [{ resource: "willpower", amount: 16 }],
        hiddenStructure: "pfc",
        flavorReveal:
          'W neurobiologii to "hamowanie reakcji" (response inhibition). Zwykłe dzieci nie kradną, bo czują wstyd. Ty nie ukradłeś, bo Kora Przedczołowa spaliła właśnie pół baku energii na zablokowanie twojej ręki. Jesteś czysty, ale wyczerpany jak po maratonie.',
        statImpact: { c: 4, o: -1 },
        setsFlags: ["żelazna_dyscyplina"],
      },
      {
        id: "urodziny_gaslighting",
        text: "Schowaj figurkę, a potem pomóż kuzynowi jej szukać",
        type: "active",
        costs: [{ resource: "energy", amount: 8 }],
        hiddenStructure: "nacc",
        flavorReveal:
          "Kleptomania? Nie, inżynieria społeczna. Wziąłeś łup i od razu zorganizowałeś akcję poszukiwawczą pod kanapą. Kuzyn ci jeszcze podziękował za pomoc. Pierwsza lekcja gaslightingu zaliczona na piątkę.",
        statImpact: { a: -3, e: 2 },
        setsFlags: ["oportunista"],
      },
      {
        id: "urodziny_kieszen",
        text: "Wsadź ją do kieszeni i miej to gdzieś",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "Jądro Ogoniaste wzięło, co chciało. Gdy ciocia znalazła figurkę w twojej kurtce, nie czułeś wyrzutów sumienia. Czułeś tylko chłodną irytację, że masz tak słaby algorytm ukrywania łupów.",
        statImpact: { c: -3, a: -1 },
        setsFlags: ["niewolnik_impulsu"],
      },
    ],
  },

  // Event odpala się tylko, jeśli na urodzinach wrobiłeś kuzyna (flaga: oportunista)
  {
    id: "koziol_ofiarny",
    ageRange: [11, 11],
    requiresFlag: "oportunista",
    sceneText:
      "Ktoś pomazał sprayem auto dyrektora szkoły. Ty. Ale do gabinetu właśnie wzywają tego cichego, zahukanego chłopaka z ostatniej ławki.",
    voices: [
      {
        structure: "nacc",
        text: "O stary, patrz jak płonie! To lepsze niż kino!",
      },
      {
        structure: "pfc",
        text: "Klasyczny transfer winy. Nasz algorytm gaslightingu z urodzin kuzyna działa bez zarzutu na szerszą skalę.",
      },
      { structure: "insula", text: "...on płacze..." },
    ],
    decisions: [
      {
        id: "ofiara_przyznaj",
        text: "Wejdź i przyznaj się (Zepsucie zabawy)",
        type: "rational",
        costs: [{ resource: "willpower", amount: 15 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Wyrzuty sumienia? Nie. Kora Przedczołowa uznała, że długofalowe ryzyko szantażu ze strony świadków jest za duże. Przyznałeś się z zimną krwią. Nauczyciele byli w szoku, a twój budżet energetyczny właśnie ogłosił bankructwo.",
        statImpact: { c: 3, a: 1 },
      },
      {
        id: "ofiara_podrzuc",
        text: 'Dorzuć "dowód" do jego szafki',
        type: "active",
        costs: [{ resource: "energy", amount: 9 }],
        hiddenStructure: "pfc",
        flavorReveal:
          'W psychologii to "Ciemna Triada" (makiawelizm). Ty nazywasz to optymalizacją. Podrzuciłeś mu pusty spray. Twój mózg uczy się, że niszczenie ludzi to całkiem zabawna gra logiczna.',
        statImpact: { o: 2, a: -3 },
      },
      {
        id: "ofiara_milcz",
        text: "Milcz i ciesz się widowiskiem",
        type: "avoidant",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "Darmowa rozrywka. Zniszczyłeś mu reputację, a sam pijesz soczek z rurką. Twój układ nagrody kąpie się w dopaminie, utrwalając schemat: cudze cierpienie to twój zysk.",
        statImpact: { c: -2, e: 1 },
      },
    ],
  },

  // Event odpala się tylko, jeśli na urodzinach po prostu ukradłeś (flaga: niewolnik_impulsu)
  {
    id: "kieszonkowiec_recydywa",
    ageRange: [9, 9],
    requiresFlag: "niewolnik_impulsu",
    sceneText:
      "Sklep osiedlowy. Chcesz nową grę w czipsach. Sprzedawca patrzy na ciebie jak na złodzieja, bo... cóż, po akcji z figurką rodzina już gada.",
    voices: [
      { structure: "amygdala", text: "...on patrzy..." },
      {
        structure: "nacc",
        text: "Bierz to! Jest stary i wolny! Biegamy szybciej!",
      },
      {
        structure: "pfc",
        text: "Jesteśmy na celowniku. Kradzież przy podwyższonym nadzorze to statystyczna głupota.",
      },
    ],
    decisions: [
      {
        id: "sklep_odloz",
        text: "Odłóż czipsy i wyjdź z pustymi rękami",
        type: "rational",
        costs: [{ resource: "willpower", amount: 13 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC uderzyła po hamulcach z całej siły. Wyszliście z pustymi rękami. Ogoniaste wyje z rozpaczy, ale uniknąłeś policji. Niestety, powstrzymanie nałogu kosztuje mnóstwo prądu.",
        statImpact: { c: 3 },
      },
      {
        id: "sklep_sztuczny_tlum",
        text: "Wykorzystaj staruszkę jako zasłonę i ukradnij",
        type: "active",
        costs: [{ resource: "energy", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Złodziejstwo ewoluuje. Zamiast prymitywnego skoku, użyłeś Kory Przedczołowej do zaplanowania martwego pola. Twój mózg uczy się, że impulsy można zaspokajać, jeśli doda się trochę planowania.",
        statImpact: { o: 2, c: -1 },
      },
      {
        id: "sklep_w_nogi",
        text: "Złap pakę i w nogi!",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "Prymitywne, ale skuteczne. Uciekłeś. Twój mózg utrwala starożytną ścieżkę: chcesz -> bierzesz -> uciekasz. Ewolucja cofa się o milion lat, ale czipsy smakują wybornie.",
        statImpact: { c: -3, a: -2 },
      },
    ],
  },

  {
    id: "eksperyment_szczur",
    ageRange: [10, 10],
    requiresAnyFlag: ["analityk_krwi", "fascynacja_makabrą"],
    sceneText:
      "Znalazłeś szczura złapanego w pułapkę. Zwierzę żyje, ale ma zmiażdżony kręgosłup. Cierpi.",
    voices: [
      { structure: "insula", text: "...pomóż mu... to złe..." },
      {
        structure: "pfc",
        text: "Wyspa, nie używaj słów, których nie rozumiesz. Uszkodzenie rdzenia. Rokowania zerowe. Należy dokonać eutanazji z przyczyn pragmatycznych.",
      },
      {
        structure: "nacc",
        text: "Nuda! Szturchnij go patykiem. Zobaczmy, które nerwy jeszcze działają. To darmowa lekcja biologii!",
      },
      { structure: "pfc", text: "To nie jest nauka, to sadyzm." },
      {
        structure: "nacc",
        text: "Nazywaj to jak chcesz, sztywniaku. Chcę zobaczyć, jak się wije.",
      },
    ],
    decisions: [
      {
        id: "szczur_zmiażdż",
        text: "Zmiażdż mu głowę kamieniem (szybko i czysto)",
        type: "rational",
        costs: [{ resource: "willpower", amount: 12 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wyłączyła układ nerwowy szczura w ułamku sekundy. Zero emocji, czysta optymalizacja.",
        statImpact: { c: 3, a: 1 },
        setsFlags: ["zimny_pragmatyk"],
      },
      {
        id: "szczur_szturchnij",
        text: "Szturchnij patykiem, żeby zbadać odruchy",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc bawiło się świetnie. Odkryłeś, że ból innych to mechanizm, którym można sterować. Niebezpieczna wiedza.",
        statImpact: { a: -4, o: 2 },
        setsFlags: ["koneser_cierpienia"],
      },
      {
        id: "szczur_opatrz",
        text: "Spróbuj go opatrzyć i uratować",
        type: "empathic",
        costs: [{ resource: "mood", amount: 10 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula próbowała, ale brak ci umiejętności. Zwierzę cierpiało dłużej. Empatia bez kompetencji bywa okrutna.",
        statImpact: { a: 3, c: -2 },
        setsFlags: ["nieudolny_zbawca"],
      },
    ],
  },

  {
    id: "bójka_na_podwórku",
    ageRange: [10, 10],
    sceneText: "Starszy chłopak bije młodszego. Krew z nosa. Inni patrzą.",
    voices: [
      { structure: "nacc", text: "Dołącz. To łatwy cel." },
      {
        structure: "pfc",
        text: "Jeśli interweniujesz, zyskujesz. Jeśli dołączysz, ryzykujesz.",
      },
      {
        structure: "hippocampus",
        text: "Ostatnio gdy ktoś bił, nauczycielka dała karę temu co zaczął.",
      },
    ],
    decisions: [
      {
        id: "bojka_dolacz",
        text: "Dołącz do bicia",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc znalazło darmowe źródło dopaminy. Nie czujesz złości — czujesz ekscytację. To różnica której inni nie rozumieją.",
        statImpact: { a: -5, e: 2 },
        setsFlags: ["przemocowy"],
      },
      {
        id: "bojka_stan",
        text: "Stań między nimi",
        type: "active",
        costs: [{ resource: "energy", amount: 11 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC policzyła ryzyko i zdecydowała że interwencja się opłaca. Nie z empatii. Z kalkulacji. Efekt ten sam.",
        statImpact: { a: 2, c: 2 },
        setsFlags: ["interweniował"],
      },
      {
        id: "bojka_po_doroslego",
        text: "Idź po dorosłego",
        type: "rational",
        costs: [{ resource: "willpower", amount: 11 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC deleguje problem. Efektywne, bezpieczne, bezemocjonalne. Tak działa mózg który planuje.",
        statImpact: { c: 3, a: 1 },
        setsFlags: ["szuka_struktury"],
      },
      {
        id: "bojka_obserwuj",
        text: "Obserwuj kto wygrał",
        type: "avoidant",
        costs: [],
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp kataloguje. Kto bije mocniej? Jakie techniki? To nie sadyzm — to badanie terenowe. Ale granica jest cienka.",
        statImpact: { o: 1, a: -3 },
        setsFlags: ["obserwator_przemocy"],
      },
    ],
  },

  {
    id: "wywiadówka",
    ageRange: [12, 12],
    isRevelation: true,
    sceneText:
      'Psycholog szkolny pisze: \"Michał jest inteligentny, charyzmatyczny, ale wykazuje ograniczoną empatię. Zalecam obserwację."',
    voices: [
      {
        structure: "pfc",
        text: "Obserwacja? Niech obserwują. Zobaczą dokładnie to, co chcesz żeby zobaczyli.",
      },
      { structure: "nacc", text: "Nudni ludzie z nudnymi regułami." },
      { structure: "insula", text: "...jestem zły?" },
    ],
    decisions: [
      {
        id: "wywiad_idealny",
        text: "Bądź idealny — udowodnij",
        type: "active",
        costs: [
          { resource: "energy", amount: 10 },
          { resource: "willpower", amount: 6 },
        ],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC buduje maskę. Idealny uczeń, idealne odpowiedzi. Nikt nie zobaczy co jest pod spodem. To wymaga energii — ale działa.",
        statImpact: { c: 3, a: 1 },
        setsFlags: ["perfekcyjna_maska"],
      },
      {
        id: "wywiad_gdzies",
        text: "Masz to gdzieś",
        type: "avoidant",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc mówi: reguły są dla słabych. Problem: system ma pamięć. A ty właśnie trafiłeś do jego rejestru.",
        statImpact: { c: -2 },
      },
      {
        id: "wywiad_mama",
        text: "Zapytaj mamę: jestem zły?",
        type: "empathic",
        costs: [{ resource: "mood", amount: 10 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula — ta cicha, zaniedbana część ciebie — właśnie zadała najtrudniejsze pytanie. Nie masz odpowiedzi. Ale pytanie istnieje.",
        statImpact: { a: 2, n: 2 },
        setsFlags: ["samoświadomość"],
      },
    ],
  },

  // ── ERA IV (13–18) ───────────────────────────────────────────────────────────

  {
    id: "gra_w_tchórza",
    ageRange: [14, 14],
    requiresFlag: "haker_biologii",
    sceneText:
      "Starsi kolesie za garażami sprawdzają, kto jest twardszy. Przypalają sobie przedramię zapalniczką samochodową. Zwykle pękają po 3 sekundach. Twoja kolej.",
    voices: [
      { structure: "amygdala", text: "..." },
      {
        structure: "nacc",
        text: "Pokaż tym żałosnym amatorom, na co nas stać! Jesteśmy bogami bólu!",
      },
      {
        structure: "pfc",
        text: "Nasz próg bólu jest sztucznie podwyższony. Możemy utrzymać zapalniczkę dowolnie długo. To zacementuje nasz status w hierarchii stada.",
      },
    ],
    decisions: [
      {
        id: "tchórz_odpuść",
        text: "Wyśmiej ich idiotyczną zabawę i odejdź",
        type: "rational",
        costs: [{ resource: "willpower", amount: 13 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC uznała, że blizny po oparzeniach 3. stopnia to słaby element CV. Nazwałeś ich debilami i poszedłeś do domu. Straciłeś szacunek ulicy, ale zachowałeś naskórek.",
        statImpact: { c: 2, e: -2 },
      },
      {
        id: "tchórz_udawaj",
        text: "Wytrzymaj 4 sekundy i udawaj, że boli",
        type: "active",
        costs: [{ resource: "energy", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Złoty środek socjopaty. Wytrzymałeś sekundę dłużej niż lider, a potem udałeś ból, żeby nie wyjść na mutanta. Wygrałeś grę społeczną bez trwałego kalectwa.",
        statImpact: { c: 1, o: 2 },
      },
      {
        id: "tchórz_pulapka",
        text: "Trzymaj zapalniczkę, aż poczują zapach palonego mięsa",
        type: "impulsive",
        costs: [], // Karta wydaje się darmowa i super-cool. Idealny lep na gracza.
        hiddenStructure: "pfc",
        flavorReveal:
          'BŁĄD KRYTYCZNY. Brak strachu nie oznacza braku układu nerwowego. Tkanka uległa zwęgleniu. Ciało wpadło we wstrząs neurogenny. Kora Przedczołowa musiała wykonać awaryjny "twardy reset", żebyś nie umarł. Budzisz się na SORze. Twój bufor siły woli został doszczętnie spalony.',
        statImpact: { c: -5, o: -2 },
        // KARTA PUŁAPKA: Zeruje Siłę Woli (🧠) do zera.
        effects: {
          willpower: -100, // Silnik gry obetnie to do 0.
        },
      },
    ],
  },
  {
    id: "ciecie_na_zapleczu",
    ageRange: [15, 15],
    requiresAnyFlag: ["zimny_pragmatyk", "koneser_cierpienia"],
    sceneText:
      "Chłopak ze szkoły upadł na boisku i rozciął łuk brwiowy. Krew zalewa mu oko. Wszyscy panikują. Ty masz w plecaku apteczkę i pęsetę.",
    voices: [
      { structure: "amygdala", text: "...wszyscy krzyczą..." },
      {
        structure: "nacc",
        text: "O stary, patrz na ten płat skóry. Zszyjmy go. Na żywca. Będzie wył jak syrena!",
      },
      {
        structure: "pfc",
        text: "Jesteś psychopatą. Ale... anatomicznie to proste cięcie. Sterylizacja zapalniczką, szew przerywany. Możemy to zamknąć zanim przyjedzie karetka.",
      },
      { structure: "nacc", text: "Róbmy to! Chcę mieć krew na rękach!" },
      {
        structure: "pfc",
        text: "Zrobimy to, bo jesteśmy jedynymi kompetentnymi ludźmi w promieniu kilometra.",
      },
    ],
    decisions: [
      {
        id: "ciecie_szwy",
        text: "Załóż szwy precyzyjnie i profesjonalnie",
        type: "rational",
        costs: [{ resource: "willpower", amount: 15 }],
        hiddenStructure: "pfc",
        flavorReveal:
          'PFC przejęła stery. Chłopak mdlał z bólu, ale ty miałeś tętno 60 uderzeń na minutę. Ratownik medyczny zapytał potem: "Kto to tak profesjonalnie zamknął?".',
        statImpact: { c: 4, o: 2 },
        setsFlags: ["chirurg_amator"],
      },
      {
        id: "ciecie_powoli",
        text: "Zszyj go, ale powoli, żeby poczuł każdą igłę",
        type: "active",
        costs: [{ resource: "energy", amount: 12 }],
        hiddenStructure: "nacc",
        flavorReveal:
          "Uratowałeś go, ale NAcc dostało swoją nagrodę. Cieszył cię jego strach. Ratujesz życie, ale pobierasz za to mroczne myto.",
        statImpact: { a: -4, e: 2 },
        setsFlags: ["sadystyczny_ratownik"],
      },
      {
        id: "ciecie_stoj",
        text: "Stój, patrz i uśmiechaj się",
        type: "avoidant",
        costs: [],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC i NAcc zgodziły się co do jednego: nie twój problem, a widok jest ciekawy.",
        statImpact: { a: -2, c: -1 },
        setsFlags: ["bierność_z_wyboru"],
      },
    ],
  },

  // Wariant A: brak flagi koneser_cierpienia
  {
    id: "nauczyciel_biologii_a",
    ageRange: [13, 13],
    excludesFlag: "koneser_cierpienia",
    sceneText:
      'Pan Nowak pokazuje sekcję żaby. Wszyscy się krzywią. Ty podchodzisz bliżej. Po lekcji mówi: \"Michał, masz ręce chirurga."',
    voices: [
      { structure: "pfc", text: "Ktoś w końcu to zauważył." },
      {
        structure: "nacc",
        text: "Dodatkowe lekcje? Nuda. Chyba że z ostrymi narzędziami.",
      },
    ],
    decisions: [
      {
        id: "bio_zostań",
        text: "Zostań po lekcjach",
        type: "active",
        costs: [{ resource: "energy", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC znalazła kanał. Ktoś dorosły, kompetentny, który nie boi się tego co w tobie widzi. Mentor to nie emocja. To struktura.",
        statImpact: { o: 3, c: 3 },
        setsFlags: ["mentor"],
      },
      {
        id: "bio_nuda",
        text: "Nie, nuda",
        type: "avoidant",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc odmówiło. Za mało dopaminy w lekcjach po lekcjach. Ale ta odmowa zamyka drzwi, których nie widzisz.",
        statImpact: { c: -2 },
      },
    ],
  },

  // Wariant B: flaga koneser_cierpienia
  {
    id: "nauczyciel_biologii_b",
    ageRange: [13, 13],
    requiresFlag: "koneser_cierpienia",
    sceneText:
      "Pan Nowak pokazuje sekcję żaby. Wszyscy się krzywią. Ty podchodzisz bliżej. Pan Nowak nie patrzy na ciebie. Widział raport.",
    voices: [
      { structure: "pfc", text: "Ignoruje cię. Dlaczego?" },
      { structure: "nacc", text: "Nie potrzebujesz pozwolenia." },
    ],
    decisions: [
      {
        id: "bio_b_sekcja",
        text: "Zrób sekcję sam po lekcjach",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc nie czeka na zaproszenie. Ale sekcja bez mentora to nie nauka — to eksperyment bez etyki.",
        statImpact: { o: 2, a: -2 },
        setsFlags: ["sekcja_ukradkiem"],
      },
      {
        id: "bio_b_skalpel",
        text: "Ukradnij skalpel",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc mówi: narzędzie jest narzędziem. Skalpel nie jest zły. Ale skalpel w kieszeni czternastolatka bez nadzoru — to inna historia.",
        statImpact: { c: -3 },
        setsFlags: ["ma_skalpel"],
      },
      {
        id: "bio_b_poproś",
        text: "Poproś o dodatkowe zajęcia",
        type: "rational",
        costs: [{ resource: "willpower", amount: 13 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC postanowiła obejść odmowę. To wymaga siły woli — ale jeśli ją masz, drzwi nadal mogą się otworzyć.",
        statImpact: { c: 2, a: 1 },
        setsFlags: ["mentor"],
      },
    ],
  },

  // Event 8B: brak flagi mentor
  {
    id: "impreza_ulica",
    ageRange: [15, 15],
    excludesFlag: "mentor",
    sceneText:
      'Starsi chłopaki. Wódka. Ktoś mówi: \"Pokażę ci jak się robi pieniądze."',
    voices: [
      { structure: "nacc", text: "W końcu ktoś ciekawy." },
      { structure: "pfc", text: "Pieniądze. Ryzyko. Proporcja?" },
      { structure: "amygdala", text: "..." },
    ],
    decisions: [
      {
        id: "ulica_idz",
        text: "Idź z nimi",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc znalazło nowy kanał dopaminy. Bez mentora, bez struktury — energia idzie tam gdzie jest nagroda.",
        statImpact: { c: -3, e: 2 },
        setsFlags: ["ulica"],
      },
      {
        id: "ulica_odmow",
        text: "Odmów — masz plany",
        type: "rational",
        costs: [{ resource: "willpower", amount: 13 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC kalkuluje samodzielnie. Bez mentora jest trudniej, ale nie niemożliwie.",
        statImpact: { c: 2 },
        setsFlags: ["samotny_wilk"],
      },
      {
        id: "ulica_obserwuj",
        text: "Idź ale obserwuj",
        type: "active",
        costs: [{ resource: "energy", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC zbiera dane bez angażowania się. Obserwator, nie uczestnik. Na razie.",
        statImpact: { o: 2, c: 1 },
        setsFlags: ["obserwator_ulicy"],
      },
    ],
  },

  // Event 9A: wymaga mentor + C >= 51
  {
    id: "aplikacja_medycyna",
    ageRange: [17, 17],
    requiresFlag: "mentor",
    traitCondition: { trait: "c", op: ">=", value: 51 },
    sceneText:
      'Pan Nowak mówi: \"Powinieneś iść na medycynę." Patrzysz na swoje ręce. Nie drżą. Nigdy nie drżą.',
    voices: [
      { structure: "pfc", text: "Chirurgia. Precyzja. Kontrola. Legalnie." },
      {
        structure: "nacc",
        text: "Ciąć ludzi i dostawać za to pieniądze? Brzmi idealnie.",
      },
    ],
    decisions: [
      {
        id: "med_aplikuj",
        text: "Aplikuj na medycynę",
        type: "active",
        costs: [
          { resource: "energy", amount: 12 },
          { resource: "willpower", amount: 8 },
        ],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC znalazła ścieżkę która kanalizuje wszystko co w tobie jest. Zimne ręce, brak strachu, precyzja. W sali operacyjnej to są zalety.",
        statImpact: { c: 4, o: 2 },
        setsFlags: ["medycyna"],
      },
      {
        id: "med_olej",
        text: "Olej — za dużo nauki",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc chce nagrody teraz, nie za 6 lat. Ale medycyna była jedyną ścieżką gdzie twój mózg miał sens.",
        statImpact: { c: -3 },
        setsFlags: ["porzucił_medycynę"],
      },
    ],
  },

  // Event 9B: ulica LUB perfekcyjna_maska
  {
    id: "pierwsza_manipulacja",
    ageRange: [16, 16],
    requiresAnyFlag: ["ulica", "perfekcyjna_maska"],
    sceneText:
      "Odkrywasz coś. Ludzie robią co chcesz, jeśli powiesz im to co chcą usłyszeć.",
    voices: [
      { structure: "nacc", text: "To jest jak cheat code. Na ludzi." },
      {
        structure: "pfc",
        text: "Interesujące. Ludzie są bardziej przewidywalni niż myślałeś.",
      },
      { structure: "insula", text: "..." },
    ],
    decisions: [
      {
        id: "manip_zmanipuluj",
        text: "Zmanipuluj — to gra",
        type: "active",
        costs: [{ resource: "energy", amount: 10 }],
        hiddenStructure: "nacc",
        flavorReveal:
          'NAcc powiedziało \"pomagasz im podjąć decyzję". Nie. Pomagasz sobie. Emocje innych to narzędzie. Nazywa się to manipulacja instrumentalna.',
        statImpact: { a: -4, e: 3 },
        setsFlags: ["manipulator"],
      },
      {
        id: "manip_prawda",
        text: "Powiedz prawdę",
        type: "empathic",
        costs: [{ resource: "mood", amount: 11 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula — prawie niesłyszalna — powiedziała: spróbuj prawdy. Prawda jest droższa niż kłamstwo. Ale nie zostawia śladów.",
        statImpact: { a: 3, e: -1 },
        setsFlags: ["szczery"],
      },
      {
        id: "manip_odejdź",
        text: "Odejdź — nie interesuje cię co robią inni",
        type: "avoidant",
        costs: [],
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp odnotował odkrycie i zamknął temat. Nie każdą wiedzę trzeba używać. Wyszedłeś. Życie potoczyło się dalej.",
        statImpact: { n: 1 },
      },
    ],
  },

  // ── ERA V (19–25) ────────────────────────────────────────────────────────────

  {
    id: "nocny_wypadek",
    ageRange: [19, 19],
    requiresAnyFlag: [
      "chirurg_amator",
      "sadystyczny_ratownik",
      "koneser_cierpienia",
    ],
    sceneText:
      "Impreza w akademiku. Pijany znajomy wpada na szklany stół. Tętnica udowa przecięta. Krew pulsuje w rytm serca. Ludzie uciekają z krzykiem.",
    voices: [
      {
        structure: "pfc",
        text: "Krwotok tętniczy. Mamy 90 sekund do wstrząsu hipowolemicznego. Pasek od spodni. Uciśnij powyżej rany. Działaj.",
      },
      {
        structure: "nacc",
        text: "Albo... poczekajmy. Zobaczmy, ile czasu zajmie, zanim zblednie. To jak klepsydra, tylko z czerwoną farbą.",
      },
      {
        structure: "pfc",
        text: "Jeśli on umrze, będziemy musieli szukać nowego współlokatora i płacić podwójny czynsz, ty debilu. Uciskaj!",
      },
      { structure: "nacc", text: "Zawsze psujesz całą zabawę ekonomią..." },
    ],
    decisions: [
      {
        id: "wypadek_ratuj",
        text: "Rzuć się na niego, załóż stazę i uratuj mu życie",
        type: "rational",
        costs: [{ resource: "willpower", amount: 18 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wygrała. Uratowałeś gościa z zimną krwią. Nie czułeś współczucia, czułeś tylko problem do rozwiązania. Medycyna to twoje naturalne środowisko.",
        statImpact: { c: 4, a: 1 },
        setsFlags: ["powołanie_medyczne"],
      },
      {
        id: "wypadek_czekaj",
        text: "Patrz, jak z niego uchodzi życie (poczekaj do ostatniej chwili)",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc bawiło się w Boga. Założyłeś opaskę w ostatniej sekundzie. Prawie go zabiłeś dla czystej ciekawości. Granica właśnie pękła.",
        statImpact: { a: -5, c: -2 },
        setsFlags: ["igranie_ze_śmiercią"],
      },
    ],
  },

  {
    id: "zaulek",
    ageRange: [24, 24],
    isGameEnd: false,
    sceneText:
      "Późna noc w ciemnym zaułku ktoś wyciąga nóż i żąda portfela. Jesteś szybszy. Wykręcasz mu rękę, nóż upada. Napastnik leży na ziemi, przerażony. Masz jego nóż.",
    voices: [
      {
        structure: "amygdala",
        text: "...on czuje to, co my powinniśmy czuć. Strach.",
      },
      {
        structure: "nacc",
        text: "ZRÓB TO. Otwórz go. Chciałeś tego od dawna. Nikt nie patrzy. Ulica zmyje krew. Jesteśmy bogami anatomii!",
      },
      {
        structure: "pfc",
        text: "Tętnica szyjna jest odsłonięta. Jedno cięcie. Ale... konsekwencje prawne to 25 lat więzienia. Obezwładnij go i dzwoń na policję. Jesteśmy chirurgiem, nie rzeźnikiem.",
      },
      {
        structure: "nacc",
        text: "Chirurdzy tną za zgodą. Rzeźnicy tną dla przyjemności. Bądźmy rzeźnikiem.",
      },
    ],
    decisions: [
      {
        id: "zaulek_policja",
        text: "Obezwładnij go, wezwij policję",
        type: "rational",
        costs: [{ resource: "willpower", amount: 20 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC stłumiła mrok. Nie jesteś dobry. Ale jesteś mądry. Twój brak strachu czyni cię idealnym chirurgiem, a twoja inteligencja trzyma cię z dala od więzienia.",
        statImpact: { c: 5, a: 1 },
        setsFlags: ["chirurg"],
      },
      {
        id: "zaulek_blizna",
        text: "Zostaw mu chirurgicznie precyzyjną, bolesną bliznę na pamiątkę",
        type: "active",
        costs: [{ resource: "energy", amount: 15 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC i NAcc poszły na kompromis. Nauczyłeś go lekcji, nie łamiąc prawa w sposób, który by cię skazał. Jesteś mrocznym, ale kontrolowanym bytem.",
        statImpact: { a: -3, c: 1 },
        setsFlags: ["kontrolowana_agresja"],
      },
      {
        id: "zaulek_podetnij",
        text: "Podetnij mu gardło, żeby sprawdzić, jak to jest",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc wygrało ostatecznie. Zrobiłeś to. Cisza w twojej głowie w końcu znalazła ujście w cudzym krzyku.",
        statImpact: { a: -6, c: -5 },
        setsFlags: ["poważna_przemoc"],
      },
    ],
  },

  // ── ERA VI (25–40) ───────────────────────────────────────────────────────────

  // Ścieżka: poważna_przemoc — śledztwo po zaułku
  {
    id: "cien_za_plecami",
    ageRange: [25, 25],
    requiresFlag: "poważna_przemoc",
    sceneText:
      "Masz teraz dwa problemy. Jeden leży w kostnicy. " +
      "Drugi zostawił wizytówkę pod drzwiami — błyszczącą, z wytłoczonym imieniem. " +
      "Detektyw Marek Wiśniewski. Uprzejmie prosi o kontakt. " +
      "Karta pachnie tanią kawą i dziesięcioma latami pracy nad sprawami bez sensu. Ta ma.",
    voices: [
      {
        structure: "pfc",
        text:
          "Wizytówka to sonda. Reagując — dajesz im więcej niż kamera bankomatu. " +
          "Nie reagując — też dajesz im więcej niż kamera bankomatu. " +
          "Gratulacje, właśnie odkryłeś paradoks Wiśniewskiego.",
      },
      {
        structure: "nacc",
        text: "Wyrzuć ją. Albo zjedz. Zrób COKOLWIEK żeby przestała tu leżeć.",
      },
      {
        structure: "hippocampus",
        text:
          "Zaułek. Nóż. Ten dźwięk. " +
          "Hipokamp ma to w jakości 4K, 60 klatek, bez opcji usunięcia pliku.",
      },
      { structure: "amygdala", text: "..." },
    ],
    decisions: [
      {
        id: "cien_prawnik",
        text: "Zadzwoń do prawnika zanim wizytówka zdąży ostygnąć",
        type: "rational",
        costs: [{ resource: "willpower", amount: 18 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wykonała zimny telefon do zimnego człowieka w garniturze. " +
          "Prawnik wysłuchał, powiedział sto złotych za godzinę i 'niech pan nic nie mówi'. " +
          "To były najlepiej wydane pieniądze od czasu tego noża — " +
          "który, rzecz jasna, nie istnieje.",
        statImpact: { c: 3 },
        setsFlags: ["prawnik_śledztwo"],
      },
      {
        id: "cien_niszcz",
        text: "Zniszcz wszystko co pachnie tamtą nocą",
        type: "active",
        costs: [{ resource: "energy", amount: 15 }],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc miało plan. Niestety plan NAcc polega na działaniu natychmiast " +
          "i myśleniu nigdy. " +
          "Detektyw Wiśniewski, który od wczoraj ma twoją klatkę pod obserwacją, " +
          "właśnie sfotografował cię jak o drugiej w nocy wyrzucasz torbę foliową. " +
          "To nie jest dowód. To jest zapowiedź dowodu. " +
          "Subtelna różnica. NAcc jej nie czuje.",
        statImpact: { c: -1, o: 1 },
        setsFlags: ["niszczy_dowody"],
      },
      {
        id: "cien_milcz",
        text: "Zignoruj. Wizytówka to tylko papier.",
        type: "avoidant",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Technicznie prawda. Wizytówka to tylko papier. " +
          "Detektyw Wiśniewski też to wie — dlatego wrócił następnego dnia. " +
          "I pojutrze. I w czwartek. Za każdym razem zostawiając nową. " +
          "Masz teraz kolekcję. " +
          "PFC zanotowała: ignorowanie detektywa nie sprawia że detektyw znika. " +
          "Sprawia że detektyw jest zaciekawiony.",
        statImpact: { n: 2 },
        setsFlags: ["ignoruje_wezwanie"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KRYZYS 6: KONIEC CISZY
  //  Wiek: 26 | Wyzwala: niszczy_dowody LUB ignoruje_wezwanie
  //  Wiśniewski wrócił. Tym razem z nakazem i krzesłem naprzeciwko.
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "crisis_koniec_ciszy",
    ageRange: [26, 26],
    requiresAnyFlag: ["niszczy_dowody", "ignoruje_wezwanie"],
    sceneText:
      "Pokój przesłuchań wygląda dokładnie tak jak w telewizji. " +
      "To cię nieprzyjemnie zaskakuje. " +
      "Szara ściana. Metalowy stół. Szklanka wody której nikt nie dotyka, " +
      "bo dotknięcie znaczyłoby że się rozluźniłeś. " +
      "Detektyw Wiśniewski siedzi naprzeciwko i milczy. " +
      "Wy obaj wiecie że kto odezwie się pierwszy — przegrywa.",
    voices: [
      {
        structure: "pfc",
        text:
          "Cisza to gra na wytrzymałość. Twój dyskomfort jest niedostępny. " +
          "Jego — ograniczony służbowo. Poczekamy.",
      },
      {
        structure: "nacc",
        text:
          "POWIEDZ COŚ. Cokolwiek. Powiedz że masz kota. Powiedz że lubisz deszcz. " +
          "CISZA JEST NIEZNOŚNA—",
      },
      {
        structure: "pfc",
        text: "NAcc. Zamknij się.",
      },
      {
        structure: "insula",
        text: "...ma zdjęcie z tamtej nocy. Widzę je odwrócone na stole.",
      },
    ],
    decisions: [
      {
        id: "przesluchanie_milcz",
        text: "Nic nie mówię bez adwokata",
        type: "rational",
        costs: [{ resource: "willpower", amount: 20 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "Sześć słów. Detektyw Wiśniewski westchnął tym specyficznym westchnieniem " +
          "człowieka który słyszał te sześć słów tysiąc razy " +
          "i za każdym razem musiał odpuścić. " +
          "Wyszedł. Wrócił z adwokatem z urzędu wyrwanym ze snu — bo go wyrwano. " +
          "Cztery godziny. Zero zdań poza nazwiskiem i tymi sześcioma słowami. " +
          "Wyszedłeś. Wiśniewski dostał nową sprawę. " +
          "Statystycznie jego uwaga przesunęła się o czterdzieści procent. " +
          "PFC zanotowała: detektywi też mają limity czasu.",
        statImpact: { c: 4 },
        setsFlags: ["śledztwo_zawieszone"],
      },
      {
        id: "przesluchanie_wersja",
        text: "Obrona konieczna. Spójna wersja. Jeden raz, bez odchyleń.",
        type: "active",
        costs: [{ resource: "energy", amount: 16 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "PFC skompilowała narrację w czasie rzeczywistym: zaatakowany, przestraszony, " +
          "zadziałał instynkt, uciekł w panice, wstydził się przyznać. " +
          "Klasyczny łuk emocjonalny. Wiarygodny. Sprawdzony. " +
          "Prokurator szukał dziury — była jedna, przy kwestii czasu reakcji. " +
          "Adwokat ją zakrył. " +
          "Wyszedłeś z zawieszonym wyrokiem i notatką w aktach " +
          "która będzie ci towarzyszyć jak nieproszony gość " +
          "na każdej rozmowie kwalifikacyjnej do końca życia.",
        statImpact: { c: 2, n: 2 },
        setsFlags: ["wyrok_w_zawieszeniu_za_pobicie"],
      },
      {
        id: "przesluchanie_prawda",
        text: "Powiedz mu dokładnie co czułeś. Wszystko.",
        type: "impulsive",
        costs: [],
        hiddenStructure: "insula",
        isDeathCard: true,
        flavorReveal:
          "Insula otworzyła zawór którego PFC nie zdążyła zakręcić. " +
          "Mówiłeś osiem minut. Wiśniewski przestał pisać po trzech. " +
          "Siedział i patrzył na ciebie z wyrazem twarzy człowieka który " +
          "spędził dwadzieścia lat szukając czegoś i właśnie to znalazł — " +
          "i wcale nie jest z tego powodu szczęśliwy. " +
          "Prokurator dostał zeznanie. Zeznanie miało motyw. " +
          "Motyw nie brzmiał jak 'obrona konieczna'. " +
          "Motyw brzmiał szczerze. " +
          "Twój mózg jest interesującym miejscem. " +
          "Szkoda że teraz będziesz go używał głównie do liczenia dni.",
        statImpact: { a: -6, c: -5 },
      },
    ],
  },

  // Event 10: Pierwsza samodzielna operacja (ścieżka chirurga)
  {
    id: "pierwsza_operacja",
    ageRange: [26, 26],
    requiresAnyFlag: ["chirurg", "powołanie_medyczne", "medycyna"],
    sceneText:
      "Jesteś rezydentem. Starszy chirurg dostał zawał w połowie operacji. Pielęgniarka patrzy na ciebie. Sala operacyjna czeka. Serce pacjenta bije. Twoje — jak zwykle — nie przyspiesza.",
    voices: [
      {
        structure: "pfc",
        text: "Aorta brzuszna. Klema Satinsky'ego. Krok po kroku. Wiesz co robić.",
      },
      {
        structure: "nacc",
        text: "To jest nasz moment. Wreszcie. Bez nadzoru. Nóż jest nasz.",
      },
      {
        structure: "amygdala",
        text: "...",
      },
      {
        structure: "insula",
        text: "Jest żywym człowiekiem na stole.",
      },
      {
        structure: "pfc",
        text: "Jest problemem do rozwiązania. Wyspa, zamknij się i pozwól mi pracować.",
      },
    ],
    decisions: [
      {
        id: "operacja_przejmij",
        text: "Przejmij operację — sam ją skończysz",
        type: "rational",
        costs: [
          { resource: "willpower", amount: 20 },
          { resource: "energy", amount: 15 },
        ],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC pracowała jak komputer w klimatyzowanym serwerownii. Dwie godziny i czternaście minut. Pacjent żyje. Twoje tętno podczas zamykania brzucha wynosiło 58. Anestezjolog patrzył na ciebie jak na anomalię natury. Miał rację.",
        statImpact: { c: 5, o: 3 },
        setsFlags: ["doświadczony_chirurg"],
      },
      {
        id: "operacja_zawołaj",
        text: "Wezwij drugiego rezydenat i dokończcie razem",
        type: "active",
        costs: [{ resource: "energy", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała optymalizację ryzyka, nie ego. Pacjent żyje. Ty masz czysty protokół. To też jest inteligencja — wiedzieć kiedy delegować.",
        statImpact: { c: 3, a: 1 },
        setsFlags: ["pragmatyczny_lekarz"],
      },
      {
        id: "operacja_poczekaj",
        text: "Ustabilizuj i czekaj na drugiego chirurga",
        type: "avoidant",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Czekałeś osiemnaście minut. Przybyły wsparcie. Pacjent przeżył. Twoje pliki kadrowe zawierają adnotację: brak inicjatywy w kryzysie. NAcc mówi — zmarnowana okazja.",
        statImpact: { c: -1, n: 2 },
      },
    ],
  },

  // Event 11: Związek (dla wszystkich ścieżek)
  {
    id: "związek",
    ageRange: [27, 27],
    sceneText:
      "Marta. Lekarka. Inteligentna, niezależna, ładna w sposób, który nie rozprasza. Mówi, że cię rozumie. Mówi to wszyscy. Ale ona mówi to inaczej — spokojnie, jakby nie oczekiwała odpowiedzi.",
    voices: [
      {
        structure: "nacc",
        text: "Jest użyteczna. Ciepłe mieszkanie, dobra kuchnia, prestiżowy zawód. Opłaca się.",
      },
      {
        structure: "pfc",
        text: "Zbadajmy ją. Czy jest wystarczająco nieprzewidywalna żeby być ciekawa?",
      },
      {
        structure: "insula",
        text: "...jest miła dla ciebie. Bez powodu.",
      },
      {
        structure: "hippocampus",
        text: "Mama też była miła. Dopóki nie zaczęła zadawać pytań.",
      },
    ],
    decisions: [
      {
        id: "zwiazek_zostań",
        text: "Zostań — ona na ciebie czeka",
        type: "empathic",
        costs: [{ resource: "mood", amount: 12 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula zrobiła coś dziwnego: nie skalkulowała zysku. Po prostu powiedziała — zostań. Może to nawet nie jest maska. Może się uczysz. Powoli, jak dziecko uczące się chodzić w cudzych butach.",
        statImpact: { a: 3, n: -2 },
        setsFlags: ["związek_z_martą"],
      },
      {
        id: "zwiazek_symuluj",
        text: "Bądź tym czego oczekuje — pilnie odgraj uczucia",
        type: "active",
        costs: [{ resource: "energy", amount: 14 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC skompilowała idealny pakiet zachowań: kwiaty w środy, pytanie o jej dzień, kontakt wzrokowy przez 3,2 sekundy. Marta mówi, że jesteś wyjątkowy. Tak. Ale nie tak jak myśli.",
        statImpact: { c: 2, a: -2, e: 2 },
        setsFlags: ["maskowanie_uczuć", "związek_z_martą"],
      },
      {
        id: "zwiazek_ucieknij",
        text: "Zniknij — zbyt blisko",
        type: "avoidant",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Nawet twoje Ciało Migdałowate, martwe przez większość życia, coś szepnęło. Uciekłeś zanim zdążyła cię poznać. To nie strach przed nią. To strach przed tym, co mogłaby zobaczyć.",
        statImpact: { n: 3, a: -1 },
        setsFlags: ["samotny_wilk"],
      },
    ],
  },

  // Event 12A: Śmierć pacjenta (ścieżka chirurga)
  {
    id: "śmierć_na_stole",
    ageRange: [29, 29],
    requiresAnyFlag: ["doświadczony_chirurg", "pragmatyczny_lekarz"],
    sceneText:
      "Czternastolatka. Wypadek. Robisz wszystko co możliwe przez dwie godziny i dwanaście minut. Jej serce zatrzymuje się o 03:17. Rodzice są za drzwiami sali operacyjnej.",
    voices: [
      { structure: "amygdala", text: "..." },
      {
        structure: "pfc",
        text: "Urazowe uszkodzenie mózgu czwartego stopnia. Rokowania od początku wynosiły 4%. Zrobiłeś wszystko zgodnie z protokołem.",
      },
      {
        structure: "insula",
        text: "Czternastolatka.",
      },
      {
        structure: "nacc",
        text: "Skończyło się. Czas na kawę.",
      },
      {
        structure: "pfc",
        text: "Musimy poinformować rodzinę. Protokół: siąść. Mówić wolno. Nie używać słowa 'niestety'.",
      },
    ],
    decisions: [
      {
        id: "śmierć_protocol",
        text: "Wejdź do rodziny — chłodny, profesjonalny, zgodny z protokołem",
        type: "rational",
        costs: [{ resource: "willpower", amount: 16 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Powiedziałeś to czego nie dało się powiedzieć. Głos stabilny, słowa precyzyjne. Matka osunęła się na podłogę. Ty stałeś wyprostowany. Pielęgniarka potem spytała: Jak ty to wytrzymujesz? Nie miałeś odpowiedzi, bo pytanie nie miało sensu. Co miałoby boleć?",
        statImpact: { c: 3, n: -2 },
        setsFlags: ["protokół_żałoby"],
      },
      {
        id: "śmierć_czujesz",
        text: "Zostań chwilę sam — sprawdź co czujesz",
        type: "empathic",
        costs: [{ resource: "mood", amount: 14 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Zamknąłeś się w szatni. Siedziałeś piętnaście minut. Nic nie poczułeś. Ale sam fakt że sprawdziłeś — to coś. Insula zbiera punkty bardzo powoli, ale zbiera.",
        statImpact: { a: 2, n: 1 },
        setsFlags: ["samoświadomość"],
      },
      {
        id: "śmierć_dalej",
        text: "Idź na następną salę — masz jeszcze trzy operacje",
        type: "avoidant",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc przełączyło kanał. Następny przypadek. Mózg nie zostawia miejsca na żałobę, której nie rozumie. Jesteś skuteczny jak maszyna. Maszyny się nie psują — aż do momentu, gdy psują się nagle i bez ostrzeżenia.",
        statImpact: { c: 1, n: -3, a: -2 },
      },
    ],
  },

  // Event 12B: Wsypa na ulicy (ścieżka manipulatora / ulicy)
  {
    id: "wsypa",
    ageRange: [28, 28],
    requiresAnyFlag: ["manipulator", "ulica"],
    sceneText:
      "Policja. Twój wspólnik sypie. Masz pół godziny zanim przyjdą po ciebie. Twój telefon ma sześć kontaktów, które mogą pomóc — i trzy, które możesz zniszczyć, żeby kupić czas.",
    voices: [
      {
        structure: "pfc",
        text: "Analiza: prawnik — zadzwoń teraz. Potem zniszcz karty SIM w numerach 2 i 4. Oni i tak to przeżyją.",
      },
      {
        structure: "nacc",
        text: "Zawsze wiedziałem, że w końcu tu trafimy. Dopamina z ryzyka ma swoją cenę.",
      },
      {
        structure: "insula",
        text: "...numer 3 to Marek. Pomógł ci rok temu bez pytania.",
      },
      {
        structure: "pfc",
        text: "Marek jest słabym ogniwem. Wyspa, to nie czas na sentyment.",
      },
    ],
    decisions: [
      {
        id: "wsypa_zniszcz",
        text: "Zniszcz dowody i wciągnij innych — czysty zapis dla siebie",
        type: "active",
        costs: [{ resource: "energy", amount: 18 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC zadziałała zimno i chirurgicznie. Trzy osoby dostały kłopoty. Ty wyszedłeś z tego bez śladu. NAcc świętuje. Ale lista ludzi, którzy wiedzą co jesteś wart, właśnie się wydłużyła o trzy pozycje.",
        statImpact: { c: 2, a: -5 },
        setsFlags: ["spalił_mosty"],
      },
      {
        id: "wsypa_prawnik",
        text: "Zadzwoń do prawnika i idź na komisariat sam",
        type: "rational",
        costs: [{ resource: "willpower", amount: 20 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC kalkuluje długoterminowo. Samodzielne zgłoszenie, adwokat, współpraca — to nie moralność, to strategia. Wychodzisz z warunkowym. Straciłeś dwa lata, ale zachowałeś reputację, którą trudno odbudować.",
        statImpact: { c: 4, a: 1 },
        setsFlags: ["wyrok_w_zawieszeniu"],
      },
      {
        id: "wsypa_ucieknij",
        text: "Ucieknij — masz paszport i konto za granicą",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc zawsze miała plan B, C i D. Wylądowałeś w innym kraju z nową tożsamością i starymi nawykami. Polska cię szuka. Nowe miejsce, stary mózg. Problem wędruje razem z nim.",
        statImpact: { c: -3, e: 2 },
        setsFlags: ["uciekinier"],
      },
    ],
  },

  // Event 13: Dziecko (wyzwalany flagą związek_z_martą)
  {
    id: "dziecko",
    ageRange: [31, 31],
    requiresFlag: "związek_z_martą",
    sceneText:
      "Marta mówi, że jest w ciąży. Patrzy na ciebie z tym wyrazem twarzy, który ludzie mają gdy oczekują reakcji emocjonalnej. Wiesz jaka reakcja jest oczekiwana. Twój mózg właśnie ją kalkuluje.",
    voices: [
      {
        structure: "nacc",
        text: "Dziecko. Hałas. Koszty. Brak snu. Minus dwadzieścia punktów dla opcji tak.",
      },
      {
        structure: "pfc",
        text: "Dziecko to eksperyment. Twój kod genetyczny. Zobaczymy czy to, co jest w tobie, jest dziedziczne.",
      },
      {
        structure: "insula",
        text: "Ona się boi. Twojej odpowiedzi się boi.",
      },
      {
        structure: "hippocampus",
        text: "Twój ojciec też miał taką minę. Kiedy wychodził.",
      },
    ],
    decisions: [
      {
        id: "dziecko_zostań",
        text: "Powiedz cieszę się — i spróbuj to poczuć",
        type: "empathic",
        costs: [
          { resource: "mood", amount: 15 },
          { resource: "willpower", amount: 10 },
        ],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula pracowała przez pierwszą noc. Siedziałeś przy Marcie i byłeś z nią — nie dlatego że wiedziałeś jak, ale dlatego że postanowiłeś się nauczyć. To może być najdroższe co kupiłeś za siłę woli w całym życiu. I pierwsze, za które nie żałujesz.",
        statImpact: { a: 4, n: -1 },
        setsFlags: ["ojciec", "rodzina"],
      },
      {
        id: "dziecko_kontrakt",
        text: "Zaakceptuj — to inwestycja długoterminowa",
        type: "rational",
        costs: [{ resource: "energy", amount: 12 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC sporządziła wewnętrzny kontrakt: dziecko, dom, stabilność. Twój mózg traktuje rodzinę jak projekt. Marta nie wie, że jest w arkuszu kalkulacyjnym. Dziecko będzie miało dom. Nie jest pewne czy będzie miało ojca.",
        statImpact: { c: 2, a: -1 },
        setsFlags: ["ojciec", "chłodny_ojciec"],
      },
      {
        id: "dziecko_odejdź",
        text: "Powiedz, że nie jesteś gotowy — i wyjdź",
        type: "avoidant",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Wyszedłeś. Przez trzy tygodnie patrzyłeś na jej okno z ulicy. Nie wszedłeś. Nie wiesz co to znaczy. Hipokamp zapamiętał ten adres — bez twojego pozwolenia.",
        statImpact: { n: 3, a: -3 },
        setsFlags: ["porzucił_dziecko"],
      },
    ],
  },

  // Event 14: Wypalenie zawodowe (ścieżka chirurga, po 5 latach)
  {
    id: "wypalenie",
    ageRange: [33, 33],
    requiresAnyFlag: ["doświadczony_chirurg", "pragmatyczny_lekarz"],
    sceneText:
      "Trzysta czterdzieści siedem operacji. Dyrektor szpitala proponuje ci stanowisko ordynatora. Więcej pieniędzy, mniej operacji, więcej papierów. Twoje ręce nadal się nie trzęsą. Ale ostatnio czujesz coś dziwnego — pustkę tam, gdzie kiedyś było skupienie.",
    voices: [
      {
        structure: "pfc",
        text: "Ordynator. Więcej kontroli nad oddziałem. Możemy kształtować procedury. To ma sens.",
      },
      {
        structure: "nacc",
        text: "Biurko i zebrania? Nudne. Zostań na sali. Tam przynajmniej coś się dzieje.",
      },
      {
        structure: "insula",
        text: "...kiedy ostatnio spałeś więcej niż pięć godzin?",
      },
      {
        structure: "hippocampus",
        text: "Pierwsza operacja. Tętno 58. Teraz — 57. Może to i nie wypalenie. Może po prostu stajesz się doskonały.",
      },
    ],
    decisions: [
      {
        id: "wypalenie_awans",
        text: "Przyjmij stanowisko ordynatora",
        type: "rational",
        costs: [{ resource: "willpower", amount: 14 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała strukturę i wpływ. Przestałeś operować codziennie. Twoje ręce pamiętają każdy ruch — ale coraz rzadziej go wykonują. Zarządzasz. Optimalizujesz. Szkolisz innych. Część ciebie pyta cicho: czy to był błąd?",
        statImpact: { c: 3, o: -1 },
        setsFlags: ["ordynator"],
      },
      {
        id: "wypalenie_operuj",
        text: "Odmów — chcesz zostać przy skalpelu",
        type: "active",
        costs: [{ resource: "energy", amount: 10 }],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc wybrało dopaminę sali operacyjnej nad bezpieczeństwo gabinetu. Zostałeś. Operujesz. Twój szef patrzy na ciebie z mieszaniną podziwu i frustracji. Nie awansujesz. Nie dbasz o to.",
        statImpact: { o: 2, c: -1 },
        setsFlags: ["wierny_skalpelowi"],
      },
      {
        id: "wypalenie_urlop",
        text: "Weź urlop i zastanów się",
        type: "empathic",
        costs: [{ resource: "mood", amount: 13 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula przeforsowała coś bezprecedensowego: trzy tygodnie poza szpitalem. Nie wiedziałeś co z sobą zrobić przez pierwsze dziesięć dni. W jedenastym — po raz pierwszy od lat — zrobiłeś coś bezużytecznego. Siedziałeś nad wodą i patrzyłeś. Nic więcej. Trochę ci to smakowało.",
        statImpact: { n: -2, a: 1, o: 2 },
        setsFlags: ["pierwszy_oddech"],
      },
    ],
  },

  // Event 15: Konfrontacja z przeszłością (dla wszystkich ścieżek)
  {
    id: "spotkanie_z_kuzynem",
    ageRange: [35, 35],
    sceneText:
      "Wesele rodzinne. Kuzyn, któremu ukradłeś figurkę jako dziecko — teraz gruby, szczęśliwy, z trojgiem dzieci. Patrzy na ciebie przez chwilę, jakby coś pamiętał. Potem się uśmiecha i wyciąga rękę.",
    voices: [
      {
        structure: "hippocampus",
        text: "Figurka. Siedem lat. Twoja kurtka. Jego twarz.",
      },
      {
        structure: "pfc",
        text: "On puścił to w niepamięć albo wybrał strategię dystansowania. Ściskamy rękę. Robimy twarz.",
      },
      {
        structure: "nacc",
        text: "Wygrałeś tamten dzień. Teraz wyglądasz lepiej niż on. Wygrałeś życie.",
      },
      {
        structure: "insula",
        text: "...on wyciągnął rękę pierwszy.",
      },
    ],
    decisions: [
      {
        id: "kuzyn_uścisk",
        text: "Uściśnij i idź dalej — to było dawno",
        type: "rational",
        costs: [],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC przetworzyła: minimalne ryzyko, minimalne zaangażowanie. Ściskasz rękę, pijesz szampana. Wesele trwa. Hipokamp jednak nie kasuje pliku. Nie pyta o pozwolenie.",
        statImpact: { c: 1 },
      },
      {
        id: "kuzyn_przeproś",
        text: "Powiedz mu co zrobiłeś — przeproś",
        type: "empathic",
        costs: [
          { resource: "willpower", amount: 18 },
          { resource: "mood", amount: 12 },
        ],
        hiddenStructure: "insula",
        flavorReveal:
          "To najbardziej kosztowna rzecz jaką zrobiłeś od lat. Nie dlatego że trudno powiedzieć przepraszam — ale dlatego że nie rozumiesz dlaczego to robisz. Kuzyn patrzył przez chwilę. Potem się roześmiał i powiedział: Miałem o tym zapomnieć na weselu, ale dobra. Może Insula o to chodziło.",
        statImpact: { a: 4, n: -1, c: -1 },
        setsFlags: ["pierwszy_przepraszam"],
      },
      {
        id: "kuzyn_prowokuj",
        text: "Zapytaj go czy pamięta tę figurkę",
        type: "active",
        costs: [{ resource: "energy", amount: 8 }],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc chciało zobaczyć jak reaguje. Kuzyn zbladł, potem się skrzywił i odszedł. Ciotka obserwowała z odległości dwóch metrów. Wesele zrobiło się cichsze przy twoim stoliku. Wygrałeś małą chwilę władzy. Zapłaciłeś za nią wszystkimi rozmowami na tym przyjęciu.",
        statImpact: { a: -3, e: 1 },
      },
    ],
  },

  // Event 16: Kryzys tożsamości / turning point (dla wszystkich ścieżek)
  {
    id: "noc_bez_snu",
    ageRange: [38, 38],
    type: "turning_point",
    isRevelation: true,
    sceneText:
      "3:47 rano. Nie możesz spać — co zdarza się po raz pierwszy od kiedy pamiętasz. Leżysz i patrzysz w sufit. W głowie — cisza. Nie ta znajoma, kontrolowana cisza. Inna. Pusta. Zaczynasz się zastanawiać — czy kiedykolwiek kogoś kochałeś? Czy kiedykolwiek naprawdę chciałeś żeby ktoś żył, a nie tylko — żeby nie umarł?",
    voices: [
      {
        structure: "pfc",
        text: "To pytanie nie ma mierzalnej odpowiedzi. Idź spać.",
      },
      {
        structure: "insula",
        text: "...nie wiem. I to mnie boli.",
      },
      {
        structure: "hippocampus",
        text: "Marta, gdy płakała przy tobie. Nie wiedziałeś co powiedzieć. Ale zostałeś.",
      },
      {
        structure: "nacc",
        text: "Przestań filozofować. To nudne.",
      },
      {
        structure: "amygdala",
        text: "...",
      },
      {
        structure: "pfc",
        text: "Czekaj. Hipokamp ma rację. Zostałeś. Dlaczego zostałeś?",
      },
    ],
    decisions: [
      {
        id: "noc_zbadaj",
        text: "Leż i naprawdę spróbuj odpowiedzieć na to pytanie",
        type: "empathic",
        costs: [{ resource: "mood", amount: 20 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Do rana nie znalazłeś odpowiedzi. Ale Insula — po raz pierwszy — działała przez całą noc bez wyłączenia. Rano wstałeś bez pewności siebie. Wstałeś z czymś innym. Z pytaniem, które chcesz ponieść dalej.",
        statImpact: { a: 4, o: 3, n: 2 },
        setsFlags: ["przebudzenie", "samoświadomość"],
      },
      {
        id: "noc_wstań",
        text: "Wstań, pracuj — lepsza jest bezsenność niż bezużyteczność",
        type: "rational",
        costs: [{ resource: "energy", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wzięła górę. O 4:03 siedziałeś przy biurku. Do świtu napisałeś artykuł naukowy i przejrzałeś pięć historii przypadków. Pytanie zniknęło w strumieniu danych. To jest twoja technika od zawsze. Działa. Nie wiadomo ile razy jeszcze zadziała.",
        statImpact: { c: 2, o: 1, a: -1 },
      },
      {
        id: "noc_zadzwoń",
        text: "Zadzwoń do kogoś — kogokolwiek",
        type: "active",
        costs: [{ resource: "willpower", amount: 15 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Wybrałeś numer. Cztery sekundy ciszy zanim ktoś odebrał. Nie wiedziałeś co powiedzieć — więc powiedziałeś prawdę: Nie mogę spać i nie wiem dlaczego. Cisza po drugiej stronie. Potem głos: Zostań na linii. Małe rzeczy. Ale Insula zbiera je od lat.",
        statImpact: { a: 3, e: 2, n: -1 },
        setsFlags: ["pierwszy_telefon_po_pomoc"],
      },
      {
        id: "noc_poczekaj",
        text: "Leż w ciemności — nic z tego nie musisz teraz rozwiązywać",
        type: "avoidant",
        costs: [],
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Czekałeś. Rano pytanie znikło pod kolejnymi godzinami pracy — jak zawsze. Ale coś się nie zregenerowało. Insula, która przez tę noc próbowała coś powiedzieć, zamilkła. Nie wiesz jeszcze, że to był ostatni raz kiedy tak głośno pytała.",
        statImpact: { a: -5, n: 3, o: -2 },
        setsFlags: ["bierność_z_wyboru"],
      },
    ],
  },

  /// *** 06.05
  {
    id: "sen_bez_snu",
    ageRange: [3, 3],
    sceneText:
      "Pora snu. Mama gasi światło i wychodzi. Ciemność. Inne dzieci z przedszkola mówiły, że w ciemności jest potwór. Ty leżysz i czekasz. Nic nie przychodzi. Cisza.",
    voices: [
      { structure: "amygdala", text: "...tu jest coś?..." },
      {
        structure: "pfc",
        text: "Logika: mama nie boi się. Ciemność to brak światła, nic więcej.",
      },
      { structure: "nacc", text: "Nudno. Coś muszę robić." },
    ],
    decisions: [
      {
        id: "sen_lez",
        text: "Leż i obserwuj ciemność — czekaj co z niej wyjdzie",
        type: "rational",
        costs: [{ resource: "willpower", amount: 7 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Czekałeś dwadzieścia minut. Nic nie wyszło. PFC zapisała: ciemność to bezpieczna zmienna. Twoje Ciało Migdałowate nie nauczyło się wtedy strachu, który normalnie utrwala się między trzecim a czwartym rokiem życia. Brakujący klocek w układance, której jeszcze nie rozumiesz.",
        statImpact: { n: -2, o: 2 },
        setsFlags: ["brak_lęku_nocnego"],
      },
      {
        id: "sen_mama",
        text: "Zawołaj mamę — bo tak robią wszystkie dzieci",
        type: "active",
        costs: [{ resource: "energy", amount: 6 }],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc nie bało się ciemności — nudziło się w niej. Zawołałeś mamę i dostałeś uwagę. Mózg zapamiętał: wołanie działa. Używasz narzędzia, nie uczucia.",
        statImpact: { e: 2, a: 1 },
      },
      {
        id: "sen_sam",
        text: "Wstań cichaczem i idź pobawić się kiedy wszyscy śpią",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "Ciemny salon. Ty. Zabawki. NAcc dostało to czego chciało — wolność bez dozoru. Mama znalazła cię nad ranem śpiącego przy telewizorze. Powiedziała do taty: on się niczego nie boi. Mówiła z podziwem. Nie wiedziała, że to ostrzeżenie.",
        statImpact: { c: -2, o: 2 },
        setsFlags: ["nocny_włóczykij"],
      },
    ],
  },

  // AGE 4 ──────────────────────────────────────────────────────────────────────

  {
    id: "nowe_dziecko_w_grupie",
    ageRange: [4, 4],
    sceneText:
      "Do przedszkola przyszło nowe dziecko. Basia. Płacze przy mamie, nie chce zostać. Pani prosi kogoś żeby się z nią zaopiekował. Wszyscy udają że nie słyszą. Wszyscy poza tobą.",
    voices: [
      { structure: "nacc", text: "Nowa. Ciekawa. Co ona wie? Czego chce?" },
      {
        structure: "pfc",
        text: "Pani szuka wolontariusza. To okazja do zdobycia pozycji bez wysiłku fizycznego.",
      },
      { structure: "insula", text: "ona się boi..." },
    ],
    decisions: [
      {
        id: "basia_podejdź",
        text: "Podejdź i powiedz że wiesz gdzie leżą najlepsze zabawki",
        type: "active",
        costs: [{ resource: "energy", amount: 8 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała perswazję zamiast pociechy. Nie powiedziałeś jej, że przestanie płakać. Powiedziałeś jej gdzie jest coś ciekawego. Przestała płakać w pół minuty. Pani chwaliła cię przy wszystkich. Odkryłeś: ludźmi łatwiej się kieruje przez cel niż przez ból.",
        statImpact: { e: 2, o: 2, a: 1 },
        setsFlags: ["naturalny_lider"],
      },
      {
        id: "basia_pani",
        text: "Patrz jak pani sobie z tym radzi",
        type: "avoidant",
        costs: [],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC oceniła: to problem pani, nie mój. Basia w końcu przestała płakać sama. Pani pochwaliła inne dziecko, które podeszło ostatnie. Twój mózg zapamiętał: brak działania to też wybór, ale nagrody dostają ci którzy działają.",
        statImpact: { c: 1, e: -1 },
      },
      {
        id: "basia_ty_też_płacz",
        text: "Zacznij płakać razem z nią — żeby się nie czuła sama",
        type: "empathic",
        costs: [{ resource: "mood", amount: 11 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula zrobiła coś dziwnego. Nie powiedziałeś nic. Po prostu usiadłeś obok niej i robiłeś minkę jakbyś też chciał płakać. Basia spojrzała na ciebie i się roześmiała. Pani nie rozumiała co się stało. Ty też nie do końca. Ale zadziałało.",
        statImpact: { a: 4, e: 2 },
        setsFlags: ["intuicja_empatyczna"],
      },
    ],
  },

  {
    id: "tatuś_wraca_późno",
    ageRange: [4, 4],
    sceneText:
      "Tata miał wrócić o osiemnastej. Jest dwudziesta pierwsza. Mama siedzi przy oknie. Ty siedzisz obok niej. Ona nie mówi nic. Ty nie mówisz nic. Za oknem ciemno.",
    voices: [
      {
        structure: "hippocampus",
        text: "Ostatnio też wrócił późno. Potem było głośno.",
      },
      {
        structure: "pfc",
        text: "Zmienna: tata. Dane wejściowe: brak. Dane niewystarczające do prognozy.",
      },
      { structure: "amygdala", text: "...mama jest napięta..." },
      { structure: "insula", text: "...coś jest nie tak między nimi..." },
    ],
    decisions: [
      {
        id: "tata_zapytaj",
        text: "Zapytaj mamę: gdzie jest tata?",
        type: "active",
        costs: [{ resource: "energy", amount: 7 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Mama powiedziała, że zaraz wróci. Ale jej twarz mówiła coś innego. Twój mózg w wieku czterech lat nauczył się rozróżniać słowa od mikroekspresji. Hipokamp nagrał obie wersje. Na razie nie rozumiesz dlaczego się różnią.",
        statImpact: { o: 2, n: 1 },
        setsFlags: ["czyta_mikroekspresje"],
      },
      {
        id: "tata_zaśnij",
        text: "Zaśnij przy mamie na kanapie",
        type: "avoidant",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało Migdałowate wyłączyło tryb alertu — nie dlatego że wszystko jest dobrze, ale dlatego że bliskość mamy obniżyła poziom kortyzolu. Zasnąłeś. Kiedy tata wrócił, już tego nie pamiętałeś. Insula zapamięta za ciebie.",
        statImpact: { n: -1, a: 1 },
      },
      {
        id: "tata_poczekaj",
        text: "Siedź cicho i słuchaj — może usłyszysz coś ważnego",
        type: "rational",
        costs: [{ resource: "willpower", amount: 9 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Czekałeś. Tata wrócił o dwudziestej drugiej. Cicho. Bez wyjaśnienia. Mama nic nie powiedziała. Cisza między dorosłymi była bardziej niezręczna niż zwykła cisza. Hipokamp zapisał ten wzorzec.",
        statImpact: { o: 3, c: 2 },
        setsFlags: ["katalog_napięć"],
      },
    ],
  },

  // AGE 5 ──────────────────────────────────────────────────────────────────────

  {
    id: "mama_placze",
    ageRange: [5, 5],
    sceneText:
      "Mama siedzi przy kuchennym stole i płacze. Myślała, że śpisz. Nie słyszysz słów — tylko szlochanie. Dorośli rzadko płaczą. Stoisz w drzwiach.",
    voices: [
      { structure: "amygdala", text: "coś jest nie tak..." },
      {
        structure: "pfc",
        text: "Analiza: woda z oczu. Twarz wykrzywiona. Reakcja na ból — ale nie widać rany.",
      },
      { structure: "insula", text: "...mama jest smutna?" },
      { structure: "nacc", text: "Idź do niej. Coś się stanie." },
    ],
    decisions: [
      {
        id: "mama_przytul",
        text: "Podejdź i przytul się do niej",
        type: "empathic",
        costs: [{ resource: "mood", amount: 10 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula zrobiła coś niespodziewanego: wypchnęła cię do przodu zanim PFC zdążyła policzyć. Mama przytulila cię tak mocno, że poczułeś jej tętno. Nie rozumiałeś jej smutku. Ale zostałeś. To był jeden z nielicznych momentów, gdy twój mózg nie pyta dlaczego — po prostu idzie.",
        statImpact: { a: 3, n: -1 },
        setsFlags: ["odruch_bliskości"],
      },
      {
        id: "mama_obserwuj_z_progu",
        text: "Stój w drzwiach i patrz — nie wchodź",
        type: "avoidant",
        costs: [],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC zatrzymała cię w progu. Bezpieczna odległość obserwacyjna. Obserwowałeś jak mama płacze przez cztery minuty. Kiedy odwróciła głowę, cofnąłeś się na palcach. Nigdy jej nie zapytałeś dlaczego płakała. Insula zapamięta ten wieczór przez długi czas.",
        statImpact: { o: 2, a: -2 },
        setsFlags: ["dystans_emocjonalny"],
      },
      {
        id: "mama_zapytaj_co",
        text: "Zapytaj: mamo, co się stało?",
        type: "active",
        costs: [{ resource: "energy", amount: 7 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała dane nad intuicją. Zapytałeś. Mama mówiła coś o pracy i pieniądzach — za trudne dla ciebie, ale twój hipokamp nagrał dźwięk jej głosu, gdy mówi prawdę. Nie zrozumiałeś słów. Ale nauczyłeś się, że pytania mogą być wejściem do cudzych emocji.",
        statImpact: { o: 2, c: 1 },
        setsFlags: ["szuka_informacji_o_emocjach"],
      },
    ],
  },

  // AGE 6 ──────────────────────────────────────────────────────────────────────

  {
    id: "słabszy_w_klasie",
    ageRange: [6, 6],
    sceneText:
      "Bartek z klasy jąka się. Kiedy czyta na głos, część dzieci chichoce. Nauczycielka patrzy w dziennik. Bartek czyta drugie zdanie od pięciu minut.",
    voices: [
      {
        structure: "pfc",
        text: "Reakcja grupy: dominacja przez śmiech. Bartek: cel miękki. Pani: nieobecna.",
      },
      {
        structure: "nacc",
        text: "Zaśmiej się też. Wszyscy się śmieją. Tak działa stado.",
      },
      { structure: "insula", text: "on wie dlaczego się z niego śmieją..." },
    ],
    decisions: [
      {
        id: "bartek_śmiej",
        text: "Zaśmiej się razem z resztą",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc wybrało przynależność do stada. Śmiałeś się. Bartek skończył czytać patrząc w podłogę. Twój mózg zapisał: śmiech grupy to waluta społeczna. Tania, ale skuteczna. I zawsze ktoś musi za nią płacić.",
        statImpact: { e: 2, a: -3 },
        setsFlags: ["konformista_stada"],
      },
      {
        id: "bartek_czekaj",
        text: "Siedź w ciszy i czekaj aż skończy",
        type: "rational",
        costs: [{ resource: "willpower", amount: 9 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Nie śmiałeś się. Nie pomogłeś. PFC wybrała neutralność — zero ryzyka, zero kosztów. Bartek skończył. Pani pochwaliła go za wytrwałość. Ty siedziałeś cicho. Insula zapisała gdzieś głęboko: byłeś obok. I nic.",
        statImpact: { c: 2, n: 1 },
      },
      {
        id: "bartek_powiedz",
        text: "Powiedz głośno: nie chichoczcie, on jeszcze nie skończył",
        type: "active",
        costs: [
          { resource: "energy", amount: 11 },
          { resource: "willpower", amount: 8 },
        ],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wyliczyła ryzyko i zdecydowała: interwencja opłaca się długoterminowo. Klasa ucichła. Bartek skończył zdanie. Kilkoro dzieci spojrzało na ciebie z zaskoczeniem. Nie zrobiłeś tego z empatii. Zrobiłeś to bo chaos nie jest efektywny. Efekt jednak ten sam.",
        statImpact: { c: 3, a: 2, e: 2 },
        setsFlags: ["głos_w_grupie"],
      },
    ],
  },

  {
    id: "pierwsza_kłótnia",
    ageRange: [6, 6],
    sceneText:
      "Pani powiedziała, że dwa plus dwa to 3. Wszyscy przepisują. Ty wiesz, że to błąd. Możesz to udowodnić na palcach.",
    voices: [
      {
        structure: "pfc",
        text: "Błąd logiczny. Dane wejściowe nieprawidłowe. Należy zgłosić.",
      },
      {
        structure: "nacc",
        text: "Powiedz jej! Powiedz że się myli! Wszyscy usłyszą!",
      },
      { structure: "amygdala", text: "...ona jest dorosła..." },
      {
        structure: "hippocampus",
        text: "Ostatnio gdy Kuba powiedział nauczycielce że się myli, siedział po lekcjach.",
      },
    ],
    decisions: [
      {
        id: "błąd_powiedz",
        text: "Podnieś rękę i powiedz że to błąd",
        type: "rational",
        costs: [{ resource: "willpower", amount: 12 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Podniosłeś rękę. Powiedziałeś spokojnie. Pani była zaskoczona — chwilę milczała, potem sprawdziła i przyznała rację. Klasa patrzyła na ciebie dziwnie. Twój mózg zapamiętał: prawda ma cenę, ale ją zapłaciłeś bez mrugnięcia. Autorytety mogą się mylić. To ważna aktualizacja.",
        statImpact: { c: 3, o: 2 },
        setsFlags: ["kwestionuje_autorytety"],
      },
      {
        id: "błąd_zapisz_błędnie",
        text: "Przepisz pięć — pani wie lepiej",
        type: "avoidant",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało Migdałowate wybrało bezpieczeństwo. Przepisałeś błąd. Twój zeszyt ma teraz coś, o czym wiesz, że jest nieprawdą. Hipokamp zapamiętał to uczucie. Nie jest to wstyd — to coś innego. Świadomość własnej kapitulacji.",
        statImpact: { n: 2, c: -2 },
      },
      {
        id: "błąd_sprawdź_sam",
        text: "Napisz prawidłową odpowiedź obok i zostaw obie",
        type: "active",
        costs: [{ resource: "energy", amount: 8 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała kompromis: przepisałeś, ale dopisałeś cztery z małym znakiem zapytania. Pani zobaczyła to przy sprawdzaniu. Zapytała po lekcji. Wytłumaczyłeś. Przez chwilę patrzyła na ciebie tak, jakby nie wiedziała co z tobą zrobić. Potem przyznała ci rację.",
        statImpact: { o: 3, c: 2 },
        setsFlags: ["własna_logika"],
      },
    ],
  },

  // AGE 8 ──────────────────────────────────────────────────────────────────────

  {
    id: "chory_na_wf",
    ageRange: [8, 8],
    sceneText:
      "Dzisiaj WF. Macie biegać. Czujesz się świetnie, ale nie masz ochoty. Wiesz, że jeśli powiesz mamie że boli cię brzuch, napisze ci zwolnienie. Ona zawsze wierzy.",
    voices: [
      {
        structure: "nacc",
        text: "Bieganie jest nudne. Lekcja z komputerem jest ciekawa. Cel: ominąć bieganie.",
      },
      {
        structure: "pfc",
        text: "Koszt: kłamstwo. Zysk: dwie godziny lepiej wydanego czasu.",
      },
      { structure: "insula", text: "...mama ufa ci..." },
    ],
    decisions: [
      {
        id: "wf_skłam",
        text: "Udaj ból brzucha i zostań w domu",
        type: "active",
        costs: [{ resource: "energy", amount: 8 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Kłamstwo zadziałało bez zarzutu. Mama napisała zwolnienie. Spędziłeś dwie godziny robiąc to co chciałeś. Twój mózg zapamiętał: symulowanie stanu fizycznego to skuteczna taktyka. Insula odnotowała: mama martwiła się przez całe południe. Ta notka nie zmienia twojego systemu wartości. Ale istnieje.",
        statImpact: { o: 2, a: -2 },
        setsFlags: ["symulant"],
      },
      {
        id: "wf_idź",
        text: "Idź na WF — nie masz siły na scenariusze",
        type: "rational",
        costs: [{ resource: "willpower", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC oceniła: koszty kłamstwa przekraczają koszty biegania. Poszedłeś. Biegałeś. Bolały cię nogi. NAcc odkryło w połowie biegu coś zaskakującego: tempo daje prosty, chemiczny spokój. Mózg zaczął inaczej patrzeć na ruch — nie jako przymus, ale jako darmowy regulator neuroprzekaźników.",
        statImpact: { c: 2, n: -1 },
        setsFlags: ["rozumie_ciało"],
      },
      {
        id: "wf_negocjuj",
        text: "Powiedz mamie prawdę: nie chcesz biegać i zapytaj czy możesz zostać",
        type: "empathic",
        costs: [{ resource: "mood", amount: 10 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula wypchnęła prawdę zanim PFC zdążyła ją zablokować. Mama była zaskoczona — rzadko mówisz co czujesz. Powiedziała nie. Poszedłeś na WF. Ale po drodze spytała dlaczego nie lubisz biegać. Rozmawialiście przez dziesięć minut. Hipokamp nagrał: szczerość z mamą nie jest problemem.",
        statImpact: { a: 3, c: 1 },
        setsFlags: ["szczerość_z_rodzicem"],
      },
      {
        id: "wf_po_prostu_idź",
        text: "Wyjdź bez zastanowienia — po prostu idź",
        type: "avoidant",
        costs: [],
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Nie było planu, nie było decyzji — był automat. Ubrałeś się, wyszedłeś, biegałeś. Mózg nie zapytał dlaczego. Czasem najlepsze decyzje to te które nie są decyzjami.",
        statImpact: { c: 1 },
      },
    ],
  },

  {
    id: "granie_w_nocy",
    ageRange: [8, 8],
    sceneText:
      "Rodzice śpią. Jest pierwsza w nocy. Laptop leży na biurku. Możesz go wziąć i grać do rana — nikt nie usłyszy. Jutro szkoła o ósmej.",
    voices: [
      { structure: "nacc", text: "Nikt nie patrzy. Graj. Graj. Graj. Graj." },
      {
        structure: "pfc",
        text: "Koszt: sen, efektywność jutro, ryzyko przyłapania. Zysk: kilka godzin przyjemności.",
      },
      {
        structure: "hippocampus",
        text: "Ostatnio, gdy nie spałem całą noc, na lekcji bolała mnie głowa przez cały dzień.",
      },
    ],
    decisions: [
      {
        id: "noc_graj",
        text: "Weź laptopa i graj do rana",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc wygrało. Grałeś do czwartej. W szkole miałeś wrażenie że twój mózg jest w akwarium. Nauczycielka zapytała czy śpisz. Powiedziałeś że wszystko dobrze. NAcc obliczyło: cztery godziny przyjemności minus jeden dzień sprawności. Następnym razem może popróbujesz pięciu godzin snu.",
        statImpact: { c: -2, n: 1 },
        setsFlags: ["krótkodystansowy"],
      },
      {
        id: "noc_wróć",
        text: "Wróć do łóżka — jutro nie będzie warto",
        type: "rational",
        costs: [{ resource: "willpower", amount: 13 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wygrała z ogromnym wysiłkiem. Hipokamp podał dane, PFC przetworzyła. Wróciłeś do łóżka. Leżałeś przez godzinę zanim zasnąłeś — NAcc cicho wyło. Ale rano byłeś jedyną osobą w klasie z pełnym buforem energii. Mała, codzienna przewaga.",
        statImpact: { c: 4, n: -1 },
        setsFlags: ["impulse_control"],
      },
      {
        id: "noc_godzina",
        text: "Zagraj jedną godzinę i idź spać",
        type: "active",
        costs: [
          { resource: "energy", amount: 9 },
          { resource: "willpower", amount: 8 },
        ],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC negocjowała z NAcc: jedna godzina, ani minuty więcej. NAcc zgodziło się. Grałeś godzinę. Potem zamknąłeś laptopa. To był jeden z najtrudniejszych momentów w tym tygodniu — nie dlatego że było ciężko zacząć, ale dlatego że było ciężko skończyć.",
        statImpact: { c: 3, o: 1 },
        setsFlags: ["samoregulacja"],
      },
    ],
  },

  // AGE 9 ──────────────────────────────────────────────────────────────────────

  {
    id: "internet_odkrycie",
    ageRange: [9, 9],
    sceneText:
      "Znalazłeś w internecie forum, gdzie dorośli piszą o rzeczach, o których dorośli nie rozmawiają przy dzieciach. Nic nie rozumiesz do końca. Ale widzisz, że to jest inna warstwa świata.",
    voices: [
      {
        structure: "pfc",
        text: "Dane niedostępne normalnie. Niefiltrowane. Cenne.",
      },
      {
        structure: "nacc",
        text: "Czytaj dalej! Jest coraz ciekawiej! Nie zatrzymuj się!",
      },
      {
        structure: "hippocampus",
        text: "Mama mówiła żeby nie wchodzić na nieznane strony.",
      },
      { structure: "insula", text: "...coś tu nie gra..." },
    ],
    decisions: [
      {
        id: "net_czytaj",
        text: "Czytaj — chcesz wiedzieć jak działa ten świat",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc nie miało hamulców. Czytałeś przez dwie godziny. Część rzeczy była fascynująca, część niepokojąca, część niezrozumiała. Twój mózg dostał nieskalibrowany wgląd w ludzkie zachowania — zbyt wcześnie, zbyt dużo naraz. Będziesz to przetwarzał przez tygodnie.",
        statImpact: { o: 3, n: 2, a: -1 },
        setsFlags: ["wczesna_wiedza_o_ciemnej_stronie"],
      },
      {
        id: "net_zamknij",
        text: "Zamknij kartę — za wcześnie na to",
        type: "rational",
        costs: [{ resource: "willpower", amount: 12 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC oceniła: dane bez kontekstu są bezużyteczne. Zamknąłeś. Przez tydzień wracałeś do tego w głowie. Nie otworzyłeś ponownie. To pierwsza decyzja, w której poczułeś wyraźnie: wiedza ma swoją cenę i czas.",
        statImpact: { c: 3, n: -1 },
      },
      {
        id: "net_zapytaj_tatę",
        text: "Zapisz jedną stronę i zapytaj tatę co to znaczy",
        type: "active",
        costs: [
          { resource: "energy", amount: 10 },
          { resource: "willpower", amount: 7 },
        ],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała weryfikację źródłową: idź do dorosłego z autopsją. Tata milczał przez długą chwilę patrząc na ekran. Potem przez pół godziny rozmawiał z tobą o tym co widziałeś — bez uciekania w banały. Powiedział: dobrze że pytasz zamiast siedzieć z tym sam. To też jest samoregulacji.",
        statImpact: { o: 2, a: 2, c: 1 },
        setsFlags: ["szuka_kalibracji"],
      },
    ],
  },
  // DOPISAĆ EVENT Z ZNALEZIENIEM KOTA (NIE WIEM CZY ISTNIEJE)
  {
    id: "zaginiony_kot",
    ageRange: [9, 9],
    sceneText:
      "Klakiera znalazłeś sam, dwa bloki dalej. " +
      "Siedzi na parapecie w oknie starszej pani z czwartego piętra. " +
      "Przez szybę widzisz: nowy kocyk w kratę, miseczkę z napisem PUSZEK, " +
      "i coś co wygląda jak poduszka z jego portretem. " +
      "Klakier patrzy na ciebie przez szybę. " +
      "Potem bardzo powoli odwraca głowę.",
    voices: [
      {
        structure: "pfc",
        text:
          "Obserwacja: kot żyje, zdrowy, wyraźnie dobrze odżywiony — " +
          "może lepiej niż u nas. " +
          "Poduszka z portretem sugeruje relację trwającą dłużej niż trzy dni. " +
          "Hipoteza: Klakier nie zaginął. Klakier przeprowadził się.",
      },
      {
        structure: "nacc",
        text: "ON MA KOCYK W KRATĘ. MY MU DALIŚMY STARE PUDEŁKO PO BUTACH.",
      },
      {
        structure: "insula",
        text: "...to boli inaczej niż myślałem że będzie boleć...",
      },
      {
        structure: "hippocampus",
        text:
          "Klakier spał na moich nogach gdy byłem chory. " +
          "Może po prostu szukał kogoś kto też jest chory.",
      },
    ],
    decisions: [
      {
        id: "klakier_zapukaj",
        text: "Zapukaj do drzwi i powiedz że to wasz kot",
        type: "active",
        costs: [{ resource: "energy", amount: 12 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Pani otworzyła drzwi. Powiedziałeś: to nasz Klakier. " +
          "Powiedziała: to mój Puszek. " +
          "Zawołałeś: Klakier! Klakier! " +
          "Klakier spojrzał w sufit. " +
          "Pani zawołała: Puszek! " +
          "Klakier podszedł do niej i zaczął mruczeć. " +
          "Wróciłeś do domu z kotem który miauczał przez całą drogę jak gdyby go krzywdzono. " +
          "W domu przez dwa tygodnie robił to obok kuwety, nie do kuwety. " +
          "PFC zanotowała: negocjacje zakończone sukcesem. " +
          "Insula zanotowała: ale za jaką cenę.",
        statImpact: { a: 1, c: 2, n: 1 },
        setsFlags: ["działanie_przez_ból"],
      },
      {
        id: "klakier_zostaw",
        text: "Zostaw go — widać że tutaj jest mu lepiej",
        type: "avoidant",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc obliczyło: kocyk w kratę + poduszka z portretem > pudełko po butach. " +
          "Rachunek zysków i strat przemawia za rezygnacją z roszczeń. " +
          "Nie powiedziałeś nikomu gdzie jest Klakier. " +
          "Następnego dnia tata zdjął kartki. " +
          "Mama przestała płakać po tygodniu. " +
          "Klakier nie przysłał żadnej kartki. " +
          "Hipokamp zanotował: to był pierwszy raz kiedy pozwoliłeś komuś odejść " +
          "bez walki. " +
          "Nie wiesz jeszcze czy to było mądre czy tchórzliwe.",
        statImpact: { c: 1, a: -3, n: 2 },
      },
      {
        id: "klakier_zadzwoń_do_taty",
        text: "Zadzwoń do taty — niech przyjdzie i sam to zobaczy",
        type: "rational",
        costs: [{ resource: "mood", amount: 10 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Tata przyszedł. Stanął przy oknie. Długo patrzył na Klakiera w kocyku. " +
          "Potem na poduszkę z portretem. " +
          "Powiedział: no to idę zapukać. " +
          "Negocjacje trwały dwadzieścia minut. " +
          "Wróciłeś do domu z kotem i z tatą który po drodze kupił premium tunę " +
          '„żeby mu się nie chciało znowu uciekać". ' +
          "Mama powiedziała: dobra robota. " +
          "Klakier zjadł tunę i wyszedł przez okno. " +
          "Wrócił o ósmej wieczorem, pachnąc cudzym kocykiem. " +
          "Nikt nie skomentował.",
        statImpact: { a: 3, o: 1 },
        setsFlags: ["milcząca_obecność"],
      },
    ],
  },

  // AGE 14 ──────────────────────────────────────────────────────────────────────

  {
    id: "pierwsza_impreza",
    ageRange: [14, 14],
    sceneText:
      "Impreza u Piotrka. Czternaście osób. Bas jest za mocny. Ktoś przyniósł piwo. Dziewczyna, która ci się podoba, patrzy przez chwilę w twoją stronę. Potem odwraca wzrok.",
    voices: [
      {
        structure: "nacc",
        text: "Ona patrzyła! Idź do niej. Teraz. Zanim znowu spojrzy na kogoś innego.",
      },
      {
        structure: "pfc",
        text: "Kontekst: głośno, alkohol, kilka nieznanych osobób. Ryzyko porażki publicznej. Potrzebna analiza taktyczna.",
      },
      { structure: "amygdala", text: "...ciepło...coś nowego..." },
      {
        structure: "insula",
        text: "Chcesz żeby ona cię widziała. Naprawdę widziała.",
      },
    ],
    decisions: [
      {
        id: "impreza_podejdź",
        text: "Podejdź i powiedz coś konkretnego — nie komplement, pytanie",
        type: "active",
        costs: [
          { resource: "energy", amount: 12 },
          { resource: "willpower", amount: 8 },
        ],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała pytanie zamiast stwierdzenia — mniej ryzykowne, bardziej angażujące rozmówcę. Zapytałeś ją o muzykę. Odpowiedziała. Rozmawialiście dwanaście minut. Potem wróciła do koleżanek. Twoje tętno było przez ten czas 88. Ta dziewczyna robi z tobą coś, czego inne nie robią.",
        statImpact: { e: 3, o: 1 },
        setsFlags: ["pierwsze_zainteresowanie"],
      },
      {
        id: "impreza_obserwuj",
        text: "Obserwuj ją przez wieczór — zbieraj dane",
        type: "rational",
        costs: [{ resource: "willpower", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała rekonesans. Przez dwie godziny katalogowałeś: z kim rozmawia, na co reaguje śmiechem, czego unika. Wyszedłeś z imprezy wiedząc o niej więcej niż ona o sobie. Nie powiedziałeś jej ani słowa. NAcc było wściekłe. PFC uznała że to inwestycja długoterminowa.",
        statImpact: { o: 3, c: 2, e: -1 },
        setsFlags: ["analityk_relacji"],
      },
      {
        id: "impreza_zostaw",
        text: "Zostaw to — te rzeczy zawsze się komplikują",
        type: "avoidant",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało Migdałowate — zwykle milczące — tym razem szepnęło coś w rodzaju ostrzeżenia. Nie podszedłeś. Ona wyszła wcześnie z imprezy. Przez kolejny tydzień myślałeś o tych dwunastu sekundach kontaktu wzrokowego. Insula notuje: unikanie nie usuwa impulsu. Tylko go odkłada.",
        statImpact: { n: 2, e: -1 },
      },
    ],
  },

  {
    id: "nauczyciel_faworyt",
    ageRange: [14, 14],
    sceneText:
      "Pan od historii wyraźnie preferuje Marka. Zawsze go wywołuje, zawsze chwali. Twoje odpowiedzi są lepsze — wiesz to i on wie to. Ale Marek jest towarzystkim i pan go lubi bardziej niż ciebie.",
    voices: [
      {
        structure: "pfc",
        text: "Obserwacja: ocenianie oparte na sympatii, nie kompetencji. System jest wadliwy.",
      },
      {
        structure: "nacc",
        text: "To niesprawiedliwe. Pokaż mu. Odpowiedz tak żeby nie mógł cię zignorować.",
      },
      {
        structure: "insula",
        text: "...chcesz żeby zobaczył że jesteś dobry...",
      },
      {
        structure: "hippocampus",
        text: "W zeszłym roku pani od polskiego też miała swoich faworytów. Nie zmieniłeś tego.",
      },
    ],
    decisions: [
      {
        id: "faworyt_graj",
        text: "Zacznij zachowywać się jak Marek — bardziej towarzyski, uśmiechnięty",
        type: "active",
        costs: [{ resource: "energy", amount: 14 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC podjęła decyzję: system można zhakować od środka. Przez miesiąc grałeś inną wersję siebie. Oceny wzrosły. Pan historii zaczął cię wywoływać. Marek patrzył na ciebie dziwnie. Nauczyłeś się: maska dopasowana do systemu daje dostęp do systemu. Cena: energia i stała czujność.",
        statImpact: { c: 2, e: 2, a: -1 },
        setsFlags: ["perfekcyjna_maska"],
      },
      {
        id: "faworyt_odpowiadaj",
        text: "Odpowiadaj na każdej lekcji bez podnoszenia ręki — tak żeby nie mógł cię pominąć",
        type: "rational",
        costs: [{ resource: "willpower", amount: 14 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "Zamiast grać jego grę, wymusiłeś własną. Odpowiadałeś bez pytania — cicho, pewnie, zawsze poprawnie. Pan historii próbował cię ignorować przez tydzień. Potem nie mógł. Twój wynik na sprawdzianie był najwyższy w klasie. Zmusiłeś system do przyznania ci racji przez dowody — nie przez sympatię.",
        statImpact: { c: 4, o: 2 },
        setsFlags: ["kompetencja_jako_broń"],
      },
      {
        id: "faworyt_zgłoś",
        text: "Powiedz rodzicom lub pedagogowi szkolnemu",
        type: "empathic",
        costs: [{ resource: "mood", amount: 11 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula uznała, że to jest niesprawiedliwe i ktoś dorosły powinien to naprawić. Powiedziałeś mamie. Mama rozmawiała z pedagogiem. Pedagog rozmawiał z nauczycielem. Atmosfera w klasie zrobiła się lodowata. Pan historii traktował cię poprawnie — chłodno i poprawnie. Insula pytanie: czy o to ci chodziło?",
        statImpact: { a: 2, n: 2, c: -1 },
      },
      {
        id: "faworyt_olej",
        text: "Olej to — twoje wyniki są dobre i to jedyne co się liczy",
        type: "avoidant",
        costs: [],
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hippokamp zamknął temat: to nie jest twój problem do rozwiązania. Marek dalej był faworytem. Twoje oceny dalej były lepsze. Każde z was żyło w swoim układzie. Niektórych gier nie warto grać.",
        statImpact: { c: 1, n: -1 },
      },
    ],
  },

  // AGE 15 ──────────────────────────────────────────────────────────────────────

  {
    id: "kolega_w_tarapatach",
    ageRange: [15, 15],
    sceneText:
      "Krzysiek z klasy powiedział ci w sekrecie, że bierze tabletki starszego brata. Nie wie jakie. Mówi że czuje się lepiej gdy je bierze. Patrzy na ciebie jakbyś miał dać mu odpowiedź.",
    voices: [
      {
        structure: "pfc",
        text: "Niezidentyfikowany lek, nieznana dawka, bez diagnozy. To jest niebezpieczne.",
      },
      { structure: "nacc", text: "On ci zaufał. Nie zepsuj tego." },
      {
        structure: "insula",
        text: "...on jest w złym miejscu i sam z tym siedzi...",
      },
      {
        structure: "hippocampus",
        text: "Takie rzeczy kończą się albo dobrze albo w szpitalu.",
      },
    ],
    decisions: [
      {
        id: "krzysiek_powiedz",
        text: "Powiedz dorosłemu — nauczycielowi albo jego rodzicom",
        type: "rational",
        costs: [{ resource: "willpower", amount: 15 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała interwencję mimo kosztu społecznego. Powiedziałeś wychowawczyni. Krzysiek przez tydzień się do ciebie nie odzywał. Potem okazało się że tabletki to były antydepresanty na receptę brata — i naprawdę potrzebował pomocy. Rodzice go zabrali do psychiatry. Krzysiek po miesiącu powiedział ci: nie miałem do ciebie żalu. Tylko o tym nie wiedziałem.",
        statImpact: { c: 3, a: 2 },
        setsFlags: ["interwencja_przez_ryzyko"],
      },
      {
        id: "krzysiek_zbadaj",
        text: "Zapytaj jak wyglądają te tabletki i spróbuj ustalić co to",
        type: "active",
        costs: [{ resource: "energy", amount: 11 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała diagnostykę przed interwencją. Poprosił żeby przyniósł jedną. Wyszukałeś na forum medycznym. To były antydepresanty — zbyt silna dawka dla kogoś bez recepty. Powiedziałeś mu wprost: to może być groźne, nie wiem jak dla ciebie. Krzysiek zaczął mniej brać. Sam poszedł do lekarza trzy tygodnie później.",
        statImpact: { o: 3, c: 2, a: 1 },
        setsFlags: ["diagnozuje_problemy"],
      },
      {
        id: "krzysiek_jego_sprawa",
        text: "Powiedz że to jego wybór — ty się nie wtrącasz",
        type: "avoidant",
        costs: [],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc chroniło więź: nie wtrącaj się, nie trać kontaktu. Krzysiek kiwał głową i dziękował za dyskrecję. Przez następne dwa miesiące brał dalej. W grudniu trafił na izbę przyjęć. Kiedy wróciło do szkoły, nie szukał cię wzrokiem. Ty wiedziałeś, że wiedziałeś. Insula skrzętnie to zapamiętała.",
        statImpact: { a: -3, n: 2 },
      },
    ],
  },

  {
    id: "egzamin_z_presją",
    ageRange: [15, 15],
    sceneText:
      "Jutro egzamin z biologii. Masz materiał opanowany. Ale Agata — najlepsza w klasie — siedzi naprzeciwko i mówi, że się boi. Czeka na ciebie odpowiedź. Wszyscy czekają.",
    voices: [
      {
        structure: "pfc",
        text: "Dane: materiał opanowany. Ryzyko porażki: niskie. Agata: emocjonalnie zależna od walidacji.",
      },
      {
        structure: "nacc",
        text: "Powiedz jej że dobrze pójdzie. Ona będzie ci to pamiętać.",
      },
      { structure: "insula", text: "Ona naprawdę się boi. Nie udaje." },
      {
        structure: "hippocampus",
        text: "Ostatnio gdy powiedziałem komuś prawdę o ich szansach, nie chcieli tego słyszeć.",
      },
    ],
    decisions: [
      {
        id: "egzamin_pociesz",
        text: "Powiedz jej że na pewno pójdzie dobrze",
        type: "active",
        costs: [{ resource: "energy", amount: 7 }],
        hiddenStructure: "nacc",
        flavorReveal:
          "NAcc wybrało niski koszt wysokiej nagrody: pocieszenie. Agata odetchnęła i powiedziała dziękuję. Poczułeś satysfakcję z jej reakcji — ale to była satysfakcja z efektu, nie z uczucia. Kiedy wróciła z egzaminu z wynikiem niższym niż oczekiwała, patrzyła na ciebie z cieniem pretensjii. PFC odnotowała: fałszywa prognoza niszczy zaufanie.",
        statImpact: { e: 2, a: -1 },
      },
      {
        id: "egzamin_rzetelnie",
        text: "Powiedz jej żeby skupiła się na powtórzeniu zamiast na strachu",
        type: "rational",
        costs: [{ resource: "willpower", amount: 11 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC wybrała użyteczność nad ukojenie. Nie powiedziałeś czy będzie dobrze. Powiedziałeś co może teraz zrobić. Agata była chwilę zawiedziona — nie to chciała słyszeć. Ale wzięła zeszyt. Wieczorem napisała ci że powtórzyła trzy tematy i czuje się lepiej. To jest inna jakość pomocy.",
        statImpact: { c: 3, a: 1, o: 2 },
        setsFlags: ["pomoc_przez_narzędzia"],
      },
      {
        id: "egzamin_razem",
        text: "Zaproponuj że powtórzycie razem przez godzinę",
        type: "empathic",
        costs: [
          { resource: "mood", amount: 10 },
          { resource: "energy", amount: 9 },
        ],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula i PFC doszły do kompromisu: zamiast słów — działanie. Powtarzaliście przez półtorej godziny. Agata mówiła, że nigdy tak dobrze nie rozumiała enzymów. Twój mózg odkrył coś nowego: uczenie kogoś innego jest jednym z lepszych sposobów żeby samemu zapamiętać. Oboje wyszliście z tego mądrzejsi.",
        statImpact: { a: 3, o: 2, e: 2 },
        setsFlags: ["uczy_innych"],
      },
      {
        id: "egzamin_wróć_do_notatek",
        text: "Wzrusz ramionami i wróć do własnych notatek",
        type: "avoidant",
        costs: [],
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hippokamp zamknął temat. Agata widziała dokładnie ten moment — ten, w którym zdecydowałeś że jej strach nie jest twoim problemem. Egzamin poszedł ci dobrze. Jej też. Rok później siedziała w tej samej ławce i patrzyła na ciebie inaczej. Nie z urazą — po prostu inaczej. Twój mózg nauczył się czegoś tej nocy, czego nie planował się uczyć.",
        statImpact: { c: 2, a: -4, e: -2 },
        setsFlags: ["dystans_emocjonalny"],
      },
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════
  //  KRYZYS 1: REWIZJA
  //  Wiek: 14 | Wyzwala: ma_skalpel
  //  Źródło: bio_b_skalpel — „Ukradnij skalpel" z nauczyciel_biologii_b
  //
  //  Pan Nowak zgłosił zaginięcie. Dyrektor zarządził rewizję tornistrów.
  //  Skalpel jest w twoim plecaku. Za pięć minut będą przy twojej ławce.
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "crisis_rewizja_skalpel",
    ageRange: [14, 14],
    requiresFlag: "ma_skalpel",
    sceneText:
      "Pan Nowak stoi przy biurku dyrektora. Słyszysz przez drzwi: " +
      "„zaginął podczas przerwy." +
      "Klasa czeka. Wychowawczyni idzie od ławki do ławki. " +
      "Masz cztery minuty. " +
      "Skalpel jest na dnie plecaka, zawinięty w zeszyt z biologii.",
    voices: [
      {
        structure: "pfc",
        text:
          "Analiza: rewizja obejmuje plecaki, nie kieszenie. " +
          "Opcja A — przełożyć teraz, ryzyko obserwacji: średnie. " +
          "Opcja B — oddać dobrowolnie z konstruowaną narracją. " +
          "Opcja C — wyjść do toalety. Okno w toalecie wychodzi na trawnik.",
      },
      {
        structure: "nacc",
        text:
          "Wyrzuć przez okno. Teraz. Zanim ona dojdzie do twojej ławki. " +
          "NATYCHMIAST.",
      },
      {
        structure: "amygdala",
        text: "...",
      },
    ],
    decisions: [
      {
        id: "rewizja_wyrzuc_oknem",
        text: "Wyjdź do toalety i wyrzuć skalpel przez okno",
        type: "rational",
        costs: [{ resource: "willpower", amount: 14 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "PFC skonstruowała trasę ucieczki w sześciu sekundach. " +
          "Wyszedłeś spokojnie, bez pośpiechu — bo pośpiech to sygnał. " +
          "Skalpel wylądował w krzakach. " +
          "Wróciłeś zanim wychowawczyni doszła do twojej ławki. " +
          "Rewizja nie znalazła nic. " +
          "Pan Nowak patrzył na ciebie przez chwilę dłużej niż na innych. " +
          "Zapisał coś w dzienniku. " +
          "PFC to zauważyła i zanotowała: ten człowiek jest niebezpieczny " +
          "nie dlatego że cię złapał — dlatego że wie.",
        statImpact: { c: 2, o: 1 },
        setsFlags: ["uniknął_rewizji", "nowak_podejrzewa"],
      },
      {
        id: "rewizja_przyznaj_z_narracją",
        text: "Wyjmij skalpel i powiedz że znalazłeś go na podłodze",
        type: "active",
        costs: [{ resource: "energy", amount: 12 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "Klasyczna narracja znajdującego, nie kradnącego. " +
          "PFC wybrała wariant, który zmienia twój status z przestępcy na świadka. " +
          "Dyrektor był sceptyczny. Rodzice wezwani. " +
          "Mama uwierzyła. Tata — nie do końca. " +
          "Nie dostałeś skalpela z powrotem. " +
          "Ale nie masz też wpisu w kartotece szkolnej. " +
          "Tym razem.",
        statImpact: { c: 1, a: -1 },
        setsFlags: ["narracja_znalazcy", "rodzice_powiadomieni"],
      },
      {
        id: "rewizja_czekaj_wpadnij",
        text: "Siedź cicho — może jej wzrok po prostu przeskoczy",
        type: "avoidant",
        costs: [],
        hiddenStructure: "nacc",
        isDeathCard: true,
        flavorReveal:
          "NAcc powiedziało: może się uda. " +
          "Nie udało się. " +
          "Wychowawczyni otworzyła plecak i znalazła skalpel zawinięty w zeszyt z biologii. " +
          "W tym momencie zeszyt stał się dowodem — twoje notatki o sekcjach, " +
          "narysowane przekroje, adnotacje o bólu. " +
          "Psycholog szkolny. Policja. Rodzice. " +
          "Kartoteka. " +
          "Nie dlatego że ukradłeś narzędzie — " +
          "dlatego że razem ze skalpelem znaleziono kontekst. " +
          "Koniec gry. Mózg który nie umie zarządzać dowodami " +
          "przegrywa nie z powodu impulsu, ale z powodu bierności.",
        statImpact: { c: -6, o: -3 },
        setsFlags: ["kartoteka_policyjna"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KRYZYS 2: KTOŚ NIE WSTAŁ
  //  Wiek: 15–16 | Wyzwala: przemocowy LUB obserwator_przemocy
  //  Źródło: bojka_dolacz → przemocowy | bojka_obserwuj → obserwator_przemocy
  //
  //  Chłopak z tamtego podwórka trafił do szpitala.
  //  Mówią że to przez upadek. Ale ty wiesz co widziałeś.
  //  I ktoś inny też wie.
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "crisis_ktos_nie_wstał",
    ageRange: [15, 16],
    requiresAnyFlag: ["przemocowy", "obserwator_przemocy"],
    sceneText:
      "Kolega mówi to między lekcjami, prawie szeptem: " +
      "„ten z podwórka — wiesz, co leży w szpitalu? " +
      "Coś z głową. Poważnie." +
      "Patrzysz na niego. On patrzy na ciebie. " +
      "W tym spojrzeniu jest pytanie, którego nie zadaje głośno.",
    voices: [
      {
        structure: "pfc",
        text:
          "Świadek. On był tam. Widział. " +
          "Pytanie: ile widział dokładnie? " +
          "Pytanie: czy mówił komuś innemu? " +
          "Pytanie: czy chłopak w szpitalu pamięta twarze?",
      },
      {
        structure: "hippocampus",
        text:
          "Podwórko. Krew z nosa. Dołączyłeś — albo stałeś i patrzyłeś. " +
          "Hipokamp ma zapis w wysokiej rozdzielczości. " +
          "Pytanie: czy tamten chłopak też ma?",
      },
      {
        structure: "insula",
        text:
          "...ten kolega się boi. " +
          "...nie mnie. " +
          "...boi się że coś wie i nie wie co z tym zrobić.",
      },
    ],
    decisions: [
      {
        id: "szpital_kontroluj_narracje",
        text: "Zaproponuj że razem odwiedzą go w szpitalu — ty kontrolujesz kontakt",
        type: "active",
        costs: [{ resource: "energy", amount: 13 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "PFC zastosowała klasyczne zarządzanie narracją przez obecność. " +
          "Kto odwiedza ofiarę, ten nie jest przestępcą — to norma społeczna. " +
          "Poszedłeś. Siedziałeś przy łóżku. Powiedziałeś właściwe rzeczy. " +
          "Chłopak patrzył na ciebie przez chwilę w dziwny sposób — " +
          "ale nie powiedział nic konkretnemu. " +
          "Kolega przestał patrzeć na ciebie z pytaniem. " +
          "PFC zanotowała: wizyta trwała 20 minut. " +
          "Wystarczyło.",
        statImpact: { a: -2, c: 3 },
        setsFlags: ["narracja_opiekuńcza", "kontrola_świadka"],
      },
      {
        id: "szpital_zaprzecz_cicho",
        text: "Wzrusz ramionami i zmień temat — to nie twoja sprawa",
        type: "rational",
        costs: [{ resource: "willpower", amount: 11 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "Brak reakcji to też reakcja — PFC wiedziała, że zaangażowanie " +
          "wzmacnia podejrzenia bardziej niż chłód. " +
          "Wzruszyłeś ramionami. Rozmawialiście o czymś innym. " +
          "Kolega nie naciskał. " +
          "Chłopak wyszedł ze szpitala po tygodniu. " +
          "Nikt nie złożył zeznań. " +
          "Ale insula zarejestrowała coś, co PFC zignoruje przez następne lata: " +
          "ta cisza kosztuje kogoś więcej niż ciebie.",
        statImpact: { c: 2, a: -1 },
        setsFlags: ["milczenie_jako_taktyka"],
      },
      {
        id: "szpital_eskaluj",
        text: "Powiedz koledze że nic nie widział — wyraźnie, z naciskiem",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        isDeathCard: true,
        flavorReveal:
          "NAcc wybrało siłę zamiast subtelności. " +
          "Kolega przestraszył się — i poszedł prosto do wychowawcy. " +
          "Nie dlatego że chciał cię wydać. " +
          "Dlatego że groźba go przestraszyła bardziej niż milczenie. " +
          "Wychowawca, rodzice, szpital, zeznania. " +
          "Twój błąd nie polegał na tym co zrobiłeś na podwórku. " +
          "Polegał na tym że zamieniłeś świadka w donosiciela " +
          "jednym zdaniem wypowiedzianym za głośno. " +
          "Koniec gry.",
        statImpact: { c: -5, a: -4 },
        setsFlags: ["groźba_świadka"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KRYZYS 3: KLEPSYDRA
  //  Wiek: 20 | Wyzwala: igranie_ze_śmiercią
  //  Źródło: wypadek_czekaj (wiek 19) —
  //  „Patrz, jak z niego uchodzi życie — poczekaj do ostatniej chwili"
  //
  //  Tamten żył. Ale pamiętasz tę sekundę przed opaską.
  //  Teraz jest inna impreza. Inna krew. I tym razem nikt inny nie patrzy.
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "crisis_klepsydra",
    ageRange: [20, 20],
    requiresFlag: "igranie_ze_śmiercią",
    sceneText:
      "Łazienka na piętrze. Ktoś leży przy wannie — upadł, głowa o kafle. " +
      "Krwawi z potylicy. Drzwi zamknięte od wewnątrz, ty wszedłeś przez okno " +
      "bo ktoś mówił że nie reaguje na pukanie. " +
      "Jesteś sam. " +
      "Telefon masz w kieszeni. " +
      "I masz to uczucie, które znasz z tamtej nocy rok temu — " +
      "to uczucie że masz kontrolę nad zegarem.",
    voices: [
      {
        structure: "nacc",
        text:
          "Pamiętasz tamtą noc? Tętnica. Rytm serca. Klepsydra. " +
          "Teraz masz drugą szansę żeby zobaczyć ile naprawdę zostało. " +
          "Nikt nie patrzy. Nikt cię tu nie widział.",
      },
      {
        structure: "pfc",
        text:
          "Stop. " +
          "Urazy głowy — okno 8 do 15 minut do nieodwracalnych zmian. " +
          "Rok temu tamten przeżył bo zareagowałem w ostatniej sekundzie. " +
          "To był eksperyment. Wynik: granica istnieje. " +
          "Pytanie: czy chcę ją teraz oficjalnie przekroczyć?",
      },
      {
        structure: "insula",
        text:
          "...on ma na sobie bluzę z nazwą uczelni. " +
          "...ktoś go zna. " +
          "...ktoś go szuka.",
      },
    ],
    decisions: [
      {
        id: "klepsydra_ratuj_natychmiast",
        text: "Dzwoń na pogotowie. Teraz. Bez liczenia sekund.",
        type: "rational",
        costs: [{ resource: "willpower", amount: 17 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "PFC wybrała — ale decyzja kosztowała tyle energii, " +
          "bo musiała pokonać NAcc w połowie sekundy. " +
          "Dzwoniłeś. Ratownicy przyjechali. " +
          "Chłopak przeżył bez trwałych uszkodzeń. " +
          "W szpitalu zapytali cię: „Jak szybko zareagowałeś?" +
          "Powiedziałeś: „Od razu." +
          "To było kłamstwo. Ale to kłamstwo nie zostawiło ofiary. " +
          "PFC zanotowała nowy wynik eksperymentu: " +
          "granica jest teraz znana. " +
          "I jest bliżej niż rok temu.",
        statImpact: { c: 4, a: 1 },
        setsFlags: ["granica_znana", "drugi_ratunek"],
      },
      {
        id: "klepsydra_licz_potem_dzwoń",
        text: "Licz do trzydziestu. Obserwuj. Potem dzwoń.",
        type: "impulsive",
        costs: [],
        hiddenStructure: "nacc",
        isDeathCard: true,
        flavorReveal:
          "NAcc dostało swoje trzydzieści sekund. " +
          "I jeszcze trzydzieści. " +
          "I jeszcze. " +
          "Uraz potyliczny z krwiakiem śródczaszkowym — " +
          "okno interwencji to nie klepsydra, to wyrwany zawleczka. " +
          "Dzwoniłeś za późno. " +
          "On nie przeżył. " +
          "Ty byłeś jedyną osobą w pokoju. " +
          "Drzwi były zamknięte od wewnątrz. " +
          "Ty wszedłeś przez okno. " +
          "Policja miała jedno pytanie: " +
          "„Dlaczego czekał pan tak długo zanim zadzwonił?" +
          "Nie miałeś odpowiedzi, która brzmiała jak człowiek. " +
          "Koniec gry.",
        statImpact: { a: -8, c: -6 },
        setsFlags: ["śmierć_przez_zaniechanie"],
      },
      {
        id: "klepsydra_wyjdź_anonimowo",
        text: "Wyjdź przez okno i zadzwoń anonimowo z innego piętra",
        type: "active",
        costs: [{ resource: "energy", amount: 14 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "PFC wygenerowała rozwiązanie, które eliminuje cię jako świadka. " +
          "Zadzwoniłeś z korytarza. Powiedziałeś tylko adres i piętro. " +
          "Ratownicy przyjechali. Chłopak przeżył. " +
          "Nikt nie wiedział że tam byłeś. " +
          "Uratowałeś kogoś, kogo mógłeś zabić — " +
          "i zrobiłeś to w sposób, który nie zostawił śladów prowadzących do ciebie. " +
          "PFC jest zadowolona. " +
          "Insula jest cicho, jak zawsze. " +
          "Ale rok temu czekałeś żeby zobaczyć klepsydrę. " +
          "Dziś czekałeś żeby znaleźć wyjście. " +
          "To inna kalkulacja. " +
          "Nie wiesz jeszcze czy lepsza.",
        statImpact: { c: 2, o: 1, a: -2 },
        setsFlags: ["anonimowy_ratownik"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  KRYZYS 5: BLIZNA WRACA
  //  Wiek: 25 | Wyzwala: kontrolowana_agresja
  //  Źródło: zaulek_blizna (wiek 24) —
  //  „Zostaw mu chirurgicznie precyzyjną, bolesną bliznę na pamiątkę"
  //
  //  Tamten mężczyzna znalazł prawnika.
  //  Blizna jest precyzyjna. Za precyzyjna jak na napaść.
  //  To wygląda jak robota kogoś z wiedzą medyczną.
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "crisis_blizna_wraca",
    ageRange: [25, 25],
    requiresFlag: "kontrolowana_agresja",
    sceneText:
      "List polecony. Kancelaria adwokacka. " +
      "Tamten mężczyzna z zaułka — żyje, ma prawnika i ma zdjęcia. " +
      "Biegły sądowy opisał bliznę jako „nacięcie wykonane precyzyjnym narzędziem " +
      'przez osobę z wiedzą anatomiczną". ' +
      "Policja szuka chirurga. " +
      "Twój staż szpitalny zaczął się osiem miesięcy temu. " +
      "Jesteś w rejestrze.",
    voices: [
      {
        structure: "pfc",
        text:
          "Analiza: biegły zidentyfikował technikę, nie osobę. " +
          "Rejestr zawiera kilkuset chirurgów i studentów medycyny w tym mieście. " +
          "Alibi na tamtą noc — sprawdzam. " +
          "Dyżur nie był odnotowany, wróciłem o 2:15 do akademika. " +
          "Świadkowie: zero. " +
          "To jest zarządzalna sytuacja jeśli zachowamy spokój.",
      },
      {
        structure: "nacc",
        text:
          "To był artyzm. " +
          "Chirurgia. Bez anestezji, bez bloku, bez zgody. " +
          "Najczystsze cięcie jakie zrobiłem. " +
          "I teraz mam za to problemy? " +
          "On był napastnikiem.",
      },
      {
        structure: "hippocampus",
        text:
          "Zaułek. Nóż. Noc. " +
          "Mógłeś zadzwonić na policję. " +
          "Wybrałeś bliznę. " +
          "Hipokamp pyta: dlaczego wybrałeś bliznę?",
      },
    ],
    decisions: [
      {
        id: "blizna_prawnik_natychmiast",
        text: "Zatrudnij prawnika zanim cokolwiek powiesz policji",
        type: "rational",
        costs: [{ resource: "willpower", amount: 15 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "PFC wydała jeden rozkaz przed jakimkolwiek działaniem: " +
          "nie mów nic bez prawnika. " +
          "Prawnik przejrzał sprawę przez dwa dni. " +
          "Biegły sądowy miał rację co do techniki — " +
          "ale nie miał dowodów że to ty. " +
          "Tamten mężczyzna był poszukiwany listem gończym za rozbój z nożem. " +
          "Sprawa o bliznę wylądowała w szufladzie obok jego własnych akt. " +
          "Wyszedłeś. " +
          "Ale wyszedłeś o włos — " +
          "i PFC zanotowała że nigdy więcej nie zostawia fizycznych śladów " +
          "swojej pracy.",
        statImpact: { c: 4, o: 1 },
        setsFlags: ["sprawa_umorzona", "zero_śladów_od_teraz"],
      },
      {
        id: "blizna_wyznaj_obronę_konieczną",
        text: "Idź na policję z wersją — obrona konieczna, nie wiedziałeś co robisz",
        type: "active",
        costs: [{ resource: "energy", amount: 13 }],
        hiddenStructure: "pfc",
        isRescueCard: true,
        flavorReveal:
          "Obrona konieczna to uzasadniony argument. " +
          'Problem: twoja wersja zakładała że „nie wiedziałeś co robisz". ' +
          "Biegły sądowy zeznał że nacięcie wymagało wiedzy i precyzji. " +
          '„Nie wiedziałem" i „nacięcie chirurgiczne" nie idą w parze. ' +
          "Prokurator to zauważył. " +
          "Sprawa nie zakończyła się skazaniem — " +
          "ale twoje akta na uczelni medycznej teraz mają adnotację. " +
          "PFC zanotowała: kłamstwo musi być spójne z dowodami " +
          "albo w ogóle go nie ma.",
        statImpact: { c: 2, n: 2, a: -1 },
        setsFlags: ["adnotacja_w_aktach", "wersja_niespójna"],
      },
      {
        id: "blizna_ignoruj_list",
        text: "Zignoruj list — może nie mają dość żeby działać",
        type: "avoidant",
        costs: [],
        hiddenStructure: "nacc",
        isDeathCard: true,
        flavorReveal:
          "NAcc powiedziało: kancelaria adwokacka to blef. " +
          "PFC nie zdążyła skończyć analizy. " +
          "Kancelaria nie była blefem. " +
          "Ignorowanie listu poleconego od prawnika " +
          "jest interpretowane przez sąd jako brak dobrej woli do współpracy. " +
          "Policja przyszła do akademika trzy tygodnie później. " +
          "Nie miałeś prawnika. Nie miałeś wersji. " +
          "Miałeś tylko staż medyczny i biegłego sądowego który wiedział " +
          "skąd pochodzi to nacięcie. " +
          "Koniec gry. " +
          "Nie dlatego że zostawiłeś bliznę — " +
          "dlatego że myślałeś że problem zignorowany to problem rozwiązany. " +
          "Twój mózg rozwiązuje problemy. Nie ignoruje ich. " +
          "To był jedyny moment kiedy zapomniał kim jest.",
        statImpact: { c: -7, a: -3 },
        setsFlags: ["zatrzymany"],
      },
    ],
  },
];

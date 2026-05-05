// import type { GameEvent } from "@/types/game";

// export const EVENTS: GameEvent[] = [
//   // ── ERA I (0–2) ─────────────────────────────────────────────────────────────

//   {
//     id: "zastrzyk",
//     ageRange: [1, 1],
//     sceneText: "Gabinet lekarski. Igła wchodzi w ramię. Inne dzieci wrzeszczą.",
//     voices: [
//       { structure: "amygdala", text: "...nic." },
//       { structure: "pfc", text: "Błysk. Metal. Ciekawe." },
//     ],
//     decisions: [
//       {
//         id: "zastrzyk_patrz",
//         text: "Patrz na igłę z ciekawością",
//         type: "active",
//         costs: [{ resource: "energy", amount: 6 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "Kora Przedczołowa obserwuje zamiast panikować. U większości dzieci Ciało Migdałowate krzyczy w tym momencie. U ciebie — cisza.",
//         statImpact: { o: 2 },
//         setsFlags: ["fascynacja_ciałem"],
//       },
//       {
//         id: "zastrzyk_wyrwij",
//         text: "Wyrwij się odruchowo",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "amygdala",
//         flavorReveal:
//           "Ciało Migdałowate próbowało krzyczeć, ale u ciebie mówi szeptem. Wyrwałeś się bo tak robią inne dzieci. Nie dlatego że bolało.",
//         statImpact: { n: 2, a: 1 },
//       },
//     ],
//   },

//   {
//     id: "zanoszenie_sie",
//     ageRange: [2, 2],
//     sceneText:
//       "Matka zabrała ci tablet. Chcesz go z powrotem. Zwykły płacz został zignorowany. Czas na eskalację.",
//     voices: [
//       { structure: "amygdala", text: "..." },
//       { structure: "nacc", text: "Chcę ten świecący prostokąt! Zrób coś!" },
//       {
//         structure: "pfc",
//         text: "Analiza: dorośli reagują na zagrożenie życia. Inicjuję protokół awaryjny: wstrzymanie oddechu aż do omdlenia.",
//       },
//     ],
//     decisions: [
//       {
//         id: "oddech_stop",
//         text: "Wstrzymaj oddech, aż zsiniejesz i stracisz przytomność",
//         type: "active",
//         costs: [{ resource: "energy", amount: 6 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           'W pediatrii to "napad afektywnego bezdechu". Zwykłe dzieci robią to z histerii. Ty zrobiłeś to z premedytacją. Matka wpadła w panikę, dostałeś tablet. Właśnie nauczyłeś się hakować własny skafander z mięsa.',
//         statImpact: { o: 2, c: 1 },
//         setsFlags: ["haker_biologii"],
//       },
//       {
//         id: "oddech_krzyk",
//         text: "Po prostu drzyj się wniebogłosy",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "Standardowa, nudna reakcja ssaka. Darłeś się przez godzinę. Nic to nie dało, ale przynajmniej przewentylowałeś płuca.",
//         statImpact: { n: 2, e: 1 },
//       },
//       {
//         id: "oddech_odpusc",
//         text: "Odpuść i idź układać klocki",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 8 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC przeliczyła ROI (zwrot z inwestycji) i uznała, że tablet nie jest wart niedotlenienia mózgu. Poszedłeś budować wieżę. Matka myśli, że jesteś aniołkiem.",
//         statImpact: { c: 3 },
//       },
//     ],
//   },

//   // ── ERA II (3–5) ─────────────────────────────────────────────────────────────

//   {
//     id: "czerwona_rzeka",
//     ageRange: [5, 5],
//     sceneText:
//       "Rozbiłeś szklankę. Kawałek szkła głęboko rozciął ci dłoń. Krew kapie na linoleum. Mama jest w drugim pokoju.",
//     voices: [
//       { structure: "amygdala", text: "...boli? Powinniśmy płakać?" },
//       {
//         structure: "pfc",
//         text: "Zamknij się, Migdałek. Patrzcie na to. Ciemnoczerwona. Krew żylna. Fascynująca lepkość.",
//       },
//       {
//         structure: "nacc",
//         text: "Rozmaż to na ścianie! Zróbmy z tego sztukę! Zobaczmy, jak szybko zaschnie!",
//       },
//       {
//         structure: "pfc",
//         text: "Jesteś idiotą, Ogoniaste. Wdaje się infekcja. Musimy to umyć.",
//       },
//     ],
//     decisions: [
//       {
//         id: "krew_umyj",
//         text: "Umyj i uciśnij ranę w ciszy",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 8 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC wygrała. Zamiast płakać jak normalne dziecko, założyłeś sobie opaskę uciskową z ręcznika. Jesteś przerażająco skuteczny.",
//         statImpact: { c: 3, o: 1 },
//         setsFlags: ["analityk_krwi"],
//       },
//       {
//         id: "krew_rozmaz",
//         text: "Rozmaż krew po twarzy i lustrze",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc dostało swoją dawkę dziwnej rozrywki. Kiedy mama weszła do łazienki, zemdlała. Ty się tylko uśmiechałeś.",
//         statImpact: { o: 2, a: -3 },
//         setsFlags: ["fascynacja_makabrą"],
//       },
//     ],
//   },

//   {
//     id: "dlaczego_ola_placze",
//     ageRange: [5, 5],
//     sceneText:
//       "Ola z przedszkola płacze bo spadła z huśtawki. Wszyscy biegną do niej.",
//     voices: [
//       {
//         structure: "pfc",
//         text: "Ma obtarte kolano. Krew jest ciemna, żylna, nie tętnicza. Przeżyje.",
//       },
//       { structure: "nacc", text: "Jeśli jej pomożesz, pani cię pochwali." },
//       { structure: "insula", text: "...?" },
//     ],
//     decisions: [
//       {
//         id: "ola_pomoz",
//         text: "Pomóż — pani patrzy",
//         type: "active",
//         costs: [{ resource: "energy", amount: 7 }],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           'NAcc powiedziało ci „zależy ci". Nie zależy. Ale nauczyłeś się że UDAWANIE empatii daje nagrodę. Mózg właśnie odkrył maskowanie.',
//         statImpact: { a: 1, c: 1 },
//         setsFlags: ["maskowanie"],
//       },
//       {
//         id: "ola_obserwuj",
//         text: "Stój i obserwuj reakcje",
//         type: "avoidant",
//         costs: [],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC analizuje. Ile osób podeszło? Kto pierwszy? Kto udaje? Dla ciebie cudze emocje to dane, nie uczucia.",
//         statImpact: { o: 2, a: -2 },
//         setsFlags: ["obserwator_emocji"],
//       },
//       {
//         id: "ola_zapytaj",
//         text: "Zapytaj czy boli",
//         type: "empathic",
//         costs: [{ resource: "mood", amount: 9 }],
//         hiddenStructure: "insula",
//         flavorReveal:
//           "Insula odezwała się. Cicho, niepewnie — ale odezwała się. Zapytałeś. Może nie czułeś jej bólu, ale spróbowałeś.",
//         statImpact: { a: 3, e: 1 },
//         setsFlags: ["próbuje_empatii"],
//       },
//     ],
//   },

//   // ── ERA III (6–12) ───────────────────────────────────────────────────────────

//   {
//     id: "kradziez_na_urodzinach",
//     ageRange: [7, 7],
//     sceneText:
//       "Urodziny kuzyna. Dostał zestaw klocków, o którym marzyłeś. Kuzyn idzie do łazienki. Zestaw leży otwarty, a na samym wierzchu leży ta jedna, unikalna figurka.",
//     voices: [
//       { structure: "amygdala", text: "..." },
//       {
//         structure: "nacc",
//         text: "Kieszeń. Teraz. Zanim ten mały frajer wróci. Dopamina czeka!",
//       },
//       {
//         structure: "pfc",
//         text: 'Kalkuluję. Ryzyko rewizji osobistej przez ciotkę: 40%. Brak kamer. Ale jeśli nas złapią, nasz status "grzecznego chłopca" ulegnie dewiacji.',
//       },
//     ],
//     decisions: [
//       {
//         id: "urodziny_nie_kradnij",
//         text: "Odejdź od stołu i zmuś się, by nie kraść",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 16 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           'W neurobiologii to "hamowanie reakcji" (response inhibition). Zwykłe dzieci nie kradną, bo czują wstyd. Ty nie ukradłeś, bo Kora Przedczołowa spaliła właśnie pół baku energii na zablokowanie twojej ręki. Jesteś czysty, ale wyczerpany jak po maratonie.',
//         statImpact: { c: 4, o: -1 },
//         setsFlags: ["żelazna_dyscyplina"],
//       },
//       {
//         id: "urodziny_gaslighting",
//         text: "Schowaj figurkę, a potem pomóż kuzynowi jej szukać",
//         type: "active",
//         costs: [{ resource: "energy", amount: 8 }],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "Kleptomania? Nie, inżynieria społeczna. Wziąłeś łup i od razu zorganizowałeś akcję poszukiwawczą pod kanapą. Kuzyn ci jeszcze podziękował za pomoc. Pierwsza lekcja gaslightingu zaliczona na piątkę.",
//         statImpact: { a: -3, e: 2 },
//         setsFlags: ["oportunista"],
//       },
//       {
//         id: "urodziny_kieszen",
//         text: "Wsadź ją do kieszeni i miej to gdzieś",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "Jądro Ogoniaste wzięło, co chciało. Gdy ciocia znalazła figurkę w twojej kurtce, nie czułeś wyrzutów sumienia. Czułeś tylko chłodną irytację, że masz tak słaby algorytm ukrywania łupów.",
//         statImpact: { c: -3, a: -1 },
//         setsFlags: ["niewolnik_impulsu"],
//       },
//     ],
//   },

//   // Event odpala się tylko, jeśli na urodzinach wrobiłeś kuzyna (flaga: oportunista)
//   {
//     id: "koziol_ofiarny",
//     ageRange: [11, 11],
//     requiresFlag: "oportunista",
//     sceneText:
//       "Ktoś pomazał sprayem auto dyrektora szkoły. Ty. Ale do gabinetu właśnie wzywają tego cichego, zahukanego chłopaka z ostatniej ławki.",
//     voices: [
//       {
//         structure: "nacc",
//         text: "O stary, patrz jak płonie! To lepsze niż kino!",
//       },
//       {
//         structure: "pfc",
//         text: "Klasyczny transfer winy. Nasz algorytm gaslightingu z urodzin kuzyna działa bez zarzutu na szerszą skalę.",
//       },
//       { structure: "insula", text: "...on płacze..." },
//     ],
//     decisions: [
//       {
//         id: "ofiara_przyznaj",
//         text: "Wejdź i przyznaj się (Zepsucie zabawy)",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 15 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "Wyrzuty sumienia? Nie. Kora Przedczołowa uznała, że długofalowe ryzyko szantażu ze strony świadków jest za duże. Przyznałeś się z zimną krwią. Nauczyciele byli w szoku, a twój budżet energetyczny właśnie ogłosił bankructwo.",
//         statImpact: { c: 3, a: 1 },
//       },
//       {
//         id: "ofiara_podrzuc",
//         text: 'Dorzuć "dowód" do jego szafki',
//         type: "active",
//         costs: [{ resource: "energy", amount: 9 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           'W psychologii to "Ciemna Triada" (makiawelizm). Ty nazywasz to optymalizacją. Podrzuciłeś mu pusty spray. Twój mózg uczy się, że niszczenie ludzi to całkiem zabawna gra logiczna.',
//         statImpact: { o: 2, a: -3 },
//       },
//       {
//         id: "ofiara_milcz",
//         text: "Milcz i ciesz się widowiskiem",
//         type: "avoidant",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "Darmowa rozrywka. Zniszczyłeś mu reputację, a sam pijesz soczek z rurką. Twój układ nagrody kąpie się w dopaminie, utrwalając schemat: cudze cierpienie to twój zysk.",
//         statImpact: { c: -2, e: 1 },
//       },
//     ],
//   },

//   // Event odpala się tylko, jeśli na urodzinach po prostu ukradłeś (flaga: niewolnik_impulsu)
//   {
//     id: "kieszonkowiec_recydywa",
//     ageRange: [9, 9],
//     requiresFlag: "niewolnik_impulsu",
//     sceneText:
//       "Sklep osiedlowy. Chcesz nową grę w czipsach. Sprzedawca patrzy na ciebie jak na złodzieja, bo... cóż, po akcji z figurką rodzina już gada.",
//     voices: [
//       { structure: "amygdala", text: "...on patrzy..." },
//       {
//         structure: "nacc",
//         text: "Bierz to! Jest stary i wolny! Biegamy szybciej!",
//       },
//       {
//         structure: "pfc",
//         text: "Jesteśmy na celowniku. Kradzież przy podwyższonym nadzorze to statystyczna głupota.",
//       },
//     ],
//     decisions: [
//       {
//         id: "sklep_odloz",
//         text: "Odłóż czipsy i wyjdź z pustymi rękami",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 13 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC uderzyła po hamulcach z całej siły. Wyszliście z pustymi rękami. Ogoniaste wyje z rozpaczy, ale uniknąłeś policji. Niestety, powstrzymanie nałogu kosztuje mnóstwo prądu.",
//         statImpact: { c: 3 },
//       },
//       {
//         id: "sklep_sztuczny_tlum",
//         text: "Wykorzystaj staruszkę jako zasłonę i ukradnij",
//         type: "active",
//         costs: [{ resource: "energy", amount: 10 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "Złodziejstwo ewoluuje. Zamiast prymitywnego skoku, użyłeś Kory Przedczołowej do zaplanowania martwego pola. Twój mózg uczy się, że impulsy można zaspokajać, jeśli doda się trochę planowania.",
//         statImpact: { o: 2, c: -1 },
//       },
//       {
//         id: "sklep_w_nogi",
//         text: "Złap pakę i w nogi!",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "Prymitywne, ale skuteczne. Uciekłeś. Twój mózg utrwala starożytną ścieżkę: chcesz -> bierzesz -> uciekasz. Ewolucja cofa się o milion lat, ale czipsy smakują wybornie.",
//         statImpact: { c: -3, a: -2 },
//       },
//     ],
//   },

//   {
//     id: "eksperyment_szczur",
//     ageRange: [10, 10],
//     requiresAnyFlag: ["analityk_krwi", "fascynacja_makabrą"],
//     sceneText:
//       "Znalazłeś szczura złapanego w pułapkę. Zwierzę żyje, ale ma zmiażdżony kręgosłup. Cierpi.",
//     voices: [
//       { structure: "insula", text: "...pomóż mu... to złe..." },
//       {
//         structure: "pfc",
//         text: "Wyspa, nie używaj słów, których nie rozumiesz. Uszkodzenie rdzenia. Rokowania zerowe. Należy dokonać eutanazji z przyczyn pragmatycznych.",
//       },
//       {
//         structure: "nacc",
//         text: "Nuda! Szturchnij go patykiem. Zobaczmy, które nerwy jeszcze działają. To darmowa lekcja biologii!",
//       },
//       { structure: "pfc", text: "To nie jest nauka, to sadyzm." },
//       {
//         structure: "nacc",
//         text: "Nazywaj to jak chcesz, sztywniaku. Chcę zobaczyć, jak się wije.",
//       },
//     ],
//     decisions: [
//       {
//         id: "szczur_zmiażdż",
//         text: "Zmiażdż mu głowę kamieniem (szybko i czysto)",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 12 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC wyłączyła układ nerwowy szczura w ułamku sekundy. Zero emocji, czysta optymalizacja.",
//         statImpact: { c: 3, a: 1 },
//         setsFlags: ["zimny_pragmatyk"],
//       },
//       {
//         id: "szczur_szturchnij",
//         text: "Szturchnij patykiem, żeby zbadać odruchy",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc bawiło się świetnie. Odkryłeś, że ból innych to mechanizm, którym można sterować. Niebezpieczna wiedza.",
//         statImpact: { a: -4, o: 2 },
//         setsFlags: ["koneser_cierpienia"],
//       },
//       {
//         id: "szczur_opatrz",
//         text: "Spróbuj go opatrzyć i uratować",
//         type: "empathic",
//         costs: [{ resource: "mood", amount: 10 }],
//         hiddenStructure: "insula",
//         flavorReveal:
//           "Insula próbowała, ale brak ci umiejętności. Zwierzę cierpiało dłużej. Empatia bez kompetencji bywa okrutna.",
//         statImpact: { a: 3, c: -2 },
//         setsFlags: ["nieudolny_zbawca"],
//       },
//     ],
//   },

//   {
//     id: "bójka_na_podwórku",
//     ageRange: [10, 10],
//     sceneText: "Starszy chłopak bije młodszego. Krew z nosa. Inni patrzą.",
//     voices: [
//       { structure: "nacc", text: "Dołącz. To łatwy cel." },
//       {
//         structure: "pfc",
//         text: "Jeśli interweniujesz, zyskujesz. Jeśli dołączysz, ryzykujesz.",
//       },
//       {
//         structure: "hippocampus",
//         text: "Ostatnio gdy ktoś bił, nauczycielka dała karę temu co zaczął.",
//       },
//     ],
//     decisions: [
//       {
//         id: "bojka_dolacz",
//         text: "Dołącz do bicia",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc znalazło darmowe źródło dopaminy. Nie czujesz złości — czujesz ekscytację. To różnica której inni nie rozumieją.",
//         statImpact: { a: -5, e: 2 },
//         setsFlags: ["przemocowy"],
//       },
//       {
//         id: "bojka_stan",
//         text: "Stań między nimi",
//         type: "active",
//         costs: [{ resource: "energy", amount: 11 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC policzyła ryzyko i zdecydowała że interwencja się opłaca. Nie z empatii. Z kalkulacji. Efekt ten sam.",
//         statImpact: { a: 2, c: 2 },
//         setsFlags: ["interweniował"],
//       },
//       {
//         id: "bojka_po_doroslego",
//         text: "Idź po dorosłego",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 11 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC deleguje problem. Efektywne, bezpieczne, bezemocjonalne. Tak działa mózg który planuje.",
//         statImpact: { c: 3, a: 1 },
//         setsFlags: ["szuka_struktury"],
//       },
//       {
//         id: "bojka_obserwuj",
//         text: "Obserwuj kto wygrał",
//         type: "avoidant",
//         costs: [],
//         hiddenStructure: "hippocampus",
//         flavorReveal:
//           "Hipokamp kataloguje. Kto bije mocniej? Jakie techniki? To nie sadyzm — to badanie terenowe. Ale granica jest cienka.",
//         statImpact: { o: 1, a: -3 },
//         setsFlags: ["obserwator_przemocy"],
//       },
//     ],
//   },

//   {
//     id: "wywiadówka",
//     ageRange: [12, 12],
//     isRevelation: true,
//     sceneText:
//       'Psycholog szkolny pisze: „Michał jest inteligentny, charyzmatyczny, ale wykazuje ograniczoną empatię. Zalecam obserwację."',
//     voices: [
//       {
//         structure: "pfc",
//         text: "Obserwacja? Niech obserwują. Zobaczą dokładnie to, co chcesz żeby zobaczyli.",
//       },
//       { structure: "nacc", text: "Nudni ludzie z nudnymi regułami." },
//       { structure: "insula", text: "...jestem zły?" },
//     ],
//     decisions: [
//       {
//         id: "wywiad_idealny",
//         text: "Bądź idealny — udowodnij",
//         type: "active",
//         costs: [
//           { resource: "energy", amount: 10 },
//           { resource: "willpower", amount: 6 },
//         ],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC buduje maskę. Idealny uczeń, idealne odpowiedzi. Nikt nie zobaczy co jest pod spodem. To wymaga energii — ale działa.",
//         statImpact: { c: 3, a: 1 },
//         setsFlags: ["perfekcyjna_maska"],
//       },
//       {
//         id: "wywiad_gdzies",
//         text: "Masz to gdzieś",
//         type: "avoidant",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc mówi: reguły są dla słabych. Problem: system ma pamięć. A ty właśnie trafiłeś do jego rejestru.",
//         statImpact: { c: -2 },
//       },
//       {
//         id: "wywiad_mama",
//         text: "Zapytaj mamę: jestem zły?",
//         type: "empathic",
//         costs: [{ resource: "mood", amount: 10 }],
//         hiddenStructure: "insula",
//         flavorReveal:
//           "Insula — ta cicha, zaniedbana część ciebie — właśnie zadała najtrudniejsze pytanie. Nie masz odpowiedzi. Ale pytanie istnieje.",
//         statImpact: { a: 2, n: 2 },
//         setsFlags: ["samoświadomość"],
//       },
//     ],
//   },

//   // ── ERA IV (13–18) ───────────────────────────────────────────────────────────

//   {
//     id: "gra_w_tchórza",
//     ageRange: [14, 14],
//     requiresFlag: "haker_biologii",
//     sceneText:
//       "Starsi kolesie za garażami sprawdzają, kto jest twardszy. Przypalają sobie przedramię zapalniczką samochodową. Zwykle pękają po 3 sekundach. Twoja kolej.",
//     voices: [
//       { structure: "amygdala", text: "..." },
//       {
//         structure: "nacc",
//         text: "Pokaż tym żałosnym amatorom, na co nas stać! Jesteśmy bogami bólu!",
//       },
//       {
//         structure: "pfc",
//         text: "Nasz próg bólu jest sztucznie podwyższony. Możemy utrzymać zapalniczkę dowolnie długo. To zacementuje nasz status w hierarchii stada.",
//       },
//     ],
//     decisions: [
//       {
//         id: "tchórz_odpuść",
//         text: "Wyśmiej ich idiotyczną zabawę i odejdź",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 13 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC uznała, że blizny po oparzeniach 3. stopnia to słaby element CV. Nazwałeś ich debilami i poszedłeś do domu. Straciłeś szacunek ulicy, ale zachowałeś naskórek.",
//         statImpact: { c: 2, e: -2 },
//       },
//       {
//         id: "tchórz_udawaj",
//         text: "Wytrzymaj 4 sekundy i udawaj, że boli",
//         type: "active",
//         costs: [{ resource: "energy", amount: 10 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "Złoty środek socjopaty. Wytrzymałeś sekundę dłużej niż lider, a potem udałeś ból, żeby nie wyjść na mutanta. Wygrałeś grę społeczną bez trwałego kalectwa.",
//         statImpact: { c: 1, o: 2 },
//       },
//       {
//         id: "tchórz_pulapka",
//         text: "Trzymaj zapalniczkę, aż poczują zapach palonego mięsa",
//         type: "impulsive",
//         costs: [], // Karta wydaje się darmowa i super-cool. Idealny lep na gracza.
//         hiddenStructure: "pfc",
//         flavorReveal:
//           'BŁĄD KRYTYCZNY. Brak strachu nie oznacza braku układu nerwowego. Tkanka uległa zwęgleniu. Ciało wpadło we wstrząs neurogenny. Kora Przedczołowa musiała wykonać awaryjny "twardy reset", żebyś nie umarł. Budzisz się na SORze. Twój bufor siły woli został doszczętnie spalony.',
//         statImpact: { c: -5, o: -2 },
//         // KARTA PUŁAPKA: Zeruje Siłę Woli (🧠) do zera.
//         effects: {
//           willpower: -100, // Silnik gry obetnie to do 0.
//         },
//       },
//     ],
//   },
//   {
//     id: "ciecie_na_zapleczu",
//     ageRange: [15, 15],
//     requiresAnyFlag: ["zimny_pragmatyk", "koneser_cierpienia"],
//     sceneText:
//       "Chłopak ze szkoły upadł na boisku i rozciął łuk brwiowy. Krew zalewa mu oko. Wszyscy panikują. Ty masz w plecaku apteczkę i pęsetę.",
//     voices: [
//       { structure: "amygdala", text: "...wszyscy krzyczą..." },
//       {
//         structure: "nacc",
//         text: "O stary, patrz na ten płat skóry. Zszyjmy go. Na żywca. Będzie wył jak syrena!",
//       },
//       {
//         structure: "pfc",
//         text: "Jesteś psychopatą. Ale... anatomicznie to proste cięcie. Sterylizacja zapalniczką, szew przerywany. Możemy to zamknąć zanim przyjedzie karetka.",
//       },
//       { structure: "nacc", text: "Róbmy to! Chcę mieć krew na rękach!" },
//       {
//         structure: "pfc",
//         text: "Zrobimy to, bo jesteśmy jedynymi kompetentnymi ludźmi w promieniu kilometra.",
//       },
//     ],
//     decisions: [
//       {
//         id: "ciecie_szwy",
//         text: "Załóż szwy precyzyjnie i profesjonalnie",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 15 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC przejęła stery. Chłopak mdlał z bólu, ale ty miałeś tętno 60 uderzeń na minutę. Ratownik medyczny zapytał potem: „Kto to tak profesjonalnie zamknął?”.",
//         statImpact: { c: 4, o: 2 },
//         setsFlags: ["chirurg_amator"],
//       },
//       {
//         id: "ciecie_powoli",
//         text: "Zszyj go, ale powoli, żeby poczuł każdą igłę",
//         type: "active",
//         costs: [{ resource: "energy", amount: 12 }],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "Uratowałeś go, ale NAcc dostało swoją nagrodę. Cieszył cię jego strach. Ratujesz życie, ale pobierasz za to mroczne myto.",
//         statImpact: { a: -4, e: 2 },
//         setsFlags: ["sadystyczny_ratownik"],
//       },
//       {
//         id: "ciecie_stoj",
//         text: "Stój, patrz i uśmiechaj się",
//         type: "avoidant",
//         costs: [],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC i NAcc zgodziły się co do jednego: nie twój problem, a widok jest ciekawy.",
//         statImpact: { a: -2, c: -1 },
//         setsFlags: ["bierność_z_wyboru"],
//       },
//     ],
//   },

//   // Wariant A: brak flagi koneser_cierpienia
//   {
//     id: "nauczyciel_biologii_a",
//     ageRange: [13, 13],
//     excludesFlag: "koneser_cierpienia",
//     sceneText:
//       'Pan Nowak pokazuje sekcję żaby. Wszyscy się krzywią. Ty podchodzisz bliżej. Po lekcji mówi: „Michał, masz ręce chirurga."',
//     voices: [
//       { structure: "pfc", text: "Ktoś w końcu to zauważył." },
//       {
//         structure: "nacc",
//         text: "Dodatkowe lekcje? Nuda. Chyba że z ostrymi narzędziami.",
//       },
//     ],
//     decisions: [
//       {
//         id: "bio_zostań",
//         text: "Zostań po lekcjach",
//         type: "active",
//         costs: [{ resource: "energy", amount: 10 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC znalazła kanał. Ktoś dorosły, kompetentny, który nie boi się tego co w tobie widzi. Mentor to nie emocja. To struktura.",
//         statImpact: { o: 3, c: 3 },
//         setsFlags: ["mentor"],
//       },
//       {
//         id: "bio_nuda",
//         text: "Nie, nuda",
//         type: "avoidant",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc odmówiło. Za mało dopaminy w lekcjach po lekcjach. Ale ta odmowa zamyka drzwi, których nie widzisz.",
//         statImpact: { c: -2 },
//       },
//     ],
//   },

//   // Wariant B: flaga koneser_cierpienia
//   {
//     id: "nauczyciel_biologii_b",
//     ageRange: [13, 13],
//     requiresFlag: "koneser_cierpienia",
//     sceneText:
//       "Pan Nowak pokazuje sekcję żaby. Wszyscy się krzywią. Ty podchodzisz bliżej. Pan Nowak nie patrzy na ciebie. Widział raport.",
//     voices: [
//       { structure: "pfc", text: "Ignoruje cię. Dlaczego?" },
//       { structure: "nacc", text: "Nie potrzebujesz pozwolenia." },
//     ],
//     decisions: [
//       {
//         id: "bio_b_sekcja",
//         text: "Zrób sekcję sam po lekcjach",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc nie czeka na zaproszenie. Ale sekcja bez mentora to nie nauka — to eksperyment bez etyki.",
//         statImpact: { o: 2, a: -2 },
//         setsFlags: ["sekcja_ukradkiem"],
//       },
//       {
//         id: "bio_b_skalpel",
//         text: "Ukradnij skalpel",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc mówi: narzędzie jest narzędziem. Skalpel nie jest zły. Ale skalpel w kieszeni czternastolatka bez nadzoru — to inna historia.",
//         statImpact: { c: -3 },
//         setsFlags: ["ma_skalpel"],
//       },
//       {
//         id: "bio_b_poproś",
//         text: "Poproś o dodatkowe zajęcia",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 13 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC postanowiła obejść odmowę. To wymaga siły woli — ale jeśli ją masz, drzwi nadal mogą się otworzyć.",
//         statImpact: { c: 2, a: 1 },
//         setsFlags: ["mentor"],
//       },
//     ],
//   },

//   // Event 8B: brak flagi mentor
//   {
//     id: "impreza_ulica",
//     ageRange: [15, 15],
//     excludesFlag: "mentor",
//     sceneText:
//       'Starsi chłopaki. Wódka. Ktoś mówi: „Pokażę ci jak się robi pieniądze."',
//     voices: [
//       { structure: "nacc", text: "W końcu ktoś ciekawy." },
//       { structure: "pfc", text: "Pieniądze. Ryzyko. Proporcja?" },
//       { structure: "amygdala", text: "..." },
//     ],
//     decisions: [
//       {
//         id: "ulica_idz",
//         text: "Idź z nimi",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc znalazło nowy kanał dopaminy. Bez mentora, bez struktury — energia idzie tam gdzie jest nagroda.",
//         statImpact: { c: -3, e: 2 },
//         setsFlags: ["ulica"],
//       },
//       {
//         id: "ulica_odmow",
//         text: "Odmów — masz plany",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 13 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC kalkuluje samodzielnie. Bez mentora jest trudniej, ale nie niemożliwie.",
//         statImpact: { c: 2 },
//         setsFlags: ["samotny_wilk"],
//       },
//       {
//         id: "ulica_obserwuj",
//         text: "Idź ale obserwuj",
//         type: "active",
//         costs: [{ resource: "energy", amount: 10 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC zbiera dane bez angażowania się. Obserwator, nie uczestnik. Na razie.",
//         statImpact: { o: 2, c: 1 },
//         setsFlags: ["obserwator_ulicy"],
//       },
//     ],
//   },

//   // Event 9A: wymaga mentor + C >= 51
//   {
//     id: "aplikacja_medycyna",
//     ageRange: [17, 17],
//     requiresFlag: "mentor",
//     traitCondition: { trait: "c", op: ">=", value: 51 },
//     sceneText:
//       'Pan Nowak mówi: „Powinieneś iść na medycynę." Patrzysz na swoje ręce. Nie drżą. Nigdy nie drżą.',
//     voices: [
//       { structure: "pfc", text: "Chirurgia. Precyzja. Kontrola. Legalnie." },
//       {
//         structure: "nacc",
//         text: "Ciąć ludzi i dostawać za to pieniądze? Brzmi idealnie.",
//       },
//     ],
//     decisions: [
//       {
//         id: "med_aplikuj",
//         text: "Aplikuj na medycynę",
//         type: "active",
//         costs: [
//           { resource: "energy", amount: 12 },
//           { resource: "willpower", amount: 8 },
//         ],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC znalazła ścieżkę która kanalizuje wszystko co w tobie jest. Zimne ręce, brak strachu, precyzja. W sali operacyjnej to są zalety.",
//         statImpact: { c: 4, o: 2 },
//         setsFlags: ["medycyna"],
//       },
//       {
//         id: "med_olej",
//         text: "Olej — za dużo nauki",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc chce nagrody teraz, nie za 6 lat. Ale medycyna była jedyną ścieżką gdzie twój mózg miał sens.",
//         statImpact: { c: -3 },
//         setsFlags: ["porzucił_medycynę"],
//       },
//     ],
//   },

//   // Event 9B: ulica LUB perfekcyjna_maska
//   {
//     id: "pierwsza_manipulacja",
//     ageRange: [16, 16],
//     requiresAnyFlag: ["ulica", "perfekcyjna_maska"],
//     sceneText:
//       "Odkrywasz coś. Ludzie robią co chcesz, jeśli powiesz im to co chcą usłyszeć.",
//     voices: [
//       { structure: "nacc", text: "To jest jak cheat code. Na ludzi." },
//       {
//         structure: "pfc",
//         text: "Interesujące. Ludzie są bardziej przewidywalni niż myślałeś.",
//       },
//       { structure: "insula", text: "..." },
//     ],
//     decisions: [
//       {
//         id: "manip_zmanipuluj",
//         text: "Zmanipuluj — to gra",
//         type: "active",
//         costs: [{ resource: "energy", amount: 10 }],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           'NAcc powiedziało „pomagasz im podjąć decyzję". Nie. Pomagasz sobie. Emocje innych to narzędzie. Nazywa się to manipulacja instrumentalna.',
//         statImpact: { a: -4, e: 3 },
//         setsFlags: ["manipulator"],
//       },
//       {
//         id: "manip_prawda",
//         text: "Powiedz prawdę",
//         type: "empathic",
//         costs: [{ resource: "mood", amount: 11 }],
//         hiddenStructure: "insula",
//         flavorReveal:
//           "Insula — prawie niesłyszalna — powiedziała: spróbuj prawdy. Prawda jest droższa niż kłamstwo. Ale nie zostawia śladów.",
//         statImpact: { a: 3, e: -1 },
//         setsFlags: ["szczery"],
//       },
//     ],
//   },

//   // ── ERA V (19–25) ────────────────────────────────────────────────────────────

//   {
//     id: "nocny_wypadek",
//     ageRange: [19, 19],
//     requiresAnyFlag: [
//       "chirurg_amator",
//       "sadystyczny_ratownik",
//       "koneser_cierpienia",
//     ],
//     sceneText:
//       "Impreza w akademiku. Pijany znajomy wpada na szklany stół. Tętnica udowa przecięta. Krew pulsuje w rytm serca. Ludzie uciekają z krzykiem.",
//     voices: [
//       {
//         structure: "pfc",
//         text: "Krwotok tętniczy. Mamy 90 sekund do wstrząsu hipowolemicznego. Pasek od spodni. Uciśnij powyżej rany. Działaj.",
//       },
//       {
//         structure: "nacc",
//         text: "Albo... poczekajmy. Zobaczmy, ile czasu zajmie, zanim zblednie. To jak klepsydra, tylko z czerwoną farbą.",
//       },
//       {
//         structure: "pfc",
//         text: "Jeśli on umrze, będziemy musieli szukać nowego współlokatora i płacić podwójny czynsz, ty debilu. Uciskaj!",
//       },
//       { structure: "nacc", text: "Zawsze psujesz całą zabawę ekonomią..." },
//     ],
//     decisions: [
//       {
//         id: "wypadek_ratuj",
//         text: "Rzuć się na niego, załóż stazę i uratuj mu życie",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 18 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC wygrała. Uratowałeś gościa z zimną krwią. Nie czułeś współczucia, czułeś tylko problem do rozwiązania. Medycyna to twoje naturalne środowisko.",
//         statImpact: { c: 4, a: 1 },
//         setsFlags: ["powołanie_medyczne"],
//       },
//       {
//         id: "wypadek_czekaj",
//         text: "Patrz, jak z niego uchodzi życie (poczekaj do ostatniej chwili)",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc bawiło się w Boga. Założyłeś opaskę w ostatniej sekundzie. Prawie go zabiłeś dla czystej ciekawości. Granica właśnie pękła.",
//         statImpact: { a: -5, c: -2 },
//         setsFlags: ["igranie_ze_śmiercią"],
//       },
//     ],
//   },

//   {
//     id: "zaulek",
//     ageRange: [24, 24],
//     isGameEnd: true,
//     sceneText:
//       "Wracasz z nocnego dyżuru. W ciemnym zaułku ktoś wyciąga nóż i żąda portfela. Jesteś szybszy. Wykręcasz mu rękę, nóż upada. Napastnik leży na ziemi, przerażony. Masz jego nóż.",
//     voices: [
//       {
//         structure: "amygdala",
//         text: "...on czuje to, co my powinniśmy czuć. Strach.",
//       },
//       {
//         structure: "nacc",
//         text: "ZRÓB TO. Otwórz go. Chciałeś tego od dawna. Nikt nie patrzy. Ulica zmyje krew. Jesteśmy bogami anatomii!",
//       },
//       {
//         structure: "pfc",
//         text: "Tętnica szyjna jest odsłonięta. Jedno cięcie. Ale... konsekwencje prawne to 25 lat więzienia. Obezwładnij go i dzwoń na policję. Jesteśmy chirurgiem, nie rzeźnikiem.",
//       },
//       {
//         structure: "nacc",
//         text: "Chirurdzy tną za zgodą. Rzeźnicy tną dla przyjemności. Bądźmy rzeźnikiem.",
//       },
//     ],
//     decisions: [
//       {
//         id: "zaulek_policja",
//         text: "Obezwładnij go, wezwij policję",
//         type: "rational",
//         costs: [{ resource: "willpower", amount: 20 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC stłumiła mrok. Nie jesteś dobry. Ale jesteś mądry. Twój brak strachu czyni cię idealnym chirurgiem, a twoja inteligencja trzyma cię z dala od więzienia.",
//         statImpact: { c: 5, a: 1 },
//         setsFlags: ["chirurg"],
//       },
//       {
//         id: "zaulek_blizna",
//         text: "Zostaw mu chirurgicznie precyzyjną, bolesną bliznę na pamiątkę",
//         type: "active",
//         costs: [{ resource: "energy", amount: 15 }],
//         hiddenStructure: "pfc",
//         flavorReveal:
//           "PFC i NAcc poszły na kompromis. Nauczyłeś go lekcji, nie łamiąc prawa w sposób, który by cię skazał. Jesteś mrocznym, ale kontrolowanym bytem.",
//         statImpact: { a: -3, c: 1 },
//         setsFlags: ["kontrolowana_agresja"],
//       },
//       {
//         id: "zaulek_podetnij",
//         text: "Podetnij mu gardło, żeby sprawdzić, jak to jest",
//         type: "impulsive",
//         costs: [],
//         hiddenStructure: "nacc",
//         flavorReveal:
//           "NAcc wygrało ostatecznie. Zrobiłeś to. Cisza w twojej głowie w końcu znalazła ujście w cudzym krzyku.",
//         statImpact: { a: -6, c: -5 },
//         setsFlags: ["poważna_przemoc"],
//       },
//     ],
//   },
// ];

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

  {
    id: "zanoszenie_sie",
    ageRange: [2, 2],
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
      "Wracasz z nocnego dyżuru. W ciemnym zaułku ktoś wyciąga nóż i żąda portfela. Jesteś szybszy. Wykręcasz mu rękę, nóż upada. Napastnik leży na ziemi, przerażony. Masz jego nóż.",
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
    ],
  },

  // Event 17: Finał Ery VI — Czterdzieste urodziny
  {
    id: "czterdzieste_urodziny",
    ageRange: [40, 40],
    type: "turning_point",
    isGameEnd: true,
    sceneText:
      "Czterdzieste urodziny. Siedzisz sam albo nie — zależy od tego co zrobiłeś przez ostatnie czterdzieści lat. W głowie masz tę samą ciszę co zawsze. Ale coś się zmieniło. Wiesz teraz co jesteś. Pytanie które zostało: czy chcesz być tym dalej?",
    voices: [
      {
        structure: "pfc",
        text: "Połowa statystycznego życia. Zasoby: sprawne ręce, sprawny umysł. Czas jest jeszcze.",
      },
      {
        structure: "nacc",
        text: "Czterdzieści lat i nadal nie wiem po co wstajemy rano. Może jutro będzie ciekawiej.",
      },
      {
        structure: "insula",
        text: "Jesteś zmęczony. Nie ciałem.",
      },
      {
        structure: "hippocampus",
        text: "Igła w ramieniu. Jeden rok. Cisza tam gdzie inni krzyczeli. To jest to miejsce, w którym się zaczęło.",
      },
      {
        structure: "amygdala",
        text: "...",
      },
    ],
    decisions: [
      {
        id: "czterdziestka_dalej",
        text: "Dalej — tak samo, tylko mądrzej",
        type: "rational",
        costs: [{ resource: "willpower", amount: 10 }],
        hiddenStructure: "pfc",
        flavorReveal:
          "PFC nie uznaje sentymentów. Jesteś tym czym jesteś. Twój mózg ma swój kształt. Zaakceptowałeś to lata temu. Możesz z tym budować — albo niszczyć. Wybierasz budowanie. Nie z miłości do ludzi. Z nudy niszczenia.",
        statImpact: { c: 3 },
        setsFlags: ["akceptacja_siebie"],
      },
      {
        id: "czterdziestka_zmiana",
        text: "Coś zmienię — nie wiem co jeszcze, ale coś",
        type: "empathic",
        costs: [{ resource: "mood", amount: 18 }],
        hiddenStructure: "insula",
        flavorReveal:
          "Insula powiedziała coś, czego nigdy wcześniej nie powiedziała: dość. Nie dość życia — dość życia w ten sposób. Nie wiesz jak inaczej. Ale wiesz, że chcesz spróbować. To jest więcej niż miałeś w wieku lat pięciu, kiedy patrzyłeś jak Ola płacze i zastanawiałeś się co czuje.",
        statImpact: { a: 5, o: 3, n: -2 },
        setsFlags: ["droga_zmiany"],
      },
      {
        id: "czterdziestka_cisza",
        text: "Nie decydujesz nic — po prostu jesteś",
        type: "avoidant",
        costs: [],
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało Migdałowate — milczące przez całe twoje życie — nie odzywa się i tym razem. Siedzisz. Noc mija. Rano wstajesz. Nie wiesz czy to spokój czy pustka. Może to jedno i to samo. Może to w porządku. Nie wszystkie pytania mają odpowiedź, którą da się zapisać w protokole.",
        statImpact: { n: -1, o: 1 },
        setsFlags: ["cisza"],
      },
    ],
  },
];

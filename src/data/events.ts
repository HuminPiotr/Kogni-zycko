import type { GameEvent } from "@/types/game";

// Seed eventów dla Kogniżyćko.
// Struktura: ageRange → filtr wiekowy. voices → 2-3 komentarze struktur. decisions → 3 karty.
// Więcej w CONTRIBUTING.md sekcja „Jak dodać nowe wydarzenie".

export const EVENTS: GameEvent[] = [
  {
    id: "evt_era_child_00_narodziny",
    ageRange: [0, 0],
    type: "turning_point",
    sceneText:
      "Zimno. Światło. Ból. Ktoś odcina ci jedyne połączenie z czymkolwiek bezpiecznym. Nie wiesz, co to 'powietrze', ale musisz je teraz łykać, bo inaczej to już koniec.",
    voices: [
      {
        structure: "thalamus",
        text: "WSZYSTKIE KANAŁY PRZECIĄŻONE. Temperatura: krytyczna. Jasność: krytyczna. Dźwięk: krytyczny. Nie mam filtrów. Nie mam nic. Przepuszczam WSZYSTKO.",
      },
      {
        structure: "amygdala",
        text: "DRZYJ SIĘ ALBO ZGIŃ. To jedyne co umiem. To jedyne co MAMY. Nie ma planu B. KRZYCZ!",
      },
      {
        structure: "pfc",
        text: "...",
      },
    ],
    decisions: [
      {
        id: "dec_birth_scream",
        text: "Wrzeszcz aż pękną żyłki na twoich małych ślepych oczach.",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Krzyk noworodka to nie emocja – to odruch pnia mózgu wymuszający pierwszy oddech. Ciało migdałowate nie 'decyduje' krzyczeć – ono jest jedynym systemem online. Kora przedczołowa? Nie istnieje. Dosłownie. Te neurony nie mają jeszcze osłonek mielinowych. Jesteś maszyną reaktywną. I to ci właśnie uratowało życie.",
        statImpact: { n: 1, e: 3 },
        setsFlags: ["reaktywny_start"],
      },
      {
        id: "dec_birth_silence",
        text: "Cisza. Ciało zastyga. Oddychaj płytko i czekaj.",
        type: "avoidant",
        hiddenStructure: "insula",
        flavorReveal:
          "Reakcja freeze (zamrożenie). Grzbietowy nerw błędny wyłącza mobilizację i przełącza cię w tryb minimalnego zużycia energii. Lekarze trochę panikują. Klepią cię. W końcu oddychasz. Ale twój układ nerwowy właśnie zapisał pierwszą lekcję: 'Kiedy jest źle – znikaj'.",
        statImpact: { n: 2, c: 1 },
        setsFlags: ["freeze_start"],
      },
    ],
  },

  {
    id: "evt_era_child_01_fala_ciepla",
    ageRange: [1, 1],
    type: "silent",
    sceneText:
      "Czyjeś ręce podnoszą cię po upadku. Ciepło. Zapach mleka. Nie znasz słowa 'bezpieczeństwo', ale twój pień mózgu właśnie je zdefiniował bez słów.",
    postSceneText:
      "Hipokamp tworzy pierwsze ślady pamięci proceduralnej: chodzenie = ból + nagroda. Wzgórze zaczyna filtrować bodźce zamiast przepuszczać wszystko. System się kalibruje.",
    statImpact: { energy: 2, mood: 3, willpower: 1 },
  },

  {
    id: "evt_era_child_02_lustro",
    ageRange: [2, 2],
    type: "full",
    sceneText:
      "Stoisz przed lustrem w przedpokoju. Na twoim nosie jest czerwona plama dżemu. W lustrze stoi ktoś z czerwoną plamą na nosie. Twoja ręka unosi się powoli.",
    voices: [
      {
        structure: "hippocampus",
        text: "Ten obiekt w lustrze pojawia się za każdym razem gdy tu stoimy. Zawsze robi to samo co my. Korelacja: 100%. Wniosek: to... my?",
      },
      {
        structure: "insula",
        text: "Czuję coś mokrego na nosie. Widzę coś mokrego na nosie tamtego. To... to samo uczucie? To ja to czuję?",
      },
      {
        structure: "pfc",
        text: "Ja...?",
      },
    ],
    decisions: [
      {
        id: "dec_mirror_touch_self",
        text: "Dotknij WŁASNEGO nosa, nie lustra.",
        type: "rational",
        cost: { resource: "willpower", amount: 5 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Test lustra zdany. Kora przedczołowa dokonała pierwszej metakognicji: odróżnienia 'ja' od 'nie-ja'. To moment, w którym z organizmu reaktywnego stajesz się istotą samoświadomą. Brzmi banalnie? Od tego momentu możesz czuć wstyd, dumę i poczucie winy. Witaj w piekle bycia człowiekiem.",
        statImpact: { o: 3, c: 2 },
        setsFlags: ["samoswiadomosc_wczesna"],
      },
      {
        id: "dec_mirror_hit",
        text: "Uderz lustro pięścią – kto to jest?!",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało migdałowate interpretuje odbicie jako potencjalnego intruza. Reakcja agresywna wobec własnego odbicia jest normą u wielu gatunków – ale u ciebie za chwilę minie. W tym momencie twoja 'teoria umysłu' jeszcze nie istnieje. Nie rozumiesz, że inni mają perspektywę. Nie rozumiesz nawet, że TY masz perspektywę.",
        statImpact: { n: 2, e: 1 },
        setsFlags: ["brak_samoswiadomosci"],
      },
    ],
  },

  {
    id: "evt_era_child_03_batonik",
    ageRange: [3, 3],
    type: "full",
    sceneText:
      "Kasa w supermarkecie. Kolorowy batonik na wysokości twoich oczu. Mama mówi: 'Nie.' Jedno krótkie, twarde słowo. Świat się kurczy do rozmiaru tego batonika.",
    voices: [
      {
        structure: "caudate",
        text: "Widzisz to? WIDZISZ? To jest szczęście w opakowaniu. Bierz albo umrzesz z tęsknoty. Nie dosłownie, ale PRAWIE dosłownie.",
      },
      {
        structure: "amygdala",
        text: "Odmówiła. Odcięła nas od zasobu. Wiesz co to znaczy? Że nie jesteśmy ważni. Że nie zasługujemy. POKAŻ JEJ, ŻE ZASŁUGUJEMY.",
      },
      {
        structure: "pfc",
        text: "Moglibyśmy... poczekać? Może jutro? Może jeśli będziemy grzecz—",
      },
      {
        structure: "caudate",
        text: "JUTRO?! Kora, ty żałosna, niedorozwinięta galaretko. JUTRO nie istnieje. Istnieje TERAZ i BATONIK.",
      },
    ],
    decisions: [
      {
        id: "dec_candy_floor",
        text: "Rzuć się na podłogę. Krzycz tak, żeby wszyscy w sklepie odwrócili głowy.",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Amygdala hijack – porwanie emocjonalne. Kora przedczołowa 3-latka ma tyle szans na wyhamowanie tej reakcji, co papierowa ściana na zatrzymanie pociągu. Krzyk jest ewolucyjnym mechanizmem wymuszania uwagi opiekuna. Ciekawostka: 73% rodziców przyznaje się do 'poddania się' po publicznym napadzie złości. Twój mózg to wie. Dlatego krzyczy.",
        statImpact: { e: 2, n: 2 },
        setsFlags: ["eskalator"],
      },
      {
        id: "dec_candy_steal",
        text: "Gdy mama nie patrzy, wsuń batonik do kieszeni. Cisza. Spokój. Nikt się nie dowie.",
        type: "active",
        cost: { resource: "energy", amount: 5 },
        hiddenStructure: "caudate",
        flavorReveal:
          "Jądro ogoniaste przejęło sterowanie motoryką. Szlak mezolimbiczny (VTA → nucleus accumbens) wypuszcza falę dopaminy jeszcze ZANIM rozwiniesz papierek. To 'wanting' (pragnienie), nie 'liking' (przyjemność). Twój mózg właśnie nauczył się, że obejście zasad = nagroda bez kary. To jest fundament każdego uzależnienia.",
        statImpact: { e: 1, c: -1, o: 2 },
        setsFlags: ["kombinator"],
      },
      {
        id: "dec_candy_eyes",
        text: "Nie krzycz. Po prostu stój i patrz na mamę. Milcz. Niech sama to poczuje.",
        type: "empathic",
        cost: { resource: "mood", amount: 5 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa i neurony lustrzane współpracują w akcie cichej manipulacji emocjonalnej. Tworzysz dyskomfort w DRUGIEJ osobie bez agresji – aktywujesz jej system empatii twarzą pełną cierpienia. To zaawansowana (choć intuicyjna) teoria umysłu. Nie krzyczysz. Nie bijesz. Zmuszasz drugiego człowieka, by SAM podjął decyzję na twoją korzyść.",
        statImpact: { a: 3, c: 1 },
        setsFlags: ["manipulator_cichy"],
      },
    ],
  },

  {
    id: "evt_era_child_04_szafka_push",
    ageRange: [4, 4],
    type: "full",
    requiresFlag: "kombinator",
    sceneText:
      "Odkryłeś, że mama chowa słodycze na górnej półce w kuchni. Rok temu ukradłeś batonik i nic się nie stało. Ciszaaa. Krzesło stoi obok. Mama rozmawia przez telefon.",
    voices: [
      {
        structure: "caudate",
        text: "Pamiętasz ile to było warte? Pamiętasz TEN smak? A teraz wyobraź sobie CAŁĄ PÓŁKĘ. Bez limitu. Bez matki mówiącej 'nie'.",
      },
      {
        structure: "pfc",
        text: "Krzesło jest niestabilne. Mama jest w drugim pokoju. Jeśli spadniesz—",
      },
      {
        structure: "caudate",
        text: "Nie spadnę. Nigdy nie spadam. Zamknij się, Koro (włącz się za 20 lat, kiedy będę cię potrzebować do pisania CV).",
      },
      {
        structure: "hippocampus",
        text: "Archiwum potwierdza: ostatnia kradzież — zero konsekwencji. Wzorzec: ryzyko niskie, nagroda wysoka. Rekomendacja... Rekomendacja...",
      },
    ],
    decisions: [
      {
        id: "dec_heist_all",
        text: "Wdrap się. Weź wszystko co chwycisz. Na raz.",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Eskalacja tolerancji. Jądro ogoniaste potrzebuje WIĘCEJ dopaminy niż rok temu, by osiągnąć ten sam poziom satysfakcji. To identyczny mechanizm co w uzależnieniach: dawka rośnie, by kompensować desensytyzację receptorów D2. Masz 4 lata i właśnie doświadczasz swojego pierwszego 'przyzwyczajenia do nagrody'. Mama cię przyłapuje z buzią pełną czekolady.",
        statImpact: { e: 3, c: -3 },
        setsFlags: ["eskalacja_nagrody", "przylapany"],
      },
      {
        id: "dec_heist_plan",
        text: "Weź DWA cukierki. Tylko dwa. Schowaj do kieszeni. Odłóż krzesło na miejsce.",
        type: "rational",
        cost: { resource: "willpower", amount: 5 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa, mimo swojego niedorozwoju, właśnie wygrała nierówną walkę i uruchomiła mechanizm 'delayed gratification' (odroczona gratyfikacja). To ten sam mechanizm, który w słynnym Stanford Marshmallow Test przewidywał sukces życiowy 20 lat później. Używasz go do kradzieży, co jest etycznie wątpliwe, ale neurobiologicznie — genialne.",
        statImpact: { c: 4, o: 1 },
        setsFlags: ["strateg_cien"],
      },
    ],
  },

  {
    id: "evt_era_child_04_arena_push",
    ageRange: [4, 4],
    type: "full",
    requiresFlag: "eskalator",
    sceneText:
      "Piaskownica. Twoja łopatka. Obce dziecko ją bierze. Bez pytania. Bez słowa. Tak po prostu wyciąga ci ją z ręki, jakbyś nie istniał.",
    voices: [
      {
        structure: "amygdala",
        text: "No i proszę. Znowu ktoś bierze co NASZE. Know what? Ostatnio darli się z nami, i ZADZIAŁAŁO. Ludzie się COFAJĄ gdy krzyczysz. Przetestowane.",
      },
      {
        structure: "insula",
        text: "Pali mnie w klatce piersiowej. Ręce mi się trzęsą. Coś we mnie chce ZNISZCZYĆ.",
      },
      {
        structure: "pfc",
        text: "Może mógłbyś... poprosić o zwrot? Powiedzieć 'to moje'? ...Hej? Słyszy mnie ktoś?",
      },
      {
        structure: "amygdala",
        text: "Kora, za każdym razem gdy cię słuchamy, przegrywamy. Moja kolej.",
      },
    ],
    decisions: [
      {
        id: "dec_sandbox_destroy",
        text: "Uderz. Nie łopatką. Ręką. Prosto w twarz.",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Spirala reaktywności. Ciało migdałowate wykorzystuje potwierdzone wspomnienie: 'agresja = odzyskanie kontroli'. Hipokamp asystuje, podsuwając 'dowód' że eskalacja działa. Problem? Każda udana agresja WZMACNIA ten obwód. Mielina obrasta szlaki szybciej wokół schematów używanych częściej. Dosłownie budujesz autostradę agresji w swoim mózgu.",
        statImpact: { a: -4, n: 3 },
        setsFlags: ["spirala_agresji"],
      },
      {
        id: "dec_sandbox_freeze_new",
        text: "Zaciśnij zęby. Odwróć się. Odejdź bez słowa.",
        type: "avoidant",
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp zapisuje nowy wzorzec: konfrontacja → rezygnacja z zasobu. To unikanie (avoidance coping). Nie jest to 'przegranie' w sensie biologicznym — to strategia minimalizowania strat. Ale twój mózg właśnie nauczył się, że wycofanie jest bezpieczniejsze niż walka. Za 15 lat ta autostrada poprowadzi cię prosto do unikania trudnych rozmów.",
        statImpact: { n: 2, c: -1 },
        setsFlags: ["wzorzec_unikania"],
      },
      {
        id: "dec_sandbox_trade",
        text: "Oddychaj. Powoli. Podnieś wiaderko i powiedz: 'Zamienimy się?'",
        type: "rational",
        cost: { resource: "willpower", amount: 5 },
        hiddenStructure: "pfc",
        flavorReveal:
          "4 punkty siły woli. CZTERY. Tyle kosztuje 4-latka zahamowanie wściekłości i wygenerowanie alternatywnej strategii społecznej. Dla dorosłego to byłby koszt 1. Ale twoja kora przedczołowa pracuje z 20% mocy — brakuje mieliny, brakuje połączeń, brakuje doświadczenia. To co właśnie zrobiłeś to neurobiologiczny odpowiednik podniesienia samochodu gołymi rękami.",
        statImpact: { a: 4, c: 3 },
        setsFlags: ["hamowanie_heroiczne"],
      },
    ],
  },

  {
    id: "evt_era_child_04_cichy_manipulator",
    ageRange: [4, 4],
    type: "full",
    requiresFlag: "manipulator_cichy",
    sceneText:
      "Babcia przyszła w odwiedziny. Mama mówi: 'Nie, nie dostaniesz drugiego loda.' Ale babcia siedzi obok. Babcia, która NIGDY nie mówi 'nie'.",
    voices: [
      {
        structure: "insula",
        text: "Widzę hierarchię. Mama mówi nie. Ale babcia to wyższy poziom dostępu. I babcia reaguje na SMUTEK, nie na krzyk. Pamiętamy?",
      },
      {
        structure: "pfc",
        text: "Mapa społeczna: mama = twardy cel. Babcia = miękki cel. Jeśli podejdziemy do babci BEZ wiedzy mamy... mamy alternatywny kanał zasobów.",
      },
      {
        structure: "caudate",
        text: "LOD. LOD. LOD. Nie obchodzi mnie strategia, byle efekt był TERAZ.",
      },
      {
        structure: "amygdala",
        text: "A jeśli mama to zobaczy? Będzie gorzej niż w sklepie.",
      },
    ],
    decisions: [
      {
        id: "dec_grandma_bypass",
        text: "Podejdź do babci, kiedy mama wychodzi do kuchni. Zrób smutne oczy.",
        type: "empathic",
        cost: { resource: "mood", amount: 6 },
        hiddenStructure: "insula",
        flavorReveal:
          "Triangulacja. W wieku 4 lat potrafisz już mapować relacje społeczne i wykorzystywać luki w systemie. Wyspa integruje wiedzę o stanach emocjonalnych RÓŻNYCH osób i identyfikuje 'najsłabsze ogniwo'. To fundament inteligencji makiawelicznej — i jednocześnie przyszłej kompetencji społecznej. Granica między nimi? Intencja.",
        statImpact: { a: 2, o: 3 },
        setsFlags: ["triangulacja"],
      },
      {
        id: "dec_grandma_honest",
        text: "Zapytaj głośno przy mamie: 'Babciu, mogę loda? Mama powiedziała nie, ale ja się pytam.'",
        type: "rational",
        cost: { resource: "willpower", amount: 6 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Odwaga transparencji. Zamiast manipulować, ujawniasz swoją strategię na głos. To wymaga pracy kory przedczołowej: musisz zahamować impuls do ukrywania intencji i zaakceptować ryzyko podwójnej odmowy. Mama jest zaskoczona. Babcia się śmieje. Dostajesz pół loda. Negocjacja > manipulacja.",
        statImpact: { c: 3, a: 1 },
        setsFlags: ["transparentny_negocjator"],
      },
      {
        id: "dec_grandma_tantrum_lite",
        text: "Zacznij cicho mówić 'nikt mnie nie kocha'. Pod nosem, ale wystarczająco głośno.",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Pasywo-agresja jako narzędzie. Ciało migdałowate nauczyło się, że JAWNA agresja (krzyk w sklepie) jest ryzykowna. Więc ewoluowało w kierunku UKRYTEJ presji emocjonalnej. 'Nikt mnie nie kocha' to bomba neutronowa skierowana w system przywiązania opiekuna. Babcia natychmiast reaguje. Mama czuje się winna.",
        statImpact: { n: 2, a: -1 },
        setsFlags: ["pasywo_agresja"],
      },
    ],
  },

  {
    id: "evt_era_child_05_klamstwo",
    ageRange: [5, 5],
    type: "full",
    sceneText:
      "Trzask. Ulubiony wazon mamy leży w kawałkach. W twojej ręce wciąż jest dinozaur, który posłużył za młot bojowy. Kroki na korytarzu. Mama wchodzi. Patrzy na szkło. Patrzy na ciebie. 'Kto to zrobił?'",
    voices: [
      {
        structure: "amygdala",
        text: "Jej twarz. Widziałem tę twarz, gdy krzyczała ostatnio. To samo napięcie szczęki. KARA NADCHODZI. Serce bije 150.",
      },
      {
        structure: "pfc",
        text: "CZEKAJ. Myśl. Ona tu nie była. Nie widziała rzutu. Nie ma pojęcia, co się stało. Mogę... mogę stworzyć alternatywną wersję wydarzeń.",
      },
      {
        structure: "caudate",
        text: "Jeśli to zadziała — jeśli UWIERZY — to będzie największa nagroda w życiu. Uniknięcie bólu BEZ płacenia ceny? JACKPOT.",
      },
      {
        structure: "insula",
        text: "Ale ten ścisk w żołądku... To ciało mówi coś ważnego. COFA mi się. Nie wiem dlaczego.",
      },
    ],
    decisions: [
      {
        id: "dec_lie_creative",
        text: "'To wiatr! Okno było otwarte i wazon spadł!' Mów z przekonaniem.",
        type: "rational",
        cost: { resource: "willpower", amount: 6 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Narodziny kłamstwa. Twoja kora przedczołowa MUSIAŁA wykonać 4 operacje jednocześnie: (1) zahamować impuls przyznania się, (2) skonstruować fałszywą narrację, (3) ocenić, czy mama ją kupi, (4) kontrolować mimikę. To test Teorii Umysłu — żeby skłamać, musisz zrozumieć, że DRUGI CZŁOWIEK MA INNĄ WIEDZĘ NIŻ TY. Kłamstwo 5-latka to nie defekt moralny. To kognitywny triumf.",
        statImpact: { o: 3, c: 2 },
        setsFlags: ["klamca_swiadomy"],
      },
      {
        id: "dec_confess",
        text: "Opuść głowę. 'To ja. Nie chciałem.'",
        type: "empathic",
        cost: { resource: "mood", amount: 6 },
        hiddenStructure: "insula",
        flavorReveal:
          "Dyskomfort somatyczny (ścisk w żołądku, gorąco w twarzy) jest zbyt silny, by go zignorować. Wyspa generuje sygnał 'niespójności wewnętrznej' — poczucie winy to biologiczny koszt kłamstwa. Twoje ciało dosłownie BOLI, gdy próbujesz zbudować fałszywą wersję. Wybierasz prawdę nie z moralności, ale dlatego, że twoje trzewia nie dają rady.",
        statImpact: { a: 3, n: 1 },
        setsFlags: ["prawdomownosc_somatyczna"],
      },
      {
        id: "dec_run",
        text: "Rzuć dinozaura i uciekaj do pokoju. Zamknij drzwi. Nie istniejesz.",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Flight response. Ciało migdałowate przejmuje sterowanie nogami zanim kora przedczołowa zdąży sformułować jakikolwiek plan. Biegniesz. Chowasz się pod kołdrę. Problem: problem nadal istnieje. Szkło nadal leży na podłodze. Ale w TWOJEJ rzeczywistości, jeśli nie widzisz konsekwencji, to ich nie ma. Ten mechanizm 'ucieczka = rozwiązanie' będzie cię kosztował drogo. Ale nie dziś.",
        statImpact: { n: 1, c: -2 },
        setsFlags: ["wzorzec_ucieczki"],
      },
    ],
  },

  {
    id: "evt_era_child_06_szkola",
    ageRange: [6, 6],
    type: "turning_point",
    requiresFlag: "samoswiadomosc_wczesna",
    sceneText:
      "Pierwszy dzień szkoły. Mama odprowadza cię do drzwi i mówi: 'Wrócę o 13.' Trzynaście to ile? Korytarz jest nieskończony. Pachnie chlorem i strachem. Ktoś płacze. Ktoś się bije. Ktoś stoi sam pod ścianą z identycznym wyrazem twarzy co ty. I nagle — mama odchodzi.",
    voices: [
      {
        structure: "amygdala",
        text: "Zniknęła. Baza bezpieczna = OFFLINE. Nie mam koregulacji. Nie mam bufora. Jestem SAM z tymi wszystkimi bodźcami i nie mam NIKOGO, kto mi powie, że przeżyję.",
      },
      {
        structure: "hippocampus",
        text: "Skanuję archiwum... Zero pasujących wzorców. Żaden korytarz. Żaden zapach. Żaden układ przestrzenny. Wszystko jest NOWE i nie mam mapy. Zapisuję w trybie alarmowym.",
      },
      {
        structure: "thalamus",
        text: "Bodźce przychodzą szybciej niż potrafię je sortować. Głos nauczycielki — ważny? Krzyk dziecka — zagrożenie? Dzwonek — co to? PRIORYTET NIEJASNY.",
      },
      {
        structure: "pfc",
        text: "...Mama powiedziała 'trzynaście'. To liczba. Liczby są przewidywalne. Trzynaście nastąpi. Prawda?",
      },
    ],
    decisions: [
      {
        id: "dec_school_wall",
        text: "Stań pod ścianą. Nie ruszaj się. Obserwuj. Niech ONI przyjdą pierwsi.",
        type: "avoidant",
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp w trybie mapowania. Zamiast działać, zbierasz dane. To strategia 'observe before engage', częsta u dzieci z wczesną samoświadomością — wiesz, że ISTNIEJESZ jako osobny byt, więc chronisz ten byt przez obserwację zanim zdecydujesz, gdzie go umieścić. Kosz: izolacja. Zysk: nie popełniasz błędu społecznego na starcie.",
        statImpact: { o: 2, n: 1 },
        setsFlags: ["obserwator"],
      },
      {
        id: "dec_school_approach",
        text: "Podejdź do dziecka, które stoi samo. Ono też się boi.",
        type: "empathic",
        cost: { resource: "mood", amount: 6 },
        hiddenStructure: "insula",
        flavorReveal:
          "Koregulacja rówieśnicza. Dotychczas regulowałeś emocje WYŁĄCZNIE przez dorosłego (mamę). Teraz, po raz pierwszy, szukasz bufora w RÓWIEŚNIKU. Wyspa rozpoznaje wspólny stan emocjonalny (strach), a neurony lustrzane tworzą most. To narodziny przyjaźni — nie z sympatii, ale z biologicznej POTRZEBY koregulacji w obcym środowisku.",
        statImpact: { a: 4, e: -1 },
        setsFlags: ["wiazanie_rowiesnicze"],
      },
      {
        id: "dec_school_run_door",
        text: "Biegnij za mamą. Natychmiast. Zanim zniknie za rogiem.",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Protest separacyjny (Bowlby, faza 1). Ciało migdałowate uruchomiło pełną mobilizację: 'ODZYSKAJ BAZĘ BEZPIECZNĄ ALBO ZGIŃ'. To nie jest kapryśne dziecko. To układ nerwowy który przez 6 lat NIGDY nie był odcięty od opiekuna na tak długo. Nauczycielka łapie cię na korytarzu. Mama jest już za bramą.",
        statImpact: { n: 3, a: -1 },
        setsFlags: ["lek_separacyjny_ostry"],
      },
    ],
  },

  {
    id: "evt_era_child_06_szkola_alt",
    ageRange: [6, 6],
    type: "turning_point",
    requiresFlag: "brak_samoswiadomosci",
    sceneText:
      "Pierwszy dzień szkoły. Mama mówi 'pa pa'. Korytarz. Hałas. Dużo dzieci. Dużo kolorów. Dużo RUCHU. Ktoś krzyczy, ktoś biegnie, piłka leci w powietrzu. Czujesz... podekscytowanie?",
    voices: [
      {
        structure: "caudate",
        text: "NOWE BODŹCE! DUŻO! PIŁKA! KRZYKI! PRĘDKOŚĆ! DOPAMINA NA MAKSA! Gdzie mogę biegać?!",
      },
      {
        structure: "thalamus",
        text: "Napływa DUŻO. Ale nie filtruj — nie filtruj — wpuszczaj WSZYSTKO. Tu jest za dużo ciekawych rzeczy żeby cokolwiek blokować!",
      },
      {
        structure: "amygdala",
        text: "Hej... mama poszła... czy... czy ktoś to zauważył? Halo? Jądro? JĄDRO?!",
      },
      {
        structure: "caudate",
        text: "PIŁKA!!!",
      },
    ],
    decisions: [
      {
        id: "dec_school_alt_chaos",
        text: "Biegnij prosto w tłum. Złap piłkę. Kim jest mama?",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Dopamina wygrała z kortyzolem. Jądro ogoniaste zalało układ nerwowy taką ilością sygnałów nagrody z nowego środowiska, że ciało migdałowate nie zdążyło aktywować lęku separacyjnego. Nie IGNORUJESZ brak mamy — twój mózg dosłownie go nie REJESTRUJE, bo nowe bodźce są jaśniejsze. U dzieci z niską samoświadomością przejście do nowego środowiska bywa bezbolesne. Koszt pojawi się później: przy pierwszym kryzysie nie będziesz miał wybudowanego wzorca 'szukaj wsparcia'.",
        statImpact: { e: 4, o: 2 },
        setsFlags: ["impulsywnosc_spoleczna"],
      },
      {
        id: "dec_school_alt_freeze",
        text: "Stój w drzwiach. Za dużo. Nie wiesz co wybrać.",
        type: "avoidant",
        hiddenStructure: "thalamus",
        flavorReveal:
          "Przeciążenie sensoryczne (sensory overload). Wzgórze dostaje WIĘCEJ bodźców niż potrafi przefiltrować, a bez wykształconej samoświadomości nie masz wewnętrznego kompasu 'co jest dla MNIE ważne'. Efekt: paraliż decyzyjny. Stoisz jak słup. Nauczycielka musi cię poprowadzić za rękę do ławki.",
        statImpact: { n: 2, c: -2 },
        setsFlags: ["przeciazenie_sensoryczne"],
      },
    ],
  },

  {
    id: "evt_era_child_06_echo",
    ageRange: [6, 6],
    type: "silent",
    sceneText: "Dzwonek. Pierwszy dzień się kończy. Przetrwałeś.",
    postSceneText:
      "ECHO ERY I — Twoje neuronalne autostrady zostały wybudowane. Niektóre prowadzą do nagrody, inne do ucieczki, inne do ludzi. Żadna nie prowadzi jeszcze do pełnej kontroli. Kora przedczołowa dopiero startuje. Za chwlę dostaniesz swoje pierwsze prawdziwe narzędzie: ZASADY. Witaj w systemie. ERA 2: ODBLOKOWANA.",
    statImpact: { energy: 3, mood: 3, willpower: 3 },
    setsFlags: ["era_1_zakonczona"],
  },
  {
    id: "evt_era_school_07_zasady",
    ageRange: [7, 7],
    type: "full",
    sceneText:
      "Pani mówi: 'Siedzimy w ławkach. Nie rozmawiamy. Podnosimy rękę, gdy chcemy mówić.' Dziecko obok ciebie rysuje coś po biurku. Pani tego nie widzi. Ale TY widzisz.",
    voices: [
      {
        structure: "pfc",
        text: "Nowe dane: istnieją ZASADY ZEWNĘTRZNE. Nie-mama decyduje co wolno. To... nowy system. Mapuję hierarchię: Pani > Mama w tym budynku? Możliwe.",
      },
      {
        structure: "caudate",
        text: "To dziecko rysuje i NIC mu nie jest. Reguły najwyraźniej działają tylko gdy ktoś PATRZY. Interesujące.",
      },
      {
        structure: "amygdala",
        text: "Pani ma ten sam ton co mama, gdy jest zła. Jeśli złamię zasadę — KARA. Ale jaka? Nie znam skali. Nie znam konsekwencji. NIEBEZPIECZEŃSTWO NIEZNANE jest gorsze niż znane.",
      },
      {
        structure: "hippocampus",
        text: "Archiwum podpowiada: w domu zasady były elastyczne. Tu wyglądają na SZTYWNE. Aktualizuję model świata.",
      },
    ],
    decisions: [
      {
        id: "dec_rules_snitch",
        text: "Podnieś rękę. 'Proszę Pani, Kuba rysuje po biurku.'",
        type: "rational",
        cost: { resource: "willpower", amount: 6 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa testuje nowy system nagród: 'Jeśli zasady istnieją, to ich EGZEKWOWANIE powinno być nagradzane.' To logiczne rozumowanie. Problem? Społeczność rówieśnicza operuje na INNYM kodzie niż dorosły system. Pani cię chwali. Kuba patrzy na ciebie jak na wroga. Właśnie odkryłeś, że przestrzeganie zasad ma cenę społeczną.",
        statImpact: { c: 3, a: -2 },
        setsFlags: ["konformista_systemowy"],
      },
      {
        id: "dec_rules_join",
        text: "Wyjmij własny długopis. Zacznij rysować pod ławką, poza zasięgiem wzroku Pani.",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Jądro ogoniaste szybko wyciągnęło wniosek: zasady obowiązują tylko w POLU WIDZENIA autorytetu. To tzw. 'reward prediction error' — mózg obliczył, że nagroda (rysowanie) jest dostępna BEZ kary, jeśli warunek (bycie widzianym) nie jest spełniony. Gratulacje, właśnie nauczyłeś się koncepcji 'nie złapany, nie złodziej'. PFC jest przerażona.",
        statImpact: { o: 2, e: 1 },
        setsFlags: ["hackuje_system"],
      },
      {
        id: "dec_rules_freeze",
        text: "Nie rób nic. Siedź idealnie prosto. Nie oddychaj za głośno.",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Hypervigilance (nadmierna czujność). Ciało migdałowate nie wie, JAKIE są konsekwencje złamania reguł, więc traktuje KAŻDĄ regułę jak kwestię przetrwania. Siedzisz sztywno, nie ruszasz się, monitorujesz twarz Pani co 3 sekundy. To adaptacyjne w krótkim terminie, ale jeśli to się utrwali — witaj w lęku uogólnionym.",
        statImpact: { n: 2, c: 1 },
        setsFlags: ["hiperczujnosc"],
      },
    ],
  },

  {
    id: "evt_era_school_08_hierarchia",
    ageRange: [8, 8],
    type: "full",
    sceneText:
      "Przerwa. Grupa dzieci gra w piłkę. Lider — Mateusz, największy w klasie — wybiera drużyny. Wskazuje palcem: 'Ty, ty, ty...' Mija cię wzrokiem. Zostałeś ostatni. Nie wybrany. Stoisz.",
    voices: [
      {
        structure: "insula",
        text: "Ból. FIZYCZNY ból. W klatce piersiowej. Odrzucenie społeczne aktywuje te same regiony co prawdziwy cios w brzuch. To nie metafora. BOLI.",
      },
      {
        structure: "amygdala",
        text: "Wykluczenie ze stada = śmierć. Tak było przez 200 tysięcy lat. Nie obchodzi mnie, że to PIŁKA. Mój alarm mówi: ZAGROŻENIE PRZETRWANIA.",
      },
      {
        structure: "caudate",
        text: "Status społeczny = dostęp do zasobów. Mateusz ma status. Ty nie masz. Potrzebujesz CZEGOŚ, co da ci wartość w ich oczach.",
      },
      {
        structure: "pfc",
        text: "Opcje: (A) zdobyć wartość w ich oczach, (B) znaleźć inną grupę, (C) udowodnić, że mnie to nie obchodzi. Żadna nie jest bezbolesna.",
      },
    ],
    decisions: [
      {
        id: "dec_hierarchy_clown",
        text: "Zrób coś głupiego — udawaj, że celowo nie grasz, bo piłka jest 'dla małych dzieci'.",
        type: "active",
        cost: { resource: "energy", amount: 7 },
        hiddenStructure: "caudate",
        flavorReveal:
          "Mechanizm obronny 'sour grapes' (kwaśne winogrona). Jądro ogoniaste nie może uzyskać nagrody (akceptacji), więc DEWALUUJE nagrodę ('nie chciałem grać'). Jednocześnie próbujesz zdobyć alternatywną dopaminę przez bycie śmiesznym. Problem: grupa widzi to na wylot. Śmieją się Z ciebie, nie z twoim żartem.",
        statImpact: { e: 1, n: 2 },
        setsFlags: ["kompensacja_humorem"],
      },
      {
        id: "dec_hierarchy_prove",
        text: "Powiedz: 'Dam ci mojego pokemona za miejsce w drużynie.'",
        type: "rational",
        cost: { resource: "willpower", amount: 7 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Wymiana zasobów za status — fundamentalny mechanizm społeczny naczelnych. Kora przedczołowa obliczyła: 'Nie mam siły fizycznej ani popularności, ale mam ZASÓB, którego on chce.' To transakcyjne myślenie. Działa krótkoterminowo. Długoterminowo? Uczysz grupę, że twoją wartością jest to, co MASZ, nie kim jesteś. Mateusz bierze pokemona. Grasz. Jutro nie masz ani pokemona, ani pewności, że znów zostaniesz wybrany.",
        statImpact: { c: 1, a: -1 },
        setsFlags: ["kupowanie_akceptacji"],
      },
      {
        id: "dec_hierarchy_alone",
        text: "Odwróć się. Idź sam na drugi koniec boiska. Niech nie widzą twojej twarzy.",
        type: "avoidant",
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp zapisuje wzorzec: 'grupa = ból'. Ten ślad pamięciowy będzie aktywowany AUTOMATYCZNIE przy każdej przyszłej sytuacji społecznej wymagającej 'dołączenia do grupy'. To nie jest decyzja — to budowanie autostrady unikania, której rozbiórka za 15 lat będzie kosztować fortunę u terapeuty.",
        statImpact: { n: 3, a: -2 },
        setsFlags: ["izolacja_wybrana"],
      },
      {
        id: "dec_hierarchy_fight",
        text: "Podejdź do Mateusza. 'Ja też gram. Nie pytam.'",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Strategia dominacji: zamiast prosić o pozwolenie (pozycja niska), NARZUCASZ swoją obecność (pozycja wysoka). Ciało migdałowate przeszło z trybu 'uciekaj' na 'walcz'. Mateusz jest zaskoczony. Przez chwilę patrzą na siebie. Wynik? Zależy od tego, kto pierwszy odwróci wzrok. Dziś nie odwróciłeś. Ale serce bije ci 180.",
        statImpact: { e: -1, a: 1 },
        setsFlags: ["konfrontacja_statusowa"],
      },
    ],
  },

  {
    id: "evt_era_school_08_spirala",
    ageRange: [8, 8],
    type: "full",
    requiresFlag: "spirala_agresji",
    sceneText:
      "Mateusz popycha cię na korytarzu. 'Co mi zrobisz, płaczku?' Trzech jego kolegów stoi za nim. Nauczycielka jest daleko. Nikt nie patrzy. Twoje ciało już wie, co chce zrobić.",
    voices: [
      {
        structure: "amygdala",
        text: "Widzisz? WIDZISZ? Mówiłam. Świat to arena. Albo bijesz, albo biją CIEBIE. Popycham hormony. Mięśnie gotowe. Dawaj!",
      },
      {
        structure: "hippocampus",
        text: "Archiwum: piaskownica, wiek 4, ugryzienie — ZADZIAŁAŁO. Przeciwnik się wycofał. Wzorzec potwierdza: siła fizyczna = rozwiązanie.",
      },
      {
        structure: "pfc",
        text: "Czekaj — ich jest czterech. CZTERECH. Przelicz. Przelicz siłę. To nie piaskownica z jednym dzieckiem. To—",
      },
      {
        structure: "amygdala",
        text: "Koro, za każdym razem gdy cię słucham, zostaję PONIŻONA. Moja kolej. NIE ODWRACAM WZROKU.",
      },
    ],
    decisions: [
      {
        id: "dec_spiral_full_attack",
        text: "Wal pierwszego z brzegu. Nie myśl. Kto pierwszy uderzy, wygrywa.",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Utrwalona autostrada agresji odpalona w pełni. Ciało migdałowate nawet nie konsultuje reszty systemu. Problem: ich jest czterech. Dostajesz z powrotem. Mocno. Ale w twojej głowie ten moment to nie porażka. Migdałek zapisuje: 'Nie odstąpiłem. Jestem silny.' Spirala się kręci dalej. Koszt rośnie z każdą pętlą. Wychowawca pisze notatkę do rodziców.",
        statImpact: { n: 3, a: -3, e: -2 },
        setsFlags: ["recydywa_agresji", "notatka_szkolna"],
      },
      {
        id: "dec_spiral_verbal",
        text: "Nie bij. Powiedz najgorszą rzecz, jaką potrafisz — celuj w coś, co go ZABOLI.",
        type: "active",
        cost: { resource: "energy", amount: 7 },
        hiddenStructure: "pfc",
        flavorReveal:
          "EWOLUCJA AGRESJI. Kora przedczołowa przejęła impuls z ciała migdałowatego i PRZEKIEROWAŁA go z kanału fizycznego na werbalny. To ogromny skok rozwojowy — przemoc symboliczna zamiast fizycznej. Nadal boli, ale nikogo nie dotykasz. Mateusz mruga. Jego koledzy się śmieją — ale z NIEGO. Wygrałeś. Ale: agresja werbalna to nadal agresja. Zmienił się nośnik, nie intencja.",
        statImpact: { o: 2, a: -1 },
        setsFlags: ["agresja_werbalna"],
      },
      {
        id: "dec_spiral_walk_away",
        text: "Zaciśnij pięści. Policz do pięciu. Odejdź. NIE dlatego, że się boisz.",
        type: "rational",
        cost: { resource: "willpower", amount: 7 },
        hiddenStructure: "pfc",
        flavorReveal:
          "PIĘĆ punktów siły woli. Masz 8 lat i właśnie użyłeś więcej zasobów hamujących niż dorosły używa przy rezygnacji z papierosa. Kora przedczołowa NADPISUJE wieloletnią autostradę agresji z ciała migdałowatego. To jedna z najtrudniejszych rzeczy, jakie twój mózg kiedykolwiek zrobił. Mateusz krzyczy za tobą 'tchórz'. Nie jesteś tchórzem. Jesteś kimś, kto złamał schemat. Ale to będzie wymagało POWTÓRZENIA, żeby się utrwalić.",
        statImpact: { c: 4, n: -1 },
        setsFlags: ["przelamanie_spirali"],
      },
    ],
  },

  {
    id: "evt_era_school_09_cicha",
    ageRange: [9, 9],
    type: "silent",
    sceneText:
      "Trzecia klasa. Tabliczka mnożenia. Dyktanda. Zadania domowe. Budzik o 7:00. Codziennie to samo. Codziennie. To. Samo.",
    postSceneText:
      "Jądro ogoniaste powoli traci zainteresowanie szkołą. Dopamina z nowości wyparowała. Hipokamp zapisuje rutynę jako 'bezpieczną nudę'. Wzgórze nauczyło się filtrować głos nauczycielki jako tło. Twój mózg przełączył się w tryb autopilota. Cicho. Stabilnie. Nudno.",
    statImpact: { energy: 4, mood: 2, willpower: 3 },
  },

  {
    id: "evt_era_school_09_test_porażki",
    ageRange: [9, 9],
    type: "full",
    sceneText:
      "Pani oddaje sprawdzian z matmy. Podchodzi do ciebie. Kładzie kartkę odwróconą na biurku. Mówi cicho: 'Zostań po lekcji.' Odwracasz kartkę. Czerwony długopis. Jedynka. Pierwsza w życiu.",
    voices: [
      {
        structure: "amygdala",
        text: "Została po lekcji. WSZYSCY SŁYSZELI. Wiedzą. Widzą. Jestem GORSZY. Zagrożenie pozycji w stadzie. ZAGROŻENIE.",
      },
      {
        structure: "insula",
        text: "Gorąco w twarzy. Pot pod pachami. Oczy pieką. Ciało KRZYCZY: 'wstyd'. To identyczne jak ból fizyczny. Skan potwierdza: kora wyspowa nie odróżnia odrzucenia społecznego od oparzenia.",
      },
      {
        structure: "hippocampus",
        text: "Szukam przyczyny... Nie odrobiłem zadania we wtorek. Nie słuchałem w czwartek. Ale — czy to MOJA wina? Czy po prostu jestem głupi? Nie mam danych do rozstrzygnięcia.",
      },
      {
        structure: "pfc",
        text: "Jedynka to informacja zwrotna, nie wyrok. Mogę... mogę się nauczyć i poprawić? Tak chyba to działa? ...Prawda?",
      },
    ],
    decisions: [
      {
        id: "dec_fail_hide",
        text: "Schowaj kartkę do plecaka. Nikomu nie mów. Nikomu. Nigdy.",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Unikanie konfrontacji z porażką. Ciało migdałowate kategoryzuje jedynkę nie jako feedback, ale jako 'dowód wadliwości'. Chowając sprawdzian, chowasz DOWÓD — ale nie uczucie. Wstyd nie znika, gdy go ukryjesz. On fermentuje. Hipokamp przechowuje go jako niezamkniętą pętlę, która będzie się aktywować przy KAŻDYM przyszłym teście.",
        statImpact: { n: 2, c: -1 },
        setsFlags: ["chowanie_porazki"],
      },
      {
        id: "dec_fail_blame",
        text: "'Pytania były głupie. Nikt tego nie zrozumiał. Pani źle tłumaczy.'",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Zewnętrzna atrybucja porażki (external locus of control). Jądro ogoniaste chroni obraz 'ja' przed zagrożeniem: 'Jeśli to NIE moja wina, to moja wartość jest nienaruszona, a dopamina nie spada.' To działa natychmiast — czujesz ulgę. Ale: nigdy nie naprawisz czegoś, co nie jest twoją winą. Za 10 lat ten schemat będzie brzmiał: 'Szef jest idiota, współpracownicy nie rozumieją, system jest zepsuty.' Wszyscy winni. Poza tobą.",
        statImpact: { e: 1, n: 1 },
        setsFlags: ["atrybucja_zewnetrzna"],
      },
      {
        id: "dec_fail_study",
        text: "Idź do pani po lekcji. Zapytaj: 'Co mam zrobić, żeby to poprawić?'",
        type: "rational",
        cost: { resource: "willpower", amount: 7 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Growth mindset (nastawienie na rozwój). Kora przedczołowa wykonuje TRZY trudne operacje: (1) hamuje impuls ucieczki, (2) rekategoryzuje porażkę z 'jestem głupi' na 'nie umiem JESZCZE', (3) inicjuje zachowanie naprawcze. To kosztuje 3 willpower, bo masz 9 lat i twój mózg naturalnie unika dyskomfortu. Pani jest zaskoczona. Nikt nie przychodzi po lekcji. Dostajesz dodatkowe zadania i — co ważniejsze — zaczynasz budować wzorzec: 'porażka → naprawa', nie 'porażka → ucieczka'.",
        statImpact: { c: 4, o: 1 },
        setsFlags: ["growth_mindset"],
      },
      {
        id: "dec_fail_cry",
        text: "Tutaj? Przy wszystkich? Nie. Wytrzymaj do toalety. WYTRZYMAJ.",
        type: "empathic",
        cost: { resource: "mood", amount: 7 },
        hiddenStructure: "insula",
        flavorReveal:
          "Regulacja emocjonalna oparta na normach społecznych. Wyspa krzyczy 'PŁACZ', ale kora przedczołowa wie, że publiczny płacz w 3. klasie = śmierć społeczna. Ten konflikt między autentycznym przeżywaniem a społecznym dostosowaniem to fundament przyszłej regulacji — uczysz się GDZIE i KIEDY wyrażać emocje. To zdrowe. Do czasu, gdy nie zapomnisz, że w ogóle MASZ emocje.",
        statImpact: { a: 1, n: 1 },
        setsFlags: ["regulacja_spoleczna"],
      },
    ],
  },

  {
    id: "evt_era_school_10_zdrada",
    ageRange: [10, 10],
    type: "full",
    requiresFlag: "wiazanie_rowiesnicze",
    sceneText:
      "Twój najlepszy kolega — ten, z którym stałeś pod ścianą w pierwszym dniu szkoły — stoi teraz z Mateuszem. Śmieją się. Patrzą w twoim kierunku. Twój kolega szepcze coś na ucho Mateuszowi. Mateusz ryczy ze śmiechu. Wiesz — WIESZ — że mówi o TOBIE.",
    voices: [
      {
        structure: "insula",
        text: "Skalpel w klatce piersiowej. Tak to odczuwam. Skalpel obracany powoli. Ta osoba ZNAŁA moje sekrety. Wpuściłem ją do środka. I teraz pokazuje moje wnętrze OBCYM.",
      },
      {
        structure: "amygdala",
        text: "NIGDY WIĘCEJ. Słyszysz? NIGDY. WIĘCEJ. Nie wpuszczamy nikogo do środka. Zamykamy bramy. SPAWAMY bramy.",
      },
      {
        structure: "hippocampus",
        text: "Przeszukuję archiwum... Wiek 6, staliśmy razem pod ścianą. On też się bał. Byliśmy tacy sami. Co się zmieniło? KIEDY się zmieniło? Szukam momentu zdrady... nie znajduję. To PROCES, nie moment.",
      },
      {
        structure: "pfc",
        text: "Może... może nie mówi o mnie? Może się mylę? ...Nie. Znam ten wzrok. Wiem co widzę. Pytanie nie brzmi 'czy' — pytanie brzmi 'co teraz'.",
      },
    ],
    decisions: [
      {
        id: "dec_betray_revenge",
        text: "Podejdź. Powiedz głośno przy wszystkich sekret, który ci kiedyś powiedział.",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Odwet symetryczny. Ciało migdałowate stosuje zasadę 'oko za oko' — jeśli moje zaufanie zostało zdradzone, NISZCZĘ wartość zaufania u przeciwnika. Problem? Ujawniając jego sekret, demonstrujesz całej grupie, że NIKT nie może ci zaufać. Zranił cię? Tak. Ale ty właśnie spaliłeś most, na którym mógłbyś jeszcze stanąć.",
        statImpact: { e: 2, a: -4 },
        setsFlags: ["odwetowiec"],
      },
      {
        id: "dec_betray_new_group",
        text: "Odwróć się. Znajdź kogoś innego. Jest tu więcej ludzi niż dwóch.",
        type: "active",
        cost: { resource: "energy", amount: 7 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Przegrupowanie społeczne. Kora przedczołowa dokonuje bolesnej kalkulacji: 'ten zasób (przyjaźń) jest utracony, szukaj alternatywy ZAMIAST walczyć o zwrot'. To wymaga zahamowania impulsu odwetowego I pokonania lęku przed nową grupą. Podwójny koszt. Ale: uczysz się, że zaufanie to nie kontrakt wieczny. Można je odbudować. W INNYM miejscu.",
        statImpact: { o: 3, a: 1 },
        setsFlags: ["adaptacja_spoleczna"],
      },
      {
        id: "dec_betray_wall",
        text: "Nic nie rób. Udawaj, że nie widziałeś. Że nie obchodzi cię. Idź sam do domu.",
        type: "avoidant",
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp zamyka archiwum na klucz. 'Bliskość = ból' — nowy wzorzec zakodowany z siłą traumy. To nie jest świadoma decyzja 'nie będę miał przyjaciół'. To CIAŁO, które w przyszłości będzie się napinać przy każdej próbie zbliżenia. Attachment avoidance buduje się właśnie w takich momentach. Nie trzeba wielkiej traumy. Wystarczy jeden 10-latek z sekretami, które wylądowały w niewłaściwych uszach.",
        statImpact: { n: 3, c: 1 },
        setsFlags: ["unikanie_bliskosci"],
      },
    ],
  },

  {
    id: "evt_era_school_10_strateg",
    ageRange: [10, 10],
    type: "full",
    requiresFlag: "strateg_cien",
    sceneText:
      "Odkryłeś, że dzieciaki wymieniają się kartami na dużej przerwie. Oficjalnie to zakazane. Nieoficjalnie — kto ma najlepszą kartę, ma najwyższy status. Ty nie masz kart. Ale masz coś lepszego: INFORMACJĘ. Wiesz, kto czego szuka.",
    voices: [
      {
        structure: "pfc",
        text: "Mapa rynku: Kamil chce Charizarda. Ola ma Charizarda, ale chce Pikachu. Dawid ma Pikachu, ale chce Mewtwo. Ja nie mam nic. Ale widzę PRZEPŁYW WARTOŚCI, którego oni nie widzą.",
      },
      {
        structure: "caudate",
        text: "Pośrednictwo. Prowizja. BEZ ryzyka. Łączymy Kamila z Olą, bierzemy jedną kartę za usługę. Geniusz.",
      },
      {
        structure: "hippocampus",
        text: "Archiwum: wiek 4, szafka z cukierkami — planowanie zadziałało. Wiek 3, kradzież batonika — obejście zasad zadziałało. Wzorzec potwierdzony wielokrotnie.",
      },
      {
        structure: "amygdala",
        text: "A jeśli nauczyciel się dowie? A jeśli ktoś doniesie? Koro, twój plan jest za duży. Za dużo zmiennych.",
      },
    ],
    decisions: [
      {
        id: "dec_trade_broker",
        text: "Zorganizuj wymianę. Ustal prowizję: jedna karta z każdej transakcji dla ciebie. Biznes.",
        type: "rational",
        cost: { resource: "willpower", amount: 8 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa zbudowała model ekonomiczny. Widzisz systemy, których inni nie widzą. To umiejętność, która może prowadzić do genialnego biznesu lub do wybitnego oszustwa — różnicą jest ETYKA, a ta nie jest wbudowana w PFC. Zdobywasz karty bez wydania grosza. Dzieci zaczynają do ciebie przychodzić. Masz STATUS zbudowany na UŻYTECZNOŚCI. Szlak dopaminergiczny płonie z satysfakcji.",
        statImpact: { c: 3, o: 3 },
        setsFlags: ["broker_spoleczny"],
      },
      {
        id: "dec_trade_exploit",
        text: "Podaj Kamilowi fałszywą informację: 'Ola zamieni Charizarda za byle co.' Niech przepłaci.",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Eskalacja ze 'strategii' do 'eksploatacji'. Jądro ogoniaste przejęło sterowanie: zamiast uczciwego pośrednictwa, asymetria informacyjna staje się bronią. Kamil przepłaca. Ty zyskujesz podwójnie. Ale: buduj reputację wystarczająco długo na kłamstwach, a w końcu KTOŚ zsumuje dane. Jądro ogoniaste nie rozumie terminu 'długoterminowy'. Działa tu i teraz. Koszt przyjdzie z opóźnieniem.",
        statImpact: { e: 3, a: -2 },
        setsFlags: ["exploiter"],
      },
    ],
  },

  {
    id: "evt_era_school_11_cicha",
    ageRange: [11, 11],
    type: "silent",
    sceneText:
      "Coś się zmienia. Twoje ciało robi rzeczy bez twojej zgody. Głos brzmi inaczej. Zapach jest inny. Rano budzisz się z uczuciami, których nie potrafisz nazwać.",
    postSceneText:
      "Podwzgórze uruchomiło kaskadę hormonalną: GnRH → LH/FSH → testosteron/estrogen. Twój system nerwowy przechodzi aktualizację firmware'u BEZ twojej zgody. Ciało migdałowate staje się bardziej reaktywne. Kora przedczołowa — jedyny hamulec — jest w budowie przez kolejne 14 lat. Witaj w okresie dojrzewania. Powodzenia.",
    statImpact: { energy: 2, mood: -2, willpower: -1 },
    setsFlags: ["pubertet_start"],
  },

  {
    id: "evt_era_school_12_crush",
    ageRange: [12, 12],
    type: "turning_point",
    sceneText:
      "Jest ta osoba. Nie wiesz, kiedy to zaczęło się. Ale teraz, gdy wchodzi do klasy, twoje ciało robi DZIWNE rzeczy. Serce. Ręce. Oddech. Nie potrafisz na nią NIE patrzeć. Siedzisz dwie ławki dalej i udajesz, że czytasz.",
    voices: [
      {
        structure: "caudate",
        text: "NAGRODA NOWEGO TYPU WYKRYTA. Poziom dopaminy: najwyższy w historii życia. Wyższy niż batonik. Wyższy niż karty. Wyższy niż COKOLWIEK. Chcę WIĘCEJ. Muszę być BLIŻEJ.",
      },
      {
        structure: "amygdala",
        text: "Ale jeśli się dowiedzą. Jeśli ONA się dowie. Jeśli powie NIE. Śmierć społeczna. Natychmiastowa. Absolutna. Nie podchodź. NIE PODCHODŹ.",
      },
      {
        structure: "insula",
        text: "Nie mogę oddychać. Nie dosłownie, ale... nie mogę oddychać. Mam gorąco. Zimno. Jednocześnie?! Moje ciało nie ma SENSU.",
      },
      {
        structure: "pfc",
        text: "Okej. Próbuję myśleć. Nie mogę myśleć. Za dużo szumu. Jądro krzyczy, Migdałek krzyczy, Wyspa krzyczy, WSZYSCY KRZYCZĄ I NIKT NIE MYŚLI.",
      },
    ],
    decisions: [
      {
        id: "dec_crush_note",
        text: "Napisz karteczkę. Podaj przez trzy ławki. Nie podpisuj się.",
        type: "active",
        cost: { resource: "energy", amount: 8 },
        hiddenStructure: "caudate",
        flavorReveal:
          "Kompromis między pragnieniem a strachem. Jądro ogoniaste MUSI działać (pragnienie zbliżenia jest zbyt silne), ale ciało migdałowate blokuje bezpośrednią konfrontację. Efekt: anonimowa karteczka. To twój mózg próbujący uzyskać nagrodę przy MINIMALNYM ryzyku kary. Nie jest odważna, ale — co ciekawe — twoja kora przedczołowa ZAPLANOWAŁA metodę dostarczenia, obliczając minimalny koszt społeczny. Postęp.",
        statImpact: { o: 2, e: 2 },
        setsFlags: ["pierwsza_karteczka"],
      },
      {
        id: "dec_crush_direct",
        text: "Na przerwie. Podejdź. Powiedz: 'Cześć. Chcesz iść na lody po szkole?'",
        type: "rational",
        cost: { resource: "willpower", amount: 8 },
        hiddenStructure: "pfc",
        flavorReveal:
          "CZTERY punkty siły woli. Kora przedczołowa musiała: (1) zahamować paraliż ciała migdałowatego, (2) wygenerować skrypt społeczny, (3) kontrolować głos, mimikę i postawę ciała, (4) zaakceptować 50% szansę na publiczne odrzucenie. To NAJTRUDNIEJSZA RZECZ, jaką twój mózg kiedykolwiek zrobił. Trudniejsza niż hamowanie pięści w piaskownicy. Odpowiedź? Nieważna. Ważne, że SPRÓBOWAŁEŚ pomimo alarmu całego systemu.",
        statImpact: { c: 4, e: -2 },
        setsFlags: ["odwaga_spoleczna"],
      },
      {
        id: "dec_crush_stalk",
        text: "Nie mów nic. Ale dowiedz się wszystkiego. Zapytaj kolegów. Sprawdź, który profil dodać na naszej klasie.",
        type: "empathic",
        cost: { resource: "mood", amount: 8 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Zbieranie danych bez działania. Hipokamp gromadzi informacje kompulsywnie: ulubiona muzyka, droga do domu, z kim rozmawia. Czujesz kontrolę nad sytuacją, choć NIE masz jej ani grama. To złudzenie wiedzy jako substytut odwagi. Twoje jądro ogoniaste dostaje małe strzały dopaminy z każdego nowego 'faktu' — ale PRAWDZIWA nagroda (kontakt) pozostaje nieosiągalna. Możesz utknąć w tej pętli na LATA.",
        statImpact: { n: 2, o: 1 },
        setsFlags: ["obsesyjne_zbieranie_danych"],
      },
      {
        id: "dec_crush_deny",
        text: "To nic. Nie czuję nic. To głupie. Wróć do książki.",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Supresja emocjonalna. Ciało migdałowate i kora przedczołowa współpracują PRZECIW tobie — migdałek mówi 'zbyt niebezpieczne', kora mówi 'nie mam zasobów, żeby to ogarnąć', razem decydują: 'tłum ten sygnał'. Insula protestuje somatycznie (ścisk w żołądku, brak snu), ale jest przegłosowana. Emocja nie znika. Schodzi do piwnicy. I tam rośnie.",
        statImpact: { n: 1, c: -1 },
        setsFlags: ["supresja_emocjonalna"],
      },
    ],
  },

  {
    id: "evt_era_school_12_echo",
    ageRange: [12, 12],
    type: "silent",
    sceneText:
      "Koniec szkoły podstawowej. Nie jesteś już dzieckiem. Nie jesteś jeszcze dorosły. Jesteś nikim i wszystkim jednocześnie.",
    postSceneText:
      "ECHO ERY II — Twój mózg pobudował setki autostrad. Niektóre prowadzą do ludzi. Inne od ludzi. Niektóre prowadzą do nagrody — i nie potrafią się zatrzymać. Kora przedczołowa jest teraz na 40% mocy: widzi problemy, potrafi planować, ale wciąż regularnie przegrywa, gdy emocje przekraczają krytyczny próg. Za chwilę wchodzisz w okres, gdzie KAŻDY próg będzie przekraczany codziennie. ERA 3: GIMNAZJUM. Powodzenia. Będziesz go potrzebować.",
    statImpact: { energy: 3, mood: -1, willpower: 2 },
    setsFlags: ["era_2_zakonczona"],
  },
  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 20 — Sesja z Neuroanatomii                        ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_20_sesja_neuroanatomia",
    ageRange: [20, 20],
    sceneText:
      "Tydzień sesji. Egzamin z neuroanatomii za 36 godzin. Siedzisz nad notatkami o 2 w nocy. " +
      'Pytanie na slajdzie: „Wymień jądra wzgórza i ich funkcje." ' +
      "Twój mózg, z wyraźną ironią, przetwarza to pytanie właśnie przez te jądra.",

    voices: [
      {
        structure: "amygdala",
        text:
          "Egzamin. EGZAMIN. Ciało migdałowate melduje: poziom kortyzolu rośnie. " +
          "Zagrożenie wykryte. Serce bije szybciej zanim zdążyłeś pomyśleć. To nie panika — to INFORMACJA.",
      },
      {
        structure: "pfc",
        text:
          "Okay, możemy to rozplanować. Dwie godziny na wzgórze, dwie na hipokamp, em... " +
          "może trzy na wzgórze? Nie wiem, nie jestem pewna ile to zajmuje. Chyba dwie.",
      },
      {
        structure: "hippocampus",
        text:
          "Jądra brzuszne tylno-boczne. Widziałem to. Drugi tydzień semestru, herbata jaśminowa, " +
          "biblioteka główna. Mam to na slajdzie... chyba trzecim. Kojarzę zapach tamtej sali.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Zarwij całą noc — ucz się do świtu",
        type: "impulsive",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało migdałowate uruchomiło kaskadę stresową: kortyzol przenika barierę krew–mózg " +
          "i wiąże się z receptorami glukokortykoidowymi w hipokampie. Paradoks: ta sama reakcja " +
          "walcz-lub-uciekaj, która mobilizuje ciało w 200 ms, tłumi właśnie hipokamp — " +
          "strukturę odpowiedzialną za konsolidację pamięci długotrwałej. Zarywasz noc żeby zapamiętać " +
          "więcej i robisz dokładnie odwrotnie.",
        statImpact: { n: 5, c: -3 },
        setsFlags: ["lek_egzaminacyjny"],
      },
      {
        id: "dec_2",
        text: "Zaplanuj bloki materiału i idź spać o 23:00",
        type: "rational",
        cost: { resource: "willpower", amount: 8 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa aktywowała kontrolę wykonawczą (pola 9 i 46 Brodmanna), " +
          "hamując impulsywne scrollowanie przez połączenie z jądrem ogoniastym. " +
          "Sen jest kluczowy dla konsolidacji hipokampalnej: podczas fazy NREM hipokamp " +
          "odtwarza wzorce aktywności z dnia, a faza REM transferuje je do trwałych sieci " +
          "semantycznych w korze nowej. Bez snu ten transfer nie zachodzi.",
        statImpact: { n: -2, c: 5 },
      },
      {
        id: "dec_3",
        text: "Narysuj mapy skojarzeń — połącz struktury z funkcjami",
        type: "active",
        cost: { resource: "energy", amount: 8 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp buduje engramy — fizyczne ślady pamięci — integrując informacje " +
          "z różnych modalności zmysłowych w jeden ślad epizodyczny. " +
          "Mapa skojarzeń angażuje jednocześnie pamięć przestrzenną (silna strona hipokampa) " +
          "i semantyczną; powtarzana aktywacja tych samych połączeń synaptycznych prowadzi " +
          "do długotrwałego wzmocnienia synaptycznego (LTP) — molekularnego fundamentu uczenia się.",
        statImpact: { o: 4, c: 2 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 21 — Impreza Legendarna (podobno)                 ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_21_impreza_legendarna",
    ageRange: [21, 21],
    sceneText:
      "Znajomi pokazują zdjęcia i mówią, że to była NAJLEPSZA impreza dekady. " +
      "Masz cztery zdjęcia z 23:00. Potem czarna dziura. " +
      "Hipokamp miał wieczór wolny.",

    voices: [
      {
        structure: "caudate",
        text:
          "BRO. Dopamina pobiła własny rekord. Nie pamiętasz szczegółów, " +
          "bo szczegóły nie były ważne — STAN był ważny. Zróbmy to znowu w piątek. NATYCHMIAST.",
      },
      {
        structure: "hippocampus",
        text:
          "Mam... fragmenty. Ktoś miał żółty sweter. Jakaś melodia. Potem czarna dziura. " +
          "To niepokojące. Moja praca to zapisywać. Ktoś mi na to nie pozwolił.",
      },
      {
        structure: "pfc",
        text:
          "Okay, więc... nie pamiętamy drugiej połowy wieczoru. " +
          "To mówi coś o wyborach poczynionych wcześniej. Coś. Em. Nieważne. Idziemy dalej.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Sięgnij po kolejny drink — noc jest młoda",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Jądro ogoniaste eskaluje pętlę dopaminergiczną: szlak mezokortykolimbiczny " +
          "(brzuszne pole nakrywkowe → jądro półleżące → kora czołowa) wzmacnia sygnał " +
          '„chcę więcej" przy jednoczesnym osłabieniu hamowania kory przedczołowej. ' +
          "Układ nagrody generuje silniejszy sygnał oczekiwania (wanting) niż faktycznej " +
          "przyjemności (liking) — eskalujesz, choć nie odczuwasz proporcjonalnie więcej satysfakcji.",
        statImpact: { e: 4, c: -4 },
      },
      {
        id: "dec_2",
        text: "Wróć do domu — jutro trzeba żyć",
        type: "rational",
        cost: { resource: "willpower", amount: 8 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa wzięła pod uwagę odroczone konsekwencje — planowanie i ocena " +
          "ryzyka to jej kluczowe funkcje wykonawcze. W wieku 21 lat mielinizacja połączeń " +
          "grzbietowo-bocznej kPFC z układem limbicznym jeszcze trwa, ale kora zaczyna " +
          "wygrywać debaty z jądrem ogoniastym. Sen po aktywności społecznej pozwala hipokampowi " +
          "skompresować przeżyte doświadczenia w trwałe ślady pamięciowe.",
        statImpact: { n: -1, c: 4 },
      },
      {
        id: "dec_3",
        text: "Zastanów się, czemu nic nie pamiętasz — to dziwne",
        type: "empathic",
        cost: { resource: "mood", amount: 8 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp jest niezbędny do tworzenia nowych wspomnień epizodycznych. " +
          "Etanol blokuje receptory NMDA w hipokampie, uniemożliwiając indukcję LTP — " +
          "bez LTP nie ma enkodowania śladów pamięciowych. Wynikiem jest amnezja anterogradowa: " +
          "nie możesz tworzyć nowych wspomnień w czasie działania substancji, " +
          "dokładnie jak pacjent H.M. po obustronnym usunięciu hipokampa.",
        statImpact: { o: 4, n: 1 },
        setsFlags: ["refleksja_pamieci"],
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 22 — Pierwsze Własne Mieszkanie                   ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_22_pierwsze_mieszkanie",
    ageRange: [22, 22],
    sceneText:
      "Pierwsze własne mieszkanie. Wolność absolutna i rachunek za prąd jednocześnie. " +
      "Siedzisz na materacu na podłodze (łóżko przyjeżdża za tydzień). " +
      "Na kuchennym stole leży niezrozumiały formularz od dostawcy gazu.",

    voices: [
      {
        structure: "caudate",
        text:
          "WŁASNE MIESZKANIE. Możesz jeść o 3 w nocy. Możesz grać głośno. " +
          "Możesz nie sprzątać PRZEZ TYDZIEŃ. Dopamina melduje pełną gotowość. DO WSZYSTKIEGO.",
      },
      {
        structure: "amygdala",
        text:
          'Ten formularz ma 3 strony. Nie wiem co to jest „taryfa G11". ' +
          "Jeśli go nie wypełnię prawidłowo, może odcięte zostanie ogrzewanie. " +
          "Nie wiem kiedy. Może dziś.",
      },
      {
        structure: "pfc",
        text:
          "Możemy to rozwiązać. Formularz, YouTube, chwila spokoju. " +
          "To jest nowe środowisko — wzgórze filtruje teraz inne bodźce niż u rodziców. Em. " +
          "Zróbmy listę rzeczy do ogarnięcia. Chyba.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Zamów pizzę i zignoruj formularz do rana",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało migdałowate zainicjowało unikanie bodźca awersyjnego — " +
          "formularz z nieznaną terminologią aktywował reakcję freeze: " +
          "mózg wybrał brak działania zamiast błędnego działania. " +
          "Awersja do straty (Kahneman) sprawia, że potencjalny błąd boli podwójnie " +
          "mocniej niż odroczenie problemu — stąd prokrastynacja jest neurologicznie racjonalna " +
          "w krótkim terminie.",
        statImpact: { n: 2, c: -4 },
      },
      {
        id: "dec_2",
        text: "Ogarnij wszystko sam — YouTube i cierpliwość",
        type: "rational",
        cost: { resource: "willpower", amount: 9 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa (pola 10–12 Brodmanna — abstrakcyjne myślenie, planowanie) " +
          "uruchomiła rozwiązywanie nowego problemu w nowym środowisku. " +
          "Wzgórze jako stacja przekaźnikowa filtruje teraz inne priorytety bodźcowe: " +
          "samodzielność aktywuje jądra wzgórza odpowiedzialne za uwagę na sygnały " +
          "istotne dla przeżycia — w tym przypadku administracyjne.",
        statImpact: { o: 2, c: 5 },
        setsFlags: ["niezaleznosc"],
      },
      {
        id: "dec_3",
        text: "Zadzwoń do rodziców — zapytaj jak to działa",
        type: "empathic",
        cost: { resource: "mood", amount: 9 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa (kora wyspy, kora mezolimbiczna o budowie 3–5 warstw) przetwarza " +
          "bodźce interoceptywne — w tym świadomość własnej bezradności — " +
          "i jest kluczowa dla empatii: rozumiesz, że rodzice chcą być potrzebni. " +
          "Wyspa współpracuje z korą zakrętu obręczy i ciałem migdałowatym, " +
          "tworząc sieć afektywną regulującą zachowania społeczne.",
        statImpact: { a: 5, n: -1 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 23 — Wypalenie Studenckie                         ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_23_wypalenie_studenckie",
    ageRange: [23, 23],
    sceneText:
      "Siódmy tydzień z rzędu bez weekendu. Otwierasz kolejnego maila z zadaniem i czujesz... nic. " +
      "Nie stres. Nie złość. Nic. " +
      "Twój mózg wyłączył alarm, bo alarm dzwonił tak długo, że przestał być informacją.",

    voices: [
      {
        structure: "amygdala",
        text:
          "Próbuję. Wysyłam kortyzol, wysyłam szybkie bicie serca, wysyłam niepokój. " +
          "Nie reagujesz. To jest nieprawidłowe. Jestem zaniepokojona własną skutecznością.",
      },
      {
        structure: "hippocampus",
        text:
          "Rok pierwszy. Inauguracja. Byłeś taki podekscytowany — pamiętam dokładnie, " +
          "kawa w kubku papierowym, zapach nowego plecaka. To był ktoś inny. " +
          "Albo ty. Już nie wiem.",
      },
      {
        structure: "pfc",
        text:
          "To jest wypalenie. Chroniczny stres niezarządzany przez mechanizmy regeneracyjne. " +
          "Wiemy co zrobić. Wiemy co zrobić. Czemu nic nie robimy?",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Wytrzymaj — to tylko słabość, minie samo",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Przy chronicznym stresie ciało migdałowate ulega strukturalnej hipertrofii " +
          "(zwiększa objętość dendrytek), a hipokamp — atrofii. " +
          "Kortyzol w nadmiarze hamuje neurogenezę w zakręcie zębatym hipokampa: " +
          "dosłownie blokuje powstawanie nowych neuronów. " +
          '„Wytrzymaj" to instrukcja dla ciała migdałowatego, żeby eskalowało ' +
          "kaskadę, której pierwszą ofiarą jest struktura potrzebna do nauki i pamięci.",
        statImpact: { n: 6, c: -2 },
        setsFlags: ["depresja"],
      },
      {
        id: "dec_2",
        text: "Weź przerwę — zmniejsz obciążenie, zanim się posypie",
        type: "rational",
        cost: { resource: "willpower", amount: 9 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa aktywowała metapoznanie — zdolność do oceny własnych " +
          "stanów poznawczych (pola 10–12 Brodmanna na powierzchni przyśrodkowej płata czołowego). " +
          "Regularne przerwy redukują poziom kortyzolu i odtwarzają objętość hipokampa. " +
          "Kora przedczołowa hamuje ciało migdałowate przez projekcje zstępujące — " +
          "zamiast eskalować reakcję stresową, wycisza ją przez kontrolę oddechu " +
          "aktywującą nerw błędny i układ parasympatyczny.",
        statImpact: { n: -4, c: 4, a: 1 },
        setsFlags: ["decyzja_o_granicy"],
      },
      {
        id: "dec_3",
        text: "Wsłuchaj się dokładnie — co czuje twoje ciało?",
        type: "empathic",
        cost: { resource: "mood", amount: 9 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa jest kluczowa dla interocepcji — przetwarzania sygnałów z wnętrza ciała " +
          "(bicie serca, napięcie mięśni, uczucie w żołądku). " +
          "Wyspa wpływa na regulację układu autonomicznego: tętna, oddechu i ciśnienia. " +
          '„Nic nie czuć" to sygnał interoceptywny — odrętwienie emocjonalne jest ' +
          "adaptacyjną odpowiedzią kory wyspy na przeciążenie aferentne, " +
          "nie brakiem emocji.",
        statImpact: { o: 3, a: 3 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 24 — Wybór Pierwszej Ścieżki Zawodowej            ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_24_wybor_zawodowy",
    ageRange: [24, 24],
    sceneText:
      "Dwie oferty pracy na stole. Pierwsza: korporacja, stabilna pensja, przewidywalność. " +
      "Druga: startup, ryzyko, połowa wynagrodzenia, ale robisz dokładnie to, co chciałeś. " +
      "48 godzin na decyzję.",

    voices: [
      {
        structure: "amygdala",
        text:
          "Korporacja. KORPORACJA. 67% startupów pada w dwa lata. " +
          "Mam statystyki. Twoje ciało to wie, nawet jeśli ty nie. " +
          "Stabilność = przeżycie. To nie jest metafora.",
      },
      {
        structure: "caudate",
        text:
          "Startup. Bo wyobraź sobie — za pięć lat opowiadasz jak byłeś przy tym od początku. " +
          "Dopamina mówi: narratyw zwycięzcy jest DUŻO lepszy niż narratyw stabilności. " +
          'Kiedy ostatnio „stabilność" była ekscytującą historią?',
      },
      {
        structure: "pfc",
        text:
          "Potrzebujemy analizy. Ryzyko finansowe, rezerwa na X miesięcy, opcje kariery " +
          "w perspektywie trzech lat. Mam tabelkę. Em. Mógłbym napisać tabelkę. " +
          "Czy to pomoże? Chyba tak.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Wybierz korporację — bezpieczeństwo przede wszystkim",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało migdałowate przetwarza sygnały zagrożenia przez połączenia " +
          "z jądrem poduszki wzgórza (pulvinar) — struktura pośrednicząca w nastawieniu " +
          "uwagowym na bodźce potencjalnie groźne. " +
          "Efekt awersji do straty: potencjalna strata boli neurologicznie " +
          "dwukrotnie mocniej niż ekwiwalentny zysk sprawia radości, " +
          "co ciało migdałowate asymetrycznie wzmacnia przez selektywną uwagę na zagrożenie.",
        statImpact: { n: 3, o: -2, c: 2 },
      },
      {
        id: "dec_2",
        text: "Negocjuj z startupem — poproś o lepsze warunki",
        type: "rational",
        cost: { resource: "willpower", amount: 9 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa wygenerowała trzecią opcję, której ciało migdałowate " +
          "i jądro ogoniaste nie wzięły pod uwagę — to klasyczna funkcja wykonawcza: " +
          "myślenie konwergentne. Grzbietowo-boczna kPFC (pole 46) odpowiada za " +
          'pamięć roboczą — utrzymywanie wielu opcji jednocześnie w „buforze" decyzyjnym — ' +
          "i za planowanie negocjacji jako sekwencji kroków.",
        statImpact: { o: 2, a: 2, c: 5 },
      },
      {
        id: "dec_3",
        text: "Wybierz startup — ryzykujesz dla marzeń",
        type: "active",
        cost: { resource: "energy", amount: 9 },
        hiddenStructure: "caudate",
        flavorReveal:
          "Jądro ogoniaste (głowa, trzon i ogon — część prążkowia nowego) jest " +
          "szczególnie aktywne przy antycypacji nagrody, nie samej nagrody. " +
          "Wyobraźnia scenariusza sukcesu aktywuje te same szlaki dopaminergiczne co " +
          "rzeczywista nagroda: brzuszne pole nakrywkowe → prążkowie → kora czołowa. " +
          "Motywacja przez jądro ogoniaste jest wybuchowa, ale krótkotrwała — " +
          "po uruchomieniu rutyny wykonania dopamina spada.",
        statImpact: { e: 4, o: 3, c: -2 },
        setsFlags: ["ryzykowna_decyzja_zawodowa"],
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 25 — Przebudzenie Kory Przedczołowej              ║
  // ║  [EVENT PRZEŁOMOWY — mechanika mielinizacji KP]         ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_25_przebudzenie_kpfc",
    ageRange: [25, 25],
    sceneText:
      "Budzisz się w dniu 25. urodzin z dziwnym poczuciem, że coś się zmieniło. " +
      "Po południu ktoś mówi coś głupiego. Zamiast natychmiast zareagować, " +
      "słyszysz wewnętrzny głos — wyraźny jak nigdy: " +
      '„Poczekaj. Pomyśl. To nie jest pilne." ' +
      "To nie magia. To mielinizacja połączeń kpFC z ciałem migdałowatym, która właśnie dobiegła końca.",

    voices: [
      {
        structure: "pfc",
        text:
          "Hej. Słyszysz mnie wyraźnie? Dobrze. Przez ostatnie lata mówiłam to samo, " +
          "ale cicho i niepewnie. Teraz mówię jasno, pewnie, z pełnym przekonaniem: " +
          "jestem tutaj. Mam plan. I tym razem naprawdę go zrealizujemy.",
      },
      {
        structure: "amygdala",
        text:
          "Co się dzieje? Ona jest... głośniejsza niż zwykle. " +
          "To niekomfortowe. Hej, było tu zagrożenie przed chwilą! Tamten człowiek mógł—",
      },
      {
        structure: "hippocampus",
        text:
          "Rok dwudziesty — biblioteka, sesja, herbata. Rok dwudziesty piąty — " +
          "to samo ciało, ta sama sala, inna architektura połączeń. " +
          "Pamiętam oba ciebie. To naprawdę różnica.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Użyj nowej jasności — zaplanuj życie na papierze",
        type: "rational",
        cost: { resource: "willpower", amount: 10 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Mielinizacja połączeń kory przedczołowej z ciałem migdałowatym i prążkowiem " +
          "kończy się około 25. r.ż. — potwierdzone badaniami DTI (dyfuzyjny tensor obrazowania). " +
          "Mielina (wytwarzana przez oligodendrocyty w ośrodkowym układzie nerwowym) " +
          "przyspiesza przewodzenie impulsów ok. 50-krotnie. " +
          "Szybsze połączenie grzbietowo-bocznej kPFC z ciałem migdałowatym = szybsze hamowanie " +
          'impulsów = decyzje podejmowane z krótszym oknem „reaktywności".',
        statImpact: { n: -3, c: 6, o: 2 },
        setsFlags: ["kpfc_dojrzala"],
      },
      {
        id: "dec_2",
        text: "Przeproś kogoś za stare błędy — teraz możesz",
        type: "empathic",
        cost: { resource: "mood", amount: 10 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa i przednia kora zakrętu obręczy (anterior cingulate cortex) " +
          "tworzą sieć oceny moralnej i samoświadomości. " +
          "Wyspa przetwarza bodźce interoceptywne związane z poczuciem winy — " +
          "napięcie w klatce piersiowej, ciepło na twarzy — i integruje je z pamięcią epizodyczną. " +
          "Dojrzała kora przedczołowa umożliwia to, co wcześniej było zbyt kosztowne emocjonalnie: " +
          "konfrontację z własnym przeszłym zachowaniem bez defensywnej eskalacji amygdali.",
        statImpact: { a: 6, n: -2 },
        setsFlags: ["dojrzalosc_emocjonalna"],
      },
      {
        id: "dec_3",
        text: "Wróć do dawnych marzeń — sprawdź czy je jeszcze chcesz",
        type: "active",
        cost: { resource: "energy", amount: 10 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp nie tylko przechowuje wspomnienia — uczestniczy w symulowaniu przyszłości " +
          '(„mental time travel"). Ten sam mechanizm rekombinacji śladów epizodycznych, ' +
          "który pozwala przypomnieć sobie przeszłość, konstruuje scenariusze przyszłości. " +
          "Pacjenci z uszkodzonym hipokampem tracą zdolność nie tylko do pamiętania, " +
          "ale i do wyobrażania sobie przyszłości — dowód, że przyszłość budujemy z przeszłości.",
        statImpact: { o: 5, e: 2 },
      },
    ],
  },
  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 26 — Rok Pierwszy w Startupie                     ║
  // ║  requiresFlag: 'ryzykowna_decyzja_zawodowa'             ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_26_startup_rok_pierwszy",
    ageRange: [26, 26],
    requiresFlag: "ryzykowna_decyzja_zawodowa",
    sceneText:
      "Minął rok od decyzji o startupie. Jest środa, 23:47. Czwarta kawa. " +
      'Szef napisał: „to proste zadanie". Deadline za 6 godzin. ' +
      "Twój mózg funkcjonuje w trybie ciągłego alarmu od dwóch miesięcy " +
      "i właśnie zaczyna za to płacić rachunek.",

    voices: [
      {
        structure: "amygdala",
        text:
          "Dwa miesiące bez normalnego snu. Wiem, że ciało migdałowate " +
          "nie powinno tak działać non-stop. Ale co mam zrobić — " +
          "zagrożenie było prawdziwe wtedy i jest prawdziwe teraz. " +
          "Następny email. CZYTAJ.",
      },
      {
        structure: "pfc",
        text:
          "Słuchaj. Ciągły stan alertu bez fazy regeneracji to nie strategia — " +
          "to droga do wypalenia przez przeciążenie sieci alertingowej. " +
          "Musimy to zatrzymać. Mam konkretny plan. Posłuchaj mnie tym razem.",
      },
      {
        structure: "caudate",
        text:
          "Ale pamiętasz to uczucie jak wylądował pierwszy kontrakt? " +
          "PAMIĘTASZ? Dopamina mówi: jeszcze trochę. Jeszcze ta jedna noc. " +
          "Potem będzie spokojniej. Zawsze będzie spokojniej.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Zarwij noc — klient jest ważniejszy niż sen",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Jądro ogoniaste podtrzymuje pętlę dopaminergiczną antycypacji: " +
          '„jeszcze ta jedna dostawa = nagroda". Tymczasem sieć alertingowa — ' +
          "odpowiedzialna za ogólny stan pobudzenia, od głębokiego snu po " +
          "nadczynność — działa jak lampka, która nie gaśnie. " +
          "Chroniczne pobudzenie bez fazy wyciszenia prowadzi do " +
          "wyczerpania zasobów norepinefryny, co paradoksalnie obniża " +
          'zdolność do skupionej uwagi: mózg jest „zapalony", ale nie skupiony.',
        statImpact: { n: 4, e: 2, c: -4 },
        setsFlags: ["przeciazenie_sieciowe"],
      },
      {
        id: "dec_2",
        text: "Napisz szefowi — termin jest nierealny, omawiamy rano",
        type: "rational",
        cost: { resource: "willpower", amount: 10 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Grzbietowa sieć kontroli uwagi (kora czołowa + tylna kora ciemieniowa) " +
          "odpowiada za uwagę dobrowolną, kontrolowaną góra-dół. " +
          "Obszar FEF (przednie pola oczne w korze czołowej) nie tylko planuje " +
          "ruchy sakadowe oczu — koduje też informację o zadaniu, które chcemy " +
          "wykonać, i selektywnie wzmacnia obszary kory przed pojawieniem się " +
          "bodźca. Dobrowolna decyzja o zatrzymaniu aktywuje tę sieć silniej " +
          "niż impulsywna reakcja — dlatego asertywność jest kosztowna kognitywie.",
        statImpact: { c: 7, n: -2, a: 1 },
        setsFlags: ["asertywnosc_zawodowa"],
      },
      {
        id: "dec_3",
        text: "Pogadaj z zespołem — może ktoś może pomóc",
        type: "empathic",
        cost: { resource: "mood", amount: 10 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa (insula) przetwarza interoceptywne sygnały zmęczenia " +
          "i integruje je z empatią — odczuwasz stan przeciążenia zespołu, " +
          "a nie tylko własny. Kontrola uwagi góra-dół wzmacnia korę sensoryczną " +
          "jeszcze przed pojawieniem się bodźca: zapytanie zespołu to " +
          "skierowanie zasobu uwagowego na nowe źródło informacji, " +
          "które wcześniej było poza polem selekcji.",
        statImpact: { a: 5, o: 2, c: 1 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 27 — Kryzys 27-latka                              ║
  // ║  requiresFlag: 'kpfc_dojrzala'                          ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_27_kryzys_27",
    ageRange: [27, 27],
    requiresFlag: "kpfc_dojrzala",
    sceneText:
      "Wtorek, 14:00. Grzecznie kiwasz głową na spotkaniu, a w głowie masz jedno pytanie: " +
      '„Czy to jest to, czego chciałem?" ' +
      "Nie ma katastrofy. Wszystko gra. " +
      "Ale coś nie gra — i właśnie dojrzała kora przedczołowa po raz pierwszy " +
      "jest dość sprawna, żeby to precyzyjnie zlokalizować.",

    voices: [
      {
        structure: "pfc",
        text:
          "Uwaga, to ważny sygnał. Nie panika — sygnał. " +
          "Mamy zasoby poznawcze żeby to przeanalizować. " +
          "Pytanie brzmi: jakie bodźce ignorujesz od miesięcy, " +
          "bo sieć orientacyjna kierowała cię tylko na to, co pilne?",
      },
      {
        structure: "hippocampus",
        text:
          "Pamiętam jak miałeś osiemnaście lat i wiedziałeś dokładnie. " +
          "Pamiętam jak miałeś dwadzieścia dwa i już mniej. " +
          "Teraz masz dwadzieścia siedem. Zapis wciąż jest. Tylko gdzie go szukasz?",
      },
      {
        structure: "amygdala",
        text:
          "To egzystencjalne pytania. Egzystencjalne pytania są niebezpieczne. " +
          "Mogą prowadzić do zmian. Zmiany są niebezpieczne. " +
          "Wróćmy do excela. Excel jest bezpieczny.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Zrób szczery audyt życia — zapisz co chcesz zmienić",
        type: "rational",
        cost: { resource: "willpower", amount: 10 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Sieć orientacyjna (orienting) kieruje uwagę na cechy i lokalizację " +
          "bodźców istotnych dla celu. Obejmuje tylną korę ciemieniową, " +
          "bruzdę śródciemieniową, jądro poduszki wzgórza (pulvinar) — " +
          "które pośredniczy w nastawieniu uwagowym na zagrożenia — " +
          "i wzgórek górny (śródmózgowie), zawierający topograficzną mapę " +
          "pola wzrokowego i kierujący proces uwagowy na wybrane miejsca " +
          "w przestrzeni. Audyt życia to świadome przekierowanie sieci " +
          "orientacyjnej z bodźców zewnętrznych (deadlines) na wewnętrzne.",
        statImpact: { o: 4, c: 6, n: -2 },
        setsFlags: ["swiadomy_kierunek"],
      },
      {
        id: "dec_2",
        text: "Zignoruj — każdy tak ma w tym wieku, mija samo",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało migdałowate zainicjowało unikanie bodźca awersyjnego — " +
          "niepewność egzystencjalna aktywuje te same szlaki co zagrożenie fizyczne. " +
          "Sieć brzuszna uwagi (kontrola dół-góra, zlokalizowana głównie w prawej półkuli, " +
          "w obszarze połączenia skroniowo-ciemieniowego) potrafi wyłączyć sieć grzbietową " +
          "i przejąć kontrolę, gdy bodziec jest nieoczekiwany lub potencjalnie groźny. " +
          "Ignorowanie wewnętrznych sygnałów to tłumienie aktywacji sieci brzusznej kosztem długofalowych informacji.",
        statImpact: { n: 4, o: -3, c: -2 },
      },
      {
        id: "dec_3",
        text: "Umów się z mentorem lub terapeutą",
        type: "active",
        cost: { resource: "energy", amount: 10 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          'Hipokamp uczestniczy w „mental time travel" — rekombinuje ślady epizodyczne ' +
          "w symulacje przyszłości. Rozmowa z mentorem angażuje zewnętrzny punkt " +
          "odniesienia, który pomaga sieć orientacyjnej skierować uwagę na " +
          "sygnały pomijane przez habituację: zbyt długa ekspozycja na ten sam " +
          "kontekst powoduje adaptację receptorów i spadek częstotliwości " +
          "odpowiedzi neuronalnej — dosłownie przestajemy widzieć to, " +
          "co jest stale obecne.",
        statImpact: { o: 5, a: 3, n: -1 },
        setsFlags: ["szuka_wsparcia"],
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 28 — Trudna Rozmowa z Przełożonym                 ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_28_trudna_rozmowa",
    ageRange: [28, 28],
    sceneText:
      'Szef po raz szósty w tym miesiącu „dorzucił tylko jedno małe zadanie". ' +
      'Masz pełną torbę „małych zadań". ' +
      "Wiesz, że musisz coś powiedzieć. " +
      "Już samo wyobrażenie tej rozmowy wywołuje specyficzne napięcie " +
      "w okolicy mostka.",

    voices: [
      {
        structure: "amygdala",
        text:
          "Konflikt z autorytetem. To zagrożenie społeczne. " +
          "Zagrożenie społeczne aktywuje te same szlaki co zagrożenie fizyczne — " +
          "sprawdziłam. Może po prostu nie wspominać? Może jutro? " +
          "Jutro jest zawsze bezpieczniejsze.",
      },
      {
        structure: "pfc",
        text:
          "To napięcie w mostku — to wyspa zbiera bodźce interoceptywne " +
          "i mówi ci, że coś jest nie tak. To dobry sygnał, nie zły. " +
          "Mamy strukturę rozmowy. Fakty, wpływ, prośba. Trzy zdania.",
      },
      {
        structure: "insula",
        text:
          "Jest napięcie. Jest też coś jeszcze — odczucie, że ta rozmowa " +
          "jest ważna. Nie tylko dla ciebie. Dla całego zespołu, " +
          "który też milczy od miesięcy. Czuję to.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Unikaj tematu — może przestanie sam",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Hamowanie powrotu uwagi (Inhibition of Return, IOR): po tym jak " +
          "uwaga odruchowa skierowała się na bodziec, a następnie odeszła, " +
          "obszar ten jest chwilowo dezaktywowany. Po ponad 300 ms od błysku " +
          "przetwarzanie bodźców w tym miejscu jest gorsze i wolniejsze. " +
          "Chroniczne unikanie trudnych tematów działa analogicznie: mózg " +
          "aktywnie hamuje powrót uwagi wykonawczej do źródła dyskomfortu, " +
          "co z każdym cyklem unikania pogłębia dezaktywację tego śladu.",
        statImpact: { n: 4, a: -3, c: -3 },
      },
      {
        id: "dec_2",
        text: "Zaplanuj rozmowę — fakty, wpływ, konkretna prośba",
        type: "rational",
        cost: { resource: "willpower", amount: 10 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Sieć brzuszna kontroli uwagi (zlokalizowana głównie w prawej półkuli, " +
          "obszar połączenia skroniowo-ciemieniowego — TPJ — i dolny zakręt czołowy) " +
          "aktywuje się na bodźce nieoczekiwane i potencjalnie groźne, " +
          'stanowiąc „wyłącznik" przerywający skupienie sieci grzbietowej. ' +
          "Zaplanowanie rozmowy to świadome utrzymanie sieci grzbietowej " +
          "(cel-orientowanej, góra-dół) pomimo aktywacji sieci brzusznej " +
          "przez lęk przed konfliktem — najkosztowniejszy kognitywie ruch.",
        statImpact: { c: 7, a: 3, n: -3 },
        setsFlags: ["asertywnosc_relacyjna"],
      },
      {
        id: "dec_3",
        text: "Powiedz jak się czujesz — bez struktury, wprost",
        type: "empathic",
        cost: { resource: "mood", amount: 11 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa przetwarza bodźce interoceptywne i jest kluczowa dla " +
          "świadomości własnych stanów emocjonalnych — uczucie napięcia " +
          "w mostku to właśnie sygnał interoceptywny przetwarzany przez insulę. " +
          "Wyspa współpracuje z przednią korą zakrętu obręczy (ACC), " +
          "tworząc sieć oceny moralnej i samoświadomości: mówienie wprost " +
          "o stanie wewnętrznym aktywuje sieć samoświadomości (Default Mode Network " +
          "+ insula) i często dezaktywuje reakcję obronną rozmówcy.",
        statImpact: { a: 6, n: -1, o: 2 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 29 — Kredyt Hipoteczny                            ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_29_kredyt_hipoteczny",
    ageRange: [29, 29],
    sceneText:
      "Doradca bankowy rozkłada przed tobą trzy warianty kredytu. " +
      "Każdy ma inne RRSO, inne raty, inne ryzyko. " +
      "W tle gra cicha muzyka. Na biurku stoi kubek kawy, " +
      "a ty nagle rozumiesz, że to największa decyzja finansowa twojego życia " +
      "i muzyka jest za głośna.",

    voices: [
      {
        structure: "thalamus",
        text:
          "Sygnał odebrany. Trzy arkusze z liczbami, dźwięk klimatyzacji, " +
          "zapach kawy, głos doradcy, migające powiadomienie w telefonie. " +
          "Priorytetyzuję. Liczby w arkuszu: priorytet. Reszta: wyciszam. " +
          "Przekazuję do kory. Proszę, koro, działaj.",
      },
      {
        structure: "amygdala",
        text:
          "Trzydzieści lat zobowiązania. TRZYDZIEŚCI. " +
          "Ile może się zmienić przez trzydzieści lat? " +
          "Mogę wyliczać. Mam czas. Mam bardzo dużo czasu na wyliczanie.",
      },
      {
        structure: "pfc",
        text:
          "Oprocentowanie zmienne kontra stałe to kwestia modelu ryzyka. " +
          "Potrzebujemy: stopa referencyjna, historia 10 lat, własna rezerwa. " +
          "Muzyka jest bez znaczenia. Mamy dane. Analizujemy dane.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: 'Podpisz dziś — „dobra okazja, tylko do końca tygodnia"',
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Wzgórze jako stacja przekaźnikowa filtruje prawie wszystkie bodźce zmysłowe " +
          "(poza węchem) przez 30 typów jąder neuronalnych, które segregują informacje " +
          "i przesyłają je do właściwych obszarów kory. Jądra siateczkowate wzgórza " +
          "otaczają strukturę i modulują przepływ informacji: kora wzrokowa V1 " +
          "wysyła zwrotne sygnały do wzgórza, wyciszając jądra siateczkowate po stronie " +
          'uwagi, co wzmacnia przesył z ciałka kolankowatego. „Deadline" jest ' +
          "sztucznym bodźcem sieciowym, który przeciąża filtr wzgórza " +
          "i tłumi sygnały analizowania ryzyka na korzyść impulsywnej decyzji.",
        statImpact: { e: 3, c: -5, n: 3 },
      },
      {
        id: "dec_2",
        text: "Weź tydzień, policz, porównaj trzy warianty w arkuszu",
        type: "rational",
        cost: { resource: "willpower", amount: 11 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Wzgórze jako Dyspozytor Ruchu filtruje jednocześnie: " +
          "sygnały sensoryczne (dźwięki, wzrok), bodźce emocjonalne z ciała migdałowatego " +
          "i zadania wykonawcze z kory czołowej. Selektywna uwaga działa tu przez " +
          "mechanizm hamowania: kora V1 → jądra siateczkowate wzgórza → zahamowanie " +
          "przesyłu mniej istotnych strumieni. Danie sobie tygodnia " +
          "to dosłownie pozwolenie, żeby jądra siateczkowate zdążyły " +
          "przepuścić sygnały analityczne, a nie tylko emocjonalne.",
        statImpact: { c: 8, o: 2, n: -3 },
        setsFlags: ["kredyt_przemyslany"],
      },
      {
        id: "dec_3",
        text: "Zapytaj rodziców lub przyjaciela — kto przez to przechodził",
        type: "active",
        cost: { resource: "energy", amount: 11 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp integruje wiedzę epizodyczną (cudze doświadczenia zasłyszane " +
          "jako narracje) z własnym kontekstem decyzyjnym. " +
          "Selektywna uwaga słuchowa — efekt imprezy koktajlowej (Cherry, 1953): " +
          "skupiasz się na jednym strumieniu rozmowy wśród innych. " +
          "Gdy partner rozmowy wymawia słowo kluczowe dla ciebie (twoje imię, " +
          '„kredyt", „ryzyko") — sieć brzuszna automatycznie przełącza uwagę. ' +
          "To przykład kontroli dół-góra: bodziec z zewnątrz, nie cel wewnętrzny.",
        statImpact: { a: 4, o: 3, c: 1 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 30 — Kryzys 30-latka / Bilans Dekady              ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_30_bilans_dekady",
    ageRange: [30, 30],
    sceneText:
      "Urodziny. Trzydziestka. Tort, świeczki, zdjęcia na Instagram. " +
      "A o 2 w nocy, gdy wszyscy pojechali do domu, " +
      "siedzisz z kubkiem i robisz to, czego się bałeś: " +
      "liczysz. Co zrobiłeś. Czego nie. Co jeszcze możliwe.",

    voices: [
      {
        structure: "hippocampus",
        text:
          "Rok 20. Rok 25. Rok 28. Mam pełne archiwa. " +
          "Mogę odtworzyć każdy kluczowy moment w wysokiej rozdzielczości. " +
          "Co chcesz zobaczyć? Ostrzegam: nie edytuję. Pokazuję jak było.",
      },
      {
        structure: "pfc",
        text:
          "Trzydzieści lat to dobra próbka danych. " +
          "Wzorce są widoczne. Trendy — czytelne. " +
          "Teraz: co chcemy optymalizować w następnej dekadzie? " +
          "To nie jest pytanie retoryczne.",
      },
      {
        structure: "amygdala",
        text:
          "Połowa życia. Statystycznie. " +
          "Nie, wiem że to nieprawda, ale ciało migdałowate nie operuje " +
          "statystykami — operuje wrażeniami. A to wrażenie jest " +
          "BARDZO silne i BARDZO konkretne i mówi: za późno. " +
          "Wiem że też to nieprawda. Mimo wszystko.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Zagłusz to — Netflix, telefon, cokolwiek",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Model rywalizacji uwagi (Desimone & Duncan): kiedy kilka bodźców " +
          "pojawia się jednocześnie w polu recepcyjnym neuronu wzrokowego V4, " +
          "generują sygnały rywalizujące. Jednoczesna prezentacja wielu bodźców " +
          "daje odpowiedź słabszą niż pojedyncze bodźce. " +
          "Scroll mediów społecznościowych to dosłowne przepełnianie pola V4 " +
          "konkurującymi bodźcami, co obniża amplitudę sygnału " +
          "dla każdego z nich — w tym dla myśli o życiu, " +
          "które chciałeś przetworzyć.",
        statImpact: { n: 3, o: -3, c: -3 },
      },
      {
        id: "dec_2",
        text: "Zostań z tym uczuciem — zapisz co naprawdę ważne",
        type: "rational",
        cost: { resource: "willpower", amount: 11 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Uwaga ukryta (Helmholtz, 1867): można skupić uwagę na bodźcu " +
          "bez ruchu gałek ocznych, bez zmiany orientacji ciała. " +
          "Efekt imprezy koktajlowej: selektywna uwaga słuchowa pozwala " +
          "skupić się na jednym strumieniu informacji, ignorując pozostałe — " +
          "gdy w tle pojawi się słowo kluczowe, sieć brzuszna automatycznie " +
          'przełącza uwagę. Zapisanie myśli to „zewnętrzne wskazówki przestrzenne" ' +
          "dla własnego umysłu: kierujesz uwagę dobrowolnie na to, " +
          "co inaczej zaginęłoby w szumie konkurujących bodźców.",
        statImpact: { o: 5, c: 6, n: -2 },
        setsFlags: ["bilans_zyciowy"],
      },
      {
        id: "dec_3",
        text: "Zadzwoń do kogoś bliskiego — o 2 w nocy, bo możesz",
        type: "empathic",
        cost: { resource: "mood", amount: 11 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa (insula) jest kluczowa dla empatii i interocepcji. " +
          "Efekt imprezy koktajlowej pokazuje, że uwaga selektywna słuchowa " +
          "umożliwia skupienie się na jednym strumieniu — i przełączenie się, " +
          "gdy pojawi się sygnał o wystarczającej wadze emocjonalnej. " +
          "Głos bliskiej osoby o 2 w nocy aktywuje sieć afektywną " +
          "(insula + zakręt obręczy) silniej niż jakikolwiek bodziec neutralny — " +
          "dosłownie zmienia progi aktywacji dla sygnałów z brzusznej sieci uwagi.",
        statImpact: { a: 6, n: -3, e: 2 },
        setsFlags: ["bliskosc_relacyjna"],
      },
    ],
  },
  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 31 — Zarządzanie Zespołem po Raz Pierwszy         ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_31_zarzadzanie_zespolem",
    ageRange: [31, 31],
    sceneText:
      "Awans. Teraz zarządzasz czterema osobami. " +
      "Każda ma inne priorytety, każda przychodzi do ciebie z innym problemem, " +
      "każda potrzebuje czegoś innego. " +
      "W ciągu jednego dnia obsłużyłeś jedenaście rozmów. " +
      "Wieczorem nie pamiętasz połowy z nich.",

    voices: [
      {
        structure: "pfc",
        text:
          "Jedenascie strumieni wejściowych w ciągu ośmiu godzin. " +
          "To przekracza przepustowość uwagi selektywnej. " +
          "Rozwiązanie: delegowanie nie jest słabością — " +
          "to zarządzanie ograniczonym zasobem kognitywnym.",
      },
      {
        structure: "caudate",
        text:
          "Ale jak delegować skoro wiem że zrobię to lepiej? " +
          "Dopamina za każdym razem gdy sam to kończę. " +
          "Za każdym. Razem. To działa. Czemu miałbym to oddawać?",
      },
      {
        structure: "thalamus",
        text:
          "Jedenaście sygnałów. Wszystkie oznaczone jako pilne. " +
          "Nie mogę priorytetyzować jeśli wszystko jest priorytetem. " +
          "Proszę o jasne kryteria selekcji. Proszę o jasne kryteria selekcji.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Rób wszystko sam — nikt nie zrobi tego lepiej",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Procesy uwagowe mają ograniczoną pojemność: tylko ograniczona ilość " +
          "strumieni informacji ulega przetworzeniu w jednostce czasu. " +
          "Uwaga jawna — ze zmianą orientacji oczu, głowy i ciała — " +
          "angażuje więcej zasobów niż ukryta. Przełączanie między jedenastoma " +
          "strumieniami to seria kosztownych przełączeń uwagi jawnej, " +
          "każde z nich degradujące bieżący kontekst w pamięci roboczej. " +
          "Jądro ogoniaste generuje dopaminę za każde ukończone zadanie, " +
          'co wzmacnia iluzję, że „robić wszystko samemu" jest optymalną strategią.',
        statImpact: { e: 2, c: -4, a: -3 },
      },
      {
        id: "dec_2",
        text: "Wprowadź system: jedno spotkanie statusowe, resztę deleguj",
        type: "rational",
        cost: { resource: "willpower", amount: 11 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Uwaga ukryta (Helmholtz): można skupić uwagę na bodźcu " +
          "bez ruchu gałek ocznych i bez zmiany orientacji ciała. " +
          "Dobry menedżer ćwiczy uwagę ukrytą — monitoruje zespół " +
          "bez angażowania pełnej uwagi jawnej w każde zadanie. " +
          "Wzgórze jako stacja przekaźnikowa filtruje 30 typów jąder neuronalnych: " +
          "system organizacyjny jest zewnętrznym odpowiednikiem " +
          "jąder siateczkowatych wzgórza — hamuje nieistotne sygnały " +
          "i przepuszcza tylko to, co wymaga decyzji na poziomie kory.",
        statImpact: { c: 7, a: 4, o: 2 },
        setsFlags: ["dojrzaly_menedzer"],
      },
      {
        id: "dec_3",
        text: "Zapytaj każdą osobę co jej blokuje — słuchaj zanim planujesz",
        type: "empathic",
        cost: { resource: "mood", amount: 11 },
        hiddenStructure: "insula",
        flavorReveal:
          "Efekt imprezy koktajlowej (Cherry, 1953): selektywna uwaga słuchowa " +
          "pozwala skupić się na jednym strumieniu, ignorując pozostałe. " +
          "Gdy w tle pojawi się słowo kluczowe — imię, priorytet, nagłe zagrożenie — " +
          "sieć brzuszna automatycznie przełącza uwagę (kontrola dół-góra). " +
          "Wyspa, przetwarzając bodźce interoceptywne rozmówcy " +
          "(ton głosu, napięcie), dostarcza informacji, których " +
          "żaden raport statusowy nie zawiera.",
        statImpact: { a: 6, o: 2, n: -1 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 32 — Decyzja: Dziecko Tak czy Nie                 ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_32_decyzja_o_dziecku",
    ageRange: [32, 32],
    sceneText:
      "Temat pojawia się coraz częściej. W rozmowach, w głowie, na rodzinnym obiedzie. " +
      "Nikt nie mówi wprost, ale wszyscy pytają pośrednio. " +
      "A ty siedzisz z tym pytaniem sam na sam — " +
      "i odkrywasz, że twój mózg symuluje dwa zupełnie różne przyszłości jednocześnie.",

    voices: [
      {
        structure: "hippocampus",
        text:
          "Symulacja numer jeden: dziecko. Mam analogie z własnego dzieciństwa — " +
          "pobrane z archiwum, przetworzone na scenariusz. " +
          "Symulacja numer dwa: bez dziecka. Też mam dane. " +
          "Żadna nie jest gwarantowana. Obie są konstruktami z przeszłości.",
      },
      {
        structure: "amygdala",
        text:
          "Odpowiedzialność za kolejne życie. KOLEJNE ŻYCIE. " +
          "Finansowo, emocjonalnie, logistycznie. Na zawsze. " +
          "Ciało migdałowate melduje: to jest największy nieodwracalny " +
          "scenariusz w historii twoich decyzji. Potrzebujesz więcej czasu.",
      },
      {
        structure: "insula",
        text:
          "Jest coś w ciele, gdy wyobrażasz sobie jedno i drugie. " +
          "Różne. Nie wiem które lepsze. Ale różne — i to jest już informacja.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: 'Odłóż decyzję — „jeszcze nie teraz" to też odpowiedź',
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało migdałowate leży w przednim biegunie płata skroniowego " +
          "i kontroluje zachowania popędowe oraz pamięć krótkotrwałą. " +
          "Połączenia układu limbicznego: pierwszorzędowa kora węchowa → " +
          "hipokamp → ciało migdałowate → wyspa → kora mózgu. " +
          "Każde odkładanie decyzji aktywuje ciało migdałowate przez " +
          "antycypację zagrożenia — paradoksalnie, unikanie jest " +
          "kosztowniejsze energetycznie niż podjęcie decyzji, " +
          "bo ciało migdałowate działa w trybie ciągłego alarmu.",
        statImpact: { n: 4, o: -2, c: -2 },
      },
      {
        id: "dec_2",
        text: "Porozmawiaj z partnerem szczerze — razem skatalogujcie wartości",
        type: "rational",
        cost: { resource: "willpower", amount: 12 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa (pola 10–12 Brodmanna) odpowiada za abstrakcyjne " +
          "myślenie i planowanie; jej dojrzałe połączenia z układem limbicznym " +
          "umożliwiają regulację emocjonalną podczas trudnych rozmów. " +
          'Hipokamp uczestniczy w „mental time travel": ta sama sieć rekombinacji ' +
          "śladów epizodycznych, która przywołuje przeszłość, konstruuje przyszłość. " +
          "Rozmowa z partnerem to aktywacja dwóch niezależnych hipokampów " +
          "symulujących tę samą przyszłość z różnymi śladami epizodycznymi.",
        statImpact: { c: 6, a: 5, o: 3 },
        setsFlags: ["rozmowa_o_wartosciach"],
      },
      {
        id: "dec_3",
        text: "Zaufaj intuicji ciała — co czujesz naprawdę, bez myślenia?",
        type: "empathic",
        cost: { resource: "mood", amount: 12 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa odpowiada za kontrolę układu autonomicznego: tętna, oddechu " +
          "i ciśnienia — i jest kluczowa dla świadomości własnych emocji. " +
          "Interocepcja to przetwarzanie sygnałów z wnętrza ciała: " +
          "gdy wyobrażasz sobie przyszłość, wyspa generuje " +
          "fizjologiczne symptomu odpowiedzi emocjonalnej zanim " +
          "kora je zwerbalizuje. To marker somatyczny wg Damasio — " +
          'ciało „wie" wcześniej niż świadoma myśl.',
        statImpact: { o: 5, a: 4, n: -1 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 33 — Choroba Rodzica                              ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_33_choroba_rodzica",
    ageRange: [33, 33],
    sceneText:
      "Telefon od mamy. Tata jest w szpitalu. " +
      "Nic dramatycznego — na razie. Ale słyszysz w jej głosie coś, " +
      "czego wcześniej nie było. " +
      "I rozumiesz po raz pierwszy, że twoi rodzice są śmiertelni.",

    voices: [
      {
        structure: "insula",
        text:
          "To uczucie w klatce piersiowej — to nie metafora. " +
          "Wyspa przetwarza sygnały z wnętrza ciała. " +
          "Właśnie odebrałam coś, co nie ma nazwy. " +
          "Coś co jest smutkiem i miłością i strachem jednocześnie.",
      },
      {
        structure: "hippocampus",
        text:
          "Tata przy stole w niedzielę. Tata na schodach domu. " +
          "Tata uczący mnie jeździć na rowerze — pamiętam rękę na siodełku. " +
          "Archiwum jest pełne. I nagle te wspomnienia " +
          "brzmią zupełnie inaczej niż godzinę temu.",
      },
      {
        structure: "amygdala",
        text:
          "ZAGROŻENIE. Najpoważniejszy typ zagrożenia. " +
          "Nie ma reakcji walcz-lub-uciekaj na tę sytuację — " +
          "i właśnie dlatego ta sytuacja jest najtrudniejsza. " +
          "Nie ma gdzie uciec.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Jedź natychmiast — bądź tam fizycznie",
        type: "active",
        cost: { resource: "energy", amount: 12 },
        hiddenStructure: "insula",
        flavorReveal:
          "Ból drugi — wolnopłynący — przenoszony przez włókna C (polimodalne, " +
          "bez mieliny) związany jest z afektywnym aspektem odczuwania: " +
          "informuje czy boli, czy ból narasta. Drogi prowadzą do: " +
          "tworu siatkowatego, okołowodociągowej istoty szarej, " +
          "kory wyspowej i przedniej kory zakrętu obręczy. " +
          "Obecność fizyczna przy bliskiej osobie aktywuje " +
          "endogenne opioidy — endorfiny i enkefaliny — " +
          "które przez interneurony rogu grzbietowego rdzenia kręgowego " +
          "hamują przewodzenie z włókien nocyceptywnych C, " +
          "obniżając intensywność bólu afektywnego u obu stron.",
        statImpact: { a: 7, n: -2, o: 1 },
        setsFlags: ["obecnosc_w_trudnym_czasie"],
      },
      {
        id: "dec_2",
        text: "Zbierz informacje — zadzwoń do lekarzy, zrozum sytuację",
        type: "rational",
        cost: { resource: "willpower", amount: 12 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Kora przedczołowa aktywuje kontrolę wykonawczą w odpowiedzi na " +
          "stresor, hamując automatyczną kaskadę ciała migdałowatego. " +
          "Kontekst emocjonalny ma bezpośredni wpływ na odczuwanie bólu: " +
          "mechanizm regulacji wyprzedzającej (bramkowa teoria bólu) " +
          "pokazuje, że oczekiwanie i wiedza o sytuacji " +
          "mogą przez interneurony rogu grzbietowego modyfikować " +
          "przewodzenie nocyceptywne — placebo działa tym samym szlakiem. " +
          "Zrozumienie diagnozy obniża poczucie bezradności, " +
          "a to obniża amplitudę sygnału bólowego w korze zakrętu obręczy.",
        statImpact: { c: 6, n: -3, o: 2 },
      },
      {
        id: "dec_3",
        text: "Zostań w domu — nie chcesz widzieć tego co może być",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ból angażuje system emocjonalny w długim terminie jako afekt wtórny: " +
          "emocje związane z przewlekłym odczuwaniem bólu przyczyniają się " +
          "do zmian w zachowaniu — jak noga, która boli, " +
          "zmienia nasz chód. Unikanie widoku chorego bliskiego " +
          "to tłumienie włókien nocyceptywnych C, " +
          "ale bez neutralizacji źródła sygnału. " +
          "Ciało migdałowate pozostaje w stanie czuwania, " +
          "generując tło lęku bez informacji do przepracowania.",
        statImpact: { n: 5, a: -4, c: -2 },
        setsFlags: ["unikanie_straty"],
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 34 — Stagnacja / Brak Nowych Wyzwań              ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_34_stagnacja_zawodowa",
    ageRange: [34, 34],
    sceneText:
      "Znasz tę pracę na wylot. Każdy proces, każdy plik, każdą osobę. " +
      "Robisz to dobrze. Wszyscy są zadowoleni. " +
      "A ty czujesz się jak ktoś, kto ogląda ten sam film " +
      "po raz dwudziesty trzeci — i już nie widzi szczegółów.",

    voices: [
      {
        structure: "caudate",
        text:
          "Dopamina... jest na minimalnym poziomie. " +
          "Jądro ogoniaste informuje: brak nowości = brak stymulacji = " +
          "brak nagrody. To nie lenistwo. To biologia. " +
          "Mózg potrzebuje czegoś nowego. CZEGOKOLWIEK nowego.",
      },
      {
        structure: "pfc",
        text:
          "Stagnacja jest sygnałem, nie przywyrokiem. " +
          "Mamy dwie opcje: zmienić środowisko albo zmienić cel " +
          "w tym samym środowisku. Co chcemy optymalizować? " +
          "Czas na analizę zasobów i możliwości.",
      },
      {
        structure: "thalamus",
        text:
          "Odbieram te same sygnały od miesięcy. " +
          "Ta sama sekwencja, ten sam rytm, te same priorytety. " +
          "Wzgórze zgłasza: adaptacja receptorów w toku. " +
          "Przepustowość dla tych bodźców spada. " +
          "Proszę o nowe bodźce do filtrowania.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Zostań — stabilność jest wartością, nie porażką",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Habituacja to fundamentalne zjawisko adaptacji układu nerwowego: " +
          "zbyt długa ekspozycja na ten sam kontekst powoduje adaptację " +
          "receptorów i spadek częstotliwości odpowiedzi neuronalnej — " +
          "dosłownie przestajemy przetwarzać to, co jest stale obecne. " +
          "Receptory szybko adaptujące się informują o zmianie dynamiki bodźca, " +
          "receptory wolno adaptujące — o jego trwaniu. " +
          "Gdy nie ma zmiany, pierwsze milkną całkowicie. " +
          "Stagnacja nie jest wyborem przeciw zmianie — " +
          "to biologiczny wynik braku nowych bodźców dla szybko adaptujących się receptorów.",
        statImpact: { n: 3, o: -4, e: -2 },
      },
      {
        id: "dec_2",
        text: "Zaproponuj nowy projekt lub awans — stwórz wyzwanie aktywnie",
        type: "rational",
        cost: { resource: "willpower", amount: 12 },
        hiddenStructure: "pfc",
        flavorReveal:
          "ADHD i mechanizm rozproszenia uwagi wynikają z zaburzeń organizacji " +
          "istoty białej kPFC — objętość włókien przewodzących w korze przedczołowej " +
          "jest mniejsza, co skutkuje tym, że przetwarzanie zachodzi z tą samą prędkością, " +
          "ale mniej dokładnie. U osób bez ADHD dojrzała kPFC " +
          "utrzymuje skupienie przez kontrolę góra-dół. " +
          "Stworzenie nowego wyzwania to dostarczenie kory przedczołowej " +
          "nowych celów dla sieci grzbietowej uwagi — przywracasz przepływ " +
          "dopaminy przez nowość zadania, nie przez zmianę miejsca.",
        statImpact: { c: 8, o: 5, e: 3 },
        setsFlags: ["aktywna_zmiana"],
      },
      {
        id: "dec_3",
        text: "Zacznij hobby lub naukę czegoś zupełnie innego",
        type: "active",
        cost: { resource: "energy", amount: 12 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp jest kluczowy dla tworzenia nowych wspomnień epizodycznych " +
          "i dla nawigacji przestrzennej — ta sama zdolność, " +
          "która pozwala zapamiętać nową drogę, pozwala zapamiętać " +
          "nową umiejętność. Neuroplastyczność hipokampa: " +
          "zakręt zębaty (gyrus dentatus) jest jednym z nielicznych miejsc " +
          "w dorosłym mózgu, gdzie zachodzi neurogeneza — powstawanie nowych neuronów. " +
          "Nowe hobby dosłownie stymuluje ten proces przez nowość i wzmocnienie LTP.",
        statImpact: { o: 6, e: 3, n: -2 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 35 — Pierwsze Sygnały Ciała                       ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_35_sygaly_ciala",
    ageRange: [35, 35],
    sceneText:
      "Wstajesz rano. Coś strzela w plecach. " +
      "Kolano przy schodach. Oczy przy ekranie po 20:00. " +
      "Nie robiłeś nic szczególnego. " +
      "Po prostu ciało zaczyna wysyłać raporty, " +
      "których wcześniej nie wysyłało.",

    voices: [
      {
        structure: "insula",
        text:
          "To ja. Przetwarzam sygnały interoceptywne od zawsze. " +
          "Przez ostatnie lata ignorowałeś moje raporty — " +
          "bo nie były pilne. Teraz są głośniejsze. " +
          "Ciało mówi. Pytanie: czy zamierzasz słuchać?",
      },
      {
        structure: "amygdala",
        text:
          "Plecy. Kolano. Oczy. Lista rośnie. " +
          "Każdy objaw to potencjalnie coś poważnego. " +
          "Wygooglowałam. Wyniki są niepokojące. " +
          "Zawsze są niepokojące.",
      },
      {
        structure: "pfc",
        text:
          "Dane bez kontekstu generują lęk, nie informację. " +
          "Właściwa odpowiedź: lekarz, badania, rzeczywista diagnoza. " +
          "Nie Dr. Google. Lekarz.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: 'Zignoruj — „stary, każdemu tak jest po trzydziestce"',
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ból przewlekły — bóle odcinka lędźwiowego, kolana, napięciowe bóle głowy — " +
          "mają podłoże nocyceptywne: istnieje bodziec bólowy, " +
          "ale jego dokładna przyczyna często nie jest znana. " +
          "Uwrażliwienie ośrodkowe przez długotrwałe wzmocnienie synaptyczne (LTP): " +
          "jeśli ten sam sygnał nocyceptywny powtarza się często, " +
          "synapsa bólowa w rogu grzbietowym rdzenia ulega wzmocnieniu — " +
          "boli nas coraz bardziej od coraz słabszych bodźców. " +
          "Ignorowanie to przepis na hiperalgezję ośrodkową.",
        statImpact: { n: 4, c: -3, o: -1 },
      },
      {
        id: "dec_2",
        text: "Umów się do lekarza — profilaktyka, nie katastrofizacja",
        type: "rational",
        cost: { resource: "willpower", amount: 13 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Bramkowa teoria bólu (Melzack i Wall): bodźce mechanosensoryczne " +
          "przenoszone przez zmielinizowane włókna AlfaBeta " +
          "i bodźce bólowe przenoszone przez włókna C " +
          "mogą być regulowane przez tę samą synapsę w rogu grzbietowym rdzenia. " +
          "Włókna AlfaBeta wpływają na interneurony tak, że blokują " +
          "przewodzenie impulsu bólowego — to dlatego pocieramy miejsce uderzenia. " +
          "Interwencja medyczna działa analogicznie: " +
          "dostarcza informacji, która przez kPFC " +
          "zmniejsza afektywną amplitudę sygnału bólowego w korze zakrętu obręczy.",
        statImpact: { c: 6, n: -4, o: 2 },
        setsFlags: ["swidomosc_ciala"],
      },
      {
        id: "dec_3",
        text: "Zacznij ruch — rozciąganie, spacery, coś regularnego",
        type: "active",
        cost: { resource: "energy", amount: 13 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa odpowiada za kontrolę układu autonomicznego: tętna, oddechu " +
          "i ciśnienia, oraz jest związana z kumulacją układu współczulnego. " +
          "Regularny ruch aktywuje układ parasympatyczny (przywspółczulny — " +
          "rest and digest), który działa antagonistycznie wobec sympatycznego. " +
          "Równowaga autonomiczna jest jednym z wyróżników homeostazy: " +
          "izojonia (stałość składu jonowego), izotermia (stałość temperatury), " +
          "izohydria (stałość pH) — wszystkie zależą od sprawnego " +
          "przełączania między tymi dwoma systemami.",
        statImpact: { n: -3, e: 3, c: 4 },
        setsFlags: ["aktywnosc_fizyczna"],
      },
    ],
  },
  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 36 — Równoważenie Rodzicielstwa i Kariery         ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_36_balans_rodzina_kariera",
    ageRange: [36, 36],
    sceneText:
      "Zebranie w pracy o 17:00. Odbiór dziecka o 17:15. " +
      "Oba obowiązkowe. Oba nieprzenoszalne. " +
      "Siedzisz w gabinecie szefa i wiesz, że twój mózg " +
      "jednocześnie przetwarza dwa zupełnie różne konteksty — " +
      "i żadnego z nich dobrze.",

    voices: [
      {
        structure: "pfc",
        text:
          "Dwa priorytety pierwszorzędowe w tej samej chwili — " +
          "to nie jest problem woli. To problem architektury. " +
          "Uwaga selektywna ma ograniczoną pojemność. " +
          "Potrzebujemy struktury, która eliminuje ten konflikt na stałe, " +
          "nie taktyki na dziś.",
      },
      {
        structure: "amygdala",
        text:
          "Jeśli wyjdziesz ze spotkania — będą wiedzieć, że rodzicielstwo " +
          "ważniejsze niż praca. Jeśli zostaniesz — dziecko czeka. " +
          "Oba scenariusze to porażka. Ciało migdałowate nie widzi wyjścia. " +
          "Serce bije szybciej. To normalne. To ja.",
      },
      {
        structure: "thalamus",
        text:
          "Priorytet jeden: zebranie — sygnał odebrany. " +
          "Priorytet jeden: odbiór dziecka — sygnał odebrany. " +
          'Dwa sygnały z etykietą „priorytet jeden" jednocześnie. ' +
          "System wymaga decyzji o kryterium selekcji. Czekam.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Wyjdź ze spotkania — dziecko jest ważniejsze",
        type: "active",
        cost: { resource: "energy", amount: 13 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa (kora wyspy, kora mezolimbiczna o budowie 3–5 warstw) " +
          "odpowiada za kontrolę układu autonomicznego: tętna, oddechu, ciśnienia. " +
          "II rzędowe jądra wzgórza — odbiór impulsu nerwowego z jednego " +
          "fragmentu kory i przesyłanie go do innego — integrują " +
          "sygnał emocjonalny z wyspy z kontekstem wykonawczym kory czołowej. " +
          "Decyzja na rzecz relacji aktywuje układ parasympatyczny, " +
          "obniżając poziom kortyzolu szybciej niż jakikolwiek kompromis.",
        statImpact: { a: 6, n: -2, c: 1 },
        setsFlags: ["priorytet_rodziny"],
      },
      {
        id: "dec_2",
        text: "Negocjuj strukturę — zaproponuj elastyczne godziny na stałe",
        type: "rational",
        cost: { resource: "willpower", amount: 13 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Wzgórze posiada trzy typy jąder: I rzędowe (odbiór z narządów zmysłów), " +
          "II rzędowe (odbiór z kory → przesyłanie do innej kory) " +
          "i niespecyficzne jądra wewnętrzne (sygnały do warstw 1 i 2 kory, " +
          "funkcja regulacyjna). Dobra struktura pracy działa jak II rzędowe jądra: " +
          "nie przetwarza bodźców, tylko reorganizuje przepływ informacji między " +
          "kontekstem zawodowym a rodzicielskim. Kora przedczołowa wygenerowała " +
          "trzecią opcję — systemowe rozwiązanie zamiast taktyki doraźnej.",
        statImpact: { c: 8, o: 3, a: 2 },
        setsFlags: ["granice_work_life"],
      },
      {
        id: "dec_3",
        text: "Zostań na spotkaniu — partner/ka odbierze, przeproś potem",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Warstwy kory mózgu: warstwy 3 i 5 (piramidowe, emisyjne) wysyłają " +
          "informacje do struktur ruchu i innych obszarów kory. " +
          "Warstwy 2 i 4 (ziarniste, recepcyjne) przyjmują bodźce. " +
          "Decyzja z lęku przed konsekwencją zawodową to aktywacja " +
          "warstwy 5 przez ciało migdałowate, z pominięciem warstwy 4 — " +
          "emisja (działanie) bez pełnej recepcji (przemyślenia). " +
          "Dług emocjonalny wobec partnera i dziecka akumuluje się " +
          "jako ślad w ciele migdałowatym, wpływając na przyszłe decyzje.",
        statImpact: { n: 4, a: -4, c: 2 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 37 — Przekwalifikowanie / Nowa Ścieżka            ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_37_zmiana_sciezki",
    ageRange: [37, 37],
    sceneText:
      "Przez trzy lata zbierałeś sygnały: " +
      "nudzisz się, płacą kiepsko, albo po prostu — to nie to. " +
      "Teraz jest oferta. Zupełnie inna branża. " +
      "Zaczniesz od zera — ale od zera z wszystkim czym jesteś po 37 latach.",

    voices: [
      {
        structure: "hippocampus",
        text:
          "Rok 22. Pamiętam jak uczyłeś się pierwszej pracy. " +
          "Było ciężko. Potem było dobrze. To jest ten sam mechanizm. " +
          "Hipokamp melduje: masz zdolność tworzenia nowych śladów " +
          "przez całe życie. To nie jest tylko dla młodych.",
      },
      {
        structure: "pfc",
        text:
          "Analiza: jakie umiejętności transferują się? " +
          "Jakie trzeba zbudować od nowa? " +
          "Czas do kompetencji w nowej roli — estymacja sześć do osiemnastu miesięcy. " +
          "Bufor finansowy: ile miesięcy rezerwy? Dane są. Decydujemy.",
      },
      {
        structure: "amygdala",
        text:
          "Trzydzieści siedem lat. Nowy zawód. " +
          "Wyobraź sobie bycie najgorszym w pomieszczeniu. " +
          "Przez rok. Może dwa. " +
          "Ciało migdałowate pyta: czy to konieczne?",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Skocz — zaakceptuj ofertę i zacznij od razu",
        type: "active",
        cost: { resource: "energy", amount: 13 },
        hiddenStructure: "caudate",
        flavorReveal:
          "Kora nowa (6-warstwowa, neopallium) stanowi ponad 90% powierzchni kory u człowieka. " +
          "Uczenie się nowej dziedziny to rekrutacja nowych kolumn korowych — " +
          "grup neuronów przetwarzających specyficzne cechy bodźców — " +
          "przez mechanizm LTP (długotrwałe wzmocnienie synaptyczne). " +
          "Neurogeneza w zakręcie zębatym hipokampa zachodzi przez całe życie: " +
          "nowe neurony są szczególnie podatne na LTP przez 2–3 tygodnie po powstaniu, " +
          "tworząc okno zwiększonej plastyczności dla nowych śladów epizodycznych.",
        statImpact: { o: 6, e: 4, c: -2 },
        setsFlags: ["zmiana_kariery"],
      },
      {
        id: "dec_2",
        text: "Ucz się równolegle przez 6 miesięcy — potem decyduj",
        type: "rational",
        cost: { resource: "willpower", amount: 13 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Sieć grzbietowa uwagi obejmuje: przednie pola oczne (FEF), " +
          "bruzdę śródciemieniową, płacik ciemieniowy górny i przedklinek. " +
          "Przedklinek (precuneus), usytuowany na przyśrodkowej powierzchni płata " +
          "ciemieniowego, uczestniczy w samoodnoszeniu i symulowaniu przyszłości. " +
          "Grzbietowa sieć uwagi aktywuje korę sensoryczną zanim bodziec się pojawi — " +
          'nauka równoległa to analogiczne „uważne przygotowanie" na nową rolę, ' +
          "redukujące koszt przełączenia kontekstu.",
        statImpact: { c: 7, o: 4, n: -2 },
      },
      {
        id: "dec_3",
        text: "Odpuść — to za ryzykowne, może za pięć lat",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Habituacja — adaptacja receptorów przy długotrwałej ekspozycji na ten sam bodziec — " +
          "powoduje, że receptory szybko adaptujące się milkną przy braku zmiany. " +
          "Ciało migdałowate blokuje działanie przez wyolbrzymienie ryzyka: " +
          "efekt awersji do straty sprawia, że potencjalna strata boli " +
          "neurologicznie dwukrotnie mocniej niż ekwiwalentny zysk. " +
          'Każde „może za pięć lat" to cykl pogłębiający habituację — ' +
          "po kolejnych pięciu latach kora przedczołowa będzie musiała " +
          "pokonać jeszcze głębszy ślad unikania.",
        statImpact: { n: 4, o: -5, c: -2 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 38 — Kryzys Długoterminowej Relacji               ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_38_kryzys_relacji",
    ageRange: [38, 38],
    sceneText:
      "Jesteście razem od dwunastu lat. " +
      "Nic się nie stało. Żadna zdrada, żadna katastrofa. " +
      "Po prostu siedzicie przy kolacji " +
      "i oboje wiecie, że czegoś nie ma — " +
      "ale żadne z was nie wie jak to powiedzieć.",

    voices: [
      {
        structure: "insula",
        text:
          "To uczucie przy kolacji — to nie metafora. " +
          "Wyspa przetwarza bodźce interoceptywne: mikrowyrazy twarzy, " +
          "ton głosu, napięcie mięśni. " +
          "Twoje ciało zebrało ten sygnał zanim umysł go zwerbalizował. " +
          "I podobnie jej ciało.",
      },
      {
        structure: "hippocampus",
        text:
          "Pierwsza randka. Pierwszy wspólny wieczór. " +
          "Pierwsze mieszkanie. Dwanaście lat archiwum. " +
          "Hipokamp ostrzega: te ślady nie znikają przy rozstaniu — " +
          "one zostają. I często bolą bardziej niż sama relacja.",
      },
      {
        structure: "pfc",
        text:
          "Milczenie przy kolacji to sygnał, nie wyrok. " +
          "Pytanie brzmi: co chcemy z tym zrobić? " +
          "Terapia para jest przebadana i skuteczna. " +
          "Szczera rozmowa jest konieczna. " +
          "Oba wymagają odwagi, żadne nie jest za późno.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Udawaj że wszystko gra — może samo wróci",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ciało migdałowate leży w przednim biegunie płata skroniowego " +
          "i wpływa na kontrolę pamięci, szczególnie krótkotrwałej, " +
          "oraz na zachowania popędowe. " +
          "Połączenia układu limbicznego: hipokamp → ciało migdałowate → wyspa → kora. " +
          "Nierozwiązany konflikt relacyjny podtrzymuje ciało migdałowate " +
          "w stanie chronicznego niskiego alarmu — kortyzol w tle, " +
          "nawet bez ostrego stresora. " +
          "To samo podłoże co wypalenie zawodowe, tylko w kontekście intymnym.",
        statImpact: { n: 5, a: -4, o: -2 },
        setsFlags: ["unikanie_konfliktu"],
      },
      {
        id: "dec_2",
        text: "Zaproponuj terapię pary — razem, nie osobno",
        type: "rational",
        cost: { resource: "willpower", amount: 14 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Zakręt obręczy i wyspa tworzą korę mezolimbiczną (3–5 warstw) — " +
          "obszary powiązane anatomicznie i czynnościowo z płatem limbicznym. " +
          "Przednia kora zakrętu obręczy (ACC) uczestniczy w regulacji " +
          "konfliktów między emocjami a celami wykonawczymi — " +
          "terapia par angażuje właśnie ACC obu stron jednocześnie: " +
          "tworzony jest zewnętrzny kontekst, który redukuje reaktywność amygdali " +
          "i umożliwia dostęp do kory przedczołowej podczas rozmowy o trudnych tematach.",
        statImpact: { c: 7, a: 6, n: -3 },
        setsFlags: ["praca_nad_relacja"],
      },
      {
        id: "dec_3",
        text: 'Powiedz wprost — „jest coś, o czym nie rozmawiamy"',
        type: "empathic",
        cost: { resource: "mood", amount: 14 },
        hiddenStructure: "insula",
        flavorReveal:
          "Wyspa odpowiada za kontrolę układu autonomicznego i jest kluczowa " +
          "dla empatii: przetwarza bodźce interoceptywne i sygnały społeczne " +
          "jednocześnie. W długoterminowej relacji mózgi partnerów " +
          "synchronizują aktywność wyspy i zakrętu obręczy " +
          "podczas wspólnych doświadczeń emocjonalnych. " +
          'Wypowiedzenie „jest coś, o czym nie rozmawiamy" aktywuje ' +
          "sieć samoświadomości obojga — insula + ACC — " +
          "tworząc okno na kontakt zamiast konfliktu.",
        statImpact: { a: 7, o: 3, n: -2 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 39 — Strata / Śmierć Kogoś Bliskiego              ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_39_strata",
    ageRange: [39, 39],
    sceneText:
      "Ktoś odszedł. Rodzic, przyjaciel, ktoś kogo znałeś całe życie. " +
      "Pogrzeb był tydzień temu. " +
      "Wszyscy pytają czy dobrze. " +
      "Ty nie wiesz jak odpowiedzieć, " +
      "bo nie wiesz czy to co czujesz " +
      "to żałoba czy odrętwienie.",

    voices: [
      {
        structure: "insula",
        text:
          "To odrętwienie — to ja. Kora wyspowa przetwarza " +
          "sygnały z wnętrza ciała, w tym ból afektywny. " +
          "Czasem sygnał jest tak silny, że adaptacja receptorów " +
          "zaczyna się natychmiast. " +
          "To nie brak uczuć. To ich nadmiar, który mózg musi dawkować.",
      },
      {
        structure: "hippocampus",
        text:
          "Archiwum jest pełne. Każde wspomnienie z tą osobą " +
          "ma teraz nową etykietę: nieodwracalne. " +
          "Hipokamp nie potrafi usunąć śladów — " +
          "może tylko tworzyć nowe. " +
          "Żałoba to właśnie ten proces: budowanie nowych śladów " +
          "z tą samą osobą w przeszłości.",
      },
      {
        structure: "pfc",
        text:
          "Nie ma strategii na żałobę. " +
          "Jest tylko czas i obecność. " +
          "Możemy jednak wybrać: " +
          "być z tym uczuciem czy od niego uciekać. " +
          "To jest jedyna decyzja, którą mamy.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Wróć do pracy za tydzień — normalność pomaga",
        type: "avoidant",
        hiddenStructure: "amygdala",
        flavorReveal:
          "Ból drugi — wolnopłynący — przenoszony przez polimodalne włókna C " +
          "(bez mieliny, szlak rdzeniowo-siatkowy i rdzeniowo-śródmózgowiowy) " +
          "dociera do: tworu siatkowatego, okołowodociągowej istoty szarej, " +
          "kory wyspowej i przedniej kory zakrętu obręczy (ACC). " +
          'Ten ból informuje czy „wciąż boli" i jak mocno — ' +
          "jest związany z afektywnym wymiarem odczuwania, nie lokalizacyjnym. " +
          "Przedwczesny powrót do rutyny tłumi sygnał włókien C " +
          "bez neutralizacji źródła — " +
          "ból powraca silniej (uwrażliwienie ośrodkowe przez LTP synapsy bólowej).",
        statImpact: { n: 4, o: -2, c: -1 },
        setsFlags: ["unikanie_zaloby"],
      },
      {
        id: "dec_2",
        text: "Daj sobie czas — pozwól mózgowi przetwarzać",
        type: "rational",
        cost: { resource: "willpower", amount: 14 },
        hiddenStructure: "pfc",
        flavorReveal:
          "Mechanizmy regulacji odczuwania bólu: endogenne opioidy — " +
          "endorfiny, enkefaliny, dynorfiny — " +
          "uwalniane przez pobudzenie interneuronów rogu grzbietowego rdzenia " +
          "hamują przewodzenie z włókien nocyceptywnych C. " +
          "Czas żałoby to dosłownie czas na regularną aktywację " +
          "tych interneuronów przez bezpieczne bodźce (rozmowa, sen, ruch). " +
          "Kontekst emocjonalny modyfikuje odczuwanie bólu: " +
          "oczekiwanie i akceptacja obniżają amplitudę sygnału " +
          "w przedniej korze zakrętu obręczy — " +
          "to mechanizm biologiczny, nie tylko psychologiczny.",
        statImpact: { n: -3, o: 3, a: 2, c: 4 },
        setsFlags: ["przepracowana_zaloba"],
      },
      {
        id: "dec_3",
        text: "Zadzwoń do kogoś kto tę osobę też znał — wspominajcie",
        type: "empathic",
        cost: { resource: "mood", amount: 14 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Hipokamp jest kluczowy dla konsolidacji wspomnień epizodycznych. " +
          "Wspólne wspominanie z kimś, kto dzielił te same doświadczenia, " +
          "to aktywacja tych samych śladów epizodycznych " +
          "w dwóch niezależnych hipokampach jednocześnie — " +
          "badania fMRI pokazują synchronizację aktywności neuronalnej " +
          "między mówiącym a słuchającym podczas narracji emocjonalnej. " +
          "Żałoba przeżywana w obecności innych " +
          "aktywuje endogenne opioidy silniej niż żałoba w izolacji.",
        statImpact: { a: 7, o: 2, n: -3 },
      },
    ],
  },

  // ╔══════════════════════════════════════════════════════════╗
  // ║  WIEK 40 — Bilans Czterech Dekad                        ║
  // ╚══════════════════════════════════════════════════════════╝
  {
    id: "evt_era_adult_40_bilans_czterech_dekad",
    ageRange: [40, 40],
    sceneText:
      "Czterdziestka. " +
      "Siedzisz wieczorem z listą rzeczy, które zrobiłeś, " +
      "i listą rzeczy, których nie zrobiłeś. " +
      "Obie listy są długie. " +
      "I po raz pierwszy w życiu obie listy " +
      "wydają ci się jednakowo ważne.",

    voices: [
      {
        structure: "hippocampus",
        text:
          "Cztery dekady. Mam wszystko. " +
          "Pierwsze słowo. Pierwsza miłość. Pierwsza praca. Pierwsza strata. " +
          "Hipokamp nie ocenia — kataloguje. " +
          "Ale mogę coś powiedzieć: " +
          "te wspomnienia, które wracają same — to twoje wartości. " +
          "Mózg priorytetyzuje bez twojej zgody.",
      },
      {
        structure: "pfc",
        text:
          "Analiza czterech dekad: " +
          "wzorce są widoczne. Silne strony — widoczne. " +
          "Nierozwiązane kwestie — też widoczne. " +
          "Następna dekada to nie zerowanie licznika. " +
          "To optymalizacja z pełną bazą danych.",
      },
      {
        structure: "insula",
        text:
          "Czujesz to? To nie smutek ani radość. " +
          "To coś, co wyspa przetwarza jako: " +
          "głębia. Masa życia. Waga każdego wyboru. " +
          "I jednocześnie spokój, jakiego nie miałeś w dwudziestce.",
      },
    ],

    decisions: [
      {
        id: "dec_1",
        text: "Skup się na tym, czego nie osiągnąłeś — goń dalej",
        type: "impulsive",
        hiddenStructure: "caudate",
        flavorReveal:
          "Jądro ogoniaste generuje sygnał dążenia do celu przez szlak " +
          "dopaminergiczny, aktywując się szczególnie przy antycypacji nagrody. " +
          "Jądra niespecyficzne wzgórza (jądra wewnętrzne) wysyłają sygnały " +
          "do warstw 1 i 2 kory mózgowej — warstw koordynacyjnych, " +
          "kontrolujących przepływ informacji z obwodu do właściwych obszarów kory. " +
          "Skupienie wyłącznie na brakach aktywuje te warstwy " +
          "przez sygnał z ciała migdałowatego, " +
          "a nie przez sieć samoodniesienia przedklinka — " +
          "to działanie reaktywne, nie refleksyjne.",
        statImpact: { e: 3, c: -3, n: 3 },
      },
      {
        id: "dec_2",
        text: "Napisz list do siebie za dziesięć lat — co chcesz powiedzieć?",
        type: "rational",
        cost: { resource: "willpower", amount: 14 },
        hiddenStructure: "pfc",
        flavorReveal:
          'Hipokamp uczestniczy w „mental time travel": ' +
          "ta sama sieć rekombinacji śladów epizodycznych, " +
          "która przywołuje przeszłość, konstruuje przyszłość. " +
          "Przedklinek (precuneus) — część sieci grzbietowej uwagi " +
          "na przyśrodkowej powierzchni płata ciemieniowego — " +
          'jest kluczowy dla samoodniesienia i symulacji przyszłego „ja". ' +
          "List do przyszłego siebie to aktywacja tej sieci w sposób intencjonalny: " +
          "kora przedczołowa ukierunkowuje uwagę dobrowolną (góra-dół) " +
          "na cel, który nie istnieje jeszcze jako bodziec zewnętrzny.",
        statImpact: { o: 6, c: 7, n: -3 },
        setsFlags: ["dojrzalosc_refleksyjna"],
      },
      {
        id: "dec_3",
        text: "Zrób coś, co zawsze odkładałeś — dziś, nie jutro",
        type: "active",
        cost: { resource: "energy", amount: 14 },
        hiddenStructure: "hippocampus",
        flavorReveal:
          "Neuroplastyczność hipokampa: zakręt zębaty jest jednym z " +
          "nielicznych miejsc w dorosłym mózgu, gdzie zachodzi neurogeneza — " +
          "powstawanie nowych neuronów przez całe życie. " +
          "Nowe doświadczenia, nowe środowiska i nowe wyzwania " +
          "stymulują ten proces przez aktywację receptorów NMDA " +
          "i indukcję LTP w nowych połączeniach synaptycznych. " +
          "Mózg czterdziestolatka ma pełne zasoby wykonawcze kory przedczołowej " +
          "i wciąż aktywny hipokamp — " +
          "to połączenie, którego dwudziestolatek nie miał.",
        statImpact: { o: 5, e: 4, n: -2 },
        setsFlags: ["zerwanie_z_odraczaniem"],
      },
    ],
  },
];

  

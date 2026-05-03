# 🧠 Kogniżyćko — Roadmap Rozwoju (MVP → Release)

**Data opracowania:** 2026-05-03  
**Zespół:** 1 programista, 1 graficzka, 3 kognitywiści  
**Cel:** Gra edukacyjna o neuroanatomii + psychologii osobowości, grywalna dla studentów neuroznaności

---

## 📊 Obecny Stan MVP

### ✅ Co Gotowe (Silnik)

| Komponent | Status |
|---|---|
| **React + TypeScript** | Pełne — Vite 6 + Tailwind v4, typowanie end-to-end |
| **Stany gry** | Pełne — `start → scene → reveal → era_summary → revelation → gameover` |
| **Big5 system** | Pełne — plastyczność wiekowa, korytarz genetyczny ±30 |
| **Era Refresh** | Pełne — obliczanie z Big5 + modyfikatory flag |
| **Zasoby** | Pełne — Energy/Mood/Willpower, limitowanie per era |
| **localStorage** | Pełne — zapis/wczytywanie gry |
| **UI Components** | 80% — 14 komponentów, 2 nieużywane (Toast, VoicesSheet) |
| **Walidacja eventów** | Napisana, ale **nie podpięta** do pipeline'u dev |

### ⚠️ Co Niekompletne (Treść)

| Aspekt | Aktualne | Docelowe | Status |
|---|---|---|---|
| **Eventy** | 19 | 300+ | 6% |
| **Ery** | 3 | 9 | 33% |
| **Archetypy** | 1 (Michał) | 3–5 | 20% |
| **Zakończenia** | 3 | 9+ | 33% |
| **Era Summaries** | 0% (placeholdery) | 100% | 0% |
| **RevelationScreen** | Hardcoded cytat | Dynamiczny | 0% |
| **Kryzys/Rescue** | System zbudowany, 0 eventów | 15 eventów | 0% |
| **Wiek pokryty eventami** | Ages 1–24 | Ages 0–100 | 24% |

### 🗑️ Martwy Kod (Do Sczyszczenia lub Podpięcia)

| Kod | Funkcja | Potrzebne? |
|---|---|---|
| `shouldTriggerCrisis()` w `death.ts` | Detectuje dynamiczne kryzysy | **Tak** — podpiąć do selectEvent |
| `pfcMaturityTax()` w `plasticity.ts` | Karze karty racjonalne w młodości | **Może** — opcjonalne dla trudności |
| `validateEvents.ts` | QA walidator eventów | **Tak** — podpiąć w dev mode |
| `Toast.tsx` | Powiadomienia | **Nieznane** — usunąć lub implementować |
| `VoicesSheet.tsx` | Alt. display głosów | **Nie** — usunąć |
| Struktura `thalamus` | Nigdy nie używana | **Tak** — dodać do eventów lub usunąć |

---

## 🎯 Fazy Rozwoju

### **Faza 1: Grywalne Demo (Tygodnie 1–2)**

Cel: Gra zawiera co najmniej 40 eventów, pokrywa ponad 40 lat, ma 2 archetypy, wyświetla sensowne era summaries.

#### 👨‍💻 Programista

- [ ] Podpiąć `validateEvents()` — wywoływać w dev mode przy starcie
  - Dodać import w `useGameState.ts` wewnątrz `if (import.meta.env.DEV) { validateEvents(...) }`
  - File: `app/src/game/useGameState.ts`
- [ ] Podpiąć `shouldTriggerCrisis()` do `selectEvent.ts`
  - Dodać dynamiczną detekcję kryzysu przed filtrowaniem eventów
  - File: `app/src/game/selectEvent.ts` line ~20
- [ ] Dodać support dla **statycznych** era summaries (czytane z danych, nie AI)
  - Zmienić `ERA_SUMMARIES` z placeholderów na ręcznie napisane teksty
  - File: `app/src/data/eras.ts` lines 43–47
- [ ] Zaimplementować **dynamiczny RevelationScreen**
  - Zamiast hardcoded cytatu, wygenerować zdanie na bazie Big5 (e.g. "Michał jest [trait+], [trait−]. Wykazuje...")
  - File: `app/src/screens/RevelationScreen.tsx` lines 33–34
- [ ] Dodać support dla 2 archetypów (struktura, nie UI wyboru)
  - Rozszerzyć `archetype.ts` z 2. archetypy, dodać factory `getArchetype(archetypeId)`
  - File: `app/src/data/archetype.ts`

#### 🎨 Graficzka

- [ ] Stworzyć grafikę dla struktury `thalamus` (Wzgórze)
  - Zainspirowała się kolorami z `structures.ts`: `#F37826` (Sunset)
  - Dodać PNG do `app/public/wzgorze.png`
- [ ] Stworzyć 2 zestawy character art dla nowych archetypów
  - Bio grafika dla ekranu StartScreen (zamienić hardcoded "Michał")
  - Dodać `archetype_2.png`, `archetype_3.png` do `app/public/`
- [ ] Tworzyć czy poprawiać istniejące ilustracje struktur mózgu
  - Upewnić się że wszystkie 6 struktur ma wysokiej jakości PNG
  - (Już: `/cialo_migdalowate.png`, `/kora_przedczolowa.png`, `/jadro_ogoniaste.png`, `/hipokamp.png`, `/wyspa.png`, `/wzgorze.png`)

#### 🧠 Kognitywiści (3 osoby)

- [ ] **Osoba 1:** Napisać 15 eventów wypełniających luki wiekowe
  - Priorytet: ages 3–4, 6, 8–9, 14–15 (brakuje wariantów bez flag)
  - Format: kopiuj strukturę z `events.ts`, upewnij się że każdy ma 3 decyzje
  - Edycja: `app/src/data/events.ts` append do EVENTS array
  
- [ ] **Osoba 2:** Napisać 5 crisis + 5 rescue eventów
  - Struktura: crisis event z `isDeathCard: true` lub flagi do negative state
  - Rescue event to decyzja z `isRescueCard: true` albo `resetToFloor(40)`
  - Integracja: flagi ustawiane wcześniej w ścieżce (np. `uzalezniony`) wyzwalają crisis events później
  - Edycja: `app/src/data/events.ts`

- [ ] **Osoba 3:** Napisać statyczne era summaries + RevelationScreen template'y
  - Era I (0–12): podsumowanie dzieciństwa — jak Big5 sie kształtuje
  - Era II (13–18): pubertas, dryfty społeczne
  - Era III (19–25): wczesna dorosłość, stabilizacja
  - Każdy summary to 2–3 akapity opisujące typową ścieżkę zamiast `[AI wygeneruje...]`
  - Edycja: `app/src/data/eras.ts` lines 43–47 (ERA_SUMMARIES)
  - Template dla RevelationScreen: parametryzowana funkcja `generateRevelation(big5, age, flags)`

#### ✅ Metryka Fazy 1: "Grywalne Demo"
- [ ] 40+ eventów total (teraz: 19)
- [ ] Pokrycie wiekowe ≥ 40 lat bez luk (teraz: fragmentaryczne 0–24)
- [ ] Brak placeholderów w ERA_SUMMARIES
- [ ] 2 archetypy dostępne w kodu (brak UI wyboru jeszcze)
- [ ] validateEvents + shouldTriggerCrisis podpięte i zero warningów

---

### **Faza 2: Pełny Pierwszy Akt (Tygodnie 3–6)**

Cel: 3 archetypy z UI, 60+ eventów, 5 er z realistyczną pokryciem wiekowym, 6 zakończeń, dynamiczne era summaries.

#### 👨‍💻 Programista

- [ ] Zbudować UI wyboru archetypu na StartScreen
  - Cards z bio tekst + Big5 preview (wizualizacja radaru Big5?)
  - Przechowuje wybrany archetype w state
  - File: `app/src/screens/StartScreen.tsx`

- [ ] Dynamiczne era summaries (mini-AI lub template rule system)
  - Opcja 1: Statyczne, ale wariantywne — np. 3 warianty per era w zależności od ścieżki
  - Opcja 2: Proste template'owanie — `[imię gracza] wykazał(a) [Big5 descriptor], co doprowadziło do [flag summary]`
  - Wdrażanie: `app/src/data/eras.ts` → funkcja `getSummaryForEra(eraNum, big5, flags)`

- [ ] Rozszerzyć grid ery z 3 na 5 (lub pełne 9 jeśli treść dostępna)
  - Dodać Era IV (26–40) i Era V (41–60) do `eras.ts`
  - File: `app/src/data/eras.ts`

- [ ] Podpięcie `pfcMaturityTax` (opcja trudności)
  - Jeśli Age < 15 i `cardType === 'rational'`, dodaj karę −5 do effective cost
  - Implementacja: `app/src/game/resources.ts` w `payCost()` lub nowy hook

#### 🎨 Graficzka

- [ ] Stworzyć 3 zestawy character art dla StartScreen
  - Archetyp 1 (Michał, istniejący — no change)
  - Archetyp 2 (np. kobieta neurotyczna, empatyczna)
  - Archetyp 3 (np. nieznany, dziwny typ)
  - Każdy: 1 portrait PNG dla StartScreen

- [ ] Era-specific visual themes (opcjonalne ale fajne)
  - Era I: pastelowe, zabawne
  - Era II: żywe, zapaliste
  - Era III: bardziej dojrzałe kolory
  - Implementacja: background colors albo pattern variations per era

#### 🧠 Kognitywiści

- [ ] **Osoba 1:** 20 nowych eventów dla Era IV (26–40) i Era V (41–60)
  - Themes: career, relationships, aging, legacy
  - Eventy powinny być gateowane różnymi ścieżkami (archetypy, flagi)

- [ ] **Osoba 2:** Napisać dynamiczne era summaries
  - Funkcja `getSummaryForEra(era, big5, flags)` generująca narrative
  - Warianty per archetype + major flag combinations
  - Edycja: `app/src/data/eras.ts`

- [ ] **Osoba 3:** Napisać 3 nowe końcówki (total 6)
  - Archetyp-specific endings (np. "naukowiec" dla archetype 2, "artystka" dla archetype 3)
  - Edycja: `app/src/data/endings.ts`

#### ✅ Metryka Fazy 2: "Pierwszy Akt Complete"
- [ ] 60+ eventów
- [ ] 5 ery z full pokryciem (ponad 50 lat bez luk)
- [ ] Era summaries dynamiczne, zero placeholderów
- [ ] 3 archetypy z UI wyboru
- [ ] 6 zakończeń

---

### **Faza 3: Wersja Edukacyjna (Tygodnie 7–14)**

Cel: Pełna gra 100 lat (9 er), 300+ eventów, 5 archetypów, AI-generowane era summaries, educational review & feedback system.

#### 👨‍💻 Programista

- [ ] Podpięcie AI service do era summaries
  - Opcja: OpenAI API albo Claude API z prompt cachingiem
  - Prompt: `given era, age range, player big5, flags set, generate 3-paragraph narrative summary in Polish about this life stage`
  - Caching: ponieważ summaries są pokazywane kilka razy, cache jest wartościowy
  - File: nowy `app/src/services/aiSummary.ts`

- [ ] Educational feedback system
  - Po każdej decyzji: pokaż "neuroscience fact" o strukturze mózgu + trait
  - Popup albo inline w RevealPanel
  - Database: `app/src/data/educationalNotes.ts` z mapowaniem struktura → facts

- [ ] Rozszerzyć ery z 5 na 9 (pełne: Firmware, Patch Notes, Early Access, Open Beta, Release 1.0, DLC Career, Midlife, Legacy, EoS)
  - File: `app/src/data/eras.ts`

- [ ] Metryki & analytics
  - Track: które struktury mózgu najczęściej brane, które archetypy najpopularniejsze, średnia długość runów
  - Implementacja: localStorage.logs albo simple API

#### 🎨 Graficzka

- [ ] Pełne visual design dla 9 er
  - Każda era ma own color palette + pattern
  - Character design dla 5 archetypów (kompleksowe ilustracje)

- [ ] Educational infographics
  - Diagramy struktur mózgu z funkcjami
  - Big5 trait visualizations (radary, skale)
  - Integracja w gry jako odkrywalne "knowledge cards"

#### 🧠 Kognitywiści

- [ ] **Osoba 1:** 100+ nowych eventów dla Era VI–IX (61–100 lat)
  - Starość, legacy, završetak
  - Rozróżnienie po archetypach

- [ ] **Osoba 2:** Pełne AI era summaries
  - Napisać prompt engineering + struktura template'ów
  - Testowanie wygenerowanych summaries pod kątem dokładności

- [ ] **Osoba 3:** Educational review + verifikacja
  - Sprawdzenie wszystkich eventów pod kątem dokładności neurowiedzy
  - Napisanie educational notes dla każdej struktury (10–20 faktów per struktura)
  - PR code review dla game logic

#### ✅ Metryka Fazy 3: "Release Candidate"
- [ ] 300+ eventów (minimum 30 per era)
- [ ] 9 er z pełnym pokryciem wiekowym
- [ ] 5 archetypów
- [ ] AI-generated era summaries
- [ ] Educational facts w grze
- [ ] Internal review: zero factual errors w neuroanatomii

---

## 📋 Typ Zadań per Rola (Krótki Przegląd)

### 👨‍💻 Programista
- QA integration (`validateEvents`)
- Archetype system (data layer + UI)
- Era system expansion
- AI service integration
- Performance & polish

### 🎨 Graficzka
- Character designs (5 archetypów)
- Brain structure illustrations (x6)
- Era visual themes
- Educational infographics
- UI/UX polish

### 🧠 Kognitywiści (3 osoby)
- Event writing (narrative, mechanical balance)
- Crisis/rescue mechanics (scenario design)
- Archetype profiles (Big5 specs + starting flags)
- Era narratives (summaries + historical context)
- Educational fact-checking & knowledge base

---

## 🔗 Pliki Referencji (Do Edycji)

| Plik | Rola | Edytory |
|---|---|---|
| `app/src/data/events.ts` | Event pool | Kognitywiści |
| `app/src/data/eras.ts` | Era definitions & summaries | Programista (struktura) + Kognitywiści (tekst) |
| `app/src/data/archetype.ts` | Character start values | Kognitywiści (profil) |
| `app/src/data/endings.ts` | Ending narratives | Kognitywiści |
| `app/src/data/structures.ts` | Brain structure metadata | Kognitywiści |
| `app/src/screens/StartScreen.tsx` | Archetype selection UI | Programista + Graficzka |
| `app/src/screens/EraScreen.tsx` | Era display | Programista |
| `app/src/screens/RevelationScreen.tsx` | Dynamic narration | Programista |
| `app/src/game/death.ts` | Crisis detection | Programista |
| `app/public/` | All character & structure PNGs | Graficzka |

---

## 🧪 Testowanie & Walidacja

- **Dev Mode:** `validateEvents()` nie wypisuje warningów
- **Playtesting:** Co najmniej 5 full-length runów per faza, brak logicznych luk
- **Content Review:** Każdy nowy event recenzowany pod kątem:
  - Neurowiedzy (struktury mózgu, Big5 consistency)
  - Mechaniki (czy cost/benefit balanced?)
  - Narracji (czy tekst czyta się naturalnie po polsku?)
- **Accessibility:** Czcionki, kolory, contrast ratios per WCAG AA

---

## 📈 Success Metrics

**Po Fazie 1:** Gra grywalna, demowalna studentom — bez tekstu placeholder.  
**Po Fazie 2:** Pełny first act + UI choices, gotowe do playtestingu publicznego.  
**Po Fazie 3:** Production-ready edukacyjna gra o neuroanatomii — publikowalna.

---

**Ostatnia aktualizacja:** 2026-05-03  
**Owner:** Zespół Kogniżyćko

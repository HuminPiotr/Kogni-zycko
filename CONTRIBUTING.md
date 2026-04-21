# Jak dołączyć do zespołu Kogniżyćka

Ten dokument przeprowadzi Cię przez wszystko, co trzeba wiedzieć, żeby zacząć pracę — niezależnie od tego, czy piszesz kod, treść eventów, czy oba.

---

## Spis treści

1. [Pierwsze uruchomienie](#pierwsze-uruchomienie)
2. [Struktury mózgu — słownik](#struktury-mózgu--słownik)
3. [Jak dodać nowe wydarzenie](#jak-dodać-nowe-wydarzenie)
4. [Jak działają flagi](#jak-działają-flagi)
5. [Jak napisać dobry flavor text](#jak-napisać-dobry-flavor-text)
6. [Eventy crisis i rescue](#eventy-crisis-i-rescue)
7. [Walidator i typy TypeScript](#walidator-i-typy-typescript)
8. [Playground `/#sandbox`](#playground-sandbox)
9. [Git workflow](#git-workflow)

---

## Pierwsze uruchomienie

```bash
cd app
npm install
npm run dev
```

Otwórz `http://localhost:5173`. Graj przez kilka minut, żeby zobaczyć pętlę. Potem `http://localhost:5173/#sandbox` — tam zobaczysz wszystkie komponenty UI w każdym stanie.

---

## Struktury mózgu — słownik

W grze istnieje **6 struktur mózgu**. Każda ma przypisany kolor, archetyp postaci i rolę neurologiczną. Kompletne metadane: [`app/src/data/structures.ts`](./app/src/data/structures.ts).

| ID w kodzie   | Polska nazwa       | Archetyp                     | Rola neurologiczna                         |
| ------------- | ------------------ | ---------------------------- | ------------------------------------------ |
| `amygdala`    | Ciało Migdałowate  | Panikarz                     | Strach, reakcja walcz-lub-uciekaj          |
| `pfc`         | Kora Przedczołowa  | Biurokrata                   | Funkcje wykonawcze, hamowanie impulsów     |
| `caudate`     | Jądro Ogoniaste    | Hype Man                     | Układ nagrody, dopamina, impulsy           |
| `hippocampus` | Hipokamp           | Dziadek, który wszystko pamięta | Tworzenie wspomnień, kontekst           |
| `insula`      | Wyspa (Insula)     | Empatka z czujnikami         | Interocepcja, empatia, „przeczucia"        |
| `thalamus`    | Wzgórze            | Dyspozytor Ruchu             | Filtrowanie i przekazywanie bodźców        |

**Ważne:** w kodzie zawsze używamy ID (np. `amygdala`), a nie polskiej nazwy — TypeScript to zweryfikuje.

---

## Jak dodać nowe wydarzenie

Wszystkie eventy są w [`app/src/data/events.ts`](./app/src/data/events.ts). To zwykła tablica obiektów TypeScript.

### Anatomia eventu

```ts
{
  id: 'evt_era3_school_test',       // unikalny, konwencja: evt_<era>_<slug>
  ageRange: [9, 12],                // min i max wiek (inclusive)
  sceneText: 'Ściąga leży w piórniku. Nauczyciel patrzy w okno.',

  voices: [                         // 2–3 komentarze struktur mózgu
    { structure: 'caudate', text: 'Piątka = dopamina. Weź.' },
    { structure: 'pfc', text: 'Konsekwencje. Zasady. To nieopłacalne długoterminowo.' },
    { structure: 'insula', text: 'Coś mi w brzuchu mówi, że to nie tak.' },
  ],

  decisions: [                      // DOKŁADNIE 3 karty w normalnym evencie
    {
      id: 'dec_1',                  // unikalne w obrębie eventu
      text: 'Ściągnij',
      type: 'impulsive',            // rational | active | empathic | impulsive | avoidant
      // cost OPCJONALNY — brak = karta darmowa
      hiddenStructure: 'caudate',
      flavorReveal: '…',            // ujawnienie po kliknięciu
      statImpact: { c: -4, a: -2 }, // zmiany Big5 (skala 1-10)
      setsFlags: ['wstydzil_sie'],  // opcjonalnie
    },
    {
      id: 'dec_2',
      text: 'Napisz co wiesz, odpuść resztę',
      type: 'rational',
      cost: { resource: 'willpower', amount: 3 },  // koszt mentalny
      hiddenStructure: 'pfc',
      flavorReveal: '…',
      statImpact: { c: 5, a: 2 },
    },
    {
      id: 'dec_3',
      text: 'Pomóż koledze zamiast sobie',
      type: 'empathic',
      cost: { resource: 'mood', amount: 3 },
      hiddenStructure: 'insula',
      flavorReveal: '…',
      statImpact: { a: 4, c: -2 },
    },
  ],

  // Opcjonalne filtry:
  requiresFlag: 'ma_przyjaciel',        // pojawi się TYLKO gdy gracz ma tę flagę
  excludesFlag: 'trauma_ciemnosci',     // NIE pojawi się, gdy gracz ma tę flagę
  resourceCondition: {                  // warunek zasobowy
    resource: 'mood', op: '<', value: 20,
  },
},
```

### Zasady projektowania kart (z PRD sek. 3.5)

- **Karty z kosztem** dają zwykle **pozytywne** efekty na Big5 — wymagają zasobu mentalnego.
- **Karty darmowe** (`impulsive`, `avoidant`) dają zwykle **negatywne** efekty — ale są zawsze dostępne.
- **Darmowe ≠ dobre.** To centralna lekcja gry.
- `statImpact` ma wartości **nominalne** (np. `{ n: 5 }`). Gra sama przemnoży je przez mnożnik plastyczności wiekowej (np. w wieku 3 lat faktycznie wzrośnie o 8, w wieku 45 o 1).

### Typy kart → dominująca struktura

| Typ karty      | Typowa struktura          | Typowy koszt           |
| -------------- | ------------------------- | ---------------------- |
| `rational`     | `pfc`                     | `willpower: 3–5`       |
| `active`       | `caudate` / `hippocampus` | `energy: 3–5`          |
| `empathic`     | `insula`                  | `mood: 2–4`            |
| `impulsive`    | `caudate` / `amygdala`    | **bez kosztu**         |
| `avoidant`     | `amygdala`                | **bez kosztu**         |

---

## Jak działają flagi

Flagi to trwałe znaczniki w historii gracza (`string`, snake_case). Ustawione przez decyzję — pozostają do końca gry (chyba że jakaś decyzja je wyczyści przez `clearsFlags`).

### Konwencja nazywania

- `snake_case_po_polsku_bez_polskich_znakow`
- Krótko, opisowo: `trauma_ciemnosci`, `w_zwiazku`, `uzalezniony`, `lek_egzaminacyjny`

### Gdzie je ustawiać

W decyzji — `setsFlags: ['trauma_ciemnosci']`.

### Gdzie je czytać

W evencie:

- `requiresFlag: 'trauma_ciemnosci'` — ten event pojawi się TYLKO jeśli gracz ma flagę.
- `excludesFlag: 'ma_partnera'` — NIE pojawi się, jeśli gracz ma flagę.

### Istniejące flagi w seed

Zajrzyj do `events.ts` i pogrepuj `setsFlags`:

- `lek_separacyjny`, `oparzenie_rekki`, `trauma_ciemnosci`, `niesmialosc`, `ma_przyjaciel`
- `lek_spoleczny`, `lek_egzaminacyjny`, `wieczorek_eksperymentalny`, `w_zwiazku`
- `samotny`, `depresja`, `uzalezniony`, `ciezka_choroba` (flagi destrukcyjne — wpływają na śmierć)

Możesz dodawać nowe — walidator ostrzeże, jeśli flaga jest używana (`requiresFlag`), ale nikt jej nie ustawia.

---

## Jak napisać dobry flavor text

`flavorReveal` to 1–3 zdania, które gracz czyta po kliknięciu karty. To **SERCE EDUKACYJNE GRY**.

### Zasady

1. **Humorystycznie, ale naukowo poprawnie.** Żartobliwa analogia tak — wymyślanie mechanizmów nie.
2. **Pokaż konkretną rolę struktury.** Nie „ciało migdałowate się odezwało", a „ciało migdałowate uruchomiło reakcję freeze zanim świadoma myśl dotarła do kory ruchowej".
3. **1–3 zdania.** Dłuższe — gracz przestanie czytać.
4. **Odwołaj się do literatury, gdy pasuje.** „Lek separacyjny zaczyna się około 6. miesiąca", „Styl przywiązania wg Bowlby'ego", „Konsolidacja pamięci w fazie REM".
5. **Unikaj moralizowania.** Pokazuj, co zrobił mózg, nie co gracz powinien był zrobić.

### Dobry flavor text

> „Kora przedczołowa zahamowała panikę amygdali poprzez kontrolę oddechu — aktywuje nerw błędny, który wycisza układ współczulny."

### Zły flavor text

> „Amygdała spanikowała, a PFC ją uspokoiła. Dobra robota!" (ogólnik + moralizowanie)

---

## Eventy crisis i rescue

### `type: 'crisis'`

Eventy zagrażające życiu. Wchodzą do puli gdy gracz spełnia warunki z `app/src/game/death.ts`:

- ≥2 zasoby poniżej 10
- Wiek > 60 + energia < 20
- ≥3 flagi destrukcyjne (`uzalezniony`, `samotny`, `depresja`)
- Flagi krytyczne (`ciezka_choroba`)

Event crisis **musi** mieć:

- Przynajmniej jedną decyzję z `isRescueCard: true` (kosztowną — ratuje życie, resetuje zasoby do 40, czyści destrukcyjne flagi).
- Zwykle jedną z `isDeathCard: true` (darmową — kończy grę, ustawia `deathReason` z eventu).

### `type: 'rescue'`

Eventy dające drugą szansę — pojawiają się losowo (30%) gdy gracz ma destrukcyjne flagi, ale NIE jest jeszcze w crisis. Wymagają `requiresFlag`.

---

## Walidator i typy TypeScript

### TypeScript

Wszystkie typy są w [`app/src/types/game.ts`](./app/src/types/game.ts). W szczególności `StructureName`, `CardType`, `ResourceName` to **union types** — literówka = błąd kompilacji.

```ts
{ structure: 'amigdala', text: '...' }  // ❌ Type error: Did you mean 'amygdala'?
```

### Walidator

Uruchamia się automatycznie w `npm run dev` przy starcie aplikacji. Wypisuje w konsoli:

- ❌ **Error** — zduplikowane ID, nieznana struktura, event crisis bez karty ratunkowej.
- ⚠️ **Warning** — flaga używana, ale nigdy nie ustawiana; event normal z inną liczbą decyzji niż 3.

**Zasada:** nie mergujemy PR, dopóki walidator nie zwraca samych „OK — brak błędów".

---

## Playground `/#sandbox`

Gdy dev server działa, otwórz `http://localhost:5173/#sandbox`.

Zobaczysz:

- Wszystkie warianty `Button`.
- `StatBar` (Big5).
- `ResourceMeter` w 3 stanach kolorystycznych.
- `ChatBubble` dla wszystkich 6 struktur mózgu.
- `DecisionCard` w 4 stanach (dostępna / z kosztem / zablokowana).
- `RevealPanel` z przykładowymi deltami.

Świetne przy pracy nad UI — bez konieczności rozpoczynania run'a od nowa.

---

## Git workflow

1. **Branch per zadanie.** Nazwa: `feature/nowy-event-kolokwium`, `fix/blokada-kart`, `content/era-6`.
2. **Jeden PR = jedno zadanie.** Nie mieszaj kosmetyki UI z nowym eventem.
3. **PR template** (pokaże się automatycznie) ma checklistę:
   - walidator przechodzi
   - dotykam jakiego obszaru (mechanika / UI / content)
   - jak testować lokalnie
4. **Review.** Przynajmniej jedna osoba czyta zanim merge. Dla eventów — review naukowy ma priorytet.

Jeśli masz pomysł na nowy event, a nie chcesz go pisać sam — otwórz issue z szablonu `Nowy event` i opisz pomysł tekstem.

---

## Potrzebujesz pomocy?

- Zajrzyj do [PRD](./docs/PRD.md) — tam są wszystkie mechaniki.
- Zajrzyj do [design guide](./docs/desing-guide.md) — tam jest cała paleta i typografia.
- Otwórz issue z pytaniem. Lepsze głupie pytanie niż błąd w mergu.

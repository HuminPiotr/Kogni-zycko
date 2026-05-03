# Kogniżyćko

**Przeżyj życie. Poznaj swój mózg.**

Przeglądarkowa gra karcianka, w której przeżywasz całe ludzkie życie (0–100 lat), rok po roku. Każda decyzja jest napędzana przez inną strukturę mózgu — grając, uczysz się neuroanatomii przez emocje, humor i konsekwencje wyborów, a nie przez klepanie fiszek.

Gra przeznaczona dla studentów kognitywistyki, psychologii i neuronauk — oraz dla każdego, kto chce zobaczyć, dlaczego jego mózg kazał mu zjeść kredkę w wieku 3 lat i spanikować na rozmowie o pracę w wieku 25.

## Dokumentacja projektu

Pełny PRD i design guide znajdziesz w [`docs/`](./docs/):

- [`docs/PRD.md`](./docs/PRD.md) — cała specyfikacja mechanik
- [`docs/desing-guide.md`](./docs/desing-guide.md) — paleta, typografia, komponenty UI

## Quickstart

```bash
cd app
npm install
npm run dev
```

Serwer wstaje na `http://localhost:5173`.

Pozostałe komendy:

- `npm run build` — produkcyjny build
- `npm run preview` — podgląd buildu lokalnie

## Struktura repozytorium

```
v2/
├── docs/                 # PRD + design guide (źródło prawdy)
├── app/                  # kod aplikacji (Vite + React + TS + Tailwind v4)
│   └── src/
│       ├── types/        # typy TS współdzielone w całej aplikacji
│       ├── data/         # eventy, ery, plastyczność, struktury mózgu
│       ├── game/         # mechaniki (pure functions) + reducer + hook + zapis
│       ├── components/   # komponenty UI
│       ├── screens/      # Start / Game / End / Sandbox
│       └── styles/       # Tailwind + design tokens
├── CONTRIBUTING.md       # jak dołączyć do zespołu i dodać wydarzenie
└── .github/              # szablony issue/PR
```

## Role w zespole

Projekt nadaje się do podziału między osoby o różnym profilu:

- **Programiści** — mechaniki gry (`app/src/game/`), komponenty UI (`app/src/components/`), nowe ekrany.
- **Autorzy treści** (psycholodzy, kognitywiści) — piszą nowe eventy w `app/src/data/events.ts`, tworzą flavor texty.
- **Reviewerzy naukowi** — weryfikują poprawność neurologiczną flavor textów, sugerują nowe mechaniki oparte na literaturze.
- **Designerzy** — iteracje nad UI, paletą, motywami postaci (materiał wyjściowy w `docs/desing-guide.md`).

Jeśli to Twoje pierwsze spotkanie z projektem, zacznij od [CONTRIBUTING.md](./CONTRIBUTING.md).

## Playground komponentów

Gdy serwer dev jest uruchomiony, otwórz `http://localhost:5173/#sandbox` — widzisz wszystkie stany kart, dymków głosów, pasków zasobów bez konieczności przechodzenia gry.

## Walidator eventów

W trybie dev walidator uruchamia się automatycznie przy starcie aplikacji i wypisuje błędy/ostrzeżenia w konsoli przeglądarki:

- zduplikowane `id`
- nieznana `hiddenStructure` (literówka)
- brak karty ratunkowej w evencie crisis
- flagi używane, ale nigdzie nie ustawiane

Zanim zrobisz PR — sprawdź konsolę.

## Licencja

Projekt edukacyjny. Do uzgodnienia z zespołem.

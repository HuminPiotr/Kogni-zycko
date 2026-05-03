Nowy System: Trzy Zasady

Zasada 1: Zasoby tylko maleją w erze

Zero regeneracji co turę. Gracz dostaje budżet na początku ery i go wydaje. Koniec.

ERA I START → 🔋40 😊35 🧠22
↓
eventy...
↓
ERA II START → oblicz Era Refresh z Big5
↓
eventy...
↓
ERA III START → oblicz Era Refresh z Big5
Zasada 2: Era Refresh = Big5 przeliczone na zasoby

Jedna prosta funkcja. Trzy cechy. Trzy zasoby.

function calculateEraRefresh(big5) {
return {
// C (Sumienność) → Siła Woli
willpower: big5.c < 35 ? 15
: big5.c < 60 ? 25
: 35,

    // E (Ekstrawersja) → Energia
    energy:    big5.e < 35  ? 20
             : big5.e < 60  ? 30
             :                40,

    // N (Neurotyczność) → Nastrój (odwrotnie)
    mood:      big5.n > 70  ? 15
             : big5.n > 45  ? 25
             :                35,

}
}
Trzy progi. Zero mnożników. Zero ułamków. Łatwe do zakodowania, łatwe do przetestowania.

Zasada 3: Tagi robią to, co modifyRegen próbował robić

Zamiast dynamicznych modyfikatorów regeneracji, używamy flag które zmieniają Era Refresh:

function calculateEraRefresh(big5, flags) {

let refresh = { ...baseRefresh(big5) }

// Tagi które OBNIŻAJĄ refresh
if (flags.includes('niewolnik*impulsu')) refresh.willpower -= 8
if (flags.includes('koneser_cierpienia')) refresh.mood -= 8
if (flags.includes('igranie_ze*śmiercią')) refresh.energy -= 10

// Tagi które PODWYŻSZAJĄ refresh
if (flags.includes('żelazna_dyscyplina')) refresh.willpower += 8
if (flags.includes('zimny_pragmatyk')) refresh.energy += 5
if (flags.includes('analityk_krwi')) refresh.willpower += 5

// Karta pułapka z zapalniczką — zeruje willpower w erze
if (flags.includes('wstrząs_neurogenny')) refresh.willpower = 0

return refresh
}
To jest serce systemu. Gracz nie widzi modyfikatorów. Widzi tylko, że na początku Ery II ma mniej Siły Woli niż kolega który grał inaczej. Szuka przyczyny. Uczy się.

Jak to wygląda dla gracza

Ścieżka chirurga vs ścieżka mordercy — Era II Start

CHIRURG MORDERCA
──────────────────────────────────────────────────
C: 58 (decyzje racjonalne) C: 22 (same impulsy)
N: 12 (spokojny) N: 20 (wciąż spokojny)
E: 65 (aktywny) E: 75 (ekstraweryczny)

Flagi: żelazna_dyscyplina Flagi: niewolnik_impulsu
analityk_krwi koneser_cierpienia

Era Refresh: Era Refresh:
🧠 25 (C<60) +8 +5 = 38 🧠 15 (C<35) −8 −8 = 0 (!)
🔋 30 (E>60) +5 = 35 🔋 40 (E>60) = 40
😊 35 (N<45) = 35 😊 35 (N<45) = 35
Morderca wchodzi w okres dojrzewania z 🧠 = 0.

Nauczyciel biologii (Era II, event 1) oferuje kartę racjonalną za 🧠 10. Nie stać go. Zostają mu tylko darmowe, impulsywne opcje. Pułapka z zapalniczką jest za rogiem.

Pełna Architektura (wszystko razem)

DECYZJA GRACZA
│
├──► Koszt zasobu (widoczny, natychmiastowy)
│ │
│ └──► Karta za droga = ZABLOKOWANA
│
├──► Zmiana Big5 (ukryta)
│ │
│ ├──► traitCondition na eventach
│ │ (C >= 51 = aplikacja na medycynę)
│ │
│ └──► Era Refresh przy zmianie ery
│ (niskie C = mało 🧠 w adolescencji)
│
└──► Zmiana flag
│
├──► Warunek dostępności eventów
│ (krzywdzi_zwierzęta = brak mentora)
│
├──► Modyfikator Era Refresh
│ (niewolnik_impulsu = −8 🧠)
│
└──► Warunek zakończenia
(A < 20 + ulica = morderca)
Co implementujesz

Dosłownie dwie funkcje i jedna modifikacja:

// 1. NOWA — Era Refresh bazowy z Big5
function baseRefresh(big5) {
return {
willpower: big5.c < 35 ? 15 : big5.c < 60 ? 25 : 35,
energy: big5.e < 35 ? 20 : big5.e < 60 ? 30 : 40,
mood: big5.n > 70 ? 15 : big5.n > 45 ? 25 : 35,
}
}

// 2. NOWA — Modyfikatory od flag
function applyFlagModifiers(refresh, flags) {
const modifiers = {
niewolnik*impulsu: { willpower: -8 },
koneser_cierpienia: { mood: -8 },
igranie_ze*śmiercią: { energy: -10 },
wstrząs_neurogenny: { willpower: -100 }, // silnik obetnie do 0
żelazna_dyscyplina: { willpower: +8 },
zimny_pragmatyk: { energy: +5 },
analityk_krwi: { willpower: +5 },
}
for (const flag of flags) {
if (modifiers[flag]) {
refresh.willpower = (refresh.willpower || 0) + (modifiers[flag].willpower || 0)
refresh.energy = (refresh.energy || 0) + (modifiers[flag].energy || 0)
refresh.mood = (refresh.mood || 0) + (modifiers[flag].mood || 0)
}
}
return refresh
}

// 3. MODYFIKACJA — wywołaj zamiast stałych wartości
function applyEraRefresh(state) {
const refresh = applyFlagModifiers(baseRefresh(state.big5), state.flags)
state.willpower = Math.min(100, Math.max(0, state.willpower + refresh.willpower))
state.energy = Math.min(100, Math.max(0, state.energy + refresh.energy))
state.mood = Math.min(100, Math.max(0, state.mood + refresh.mood))
}

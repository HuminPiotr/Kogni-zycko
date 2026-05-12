import type { Big5, TraitName } from '@/types/game';
import { Button } from '@/components/ui/Button';

interface Props {
  big5: Big5;
  age: number;
  onContinue: () => void;
}

const TRAITS: { key: TraitName; label: string; low: string; high: string }[] = [
  { key: 'n', label: 'Neurotyczność',  low: 'Spokojny jak tafla lodu.',          high: 'Wrażliwy, niespokojny, reaktywny.' },
  { key: 'e', label: 'Ekstrawersja',   low: 'Zamknięty w sobie, obserwator.',    high: 'Energia skierowana na zewnątrz.' },
  { key: 'o', label: 'Otwartość',      low: 'Pragmatyczny, przewidywalny.',      high: 'Ciekawy świata — zwłaszcza tego jak rzeczy działają w środku.' },
  { key: 'a', label: 'Ugodowość',      low: 'Inni ludzie to dane, nie partnerzy.', high: 'Empatyczny, kooperatywny.' },
  { key: 'c', label: 'Sumienność',     low: 'Chaotyczny, impulsywny.',           high: 'Potrafi się skupić — jeśli chce.' },
];

function traitDesc(value: number, low: string, high: string): string {
  return value >= 50 ? high : low;
}

const PSYCH_QUOTES: Record<TraitName, [string, string]> = {
  n: [
    'Reakcje emocjonalne są tłumione lub nieobecne. Trudno ocenić czy to opanowanie, czy odcięcie.',
    'Wykazuje podwyższoną reaktywność emocjonalną. Wrażliwy — ale kosztownie.',
  ],
  e: [
    'Zamknięty, obserwujący. Kontakt inicjuje tylko gdy uznaje to za konieczne.',
    'Energiczny, poszukuje kontaktu. Mózg który potrzebuje audytorium.',
  ],
  o: [
    'Trzyma się znanych schematów. Pragmatyzm graniczący z oporem wobec zmiennych.',
    'Wyraźna ciekawość mechanizmów — lubi wiedzieć jak rzeczy działają od środka. Niekoniecznie po to by je naprawić.',
  ],
  a: [
    'Relacje traktuje instrumentalnie. Nie jest to wadą — jest konsekwencją.',
    'Silna orientacja na relacje. Empatia funkcjonuje jako zasada organizująca.',
  ],
  c: [
    'Impulsywny. Decyzje podejmuje zanim pytanie zdąży wybrzmieć.',
    'Zdolność do skupienia i dyscypliny — w wybranych obszarach.',
  ],
};

function psychologistQuote(big5: Big5): string {
  const sorted = (Object.entries(big5) as [TraitName, number][]).sort((a, b) => b[1] - a[1]);
  const [topTrait, topVal] = sorted[0];
  return `„${PSYCH_QUOTES[topTrait][topVal >= 50 ? 1 : 0]}"`;
}

export function RevelationScreen({ big5, age, onContinue }: Props) {
  return (
    <main className="min-h-screen bg-canvas bg-polka flex items-center justify-center px-4 py-8">
      <div className="max-w-xl w-full bg-surface border-[3px] border-border-cartoon rounded-2xl shadow-cartoon-l p-8 space-y-6">
        <header className="text-center pb-4 border-b-2 border-border-subtle">
          <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
            Opinia psychologa
          </p>
          <h1 className="font-display text-3xl">Wiek: {age} lat</h1>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            {psychologistQuote(big5)}
          </p>
        </header>

        <div className="space-y-4">
          {TRAITS.map(({ key, label, low, high }) => {
            const value = big5[key];
            return (
              <div key={key}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display text-sm">{label}</span>
                  <span className="font-mono text-xs opacity-70">{value}</span>
                </div>
                <div className="w-full h-3 bg-border-subtle rounded-sm overflow-hidden border border-border-cartoon mb-1">
                  <div
                    className="h-full bg-text-primary transition-[width] duration-700"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <p className="text-xs text-text-secondary leading-snug">
                  {traitDesc(value, low, high)}
                </p>
              </div>
            );
          })}
        </div>

        <Button variant="primary" onClick={onContinue} className="w-full justify-center">
          Dalej →
        </Button>
      </div>
    </main>
  );
}

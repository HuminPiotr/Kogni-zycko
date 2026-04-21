import type { Decision, TraitName } from '@/types/game';
import { STRUCTURES } from '@/data/structures';
import { Button } from '@/components/ui/Button';

interface Props {
  decision: Decision;
  deltas: Partial<Record<TraitName, number>> | null;
  onAdvance: () => void;
}

const TRAIT_LABEL: Record<TraitName, string> = {
  n: 'Neurotyczność',
  e: 'Ekstrawersja',
  o: 'Otwartość',
  a: 'Ugodowość',
  c: 'Sumienność',
};

export function RevealPanel({ decision, deltas, onAdvance }: Props) {
  const meta = STRUCTURES[decision.hiddenStructure];
  const deltaEntries = deltas ? (Object.keys(deltas) as TraitName[]).filter((t) => deltas[t]) : [];

  return (
    <section
      className="animate-slide-up border-[3px] rounded-xl bg-surface p-5 shadow-cartoon-m relative overflow-hidden"
      style={{ borderColor: meta.color }}
    >
      <div
        className="absolute top-0 right-0 px-4 py-2 font-display uppercase text-xs border-l-2 border-b-2 border-border-cartoon"
        style={{ backgroundColor: meta.color, color: '#1A1A2E' }}
      >
        Odsłonięcie struktury
      </div>

      <h3 className="font-display text-2xl mb-1">{meta.label}</h3>
      <p className="text-sm opacity-70 mb-4">{meta.role}</p>

      <p className="text-base leading-relaxed mb-4">{decision.flavorReveal}</p>

      {deltaEntries.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {deltaEntries.map((t) => {
            const d = deltas![t]!;
            const sign = d > 0 ? '+' : '';
            return (
              <span
                key={t}
                className={`
                  font-mono text-xs px-2 py-1 border-2 border-border-cartoon rounded
                  ${d > 0 ? 'bg-lime' : 'bg-electric-rose text-white'}
                `}
                title={TRAIT_LABEL[t]}
              >
                {t.toUpperCase()} {sign}{d}
              </span>
            );
          })}
        </div>
      )}

      {decision.setsFlags && decision.setsFlags.length > 0 && (
        <div className="mb-3 text-xs font-mono opacity-70">
          Nowe flagi: {decision.setsFlags.join(', ')}
        </div>
      )}

      <Button variant="primary" onClick={onAdvance}>
        Następny rok →
      </Button>
    </section>
  );
}

import type { Decision, ResourceName, StructureName, TraitName } from '@/types/game';
import { STRUCTURES } from '@/data/structures';
import { Button } from '@/components/ui/Button';
import { BottomSheet } from '@/components/BottomSheet';
import { useSound } from '@/hooks/useSound';

interface Props {
  open: boolean;
  decision: Decision | null;
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

const RESOURCE_ICON: Record<ResourceName, string> = {
  energy: '🔋',
  mood: '😊',
  willpower: '🧠',
};

const base = import.meta.env.BASE_URL;
const STRUCTURE_IMAGE: Record<StructureName, string> = {
  amygdala:    `${base}cialo_migdalowate.png`,
  pfc:         `${base}kora_przedczolowa.png`,
  nacc:        `${base}jadro_ogoniaste.png`,
  hippocampus: `${base}hipokamp.png`,
  insula:      `${base}wyspa.png`,
  thalamus:    `${base}wzgorze.png`,
};

export function RevealPanel({ open, decision, deltas, onAdvance }: Props) {
  const playPrzemijanie = useSound('przemijanie');

  if (!decision) return null;

  const meta = STRUCTURES[decision.hiddenStructure];
  const imgSrc = STRUCTURE_IMAGE[decision.hiddenStructure];
  const deltaEntries = deltas
    ? (Object.keys(deltas) as TraitName[]).filter((t) => deltas[t])
    : [];

  return (
    <BottomSheet open={open} maxHeight="90vh" transparent>
      <div className="flex flex-col min-h-0 pb-8">
        {/* Top: Character art emerging from top center */}
        <div className="flex justify-center -mb-16 md:-mb-32 relative z-10">
          <div className="h-72 md:h-[28rem] w-full md:max-w-[60%] flex items-end justify-center">
            <img
              src={imgSrc}
              alt={meta.label}
              className="h-full w-full object-cover md:object-contain md:object-bottom"
            />
          </div>
        </div>

        {/* Bottom: Compact dialog card with white background */}
        <div
          className="flex-shrink-0 flex flex-col px-5 py-5 md:px-6 md:py-6 mx-auto w-full md:w-auto md:max-w-md bg-surface border-t-8 rounded-t-2xl relative z-20"
          style={{ borderColor: meta.color }}
        >
          {/* Nameplate */}
          <div
            className="text-white px-4 py-3 -mx-5 md:-mx-6 mt-4 md:mt-0 border-b-2 border-border-subtle"
            style={{ backgroundColor: meta.color }}
          >
            <p className="font-display text-xl leading-tight">{meta.label}</p>
            <p className="text-xs opacity-90 mt-0.5">{meta.archetype}</p>
          </div>

          {/* Body content */}
          <div className="flex-1 flex flex-col space-y-4 mt-4">
            <p className="text-base leading-relaxed">{decision.flavorReveal}</p>

            <p className="text-xs opacity-60">{meta.role}</p>

            {(decision.effects || deltaEntries.length > 0) && (
              <div className="flex flex-wrap gap-2">
                {decision.effects && Object.entries(decision.effects).map(([resource, amount]) => {
                  if (amount === undefined || amount === 0) return null;
                  const sign = amount > 0 ? '+' : '';
                  return (
                    <span
                      key={resource}
                      className={`font-mono text-xs px-2 py-1 border-2 border-border-cartoon rounded ${
                        amount > 0 ? 'bg-lime' : 'bg-electric-rose text-white'
                      }`}
                    >
                      {RESOURCE_ICON[resource as ResourceName]} {sign}{amount}
                    </span>
                  );
                })}
                {deltaEntries.map((t) => {
                  const d = deltas![t]!;
                  const sign = d > 0 ? '+' : '';
                  return (
                    <span
                      key={t}
                      className={`font-mono text-xs px-2 py-1 border-2 border-border-cartoon rounded ${
                        d > 0 ? 'bg-lime' : 'bg-electric-rose text-white'
                      }`}
                      title={TRAIT_LABEL[t]}
                    >
                      {t.toUpperCase()} {sign}{d}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          <Button variant="primary" onClick={() => { playPrzemijanie(); onAdvance(); }} className="w-full justify-center mt-6">
            Następny rok →
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
}

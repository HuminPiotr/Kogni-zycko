import type { Decision, StructureName, TraitName } from '@/types/game';
import { STRUCTURES } from '@/data/structures';
import { Button } from '@/components/ui/Button';
import { BottomSheet } from '@/components/BottomSheet';

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

const STRUCTURE_IMAGE: Record<StructureName, string> = {
  amygdala:    '/cialo_migdalowate.png',
  pfc:         '/kora_przedczolowa.png',
  caudate:     '/jadro_ogoniaste.png',
  hippocampus: '/hipokamp.png',
  thalamus:    '/uklad_dopaminowy.png',
  insula:      '/musk.png',
};

export function RevealPanel({ open, decision, deltas, onAdvance }: Props) {
  if (!decision) return null;

  const meta = STRUCTURES[decision.hiddenStructure];
  const imgSrc = STRUCTURE_IMAGE[decision.hiddenStructure];
  const deltaEntries = deltas
    ? (Object.keys(deltas) as TraitName[]).filter((t) => deltas[t])
    : [];

  return (
    <BottomSheet open={open} maxHeight="90vh">
      <div
        className="border-t-8 relative"
        style={{
          borderColor: meta.color,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
        }}
      >
        {/* Semi-transparent overlay so text stays readable */}
        <div className="absolute inset-0 bg-white/80" />

        {/* Content above background */}
        <div className="relative px-5 pt-5 pb-8 space-y-4">
          <div
            className="inline-block px-3 py-1 font-display text-[10px] uppercase tracking-widest border-2 border-border-cartoon"
            style={{ backgroundColor: meta.color, color: '#1A1A2E' }}
          >
            Odsłonięcie struktury
          </div>

          <div>
            <h3 className="font-display text-2xl">{meta.label}</h3>
            <p className="text-xs opacity-60 mt-0.5">{meta.role}</p>
          </div>

          <p className="text-base leading-relaxed">{decision.flavorReveal}</p>

          {deltaEntries.length > 0 && (
            <div className="flex flex-wrap gap-2">
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

          <Button variant="primary" onClick={onAdvance} className="w-full justify-center">
            Następny rok →
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
}

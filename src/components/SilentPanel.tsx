import type { GameEvent } from '@/types/game';
import { Button } from '@/components/ui/Button';

interface Props {
  event: GameEvent;
  onAdvance: () => void;
}

const RESOURCE_EMOJI: Record<string, string> = { energy: '🔋', mood: '😊', willpower: '🧠' };
const TRAIT_LABEL: Record<string, string> = { n: 'N', e: 'E', o: 'O', a: 'A', c: 'C' };

export function SilentPanel({ event, onAdvance }: Props) {
  const si = event.statImpact;
  const effects = si
    ? (Object.entries(si) as [string, number | undefined][]).filter(
        ([, v]) => v !== undefined && v !== 0,
      )
    : [];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-6 text-center">
      <div className="bg-surface border-2 border-border-cartoon rounded-2xl p-6 shadow-cartoon-m w-full max-w-sm">
        <p className="text-lg leading-relaxed">{event.sceneText}</p>
      </div>

      {event.postSceneText && (
        <p className="text-sm opacity-70 italic max-w-sm leading-relaxed">
          {event.postSceneText}
        </p>
      )}

      {effects.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {effects.map(([key, val]) => {
            const isResource = key === 'energy' || key === 'mood' || key === 'willpower';
            const sign = (val as number) > 0 ? '+' : '';
            const label = isResource ? RESOURCE_EMOJI[key] : TRAIT_LABEL[key];
            return (
              <span
                key={key}
                className={`font-mono text-sm px-3 py-1 border-2 border-border-cartoon rounded-full ${
                  (val as number) > 0 ? 'bg-lime' : 'bg-electric-rose text-white'
                }`}
              >
                {label} {sign}{val}
              </span>
            );
          })}
        </div>
      )}

      <Button variant="secondary" onClick={onAdvance} className="w-full max-w-sm justify-center">
        Dalej →
      </Button>
    </div>
  );
}

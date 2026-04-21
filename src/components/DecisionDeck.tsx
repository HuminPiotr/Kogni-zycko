import type { Decision, Resources } from '@/types/game';
import { DecisionCard } from '@/components/DecisionCard';

interface Props {
  decisions: Decision[];
  resources: Resources;
  onPick: (id: string) => void;
}

export function DecisionDeck({ decisions, resources, onPick }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {decisions.map((d) => (
        <DecisionCard key={d.id} decision={d} resources={resources} onPick={onPick} />
      ))}
    </section>
  );
}

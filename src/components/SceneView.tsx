import type { GameEvent } from '@/types/game';
import { ChatBubble } from '@/components/ChatBubble';

interface Props {
  event: GameEvent;
}

export function SceneView({ event }: Props) {
  return (
    <section className="space-y-4">
      <div className="bg-surface border-2 border-border-cartoon rounded-xl p-5 shadow-cartoon-m">
        <p className="text-lg leading-relaxed">{event.sceneText}</p>
      </div>
      <div className="space-y-3">
        {event.voices.map((v, idx) => (
          <ChatBubble key={`${event.id}-voice-${idx}`} structure={v.structure} text={v.text} />
        ))}
      </div>
    </section>
  );
}

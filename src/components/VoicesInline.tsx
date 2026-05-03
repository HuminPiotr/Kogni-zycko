import { useState, useEffect, useRef } from 'react';
import type { VoiceLine } from '@/types/game';
import { STRUCTURES } from '@/data/structures';

interface Props {
  voices: VoiceLine[];
  eventId: string;
}

export function VoicesInline({ voices, eventId }: Props) {
  const [revealed, setRevealed] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRevealed(0);
    if (!voices.length) return;
    const timers = voices.map((_, i) =>
      setTimeout(() => setRevealed((n) => n + 1), 700 + i * 1300),
    );
    return () => timers.forEach(clearTimeout);
  }, [eventId]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [revealed]);

  if (!voices.length || revealed === 0) return null;

  return (
    <div
      ref={scrollRef}
      className="flex flex-col gap-2 overflow-y-auto shrink-0"
      style={{ maxHeight: '28vh' }}
    >
      {voices.slice(0, revealed).map((v, i) => (
        <VoiceItem key={`${eventId}-${i}`} voice={v} />
      ))}
    </div>
  );
}

function VoiceItem({ voice }: { voice: VoiceLine }) {
  const meta = STRUCTURES[voice.structure];
  return (
    <div className="flex items-start gap-2 animate-slide-up px-0.5">
      <div
        className="w-7 h-7 flex-none rounded-full border-2 border-border-cartoon flex items-center justify-center font-display text-[9px] shrink-0 mt-0.5"
        style={{ backgroundColor: meta.color, color: '#1A1A2E' }}
        title={meta.label}
      >
        {meta.label.slice(0, 2).toUpperCase()}
      </div>
      <div
        className="flex-1 min-w-0 rounded-xl border-2 px-3 py-2 bg-text-primary text-text-on-dark"
        style={{ borderColor: meta.color }}
      >
        <div
          className="font-mono text-[9px] uppercase tracking-widest mb-0.5 opacity-80"
          style={{ color: meta.color }}
        >
          {meta.label}
        </div>
        <p className="text-xs leading-snug">{voice.text}</p>
      </div>
    </div>
  );
}

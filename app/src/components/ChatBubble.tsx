import type { StructureName } from '@/types/game';
import { STRUCTURES } from '@/data/structures';

interface Props {
  structure: StructureName;
  text: string;
}

// Dymek głosu — desing-guide sek. 5.3: ciemne tło + kolorowa ramka wg struktury.
export function ChatBubble({ structure, text }: Props) {
  const meta = STRUCTURES[structure];

  return (
    <div className="flex items-start gap-3">
      <div
        className="w-12 h-12 flex-none rounded-full border-2 border-border-cartoon sticker flex items-center justify-center font-display text-xs"
        style={{ backgroundColor: meta.color, color: '#1A1A2E' }}
        title={`${meta.label} — ${meta.archetype}`}
      >
        {meta.label.slice(0, 2).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="rounded-2xl border-[3px] px-4 py-3 bg-text-primary text-text-on-dark shadow-cartoon-s"
          style={{ borderColor: meta.color }}
        >
          <div
            className="font-mono text-[10px] uppercase tracking-widest mb-1 opacity-80"
            style={{ color: meta.color }}
          >
            {meta.label}
          </div>
          <p className="text-sm leading-snug">{text}</p>
        </div>
      </div>
    </div>
  );
}

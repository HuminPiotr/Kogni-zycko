import { useState, useRef } from 'react';
import type { Decision, Resources } from '@/types/game';
import { DecisionCard } from '@/components/DecisionCard';

interface Props {
  decisions: Decision[];
  resources: Resources;
  onPick: (id: string) => void;
}

// Fan layout: stackPos 0 = active (center), 1 = right peek, 2 = left peek.
const STACK = [
  { x: 0,    y: 0,  rotate: 0,   z: 30, scale: 1 },
  { x: 52,   y: 6,  rotate: 9,   z: 20, scale: 0.84 },
  { x: -52,  y: 6,  rotate: -9,  z: 10, scale: 0.84 },
] as const;

export function DecisionDeck({ decisions, resources, onPick }: Props) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef(0);
  const count = decisions.length;

  function next() { setActive((i) => (i + 1) % count); }
  function prev() { setActive((i) => (i - 1 + count) % count); }

  return (
    <div
      className="relative h-full"
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) < 40) return;
        dx < 0 ? next() : prev();
      }}
    >
      {/* Card fan */}
      {decisions.map((d, cardIdx) => {
        const stackPos = (cardIdx - active + count) % count;
        const pos = STACK[Math.min(stackPos, STACK.length - 1)];

        return (
          <div
            key={d.id}
            className="absolute top-0 left-0 right-0 mx-auto transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${pos.x}px) translateY(${pos.y}px) rotate(${pos.rotate}deg) scale(${pos.scale})`,
              transformOrigin: 'bottom center',
              zIndex: pos.z,
              width: 'min(60vw, 230px)',
              height: 'calc(100% - 52px)',
            }}
          >
            <DecisionCard decision={d} resources={resources} onPick={onPick} />
          </div>
        );
      })}

      {/* Dot indicator + arrows */}
      <div className="absolute bottom-3 left-0 right-0 z-40 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="font-mono text-base opacity-40 hover:opacity-90 active:opacity-100 px-1"
          aria-label="Poprzednia karta"
        >
          ←
        </button>

        {decisions.map((d, i) => (
          <button
            key={d.id}
            onClick={() => setActive(i)}
            aria-label={`Karta ${i + 1}`}
            className="rounded-full border-2 border-border-cartoon transition-all duration-200"
            style={{
              width: i === active ? '20px' : '10px',
              height: '10px',
              backgroundColor:
                i === active ? 'var(--color-border-cartoon)' : 'var(--color-border-subtle)',
            }}
          />
        ))}

        <button
          onClick={next}
          className="font-mono text-base opacity-40 hover:opacity-90 active:opacity-100 px-1"
          aria-label="Następna karta"
        >
          →
        </button>
      </div>
    </div>
  );
}

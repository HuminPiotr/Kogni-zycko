import { useEffect, useState } from 'react';
import type { Big5, TraitName } from '@/types/game';

const TRAITS: { key: TraitName; label: string; full: string }[] = [
  { key: 'n', label: 'N', full: 'Neurotyczność' },
  { key: 'e', label: 'E', full: 'Ekstrawersja' },
  { key: 'o', label: 'O', full: 'Otwartość' },
  { key: 'a', label: 'A', full: 'Ugodowość' },
  { key: 'c', label: 'C', full: 'Sumienność' },
];

interface Props {
  big5: Big5;
  lastDeltas?: Partial<Record<TraitName, number>> | null;
}

export function StatBar({ big5, lastDeltas }: Props) {
  const [flashing, setFlashing] = useState<Map<TraitName, 'up' | 'down'>>(new Map());

  useEffect(() => {
    if (!lastDeltas) return;
    const next = new Map<TraitName, 'up' | 'down'>();
    (Object.keys(lastDeltas) as TraitName[]).forEach((t) => {
      const d = lastDeltas[t] ?? 0;
      if (d > 0) next.set(t, 'up');
      else if (d < 0) next.set(t, 'down');
    });
    if (next.size === 0) return;
    setFlashing(next);
    const id = setTimeout(() => setFlashing(new Map()), 1500);
    return () => clearTimeout(id);
  }, [lastDeltas]);

  return (
    <div className="flex gap-2">
      {TRAITS.map((t) => {
        const dir = flashing.get(t.key);
        const flashClass = dir === 'up' ? 'flash-green' : dir === 'down' ? 'flash-red' : '';
        return (
          <div
            key={t.key}
            title={`${t.full}: ${big5[t.key]}/100`}
            className={`flex flex-col items-center gap-1 min-w-[44px] rounded px-1 ${flashClass}`}
          >
            <span className="font-mono text-xs text-text-on-dark uppercase tracking-widest">
              {t.label}
            </span>
            <div className="w-full h-2 bg-border-cartoon/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-text-on-dark transition-[width] duration-500"
                style={{ width: `${big5[t.key]}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-text-on-dark">
              {big5[t.key]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

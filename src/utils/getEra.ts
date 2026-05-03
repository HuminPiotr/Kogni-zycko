import { ERAS } from '@/data/eras';
import type { Era } from '@/types/game';

export function getEra(age: number): Era {
  for (const era of ERAS) {
    if (age >= era.range[0] && age <= era.range[1]) return era;
  }
  return ERAS[ERAS.length - 1]!;
}

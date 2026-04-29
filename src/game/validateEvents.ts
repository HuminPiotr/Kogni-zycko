import type { GameEvent } from '@/types/game';
import { ALL_STRUCTURE_NAMES } from '@/data/structures';

export interface ValidationIssue {
  level: 'error' | 'warning';
  eventId: string;
  message: string;
}

// Uruchamiany w dev (import.meta.env.DEV). Wyłapuje typowe błędy autorów eventów.
export function validateEvents(events: GameEvent[]): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const ids = new Set<string>();
  const usedFlags = new Set<string>();
  const setFlags = new Set<string>();

  for (const ev of events) {
    if (ids.has(ev.id)) {
      issues.push({ level: 'error', eventId: ev.id, message: 'Zduplikowane id eventu.' });
    }
    ids.add(ev.id);

    if (ev.ageRange[0] > ev.ageRange[1]) {
      issues.push({
        level: 'error',
        eventId: ev.id,
        message: `ageRange: min (${ev.ageRange[0]}) > max (${ev.ageRange[1]}).`,
      });
    }

    if (
      ev.type !== 'silent' &&
      (ev.decisions ?? []).length !== 3 &&
      ev.type !== 'crisis' &&
      ev.type !== 'rescue'
    ) {
      issues.push({
        level: 'warning',
        eventId: ev.id,
        message: `Event normal ma ${(ev.decisions ?? []).length} decyzji zamiast 3 (PRD sek. 3.5).`,
      });
    }

    // Crisis musi mieć kartę ratunkową (PRD sek. 3.7).
    if (ev.type === 'crisis') {
      const hasRescue = (ev.decisions ?? []).some((d) => d.isRescueCard);
      const hasDeath = (ev.decisions ?? []).some((d) => d.isDeathCard);
      if (!hasRescue) {
        issues.push({
          level: 'error',
          eventId: ev.id,
          message: 'Event crisis bez żadnej isRescueCard — gracz nie ma szansy się uratować.',
        });
      }
      if (!hasDeath) {
        issues.push({
          level: 'warning',
          eventId: ev.id,
          message: 'Event crisis bez isDeathCard — nic nie prowadzi do śmierci.',
        });
      }
    }

    (ev.setsFlags ?? []).forEach((f) => setFlags.add(f));

    if (ev.type !== 'silent') {
      for (const d of ev.decisions ?? []) {
        if (!ALL_STRUCTURE_NAMES.includes(d.hiddenStructure)) {
          issues.push({
            level: 'error',
            eventId: ev.id,
            message: `Decyzja ${d.id}: nieznana hiddenStructure "${d.hiddenStructure}".`,
          });
        }
        if (d.cost && d.cost.amount < 0) {
          issues.push({
            level: 'error',
            eventId: ev.id,
            message: `Decyzja ${d.id}: cost.amount nie może być ujemny.`,
          });
        }
        (d.setsFlags ?? []).forEach((f) => setFlags.add(f));
        (d.clearsFlags ?? []).forEach((f) => usedFlags.add(f));
      }

      for (const v of ev.voices ?? []) {
        if (!ALL_STRUCTURE_NAMES.includes(v.structure)) {
          issues.push({
            level: 'error',
            eventId: ev.id,
            message: `Voice: nieznana struktura "${v.structure}".`,
          });
        }
      }
    }

    if (ev.requiresFlag) usedFlags.add(ev.requiresFlag);
    if (ev.excludesFlag) usedFlags.add(ev.excludesFlag);
  }

  // Flagi wymagane/wykluczane, których nikt nie ustawia — mogą być literówką.
  usedFlags.forEach((f) => {
    if (!setFlags.has(f)) {
      issues.push({
        level: 'warning',
        eventId: '(global)',
        message: `Flaga "${f}" jest używana, ale żadna decyzja jej nie ustawia.`,
      });
    }
  });

  return issues;
}

export function reportIssues(issues: ValidationIssue[]): void {
  if (issues.length === 0) {
    console.info('[validateEvents] OK — brak błędów w puli eventów.');
    return;
  }
  for (const issue of issues) {
    const label = `[validateEvents ${issue.level}] ${issue.eventId}: ${issue.message}`;
    if (issue.level === 'error') console.error(label);
    else console.warn(label);
  }
}

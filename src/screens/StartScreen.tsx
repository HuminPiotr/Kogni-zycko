import { Button } from '@/components/ui/Button';

interface Props {
  onNewLife: () => void;
  onContinue: () => void;
  hasSavedRun: boolean;
}

export function StartScreen({ onNewLife, onContinue, hasSavedRun }: Props) {
  return (
    <main className="min-h-screen bg-canvas bg-polka flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-surface border-[3px] border-border-cartoon rounded-2xl shadow-cartoon-l p-8 text-center space-y-6">
        <div>
          <h1 className="font-display text-5xl md:text-6xl leading-none mb-2">
            Kogniżyćko
          </h1>
          <p className="text-text-secondary font-mono text-xs uppercase tracking-widest">
            Przeżyj życie. Poznaj swój mózg.
          </p>
        </div>

        <p className="text-base leading-relaxed">
          Gra karcianka o całym ludzkim życiu — od narodzin do ostatniej tury.
          Każda decyzja pokazuje, która struktura Twojego mózgu tak naprawdę
          podejmowała wybór. Zamiast fiszek — konsekwencje.
        </p>

        <div className="flex flex-col gap-3 items-stretch">
          <Button variant="primary" onClick={onNewLife}>
            Nowe życie
          </Button>
          {hasSavedRun && (
            <Button variant="secondary" onClick={onContinue}>
              Kontynuuj
            </Button>
          )}
        </div>

        <p className="text-xs opacity-60 font-mono">
          Gra działa lokalnie. Żadnego konta, żadnego logowania.
        </p>
      </div>
    </main>
  );
}

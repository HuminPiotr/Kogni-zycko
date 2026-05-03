import { Button } from "@/components/ui/Button";
import { ARCHETYPE_BIO, ARCHETYPE_HINT } from "@/data/archetype";

interface Props {
  onNewLife: () => void;
  onContinue: () => void;
  hasSavedRun: boolean;
}

export function StartScreen({ onNewLife, onContinue, hasSavedRun }: Props) {
  return (
    <main className="min-h-screen bg-canvas bg-polka flex items-center justify-center px-4 relative">
      <div className="max-w-xl w-full bg-surface border-[3px] border-border-cartoon rounded-2xl shadow-cartoon-l p-8 space-y-6">
        <div className="text-center">
          <h1 className="font-display text-5xl md:text-6xl leading-none mb-1">
            Kogniżyćko
          </h1>
          <p className="text-text-secondary font-mono text-xs uppercase tracking-widest">
            Przeżyj życie. Poznaj swój mózg.
          </p>
        </div>

        <div className="border-2 border-sunset rounded-xl px-4 py-3 bg-sunset/10 text-sm leading-relaxed">
          <span className="font-bold">⚠️ Uwaga:</span> Gra porusza tematy
          przemocy, traumy i trudnych decyzji.
        </div>

        <div className="border-t-2 border-border-subtle pt-4 space-y-3">
          <p className="text-base leading-relaxed">{ARCHETYPE_BIO}</p>
          <p className="text-sm opacity-70 italic leading-relaxed">
            💡 {ARCHETYPE_HINT}
          </p>
        </div>

        <div className="flex flex-col gap-3 items-stretch">
          <Button variant="primary" onClick={onNewLife}>
            Rozpocznij życie
          </Button>
          {hasSavedRun && (
            <Button variant="secondary" onClick={onContinue}>
              Kontynuuj
            </Button>
          )}
        </div>

        <p className="text-xs opacity-50 font-mono text-center"></p>
      </div>
    </main>
  );
}

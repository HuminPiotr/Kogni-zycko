import { useState, useEffect } from "react";
import { ARCHETYPES, type Archetype } from "@/data/archetype";
import { Button } from "@/components/ui/Button";

interface Props {
  onNewLife: () => void;
  onContinue: () => void;
  hasSavedRun: boolean;
}

type Step = "rules" | "archetype" | "intro";

function pickArchetype(): Archetype {
  return ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];
}

const RULES: { label: string; text: string }[] = [
  {
    label: "Zasoby",
    text: "Masz energię, nastrój i wolę. Każda decyzja je kosztuje.",
  },
  {
    label: "Karty",
    text: "Wybierasz spośród opcji. Każda aktywuje inną strukturę mózgu.",
  },
  {
    label: "Osobowość",
    text: "Twoje wybory zmieniają Wielką Piątkę — 5 cech charakteru i mają konekwencje w przyszłości.",
  },
  {
    label: "Zakończenie",
    text: "AI napisze ironiczny nekrolog na podstawie twojego życia.",
  },
];

function StepRules({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6">
      <header className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
          Zasady
        </p>
        <h1 className="font-display text-4xl">Jak to działa</h1>
      </header>

      <ul className="space-y-3">
        {RULES.map((r) => (
          <li key={r.label} className="space-y-0.5">
            <p className="font-display text-sm opacity-70">{r.label}</p>
            <p className="text-sm text-text-secondary leading-snug">{r.text}</p>
          </li>
        ))}
      </ul>

      <div className="border-2 border-sunset rounded-xl px-4 py-3 bg-sunset/10 text-sm leading-relaxed">
        <span className="font-bold">Uwaga:</span> Gra porusza tematy przemocy,
        traumy i trudnych decyzji.
      </div>

      <Button
        variant="primary"
        onClick={onNext}
        className="w-full justify-center"
      >
        Dalej
      </Button>
    </div>
  );
}

function StepArchetype({
  archetype,
  onNext,
}: {
  archetype: Archetype;
  onNext: () => void;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-6">
      <header className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1">
          Archetyp
        </p>
        <h1 className="font-display text-4xl">Losowanie</h1>
      </header>

      <div className="border-[3px] border-border-cartoon rounded-2xl p-8 text-center min-h-[9rem] flex flex-col items-center justify-center">
        {revealed ? (
          <div className="animate-fade-in space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">
              Twój archetyp
            </p>
            <p className="font-display text-4xl">{archetype.name}</p>
            <p className="text-sm text-text-secondary italic leading-snug max-w-xs mx-auto">
              {archetype.hint}
            </p>
          </div>
        ) : (
          <p className="font-mono text-sm opacity-40 animate-pulse tracking-widest">
            . . .
          </p>
        )}
      </div>

      {revealed && (
        <Button
          variant="primary"
          onClick={onNext}
          className="w-full justify-center"
        >
          Dalej
        </Button>
      )}
    </div>
  );
}

function StepIntro({
  archetype,
  onNewLife,
  onContinue,
  hasSavedRun,
}: {
  archetype: Archetype;
  onNewLife: () => void;
  onContinue: () => void;
  hasSavedRun: boolean;
}) {
  return (
    <div className="space-y-6">
      <header className="text-center">
        <h1 className="font-display text-5xl md:text-6xl leading-none mb-1">
          Kogniżyćko
        </h1>
        <p className="text-text-secondary font-mono text-xs uppercase tracking-widest">
          Przeżyj życie. Poznaj swój mózg.
        </p>
      </header>

      <div className="space-y-3 border-t-2 border-border-subtle pt-4">
        <p className="text-base leading-relaxed">{archetype.bio}</p>
        <p className="text-sm opacity-70 italic leading-relaxed">
          {archetype.hint}
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
    </div>
  );
}

export function StartScreen({ onNewLife, onContinue, hasSavedRun }: Props) {
  const [step, setStep] = useState<Step>("rules");
  const [archetype] = useState<Archetype>(pickArchetype);

  return (
    <main className="min-h-screen bg-canvas bg-polka flex items-center justify-center px-4 relative">
      <div className="max-w-xl w-full bg-surface border-[3px] border-border-cartoon rounded-2xl shadow-cartoon-l p-8">
        {step === "rules" && <StepRules onNext={() => setStep("archetype")} />}
        {step === "archetype" && (
          <StepArchetype
            archetype={archetype}
            onNext={() => setStep("intro")}
          />
        )}
        {step === "intro" && (
          <StepIntro
            archetype={archetype}
            onNewLife={onNewLife}
            onContinue={onContinue}
            hasSavedRun={hasSavedRun}
          />
        )}
      </div>
    </main>
  );
}

import type { Decision, Resources } from '@/types/game';
import { ALL_STRUCTURE_NAMES } from '@/data/structures';
import { ChatBubble } from '@/components/ChatBubble';
import { DecisionCard } from '@/components/DecisionCard';
import { ResourceMeter } from '@/components/ResourceMeter';
import { StatBar } from '@/components/StatBar';
import { RevealPanel } from '@/components/RevealPanel';
import { Button } from '@/components/ui/Button';

// Playground wszystkich komponentów.
// Dostęp: dowolna ścieżka z hashem #sandbox, np. http://localhost:5173/#sandbox
// (używamy hash routingu żeby nie trzeba było instalować react-router).

const sampleDecision: Decision = {
  id: 'sample_1',
  text: 'Przykładowa decyzja — wypij bez pytania',
  type: 'impulsive',
  hiddenStructure: 'caudate',
  flavorReveal:
    'Jądro ogoniaste pracuje w adolescencji na pełnych obrotach. Stąd risk-taking nastolatków.',
  statImpact: { o: 3, c: -4, n: -2 },
};

const sampleCostly: Decision = {
  id: 'sample_2',
  text: 'Oddychaj. Zacznij od najłatwiejszego',
  type: 'rational',
  cost: { resource: 'willpower', amount: 4 },
  hiddenStructure: 'pfc',
  flavorReveal: '—',
  statImpact: { c: 5 },
};

const sampleLocked: Decision = {
  id: 'sample_3',
  text: 'Super-racjonalna (zablokowana brakiem siły woli)',
  type: 'rational',
  cost: { resource: 'willpower', amount: 90 },
  hiddenStructure: 'pfc',
  flavorReveal: '—',
  statImpact: {},
};

const fullResources: Resources = { energy: 80, mood: 60, willpower: 70 };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl border-b-2 border-border-subtle pb-1">{title}</h2>
      {children}
    </section>
  );
}

export function Sandbox() {
  return (
    <main className="min-h-screen bg-canvas bg-polka">
      <div className="mx-auto max-w-5xl px-4 py-6 space-y-10">
        <header className="bg-text-primary text-text-on-dark px-4 py-3 border-2 border-border-cartoon shadow-cartoon-s">
          <h1 className="font-display text-2xl">Sandbox — playground komponentów</h1>
          <p className="text-xs opacity-70 font-mono mt-1">
            Tu zespół widzi wszystkie stany UI bez przechodzenia gry.
          </p>
        </header>

        <Section title="Button — warianty">
          <div className="flex gap-3 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </Section>

        <Section title="StatBar (Big5)">
          <div className="bg-text-primary p-3 rounded border-2 border-border-cartoon">
            <StatBar big5={{ n: 70, e: 30, o: 80, a: 55, c: 45 }} />
          </div>
        </Section>

        <Section title="ResourceMeter — stany kolorystyczne">
          <div className="bg-text-primary p-4 rounded border-2 border-border-cartoon flex gap-6 flex-wrap">
            <ResourceMeter resource="energy" value={80} />
            <ResourceMeter resource="mood" value={45} />
            <ResourceMeter resource="willpower" value={15} />
          </div>
        </Section>

        <Section title="ChatBubble — wszystkie 6 struktur">
          <div className="space-y-3">
            {ALL_STRUCTURE_NAMES.map((s) => (
              <ChatBubble
                key={s}
                structure={s}
                text="Przykładowy głos struktury mózgu — kolor ramki wg palety."
              />
            ))}
          </div>
        </Section>

        <Section title="DecisionCard — 4 stany">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DecisionCard decision={sampleDecision} resources={fullResources} onPick={() => {}} />
            <DecisionCard decision={sampleCostly} resources={fullResources} onPick={() => {}} />
            <DecisionCard decision={sampleLocked} resources={fullResources} onPick={() => {}} />
          </div>
        </Section>

        <Section title="RevealPanel">
          <RevealPanel
            decision={sampleDecision}
            deltas={{ o: 3, c: -4, n: -2 }}
            onAdvance={() => alert('Następny rok')}
          />
        </Section>
      </div>
    </main>
  );
}

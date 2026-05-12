import { useEffect, useState } from 'react';
import { useGameState } from '@/game/useGameState';
import { StartScreen } from '@/screens/StartScreen';
import { GameScreen } from '@/screens/GameScreen';
import { SummaryScreen } from '@/screens/SummaryScreen';
import { EraScreen } from '@/screens/EraScreen';
import { DebugPanel } from '@/components/DebugPanel';
import { Sandbox } from '@/screens/Sandbox';
import { getEraByNumber } from '@/data/eras';

function useHashRoute(): string {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '',
  );
  useEffect(() => {
    const handler = () => setHash(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return hash;
}

export default function App() {
  const route = useHashRoute();
  const game = useGameState();
  if (route === 'sandbox' && import.meta.env.DEV) return <Sandbox />;

  const { phase } = game.state;

  if (phase === 'start') {
    return (
      <>
        <StartScreen
          onNewLife={game.startNewLife}
          onContinue={game.continueSavedRun}
          hasSavedRun={game.hasSavedRun}
        />
        {import.meta.env.DEV && <DebugPanel state={game.state} />}
      </>
    );
  }

  if (phase === 'gameover') {
    return (
      <>
        <SummaryScreen state={game.state} onNewLife={game.reset} />
        {import.meta.env.DEV && <DebugPanel state={game.state} />}
      </>
    );
  }

  if (phase === 'era_summary') {
    const eraNumber = game.state.eraShown;
    const era = getEraByNumber(eraNumber)!;
    return (
      <>
        <EraScreen era={era} state={game.state} onContinue={game.advanceTurn} />
        {import.meta.env.DEV && <DebugPanel state={game.state} />}
      </>
    );
  }

  return (
    <>
      <GameScreen game={game} />
      {import.meta.env.DEV && <DebugPanel state={game.state} />}
    </>
  );
}

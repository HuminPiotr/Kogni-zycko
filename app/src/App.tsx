import { useEffect, useState } from 'react';
import { useGameState } from '@/game/useGameState';
import { StartScreen } from '@/screens/StartScreen';
import { GameScreen } from '@/screens/GameScreen';
import { EndScreen } from '@/screens/EndScreen';
import { RevelationScreen } from '@/screens/RevelationScreen';
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
  if (route === 'sandbox') return <Sandbox />;

  const { phase, player } = game.state;

  if (phase === 'start') {
    return (
      <>
        <StartScreen
          onNewLife={game.startNewLife}
          onContinue={game.continueSavedRun}
          hasSavedRun={game.hasSavedRun}
        />
        <DebugPanel state={game.state} />
      </>
    );
  }

  if (phase === 'gameover') {
    return (
      <>
        <EndScreen state={game.state} onNewLife={game.startNewLife} />
        <DebugPanel state={game.state} />
      </>
    );
  }

  if (phase === 'revelation') {
    return (
      <>
        <RevelationScreen
          big5={player.big5}
          age={player.age}
          onContinue={game.advanceTurn}
        />
        <DebugPanel state={game.state} />
      </>
    );
  }

  if (phase === 'era_summary') {
    const eraNumber = game.state.eraShown;
    const era = getEraByNumber(eraNumber)!;
    return (
      <>
        <EraScreen era={era} onContinue={game.advanceTurn} />
        <DebugPanel state={game.state} />
      </>
    );
  }

  return (
    <>
      <GameScreen game={game} />
      <DebugPanel state={game.state} />
    </>
  );
}

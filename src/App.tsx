import { useEffect, useState } from 'react';
import { useGameState } from '@/game/useGameState';
import { StartScreen } from '@/screens/StartScreen';
import { GameScreen } from '@/screens/GameScreen';
import { EndScreen } from '@/screens/EndScreen';
import { Sandbox } from '@/screens/Sandbox';

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

  if (game.state.phase === 'start') {
    return (
      <StartScreen
        onNewLife={game.startNewLife}
        onContinue={game.continueSavedRun}
        hasSavedRun={game.hasSavedRun}
      />
    );
  }

  if (game.state.phase === 'gameover') {
    return <EndScreen state={game.state} onNewLife={game.startNewLife} />;
  }

  return <GameScreen game={game} />;
}

import { useRef, useCallback } from 'react';

type SoundName = 'kikanie' | 'przemijanie' | 'scroll' | 'swich';

const SOUND_PATHS: Record<SoundName, string> = {
  kikanie:    '/dzwieki/kikanie.mp3',
  przemijanie: '/dzwieki/przemijanie lat.mp3',
  scroll:     '/dzwieki/scroll.mp3',
  swich:      '/dzwieki/swich.mp3',
};

export function useSound(name: SoundName) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(SOUND_PATHS[name]);
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  }, [name]);

  return play;
}

import { useRef, useCallback } from 'react';

type SoundName = 'kikanie' | 'przemijanie' | 'scroll' | 'swich';

const base = import.meta.env.BASE_URL;
const SOUND_PATHS: Record<SoundName, string> = {
  kikanie:    `${base}dzwieki/kikanie.mp3`,
  przemijanie: `${base}dzwieki/przemijanie lat.mp3`,
  scroll:     `${base}dzwieki/scroll.mp3`,
  swich:      `${base}dzwieki/swich.mp3`,
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

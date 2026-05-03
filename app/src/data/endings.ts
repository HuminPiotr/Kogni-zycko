import type { Flag } from '@/types/game';

export interface Ending {
  id: string;
  icon: string;
  name: string;
  text: string;
}

export const ENDINGS: Record<string, Ending> = {
  surgeon: {
    id: 'surgeon',
    icon: '🏥',
    name: 'Złote ręce, zimne serce',
    text: 'Uratowałeś 847 osób. Żadnej nie kochałeś. Czy to ma znaczenie? Ten sam mózg, który mógł niszczyć — naprawiał. Nie dlatego że czułeś. Dlatego że umiałeś.',
  },
  killer: {
    id: 'killer',
    icon: '🩸',
    name: 'Zimna krew, ciepłe ręce',
    text: 'Miałeś ręce chirurga. Użyłeś ich inaczej. Nikt ci nie powiedział, że cisza w głowie to nie siła — to brak alarmu, który chroni innych przed tobą.',
  },
  default: {
    id: 'default',
    icon: '🌫',
    name: 'Szara strefa',
    text: 'Nie zostałeś chirurgiem. Nie zostałeś mordercą. Zostałeś kimś pomiędzy — z mózgiem, który nie czuje strachu, w świecie który nie wiedział co z tobą zrobić.',
  },
};

export function getEnding(flags: Flag[]): Ending {
  if (flags.includes('chirurg'))        return ENDINGS.surgeon;
  if (flags.includes('poważna_przemoc')) return ENDINGS.killer;
  return ENDINGS.default;
}

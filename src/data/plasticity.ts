// Mnożniki plastyczności wiekowej Big5 (PRD sek. 3.3).
// Referencja: Roberts, Walton & Viechtbauer (2006).

interface PlasticityBand {
  maxAge: number; // inclusive
  multiplier: number;
  rationale: string;
}

const BANDS: PlasticityBand[] = [
  { maxAge: 5, multiplier: 1.5, rationale: 'Mózg jest gąbką — firmware się instaluje.' },
  { maxAge: 12, multiplier: 1.2, rationale: 'Duża plastyczność, kluczowe doświadczenia szkolne.' },
  { maxAge: 18, multiplier: 1.0, rationale: 'Adolescencja — bazowa zmienność.' },
  { maxAge: 25, multiplier: 0.7, rationale: 'Stabilizacja — młody dorosły.' },
  { maxAge: 40, multiplier: 0.4, rationale: 'Trudno się zmienić.' },
  { maxAge: 60, multiplier: 0.2, rationale: 'Osobowość prawie stała.' },
  { maxAge: 999, multiplier: 0.1, rationale: 'Stary pies, nowe sztuczki?' },
];

export function plasticityMultiplier(age: number): number {
  for (const band of BANDS) {
    if (age <= band.maxAge) return band.multiplier;
  }
  return 0.1;
}

export function plasticityRationale(age: number): string {
  for (const band of BANDS) {
    if (age <= band.maxAge) return band.rationale;
  }
  return '';
}

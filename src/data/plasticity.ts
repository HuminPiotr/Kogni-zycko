// Mnożniki plastyczności wiekowej Big5 zgodne z PRD sekcja 5.

export function plasticityMultiplier(age: number): number {
  if (age <= 2)  return 1.5;
  if (age <= 5)  return 1.3;
  if (age <= 12) return 1.1;
  if (age <= 18) return 1.0;
  return 0.7;
}

// Dopłata 🧠 dla kart rational zależna od ery (PRD sekcja 4 — dojrzewanie PFC).
export function pfcMaturityTax(age: number): number {
  if (age <= 2)  return 3;
  if (age <= 5)  return 2;
  if (age <= 12) return 1;
  return 0;
}

/**
 * Calculate the resistor ratio for a voltage divider.
 * For a divider: V_out = V_in * (R2 / (R1 + R2))
 * This function returns the ratio R2 / (R1 + R2).
 */
export function resistorCalculator(vIn: number, vOut: number): number {
  if (vOut >= vIn) {
    throw new Error('Output voltage must be less than input voltage.');
  }
  return vOut / vIn;
}

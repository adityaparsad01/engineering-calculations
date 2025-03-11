/**
 * Convert a length value between units.
 * For now, only supports converting meters to feet and vice versa.
 */
export function convertLength(value: number, from: string, to: string): number {
  const meterToFeet = 3.28084;
  if (from === 'm' && to === 'ft') {
    return value * meterToFeet;
  } else if (from === 'ft' && to === 'm') {
    return value / meterToFeet;
  }
  throw new Error(`Conversion from ${from} to ${to} is not supported.`);
}

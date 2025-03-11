/**
 * Calculate the mean of an array of numbers.
 * @param data Array of numbers.
 * @returns The mean value.
 */
export function mean(data: number[]): number {
  if (data.length === 0) return 0;
  return data.reduce((sum, num) => sum + num, 0) / data.length;
}

/**
 * Calculate the median of an array of numbers.
 * @param data Array of numbers.
 * @returns The median value.
 */
export function median(data: number[]): number {
  if (data.length === 0) return 0;
  const sorted = [...data].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

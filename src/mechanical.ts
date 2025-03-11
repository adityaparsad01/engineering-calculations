/**
 * Calculate force using Newton's second law: F = m * a.
 * @param mass Mass in kilograms.
 * @param acceleration Acceleration in m/s².
 * @returns Force in Newtons.
 */
export function calcForce(mass: number, acceleration: number): number {
  return mass * acceleration;
}

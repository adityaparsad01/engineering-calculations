'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.calcForce = calcForce;
/**
 * Calculate force using Newton's second law: F = m * a.
 * @param mass Mass in kilograms.
 * @param acceleration Acceleration in m/s².
 * @returns Force in Newtons.
 */
function calcForce(mass, acceleration) {
  return mass * acceleration;
}

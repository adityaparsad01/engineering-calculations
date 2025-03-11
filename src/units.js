'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.convertLength = convertLength;
/**
 * Convert a length value between units.
 * For now, only supports converting meters to feet and vice versa.
 */
function convertLength(value, from, to) {
  const meterToFeet = 3.28084;
  if (from === 'm' && to === 'ft') {
    return value * meterToFeet;
  } else if (from === 'ft' && to === 'm') {
    return value / meterToFeet;
  }
  throw new Error(`Conversion from ${from} to ${to} is not supported.`);
}

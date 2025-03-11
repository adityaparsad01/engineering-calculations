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

/**
 * Ohm's Law: Calculate voltage, current, or resistance.
 * V = I × R
 * @param current Current in amperes (A).
 * @param resistance Resistance in ohms (Ω).
 * @returns Voltage in volts (V).
 */
export function calculateVoltage(current: number, resistance: number): number {
  return current * resistance;
}

/**
 * Ohm's Law: Calculate current using voltage and resistance.
 * I = V / R
 * @param voltage Voltage in volts (V).
 * @param resistance Resistance in ohms (Ω).
 * @returns Current in amperes (A).
 */
export function calculateCurrent(voltage: number, resistance: number): number {
  return voltage / resistance;
}

/**
 * Ohm's Law: Calculate resistance using voltage and current.
 * R = V / I
 * @param voltage Voltage in volts (V).
 * @param current Current in amperes (A).
 * @returns Resistance in ohms (Ω).
 */
export function calculateResistance(voltage: number, current: number): number {
  return voltage / current;
}

/**
 * Power Formula: Calculate power using voltage and current.
 * P = V × I
 * @param voltage Voltage in volts (V).
 * @param current Current in amperes (A).
 * @returns Power in watts (W).
 */
export function calculatePower(voltage: number, current: number): number {
  return voltage * current;
}

/**
 * Alternative Power Formula: Calculate power using current and resistance.
 * P = I² × R
 * @param current Current in amperes (A).
 * @param resistance Resistance in ohms (Ω).
 * @returns Power in watts (W).
 */
export function calculatePowerFromCurrentAndResistance(current: number, resistance: number): number {
  return Math.pow(current, 2) * resistance;
}

/**
 * Alternative Power Formula: Calculate power using voltage and resistance.
 * P = V² / R
 * @param voltage Voltage in volts (V).
 * @param resistance Resistance in ohms (Ω).
 * @returns Power in watts (W).
 */
export function calculatePowerFromVoltageAndResistance(voltage: number, resistance: number): number {
  return Math.pow(voltage, 2) / resistance;
}

/**
 * Energy Consumption: Calculate energy consumed over time.
 * E = P × t
 * @param power Power in watts (W).
 * @param time Time in seconds (s).
 * @returns Energy in joules (J).
 */
export function calculateEnergy(power: number, time: number): number {
  return power * time;
}

/**
 * Voltage Drop Calculation for single-phase circuits.
 * VD = (2 × K × I × L) / CM
 * @param current Current in amperes (A).
 * @param length One-way length of the circuit in feet.
 * @param crossSectionalArea Conductor's cross-sectional area in circular mils.
 * @param materialConstant Constant based on conductor material (default: 12.9 for copper).
 * @returns Voltage drop in volts (V).
 */
export function calculateVoltageDrop(
  current: number, 
  length: number, 
  crossSectionalArea: number, 
  materialConstant: number = 12.9
): number {
  return (2 * materialConstant * current * length) / crossSectionalArea;
}

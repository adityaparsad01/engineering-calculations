import { 
  resistorCalculator,
  calculateVoltage,
  calculateCurrent,
  calculateResistance,
  calculatePower,
  calculatePowerFromCurrentAndResistance,
  calculatePowerFromVoltageAndResistance,
  calculateEnergy,
  calculateVoltageDrop
} from '../src/electrical';

describe('Electrical Calculations', () => {
  describe('resistorCalculator', () => {
    it('should calculate resistor ratio correctly', () => {
      expect(resistorCalculator(12, 5)).toBeCloseTo(0.4167, 4);
    });

    it('should throw error when output voltage is greater than input voltage', () => {
      expect(() => resistorCalculator(5, 12)).toThrow();
    });
  });

  describe('Ohm\'s Law', () => {
    it('should calculate voltage correctly', () => {
      expect(calculateVoltage(2, 10)).toBe(20);
    });

    it('should calculate current correctly', () => {
      expect(calculateCurrent(12, 6)).toBe(2);
    });

    it('should calculate resistance correctly', () => {
      expect(calculateResistance(24, 3)).toBe(8);
    });
  });

  describe('Power Calculations', () => {
    it('should calculate power from voltage and current', () => {
      expect(calculatePower(12, 2)).toBe(24);
    });

    it('should calculate power from current and resistance', () => {
      expect(calculatePowerFromCurrentAndResistance(3, 5)).toBe(45);
    });

    it('should calculate power from voltage and resistance', () => {
      expect(calculatePowerFromVoltageAndResistance(120, 60)).toBe(240);
    });
  });

  describe('Energy Consumption', () => {
    it('should calculate energy correctly', () => {
      expect(calculateEnergy(100, 3600)).toBe(360000);
    });
  });

  describe('Voltage Drop', () => {
    it('should calculate voltage drop correctly with default material constant', () => {
      // For 15A, 100ft, 10000 circular mils, with copper (K=12.9)
      expect(calculateVoltageDrop(15, 100, 10000)).toBeCloseTo(3.87, 2);
    });

    it('should calculate voltage drop correctly with custom material constant', () => {
      // For 15A, 100ft, 10000 circular mils, with aluminum (K=21.2)
      expect(calculateVoltageDrop(15, 100, 10000, 21.2)).toBeCloseTo(6.36, 2);
    });
  });
}); 
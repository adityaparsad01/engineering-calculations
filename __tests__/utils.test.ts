import { convertLength } from '../src/units';

describe('convertLength', () => {
  it('should convert meters to feet correctly', () => {
    const result = convertLength(1, 'm', 'ft');
    expect(result).toBeCloseTo(3.28084, 5);
  });

  it('should throw an error for unsupported conversions', () => {
    expect(() => convertLength(1, 'm', 'km')).toThrow();
  });
});
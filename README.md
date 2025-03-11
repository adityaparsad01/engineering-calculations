# Engineering Calculations Library

A TypeScript library for common engineering calculations across various disciplines.

## Overview

This library provides a collection of utility functions for engineering calculations, including:

- Unit conversions
- Electrical engineering calculations
- Mechanical engineering calculations
- Statistical functions

## Installation

```bash
npm install engineering-cal
```

## Usage

### Unit Conversions

```typescript
import { convertLength } from 'engineering-cal';

// Convert 5 meters to feet
const lengthInFeet = convertLength(5, 'm', 'ft');
console.log(lengthInFeet); // 16.4042
```

### Electrical Engineering

```typescript
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
} from 'engineering-cal';

// Calculate resistor ratio for a voltage divider
const ratio = resistorCalculator(12, 5);
console.log(ratio); // 0.4166...

// Ohm's Law (V = I × R)
const voltage = calculateVoltage(2, 10); // 2A through 10Ω
console.log(voltage); // 20V

const current = calculateCurrent(12, 6); // 12V across 6Ω
console.log(current); // 2A

const resistance = calculateResistance(24, 3); // 24V with 3A
console.log(resistance); // 8Ω

// Power Calculations
const power1 = calculatePower(12, 2); // 12V, 2A
console.log(power1); // 24W

const power2 = calculatePowerFromCurrentAndResistance(3, 5); // 3A, 5Ω
console.log(power2); // 45W

const power3 = calculatePowerFromVoltageAndResistance(120, 60); // 120V, 60Ω
console.log(power3); // 240W

// Energy Consumption
const energy = calculateEnergy(100, 3600); // 100W for 1 hour (3600 seconds)
console.log(energy); // 360,000 joules (100 watt-hours)

// Voltage Drop
const voltageDrop = calculateVoltageDrop(15, 100, 10000); // 15A, 100ft, 10000 circular mils
console.log(voltageDrop); // Voltage drop in volts
```

### Mechanical Engineering

```typescript
import { calcForce } from 'engineering-cal';

// Calculate force using F = m * a
const force = calcForce(10, 9.8); // 10kg mass with 9.8m/s² acceleration
console.log(force); // 98 Newtons
```

### Statistical Functions

```typescript
import { mean, median } from 'engineering-cal';

const data = [1, 2, 3, 4, 5];
console.log(mean(data)); // 3
console.log(median(data)); // 3
```

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

ISC 
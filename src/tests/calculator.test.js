const calculator = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add numbers from basic operations example', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add decimals', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
    });

    test('should handle large numbers', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract numbers from basic operations example', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });

    test('should subtract decimals', () => {
      expect(calculator.subtract(5.5, 2.5)).toBe(3);
    });

    test('should handle large numbers', () => {
      expect(calculator.subtract(1000000, 500000)).toBe(500000);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply numbers from basic operations example', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should multiply decimals', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(calculator.multiply(42, 1)).toBe(42);
    });

    test('should handle large numbers', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide numbers from basic operations example', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(calculator.divide(10, 4)).toBe(2.5);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('should divide positive by negative', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should divide decimals', () => {
      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });

    test('should divide by one', () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => {
        calculator.divide(5, 0);
      }).toThrow('Error: Cannot divide by zero');
    });

    test('should throw error for any number divided by zero', () => {
      expect(() => {
        calculator.divide(100, 0);
      }).toThrow('Error: Cannot divide by zero');
    });

    test('should throw error for negative divided by zero', () => {
      expect(() => {
        calculator.divide(-50, 0);
      }).toThrow('Error: Cannot divide by zero');
    });

    test('should handle large number division', () => {
      expect(calculator.divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo from extended operations example', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo for positive numbers', () => {
      expect(calculator.modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo where divisor is larger', () => {
      expect(calculator.modulo(3, 10)).toBe(3);
    });

    test('should calculate modulo resulting in zero', () => {
      expect(calculator.modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with negative numbers', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
      expect(calculator.modulo(10, -3)).toBe(1);
      expect(calculator.modulo(-10, -3)).toBe(-1);
    });

    test('should calculate modulo with decimals', () => {
      expect(calculator.modulo(5.5, 2)).toBe(1.5);
    });

    test('should throw error when divisor is zero', () => {
      expect(() => {
        calculator.modulo(5, 0);
      }).toThrow('Error: Cannot calculate modulo with zero divisor');
    });

    test('should handle modulo with one', () => {
      expect(calculator.modulo(42, 1)).toBe(0);
    });
  });

  describe('Power', () => {
    test('should calculate power from extended operations example', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should raise positive number to positive exponent', () => {
      expect(calculator.power(5, 2)).toBe(25);
    });

    test('should raise number to power of zero', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should raise number to power of one', () => {
      expect(calculator.power(42, 1)).toBe(42);
    });

    test('should raise to negative exponent', () => {
      expect(calculator.power(2, -1)).toBe(0.5);
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should raise negative number to power', () => {
      expect(calculator.power(-2, 2)).toBe(4);
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should calculate power with decimals', () => {
      expect(calculator.power(2, 0.5)).toBe(Math.sqrt(2));
      expect(calculator.power(4, 0.5)).toBe(2);
    });

    test('should handle large exponents', () => {
      expect(calculator.power(10, 3)).toBe(1000);
    });

    test('should calculate fractional powers', () => {
      expect(calculator.power(8, 1/3)).toBeCloseTo(2);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root from extended operations example', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect squares', () => {
      expect(calculator.squareRoot(9)).toBe(3);
      expect(calculator.squareRoot(25)).toBe(5);
      expect(calculator.squareRoot(100)).toBe(10);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(Math.sqrt(2));
      expect(calculator.squareRoot(10)).toBeCloseTo(Math.sqrt(10));
    });

    test('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    test('should calculate square root of decimals', () => {
      expect(calculator.squareRoot(0.25)).toBe(0.5);
      expect(calculator.squareRoot(2.25)).toBe(1.5);
    });

    test('should throw error for negative numbers', () => {
      expect(() => {
        calculator.squareRoot(-1);
      }).toThrow('Error: Cannot calculate square root of negative number');
    });

    test('should throw error for any negative number', () => {
      expect(() => {
        calculator.squareRoot(-100);
      }).toThrow('Error: Cannot calculate square root of negative number');
    });

    test('should handle large numbers', () => {
      expect(calculator.squareRoot(1000000)).toBe(1000);
    });

    test('should handle very small positive numbers', () => {
      expect(calculator.squareRoot(0.0001)).toBe(0.01);
    });
  });

  describe('Edge Cases and Combined Operations', () => {
    test('should handle sequence of operations', () => {
      // (2 + 3) * (10 - 4) = 5 * 6 = 30
      const add = calculator.add(2, 3);
      const subtract = calculator.subtract(10, 4);
      const result = calculator.multiply(add, subtract);
      expect(result).toBe(30);
    });

    test('should handle all four basic operations in sequence', () => {
      // 45 * 2 = 90
      const mult = calculator.multiply(45, 2);
      // 90 / 5 = 18
      const div = calculator.divide(mult, 5);
      // 18 + 2 = 20
      const add = calculator.add(div, 2);
      // 20 - 4 = 16
      const subtract = calculator.subtract(add, 4);
      expect(subtract).toBe(16);
    });

    test('should handle very small decimals', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle operations resulting in zero', () => {
      expect(calculator.subtract(5, 5)).toBe(0);
    });

    test('should handle operations with negative results', () => {
      expect(calculator.subtract(10, 20)).toBe(-10);
      expect(calculator.multiply(-5, 3)).toBe(-15);
    });

    test('should combine new and basic operations', () => {
      // 2^3 = 8, then 8 % 5 = 3
      const power = calculator.power(2, 3);
      const modulo = calculator.modulo(power, 5);
      expect(modulo).toBe(3);
    });

    test('should combine power and square root', () => {
      // 3^2 = 9, then sqrt(9) = 3
      const power = calculator.power(3, 2);
      const sqrt = calculator.squareRoot(power);
      expect(sqrt).toBe(3);
    });

    test('should calculate modulo then take square root', () => {
      // 17 % 10 = 7, then operations with result
      const modulo = calculator.modulo(17, 10);
      const add = calculator.add(modulo, 9);
      const sqrt = calculator.squareRoot(add);
      expect(sqrt).toBe(4);
    });
  });
});

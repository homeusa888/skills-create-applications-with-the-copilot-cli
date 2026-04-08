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
  });
});

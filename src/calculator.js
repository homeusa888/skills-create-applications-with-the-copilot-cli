#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition: +
 * - Subtraction: -
 * - Multiplication: *
 * - Division: /
 * - Modulo: %
 * - Exponentiation: ^
 * - Square Root: sqrt()
 */

const readline = require('readline');

// Calculator functions for basic arithmetic operations
const calculator = {
  // Addition operation: adds two numbers
  add: (a, b) => a + b,
  
  // Subtraction operation: subtracts b from a
  subtract: (a, b) => a - b,
  
  // Multiplication operation: multiplies two numbers
  multiply: (a, b) => a * b,
  
  // Division operation: divides a by b with error handling for division by zero
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Error: Cannot divide by zero');
    }
    return a / b;
  },

  // Modulo operation: returns the remainder of a divided by b
  modulo: (a, b) => {
    if (b === 0) {
      throw new Error('Error: Cannot calculate modulo with zero divisor');
    }
    return a % b;
  },

  // Power operation: returns base raised to the exponent
  power: (base, exponent) => {
    return Math.pow(base, exponent);
  },

  // Square root operation: returns the square root of n with error handling for negative numbers
  squareRoot: (n) => {
    if (n < 0) {
      throw new Error('Error: Cannot calculate square root of negative number');
    }
    return Math.sqrt(n);
  }
};

// Parse and execute calculation based on user input
function performCalculation(expression) {
  try {
    // Match pattern: number operator number (e.g., "5 + 3")
    const pattern = /^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/;
    const match = expression.trim().match(pattern);

    if (!match) {
      console.log('Invalid format. Use: number operator number (e.g., "5 + 3")');
      return;
    }

    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);

    let result;
    switch (operator) {
      case '+':
        result = calculator.add(num1, num2);
        break;
      case '-':
        result = calculator.subtract(num1, num2);
        break;
      case '*':
        result = calculator.multiply(num1, num2);
        break;
      case '/':
        result = calculator.divide(num1, num2);
        break;
      default:
        console.log('Unknown operator');
        return;
    }

    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.log(error.message);
  }
}

// Export calculator functions for testing
module.exports = calculator;

// Only run CLI if this script is executed directly (not imported)
if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Start the CLI interface
  console.log('Welcome to the Node.js CLI Calculator!');
  console.log('Supported operations: + (add), - (subtract), * (multiply), / (divide)');
  console.log('Enter "exit" to quit\n');

  function prompt() {
    rl.question('Enter calculation (e.g., 5 + 3): ', (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('Goodbye!');
        rl.close();
        return;
      }

      performCalculation(input);
      prompt();
    });
  }

  prompt();
}

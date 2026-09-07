#!/usr/bin/env node

// Supports addition: a + b.
function addition(a, b) {
  return a + b;
}

// Supports subtraction: a - b.
function subtraction(a, b) {
  return a - b;
}

// Supports multiplication: a * b.
function multiplication(a, b) {
  return a * b;
}

// Supports division: a / b.
function division(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}

const operations = {
  addition,
  subtraction,
  multiplication,
  division,
  "+": addition,
  "-": subtraction,
  "*": multiplication,
  "/": division,
};

function calculate(operation, firstOperand, secondOperand) {
  const selectedOperation = operations[operation];

  if (!selectedOperation) {
    throw new Error(
      "Unsupported operation. Use addition, subtraction, multiplication, or division."
    );
  }

  return selectedOperation(firstOperand, secondOperand);
}

function parseOperand(value, name) {
  const operand = Number(value);

  if (!Number.isFinite(operand)) {
    throw new Error(`${name} must be a valid number.`);
  }

  return operand;
}

function runCli(args) {
  if (args.length !== 3) {
    throw new Error(
      "Usage: node src/calculator.js <operation> <first number> <second number>"
    );
  }

  const [operation, firstValue, secondValue] = args;
  const firstOperand = parseOperand(firstValue, "First operand");
  const secondOperand = parseOperand(secondValue, "Second operand");

  return calculate(operation.toLowerCase(), firstOperand, secondOperand);
}

if (require.main === module) {
  try {
    console.log(runCli(process.argv.slice(2)));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  calculate,
};

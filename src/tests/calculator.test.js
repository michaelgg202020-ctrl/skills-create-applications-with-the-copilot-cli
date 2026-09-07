const assert = require("node:assert/strict");
const test = require("node:test");

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
} = require("../calculator");

test("addition adds two numbers", () => {
  assert.equal(addition(2, 3), 5);
});

test("addition supports negative and decimal numbers", () => {
  assert.equal(addition(-2.5, 3.5), 1);
});

test("subtraction subtracts the second number from the first", () => {
  assert.equal(subtraction(10, 4), 6);
});

test("subtraction supports negative results", () => {
  assert.equal(subtraction(4, 10), -6);
});

test("multiplication multiplies two numbers", () => {
  assert.equal(multiplication(45, 2), 90);
});

test("multiplication by zero returns zero", () => {
  assert.equal(multiplication(123, 0), 0);
});

test("division divides the first number by the second", () => {
  assert.equal(division(20, 5), 4);
});

test("division supports decimal results", () => {
  assert.equal(division(5, 2), 2.5);
});

test("division by zero throws a clear error", () => {
  assert.throws(() => division(10, 0), {
    message: "Cannot divide by zero.",
  });
});

test("modulo returns the remainder", () => {
  assert.equal(modulo(5, 2), 1);
});

test("modulo supports negative operands", () => {
  assert.equal(modulo(-5, 2), -1);
});

test("modulo by zero throws a clear error", () => {
  assert.throws(() => modulo(5, 0), {
    message: "Cannot calculate modulo by zero.",
  });
});

test("power raises a base to an exponent", () => {
  assert.equal(power(2, 3), 8);
});

test("power supports zero and negative exponents", () => {
  assert.equal(power(5, 0), 1);
  assert.equal(power(2, -2), 0.25);
});

test("square root returns the square root of a number", () => {
  assert.equal(squareRoot(16), 4);
});

test("square root of zero returns zero", () => {
  assert.equal(squareRoot(0), 0);
});

test("square root of a negative number throws a clear error", () => {
  assert.throws(() => squareRoot(-1), {
    message: "Cannot calculate the square root of a negative number.",
  });
});

test("calculate dispatches named operations", () => {
  assert.equal(calculate("addition", 2, 3), 5);
  assert.equal(calculate("subtraction", 10, 4), 6);
  assert.equal(calculate("multiplication", 45, 2), 90);
  assert.equal(calculate("division", 20, 5), 4);
  assert.equal(calculate("modulo", 5, 2), 1);
  assert.equal(calculate("power", 2, 3), 8);
  assert.equal(calculate("squareRoot", 16), 4);
});

test("calculate dispatches operation symbols", () => {
  assert.equal(calculate("+", 2, 3), 5);
  assert.equal(calculate("-", 10, 4), 6);
  assert.equal(calculate("*", 45, 2), 90);
  assert.equal(calculate("/", 20, 5), 4);
  assert.equal(calculate("%", 5, 2), 1);
  assert.equal(calculate("^", 2, 3), 8);
  assert.equal(calculate("sqrt", 16), 4);
});

test("calculate rejects unsupported operations", () => {
  assert.throws(() => calculate("logarithm", 2, 3), {
    message:
      "Unsupported operation. Use addition, subtraction, multiplication, division, modulo, power, or square root.",
  });
});

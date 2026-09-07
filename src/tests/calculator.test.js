const assert = require("node:assert/strict");
const test = require("node:test");

const {
  addition,
  subtraction,
  multiplication,
  division,
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

test("calculate dispatches named operations", () => {
  assert.equal(calculate("addition", 2, 3), 5);
  assert.equal(calculate("subtraction", 10, 4), 6);
  assert.equal(calculate("multiplication", 45, 2), 90);
  assert.equal(calculate("division", 20, 5), 4);
});

test("calculate dispatches operation symbols", () => {
  assert.equal(calculate("+", 2, 3), 5);
  assert.equal(calculate("-", 10, 4), 6);
  assert.equal(calculate("*", 45, 2), 90);
  assert.equal(calculate("/", 20, 5), 4);
});

test("calculate rejects unsupported operations", () => {
  assert.throws(() => calculate("modulo", 2, 3), {
    message:
      "Unsupported operation. Use addition, subtraction, multiplication, or division.",
  });
});

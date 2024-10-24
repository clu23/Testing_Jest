const Calculator = require('../calculator')

let calculator = new Calculator();

describe("Calculator", () => {
    test("adding numbers ", () => {
      expect(calculator.add(5,4)).toEqual(9);
    });
    test("adding numbers with opposite signs", () => {
        expect(calculator.add(1,-1)).toEqual(0);
    });
    test("substract numbers", () => {
        expect(calculator.substract(5,8)).toEqual(-3);
    });
    test("multiply numbers", () => {
        expect(calculator.multiply(6,9)).toEqual(54);
    });
    test("divide numbers", () => {
        expect(calculator.divide(27,9)).toBeCloseTo(3);
    });
    test("Divide when denominator is equal to 0", () => {
        expect(calculator.divide(4,0)).toBe(NaN);
      });
  });
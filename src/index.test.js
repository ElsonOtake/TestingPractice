class Calculator {

  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

test('returning string characters count', () => {
  // arrange
  const stringLength = string => string.length;
  const str = ' test of string size 659837948242';

  //act
  const result = stringLength(str);
  
  //assert
  expect(result).not.toBe(0);
  }
);

test('string is at least 1 character long and not longer than 10 characters', () => {
  // arrange
  const stringLength1To10 = string => {
    if (string.length < 1 || string.length > 10) {
      throw new Error('incorrect string size');
    }
  }

  //act
  const str = '6379400008242';
  
  //assert
  expect(() => stringLength1To10(str)).toThrow();
  expect(() => stringLength1To10(str)).toThrow(Error);
  expect(() => stringLength1To10(str)).toThrow('incorrect string size');
  }
);

test('return reversed string', () => {
  //arrange
  const reverseString = string => string.split('').reverse().join('');
  const str = '1234567890';

  //act
  const result = reverseString(str);

  //assert
  expect(result).toBe('0987654321');
});

const calc = new Calculator;
describe('Calculator', () => {
  describe.each([
    {a: 1, b: 1, expected: 2},
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 1, expected: 3},
  ])('add($a, $b)', ({a, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(calc.add(a, b)).toBe(expected);
    });
  });
  describe.each([
    {a: 1, b: 1, expected: 0},
    {a: 1, b: 2, expected: -1},
    {a: 2, b: 1, expected: 1},
  ])('subtract($a, $b)', ({a, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(calc.subtract(a, b)).toBe(expected);
    });
  });
  describe.each([
    {a: 1, b: 1, expected: 1},
    {a: 1, b: 2, expected: 2},
    {a: 2, b: 1, expected: 2},
  ])('multiply($a, $b)', ({a, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(calc.multiply(a, b)).toBe(expected);
    });
  });
  describe.each([
    {a: 1, b: 1, expected: 1},
    {a: 1, b: 2, expected: 0.5},
    {a: 2, b: 1, expected: 2},
  ])('divide($a, $b)', ({a, b, expected}) => {
    test(`returns ${expected}`, () => {
      expect(calc.divide(a, b)).toBeCloseTo(expected);
    });
  });
})

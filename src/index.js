class Calculator {

  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
}

const stringLength = (string) => string.length;

const stringLength1To10 = string => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('incorrect string size');
  }
}

const reverseString = string => string.split('').reverse().join('');

const calc = new Calculator;
console.log(calc.add(1, 4));
console.log(calc.subtract(9, 6));


console.log(reverseString('12345678901'));
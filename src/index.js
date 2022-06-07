const stringLength = (string) => string.length;

const stringLength1To10 = string => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('incorrect string size');
  }
}

const reverseString = string => string.split('').reverse().join('');

console.log(reverseString('12345678901'));
const stringLength = (string) => string.length;

const stringLength1To10 = string => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('incorrect string size');
  }
}

console.log(stringLength1To10('12345678901'));
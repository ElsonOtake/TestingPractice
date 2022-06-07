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

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

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});



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
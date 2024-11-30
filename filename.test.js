function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK!'); //Checks that the error message contains the exact string 'you are using the wrong JDK'.
});
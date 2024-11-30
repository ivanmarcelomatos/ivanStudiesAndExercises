function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow(/JDK/); //Uses a regular expression to check that the error message contains 'JDK'.
});
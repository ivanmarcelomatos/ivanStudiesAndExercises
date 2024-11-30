function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); //This test fails because it checks for the exact string 'you are using the wrong JDK' without the exclamation mark.
});
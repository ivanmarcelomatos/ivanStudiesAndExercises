function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); //This test passes because it matches the exact error message with the exclamation mark
});
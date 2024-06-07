// Use an IIFE (Immediately Invoked Function Expression) to use async/await at the top level
(async () => {
  // Dynamically import the 'upper-case' module
  const { upperCase } = await import('upper-case');

  // Example usage of the upperCase function
  const str = 'lowercase letters changed to uppercase letters';
  console.log(upperCase(str)); // Output: LOWERCASE LETTERS CHANGED TO UPPERCASE LETTERS
})();


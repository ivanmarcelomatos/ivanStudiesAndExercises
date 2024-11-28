const sum = require('./sum');

test('soma 3 + 6 igual a 9', () => {
    expect(sum(3, 6)).toBe(9);
});
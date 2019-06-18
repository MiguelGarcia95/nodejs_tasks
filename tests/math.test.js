const {calculateTip, celsiusToFahrenheit, fahrenheitToCelsius} = require('../src/math');

test('Should calculate total with tip', () => {
  const total = calculateTip(10, .3);
  expect(total).toBe(13);
})

test('Should calculate total with default tip', () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
})

test('Should convert 32f to 0c', () => {
  const result = fahrenheitToCelsius(32);
  expect(result).toBe(0);
})

test('Should convert 0c to 32f', () => {
  const result = celsiusToFahrenheit(0);
  expect(result).toBe(32);
})
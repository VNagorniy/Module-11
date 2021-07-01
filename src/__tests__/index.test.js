const multiply = require('../utils/index.js');

xdescribe("test multiply", () => {it('adds 1 * 0 to equal 0', () => {
  const result = multiply(1,0);
  expect(result).toBe(0);
}),

it('adds 1 * 1 to equal 1', () => {
  const result = multiply(1,0);
  expect(result).toBe(0);
  });
});
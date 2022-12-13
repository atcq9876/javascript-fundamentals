const fizzBuzz = require('./fizzBuzz');

describe('FizzBuzz', () => {
  it('returns FizzBuzz if number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns Fizz if number is divisible by 3 and not 5', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(18)).toBe('Fizz');
  });

  it('returns Buzz if number is divisible by 5 but not 3', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('returns num if num is not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(8)).toBe(8);
  });
});
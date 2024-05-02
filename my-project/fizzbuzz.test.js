
const fizzBuzz = require('./fizzBuzz');

describe('fizzbuzz', () => {
    it('takes number 3 and returns Fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
});


describe('fizzbuzz', () => {
    it('takes number 8 and returns 8', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
});

describe('fizzbuzz', () => {
    it('takes number 5 and returns Buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
});

describe('fizzbuzz', () => {
    it('takes number 15 and returns FizzBuzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
});
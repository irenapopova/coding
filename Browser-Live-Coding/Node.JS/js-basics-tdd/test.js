const fib = require('./index');
const { expect } = require('chai');

describe('fibonacci', () => {
  it('should return 0 for fib of 0', () => {
    expect(fib(0)).to.equal(0)
  });

  it('should return 1 for fib of 1', () => {
    expect(fib(1)).to.equal(1)
  });

  it('should return 21 for fib of 8', () => {
    expect(fib(8)).to.equal(21)
  });

  it('should throw an error for a decimal', () => {
    expect(() => fib(1.5)).to.throw("Please insert a positive number!")
  });

  it('should return the sum of the result for index 5 and index 4 for index 6', () => {
    expect(fib(6)).to.equal(fib(5) + fib(4));
  });

  it('should throw an error for strings', () => {
    expect(() => { fib('hello') }).to.throw("Please insert a positive number!")
  });

  it('should throw an error for fib of a negative number', () => {
    expect(() => { fib(-1) }).to.throw("Please insert a positive number!")
  });

  xit('should return something for index 100', () => {
    expect(fib(100)).to.equal(1);
  });
})
const cache = [];

module.exports = function fib(n) {
if(cache[n]){
  return cache[n]
}

  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (n < 0 || typeof n !== 'number' || n % 1 !== 0) {
    throw new Error("Please insert a positive number!")
  } else {
    return fib(n - 1) + fib(n - 2)
  }
};

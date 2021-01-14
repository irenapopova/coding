### index.js

```js
module.exports = function fib(n) {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else if (n < 0 || typeof n !== 'number' || n%1 !==0) {
    throw new Error("Please insert a positive number!")
  } else {
    return fib(n-1) + fib(n-2)
  }
};
```
### Mocha uses hooks to organize its structure

describe(): It's used to group, which you can nest as deep;
it(): It's the test case;
before(): It's a hook to run before the first it() or describe();
beforeEach(): It’s a hook to run before each it() or describe();
after(): It’s a hook to run after it() or describe();
afterEach(): It’s a hook to run after each it() or describe();
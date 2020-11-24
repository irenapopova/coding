// let, var, const local vs global

// functions inside functions
function main(num, num2) {
  // outer function
  function second(n) {
    // inner function   // privet one for outer function
    return n * n; // 9
  } // 9          // 16
  return second(num) + second(num2);
}

console.log(main(3, 4));
// Nested scopes: Accessing outer global variables
var nice = true;
const outerFunction = (x, y) => {
  let big = true;
  console.log(big + " outerFunction");
  const innerFunction = num => {
    big = false;
    nice = false;
    console.log(big + " innerFunction");
    return num + 10;
  }; // 3                      // 4
  return innerFunction(x) + innerFunction(y);
};

console.log(outerFunction(3, 4));
console.log(nice);
// closure
var number = 10;
function fun() {
  return number + number;
}
console.log(fun());
console.log(number);
// invoking == calling
// functions that return other function

const add = (() => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
})();
add(); // 1
add(); //2
add(); //3
console.log(add());
console.log(add());
// anonymous function

// SIAF
// self-invoking anonymous function
(function() {
  console.log("Hi");
})();
// IIFE
// Immediately-invoked Function Expression
// two ways + passing parameter
const sum = (function(x, y) {
  return x + y;
})(4, 5);
console.log(sum);

// --------
// loops
// String || array ||  repeat something many time || do printing many time
for (let i = 10; i >= 0; i--) {
  let result = i * 3;
  console.log(`${i} * 3 = ${result} `);
}
// if .. else
let num = 10;
if (num == 20) {
  console.log("20 is cool");
} else {
  console.log("Noooooo");
}

// Array
const arr = [3, 5, 67, 6];
console.log(arr[2]);
// contact@hadi-nsreeny.com

// Write a function add that uses a closure that performs addition on arguments in two separate function calls.
//add(2)(3)
const add2 = a => {
  return b => {
    return a + b;
  };
};
console.log(add2(2)(3));

// Write a function multiplier that uses a closure to perform multiplication. However, the outer function should be stored in a variable which is then called.
function multiplier(num) {
  // outer function
  return x => x * num; // inner function
}
const times = multiplier(2)(5);
console.log(times);
var all = 3;

(() => {
  var all = "Hi";
  console.log(all);
})();
console.log(all);

/* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:

The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message 'You're already retired!' should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.

Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000 */

((currentAge, retirementAge, monthlyWage, percentage) => {
  if (currentAge >= retirementAge) {
    console.log("You are already OLD");
  } else {
    let yearsToSave = retirementAge - currentAge;
    console.log(yearsToSave + " years to go");
    let mothsToSave = yearsToSave * 12;
    console.log(mothsToSave + " months to go");
    let amountSavedByMonth = (monthlyWage * percentage) / 100;
    let totalSave = amountSavedByMonth * mothsToSave;
    console.log(
      ` you will get very old in ${yearsToSave} and you will have ${totalSave} in your bank`
    );
  }
})(30, 65, 1000, 5);

// trim()
let str = "   Hi  ";
console.log(str.trim());
// trimEnd()
console.log(str.trimEnd());
// trimStart()
console.log(str.trimStart());
// startsWith()
let text = "Hi we will have fun now";
console.log(text.startsWith("we"));

// endsWith()
console.log(text.endsWith("we", 5));
// charCodeAt()
let chr = "c"; // UTF-16  UTF-8  ASCII   A 00001111
console.log(chr.charCodeAt(0) - 96);

// codePointAt()
const icons = "💪🏻";

console.log(icons.codePointAt(0));

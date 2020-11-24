// var, let, const
// function add (x,y){
//     return x+y;
// }
// Functions as values
// 1- const <function name> = function(<parameters>){ ... }

const sum1 = function(x, y) {
  return x + y;
};

const sum = (x, y) => {
  return x + y;
};
sum(5, 4);
const names = ["Ali", "Olga", "Nancy", "Hadi"];
const newArr = names.map((name, index) => name[0] == "O");
console.log(newArr);

// Array.map(value,index=>{}) // creates a new array
names.forEach((name, index) => console.log(name + " index num =" + index));
// Old School
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + " index num =" + i);
}
// Array.reduce()
//const reducer = (acc, cur) => acc + value;
const numArr = [1, 3, 4, 6, 7];
const reducer = (acc, cur) => acc + cur; // acc = 100  cur = 1
console.log(numArr.reduce(reducer, 100)); //100 is starting value for acc

//Don't Do This Way
// function one() {
//
//   two();
// }
// function two() {
//   one();
// }
// one();

// Call stack
function first(callback) {
  return callback;
}
function callback(callTwo) {
  let x = 9;
  return callTwo;
}
function callTwo() {
  let we = true;
  return "Hi";
}
console.log(first(callback(callTwo())));
// our bff
function display(str) {
  console.log(str);
}
// ES6 functions
// 2- const <function name> = (<parameters>) => { ... }

const print = str => console.log(str);
print("Hadi");
//function
//function <name>(<parameters>){ ... }
function yellow(val, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val + val2);
}
yellow(2, 3);
const AliPets = ["Dyson", "Sofi"];
// parameters: Naming and order
const pink = (name, array, age = 10) => {
  // 10 is value for age if the user did not give value for age
  console.log(
    `Hi ${name}, you are very young ${age}, you have nice pets ${array}`
  );
};
pink("Ali", AliPets, 20);
pink("Olga", ["Dyson", "Sofi"]);
const greeting = (nam, add, age, pla) => {
  nam += ",";
  pla += " DE.";
  add += ",";
  age += 20; // age = age + 20
  let result = `Hey ${nam} it is very nice to live in ${add} ${age} years old, you are getting older too fast in ${pla}`;
  return result;
};
console.log(greeting("Ali", "xx str", 10, "Berlin"));

const add = () => {
  let x = 1120 * 3;
  console.log(x);
};
add(); // function call

/* Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
If the number cannot be divided evenly by 4, simply return the number.
The given integer will always be equal to or greater than 1.
Include the given number (the number in the parameters).
Examples:
amplify(4) ➞ [1, 2, 3, 40]
amplify(3) ➞ [1, 2, 3]
amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25] */
const amplify = num => {
  let result = [];
  let ampByTen = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 4 == 0) {
      ampByTen = i * 10;
      result.push(ampByTen);
    } else {
      result.push(i);
    }
  }
  return result;
};
console.log(amplify(24));
/* One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
Examples:

unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0 */
//unique([3, 3, 3, 7, 3, 3]) ➞ 7
function unique(arr) {
  //[1, 1, 2, 1, 1, 1]
  let currentValue = 0;
  let current = []; //1 , 1 , 1
  let remainder = [];
  for (let i = 0; i < arr.length; i++) {
    if (current.length === 0 || current[0] === arr[i]) {
      current.push(arr[i]); // 1
      currentValue++; // currentValue = currentValue +1;
    } else if (current[0] !== arr[i]) {
      remainder.push(arr[i]); //2
    }
  }
  if (currentValue === 1) {
    return current[0];
  } else {
    return remainder[0];
  }
}
let numArray = [1, 1, 2, 3, 3, 1];
console.log(unique(numArray));

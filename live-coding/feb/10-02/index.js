// Compound object
const objects = [
  {
    name: "Ali",
    lastName: "see"
  },
  {
    name: "Olga",
    lastName: "xs",
    printOut: function() {
      console.log("Hi");
    }
  },
  {
    name: "Nancy",
    lastName: "Aii"
  }
];
// dot.
objects[1].printOut();
// 2nd way to call bracket []
objects[1]["printOut"]();
// Clones vs. References

// Primitive  (Simple values are always clones)
// String, Number, Boolean
let str = "How are you";
let newStr = str; // cloning

str = "something else";
console.log(newStr);
console.log(str);
let num = 222;
let newNum = num;
console.log(newNum);
// Compound
// Object, Array, Function
const names = ["Ali", "Olga", "Nancy", "Zain"];
let newArr = names; //
console.log(newArr);
newArr[1] = "New";
console.log(names);
const car = {
  name: "Ford",
  year: "2020",
  color: "Red"
};

const newObject = car;
newObject.name = "BMW";
console.log(car.name);
// Objects are references by default: Array and object literals

// Shallow copy using ... (spread operator)
let namesArr = ["Ali", "Hadi"];
let newNamesArr = [...namesArr];
newNamesArr[0] = "Nancy";
console.log(newNamesArr);
console.log(namesArr);
// Shallow copy using .concat()
let newNames2 = [].concat(namesArr);

// Shallow copy using .slice()
let newNames3 = namesArr.slice(0);
console.log(newNames3);
// Shallow copy using .assign()
const newObject2 = Object.assign(car);
const mewObject3 = { ...car };
//  Recursion

// in one word it's a way to create a function that calls itself and being able to stope calling itself when it done the job, otherwise it will be infinity loop.
// the stack call when its ended js able to unwind the stack and return the result

const factorial = function(num) {
  // console.log(num);
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(5));

// Deep copy using recursion 🤨
function deepCopy(obj) {
  if (typeof obj === "object") {
    return Object.keys(obj)
      .map(key => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (typeof obj === "array") {
    return obj.map(deepCopy);
  }
  return obj;
}
const newObj = { 1: "hi", 2: "how are you", fun: () => console.log("Hi") };
const superNewObj = deepCopy(newObj);
console.log(superNewObj);
// cool console 😎
console.log(console);
console.table(newObject);
/* Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

Examples:

(4, { min: 0, max: 5 }) ➞ true
(4, { min: 4, max: 5 }) ➞ true
(4, { min: 6, max: 10 }) ➞ false
(5, { min: 5, max: 5 }) ➞ true */
console.log("ex 1");
let ojbRa = { min: 10, max: 11 };

function fun(num, obj) {
  return num >= obj.min && num <= obj.max;
}
console.log(fun(4, { min: 0, max: 5 }));
console.log(fun(4, ojbRa));

/*

Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
 [ { tile: "N", score: 1 },
   { tile: "K", score: 5 }, 
   { tile: "Z", score: 10 },
   { tile: "X", score: 8 }, 
   { tile: "D", score: 2 }, 
   { tile: "A", score: 1 },
   { tile: "E", score: 1 } ]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 
*/
console.log("ex 2");
let arrayScore = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];
//console.log(arrayScore[3].score)
function score(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arrayScore[i].score;
  }
  return result;
}
console.log(score(arrayScore));
/*
checks it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

Examples:

{} ➞ true
{a: 1} ➞ false 
*/
console.log("ex 3");
function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ 1: 333 }));
/*
Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.
Examples:

freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false 
freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true 
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false 

*/
console.log("ex 4");
function freeShipping(obj) {
  let values = Object.values(obj);
  //console.log(values);
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    result += values[i];
  }
  return result > 50;
}
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
/*
5. Programming Object.
const programming = { languages: ["JavaScript", "Python", "Ruby"], isChallenging: true, isRewarding: true, difficulty: 8, jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke" }; 

*/
console.log("ex 5");
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
// Change the difficulty to the value of 7.
programming.difficulty = 7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)
delete programming.jokes;
// Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
programming["isFun"] = true;
// Using a loop, iterate through the languages array and console.log all of the languages.
let array = programming.languages; //ref
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// Using a loop, console.log all of the keys in the programming object.
//let programmingKeys = Object.keys(programming);

for (let key in programming) {
  console.log(key);
}
// Using a loop, console.log all of the values in the programming object.
for (let key in programming) {
  console.log(programming[key]);
}
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
programming.isTrue = function() {
  if (this.isChallenging && this.isRewarding) {
    return `Learning the programming languages ${this.languages} is rewarding and challenging`;
  } else {
    return `Sorry something went wrong`;
  }
};
console.log(programming.isTrue());
// Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.

// Bonus:

// Make sure that any other code cannot delete or change properties of the object.(need Google)
Object.freeze(programming);

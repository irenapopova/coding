let x = 33.33333455;
console.log(x.toFixed(4));
let old, nice, crazy;
old = true;
nice = false;
crazy = 3 <= 3;
console.log(crazy);
console.log(old !== nice);

// Boolean inversion with !
console.log(crazy ? "Yeah" : "nope");

// givenName || firstName || "ABC";

console.log("Abc");
let givenName, firstName;
firstName = "Hadi";
console.log("Abc" || firstName || givenName);

// https://en.wikipedia.org/wiki/Algorithm

// let's do some Algorithm
//  Nancy's income is 500 Euro per week.
// How much does Nancy makes every year?
const nancySalary = 500 * 52;
console.log(`Nancy salary ${nancySalary} Euro in one year`);

/* The number of hours Nancy worked over 
the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
What is Nancy's average hour? */
const nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAverage = nancyWorkingHours / 10;
console.log(
  `Nancy worked last two weeks ${nancyWorkingHours}, the Average is ${nancyAverage}`
);
let dd = 9;
// if(<boolean>){ ... }
// let a, b, c;
// a = 1 === 4;
// b = 20 < 100;
// c = true;
// let counter = 0;
// let logIn = false;
// // else { ... }
// if (a == c && b) {
//   console.log("Nice");
//   counter = 2;
//   logIn = true;
// } else {
//   console.log("Not cool");
//   counter = 3;
//   logIn = false;
// }

// console.log(logIn, counter);

// A math student scored 75, 70, 85, 90, 100
//on the first five tests he took .
// After he took his sixth math test,
//the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

let totalTest = 85 * 6;
let total5Th = 75 + 70 + 85 + 90 + 100;
let sixthTest = totalTest - total5Th;
console.log(`The sixth test result is ${sixthTest}`);

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//Expected output: James needs a minimum of --% to get an 80% average.

const totalScore = 80 * 9;
const currentAvg = 78 * 8;
let diffTotal = totalScore - currentAvg;
console.log(`James needs a minimum of ${diffTotal} to get an 80% average.`);

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let int1 = 4;
let int2 = 50;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log("true");
}

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let int3 = 66;
if (
  (int1 >= 55 && int1 <= 99) ||
  (int2 >= 55 && int2 <= 99) ||
  (int3 >= 55 && int3 <= 99)
) {
  console.log(true);
}

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a, b, c;
a = 2;
b = 44;
c = 22;
console.log(Math.max(a, b, c));

// Create a new string adding “Py” in front of a given string. If the given string begins with “Py” then print the original string.
let str = "Python";
if (str.substring(0, 2) === "Py") {
  console.log(str);
}
// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let sumInt = int1 + int2;
console.log(sumInt);
if (sumInt >= 50 && sumInt <= 80) {
  console.log(65);
} else {
  console.log(80);
}

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let int5 = 3;
let int6 = 5;
let numDiff = Math.abs(int5 - int6);
let numSum = int5 + int6;
console.log(numDiff);
if (numSum == 8 || numDiff == 8) {
  console.log(true);
}
// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let int7 = 5;
let int8 = 10;
let intSum = int7 + int8;
if (int7 == 15 || int8 == 15 || intSum == 15) {
  console.log(true);
}
// Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let number1 = 1;
let number2 = 7;
if (
  number1 % 7 == 0 ||
  number2 % 7 == 0 ||
  number1 % 11 == 0 ||
  number2 % 11 == 0
) {
  console.log(true);
}

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let int22 = 4;
let int21 = 3;
let numTrip = (int22 + int21) * 3;
if (int22 === int21) {
  console.log(numTrip);
}
// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let num1 = 3;
let numDifff = Math.abs(num1 - 19);
let numDo = numDifff * 2;
if (num1 > 19) {
  console.log(numDo);
}

// Irena
// Math.cos() method
// The Math.cos() method returns a numeric value between -1 and 1,
//which represents the cosine of the angle.
// cos() is a static method of Math, you always use it as Math.cos(),
//rather than as a method of a Math object (Math is not a constructor).
function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}
console.log(getCircleX(1, 10));
// expected output: 5.403023058681398
console.log(getCircleX(2, 10));
// expected output: -4.161468365471424
console.log(getCircleX(Math.PI, 10));
// expected output: -10
// 
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Collapse




// Keven
Math.sign();
console.log(Math.sign(3));
// expected output: 1
console.log(Math.sign(-3));
// expected output: -1
console.log(Math.sign(0));
// expected output: 0
// Bido
//Math.random (JavaScript method)

/*
  1. What it does?
    1.1 Math.random will return a float number between 0 and 1
*/
let generateNumber = Math.random();
​console.log("The generated number between 0 and 1 is"+ generateNumber);

//   2. How to generate a number between (0 and 10)
let maxNumber = 10;
console.log("The number is", Math.floor(generateNumber * maxNumber));

// Gabriela
Math.log
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
// 7 x 7 = 49
console.log(getBaseLog(7, 49));
// 4 x 4 x 4 x 4 x 4 x 4 = 4096
console.log(getBaseLog(4, 4096));
// Janes

// The "Math.round()" function (or method) returns the value of a number rounded to the nearest integer.
// Syntax: Math.round(x) , where x is a parameter
// Examples
console.log(Math.round(0.9)); // expected output: 1
console.log(Math.round(9.95), Math.round(8.5), Math.round(7.05)); // expected output: 10 9 7
console.log(Math.round(-3.05), Math.round(-5.5), Math.round(-1.95)); // expected output: -3 -5 -2
/* Description
If the fractional portion of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. 
If it is less than 0.5, the argument is rounded to the integer with the lower absolute value.  
If the fractional portion is exactly 0.5, the argument is rounded to the next integer in the direction of +∞.
*/
// Examples
console.log(Math.round(20.49)); //  20
console.log(Math.round(20.5)); //  21
console.log(Math.round(42)); //  42
console.log(Math.round(-19.5)); // -19
console.log(Math.round(-20.51)); // -21
// Browser compatibility: all browsers
// Ashraf
// Math.trunc - full name truncate
//        - means shorten something-
//    - purpose to remove the decimal part of the num !
​
console.log(Math.trunc(4.2)); // 4
​
console.log(Math.trunc(20.37)); // 20
​
console.log(Math.trunc(14.123456789101010101)); // 14

// Romain
/* The Math.imul() function returns the result of the 32-bit multiplication of the two parameters.
Useful when you need to multiplied Hexadecimal values together
The hexadecimal number system, also called base-16 or sometimes just hex, is a number system that
uses 16 unique symbols to represent a particular value. Those symbols are 0-9 and A-F.
 the beauty of using Hexadecimal with computers: it can represent 16-bit words in only four Hex digits,
 or 8-bit bytes in just two; thus, by using a numeration with more symbols,
 it is both easier to work with (saving paper and screen space) and makes it possible to understand some of the
 vast streams of data inside a computer merely by looking at the Hex output.
For example: hello = 48 65 6c 6c 6f
*/
// console.log(Math.imul(3, 12));
// console.log(Math.imul(-10, 12));
// console.log(Math.imul(0xfffffffe, 0xffffffff));

// Erika
console.log(Math.cbrt(64));

// Marcelo
 Function Math.pow()
/*
Definition:
The Math.pow() function returns the base to the exponent (a.k.a. power)
e.g. 2³ where 2 is the base and 3 is the exponent
*/
/*
Syntax:
Math.pow(base, exponent)
*/
// Demo:
console.log(Math.pow(2, 3)); // expected output: "8" (2 * 2 * 2 = 8)
/*
Implementation:
If you need to know how much money you will have along twelve months
investing five hundred euros with one percent of interest rate per month
*/
let investmentValue = 500;           // amount of money to be invested
let investmentPeriod = 12;           // period of investment in months
let compoundInterestRate = 1 + 0.01; // 1% interest rate per month ("1 +" is a math convention)
let text1 = `Total value after ${investmentPeriod} month(s) = `;
let text2 = ` EUR`;
// math: Total value after months = 500 * (1 + 0.01)¹²
console.log(text1 + (investmentValue * Math.pow(compoundInterestRate,investmentPeriod)).toFixed(2) + text2);

// Irena
function getCircleX(radians, radius) {
    return Math.cos(radians) * radius;
  }
  console.log(getCircleX(1, 10));
  // expected output: 5.403023058681398
  console.log(getCircleX(2, 10));
  // expected output: -4.161468365471424
  console.log(getCircleX(Math.PI, 10));
  // expected output: -10


  // Raquel
  //The Math.hypot() function returns the square root of 
  //the sum of squares of its arguments, that is:
console.log(Math.hypot(3, 4));
console.log(Math.hypot(5, 12));
console.log(Math.hypot(3, 4, 5));
console.log(Math.hypot(64, 16));
// Yaman
function getcircley(radions,radius)
{
    return Math.sin(radiaus)*radius
}
console.log(getcircley(1,10));
//the resaut is 8,417

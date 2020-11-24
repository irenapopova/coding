let str = "this is long text";
console.log(str.slice(3));
let str1 = "Hi";
let str2 = "Hadi";
console.log(`${str1} ${str2}`);
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str.includes("java"));
let x = 1;
x = 1;
true ? console.log("cool") : console.log("nope");

//const
const dr = 2;
// dr = 3;  // not good to reassign a value to const
// Syntax debugging III: Reassigning constants
// local Global

var global = "Hi i'm global";
console.log(global);
function sum() {
  let local = "Hi i am local";
  console.log(global);
  console.log(local);
}
sum();
//console.log(local); // not there 😋

// Conditional assignment with the ternary operator
let kid = 2;
console.log(kid > 16 ? "Party 😎" : "Home Party 😖");
console.log(x ? "Hey thats nice" : "Oh noooooo");
// bracket notation [0]

// `\'`, `\"`, `\n`
console.log("Hi i am \n Hadi");
// .trim()
let str4 = " Hadi    ";
console.log(str4.trim());
function print(str) {
  console.log(str);
}
print("Hadi");
// Numbers
let z = 3;
let w = 2;
console.log(z % w);
// Integers vs. Floats
let int1 = "1555";
let int2 = 1.5;
console.log(int1 + " " + int2);

// isNaN
console.log(isNaN(int1) ? "yeah it is a string" : "Nope sorry");
// Converting strings into Numbers: `parseInt()`, `parseFloat()`
let strInt = "2";
let strInt2 = "2";
let result = strInt + strInt2;
let newNum = parseInt(strInt, 10);
console.log(result);

//1. Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.
let var1 = "This is a string";
let var2 = 22;
let longStr2 = var1 + var2;
console.log(longStr2);
//2. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
let num101 = 44;
let numX = num101 % 2;
console.log(numX);
console.log(numX == 0 ? `${num101} is even` : `${num101} is odd`);

let integer = "1005";
let reallNum = parseInt(integer);
console.log(reallNum);

let float = "10.05";
let reallFloat = parseInt(float);
console.log(reallFloat);
// Modulo  '%'
let lastNum = 4 % 2;
console.log(lastNum);
// * + - / ++ --
let q = 3;
let s = 4;
let sum1 = q + s;
let div = q / s;
let mul = q * s;
console.log(sum1, div, mul);

// Exponentiation ** the power of(new added)
let power = 2 ** 2;
console.log(power);
//Math.floor()
let float1 = 1.8;
let realIni = Math.floor(float1);
console.log(realIni);
//Math.ceil()
let realIni2 = Math.ceil(float1);
console.log(realIni2);

//Math.max()
console.log(Math.max(800, 1, 3339.5, 4, 66, 700));
console.log(Math.max(x, z, q, s, 101));

// Math.min()
console.log(Math.min(4, 5, 88, 0.2, 200, 4));
// Create a variable with the value of “123”. Convert it to a number.
let strInt1 = "123";
console.log(parseInt(strInt1));
// Create a variable with the value of “130.7". Convert it to a number.
let strFloat1 = "130.7";
console.log(parseFloat(strFloat1));
// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let isDog = false;
console.log(isDog ? "pat, pat" : "find me a dog to pat!");
// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print ‘you’re going too fast!’. If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
let speedCheck = 50;
let speedLimit = 50;
let textStrTrue = "you’re going too fast!";
let textStrFlase = "You’re driving below the speed limit, Oma";
console.log(speedLimit <= speedCheck ? textStrTrue : textStrFlase);

// Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
let age = 12;
console.log(age < 16 ? "serve butter beer" : "serve beer");
// Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
let isStudent = false;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");
// Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
let okMarie = "Apple";
print(okMarie === "cale" ? "Let them eat cake" : "Oh, bother"); // answer 1
print(okMarie.includes("cake") ? "Let them eat cake" : "Oh, bother"); // answer 2

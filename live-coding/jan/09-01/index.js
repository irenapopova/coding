let x, y, z; //
x = 2; //
y = 5;
z = x + y;
console.log(z);
console.log(Math.max(33, 44, 52, 111111, 76, 7, z));
console.log(Math.min(33, 44, 5, 6, 0.3, 7, 7111, y));
function display(str) {
  console.log(str);
}
display("Hi is is new function");
let strInt = "12333";
let strInt2 = "999";
console.log(strInt + strInt2);
console.log(parseInt(strInt) + parseInt(strInt2));
let strFloat = "333.553";
console.log(parseFloat(strFloat));
let float1 = 2.4;
console.log(Math.ceil(float1));
console.log(Math.floor(float1));
let str1 = "this is new text";
console.log(str1.toUpperCase());
//Declare a variable named speedCheck.
//If speedlimit is 50km/h, and your speed is above that,
// print ‘you’re going too fast!’.
//If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
let speedCheck = 40;
let speedLimit = 50;
console.log(
  speedCheck > speedLimit
    ? "you’re going too fast!"
    : "You’re driving below the speed"
);
// Addition
// x + y * s

console.log(((x + y) / (z + 2.3)) * 29 + x);

//concatenation
// Number + String
let d, f, r;
d = 5;
f = "Hi I'm Hadi ";
console.log(f + d);
// String + Boolean
r = false;
console.log(r + d); // r= 0 d = 5 => 5
// String + String
let str2 = "Hi ";
let str3 = "I am Hadi";
console.log(str2 + str3);

//typeof  (Objects, functions, console... ) 😎
console.log(typeof str3);
console.log(typeof x);
console.log(typeof console.log);
console.log(typeof Math.floor);
console.log(typeof null);
//console.log(m);

//(0.1 * 0.2)
let floatNum = 0.1;
let floatNum1 = 0.2;
let num = 3;
let result = floatNum * floatNum1;
// num.toFixed(num)
let lastResult = result.toFixed(num);
console.log(lastResult);
// Mauricio
console.log(Math.sqrt(9));

// 1.23e+5

// x = 3.444;
let intStr = "2nd";
let floatStr = "1033.3 hi this is nooooo";
console.log(parseInt(intStr));
console.log(parseFloat(floatStr));

// && ||
let var1 = 1 > 4; // false
let var2 = true;
let var3 = true;
console.log((var1 && var2) || var3 ? "cool" : "Not cool");
console.log(var1 || var2 || var3 ? "cool" : "Not cool");

// = Assigning
console.log(ohNo);
var ohNo;
let xx = "1";
ohNo = 1;
console.log(ohNo);

// == vs ===
console.log(xx === ohNo ? "yeah it is" : "nope it is not");

// Truthy and falsy values: false, undefined, null, 0, '', console.log

console.log(1 ? "Yes" : "Nooooo");

//Math.random
console.log(Math.floor(Math.random() * 100) + 1);
// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));
// b. Highest Number
// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4));
// 2. Rounding
// a. Round up
// Round up the following numbers: 3321, 326.76, -9.78, 43.342.
console.log(Math.ceil(326.76));
console.log(Math.ceil(-9.78));

// b. Round down
// Round down the following numbers: 3321, 326.76, 76788.7, -9.78,
console.log(Math.floor(326.76));
console.log(Math.floor(-9.78));

// 3. Dice Roll!
// Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random() * 6) + 1);
//Math.round
//Math.trunc

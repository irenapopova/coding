//Mathematical expressions: +, -, *, /, %
console.log(1 * 4);

//Boolean expressions: comparison operators (===, !==, >=, <=, >, <)
console.log(1 >= 4);
// var
let x = 3;
let y = 3;
let str = "This is text";
let c = false;
let t = "3";
var newVar = 0; // hostied
const z = 15;

//typeof
console.log(c);
let result = 0;
console.log(x);
console.log(y);
// ternary condition ? exprIfTrue : exprIfFalse
let kid = 22;
kid > 16 ? console.log("Go Party 😎") : console.log("Stay Home 🤨");
let drive = 55;
drive > 18 ? console.log("Yeah drive now 💪🏻") : console.log("Nope sorry");
//.length

let name = "hadi";
console.log(typeof name); // will print the type of var name

console.log(name.length); // will print how many char in name (number)
let lastName = "Nsreeny";
console.log(lastName.length); // 7
//Str[0]
console.log(lastName[2]);
let email = "xxxxxxxxxxx@gmail.com";
console.log(email[11]);
lastName[0] === "N" ? console.log("cool") : console.log("Not cool");
//.substring
let restOfStr = lastName.substring(5);
console.log(restOfStr);
//.toUpperCase
let str3 = name.toUpperCase();
console.log(str3);
console.log(name);
//.toLowerCase
let smallStr = str3.toLowerCase();
console.log(smallStr);
let userName = "HADEE";
let firstChr = userName[0].toUpperCase();
let restOfNameChr = userName.substring(1).toLowerCase();
console.log(firstChr + restOfNameChr);
// comment
/*   

lines of text
lines

*/
let var1 = 0;
let var2 = null; // empty box
let var3; // undefined
console.log(var1);
console.log(var2);
//  camelCase vs. snake case
let firstName = "hadi";
//.includes
let text = firstName.includes("ho");
let emailCheck = email.includes("@");

console.log(text);
console.log(emailCheck);

// .substring (num,num)
let longText = "this is long text";
let subStr = longText.substring(2, 4);
console.log(subStr);
// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let longText1 = "I can walk in the park all day!";
let str22 = longText1.substring(18, 22);
console.log(str22);
// 2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let text222 = "Hallo World";
let textUp = text222.toUpperCase();
console.log(textUp);
// 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let text333 = "Hallo World";
let textLow = text333.toLowerCase();
console.log(textLow);
// 4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let js = "JavaScript";
let smallText = js.substring(3, 6);
console.log(smallText);
// 5. Check if the sentence “nice shoes” contains the letter l.
let text232 = "nice shoes";
let textCheck = text232.includes("L");
console.log(textCheck);
// 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
let text111 = "Door";
let firstChr1 = text111[0];
console.log(firstChr1 + text111 + firstChr1);
//.length - num
let str44 = "this is longe str";
let shortStr = str44.substring(str44.length - 3);
console.log(shortStr);
// .slice
let shortStr2 = str44.slice(5);
console.log(shortStr2);

// `his ${firstName}`
let firstName1 = "Ali";
let lastName2 = "Nsreeny";
let address = "xxxxxx, 12222 Berlin";
let niceText = `Hi, I am ${firstName1} and i live in ${address},my door has my family ${lastName2} name`;
console.log(niceText);
// Global vs local
console.log(x);

var globalVar = "this is global";
console.log(globalVar);
globalVar = "this is global   zzz";

function sum() {
  let localVar = "this is local";
  console.log(globalVar);
  console.log(localVar);
}
function sub() {
  let localVar = "this is local";
  console.log(globalVar);
  console.log(localVar);
}
sum();
sub();
console.log(globalVar);

console.log(newHoisted);
//console.log(notHoisted);
var newHoisted = "text";
let notHoisted = "fddf";

//console.log(localVar);
// Hoisting    ( var )

//  ++ += -- -=
let num1 = 1; // num = 1
console.log(num1);
num1 = num1 + 1; // 1 + 1 = 2
console.log(num1);
num1 -= 4; // 2 + 4 = 6
console.log(num1); // 6

// Increment
let a = 1;
a++;
++a;
// 7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let newStr = "JavaScript";
let last3Chr = newStr.slice(newStr.length - 3);

let longStr1 = last3Chr + newStr + last3Chr;
console.log(longStr1);
// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
let newVar1 = "This is text";
let newVarUpper = newVar1.toUpperCase();
console.log(newVarUpper);
let javaCheck = newVarUpper.includes("java");
console.log(javaCheck);
// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let newString = "hi this is long text and i do know";
let firstChrr = newString[0];
let lastChrr = newString[newString.length - 1];
let shortStr3 = newString.substring(1, newString.length - 1);
console.log(shortStr3);
console.log(lastChrr + shortStr3 + firstChrr);
// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let myName = "Hadi";
let myAge = 30;
let myCity = "Berlin";
console.log(
  `Hey I am ${myName}, i am ${myAge} years old, i live in ${myCity} and it is going very well so far.`
);
//11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
let dvd = "the quick brown fox";
let firstChr101 = dvd[0].toUpperCase();
let newUpdatedStr = dvd.slice(1);
console.log(firstChr101 + newUpdatedStr);

console.log(a);
// Decrement
let b = 1;
b--;

console.log(b);

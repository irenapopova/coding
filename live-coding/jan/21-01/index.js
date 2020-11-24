// our best bff
function display(str) {
  console.log(str);
}
display("Hadi");
// Array.isArray(arr)  // to check
const names = ["Hadi", "Olga", "Nancy", "Ahmad", "Ali"];
let x = 1;
console.log(Array.isArray(names));
console.log(typeof names);
// Array.includes()
console.log(names.includes("Ali")); // to show that this is there or mot
console.log(names.indexOf("Hadi")); // to show the index num
// Array.reverse() // Reverse

//let rev = names.reverse();
//console.log(rev);

// Array.concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 3, 6];
let arrTotal = arr1.concat(arr2);
console.log(arrTotal);
// Array.filter()   //creates a new array
let result1 = names.filter(name => name.length == 4);
console.log(result1);

// Array.find()   //returns the value of the first element
let result2 = names.find(name => name[0] == "A");
console.log(result2);
//// Array.map()    //creates a new array
const intArray = [2, 3, 5, 6, 8];
let result3 = intArray.map(x => x + 1);
console.log(result3);

// Reverse the string: “JavaScript”.
const str1 = "JavaScript";
let strToArr = str1.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);
// Make an array of your siblings’ names or your favorite movie characters’ names.
const coolNames = ["Ali", "Olga", "Hadi", "Nancy"];

// Make an array of your parents’ names.
const parNames = ["Ammar", "Rozan"];

// Combine these two arrays.
const bffArray = coolNames.concat(parNames);
console.log(bffArray);
// Add your pets’ names.
bffArray.push("Dyson");
bffArray.push("Sofi");

// Reverse the order of the array.
bffArray.reverse();
// Access one of your parents’ names.
console.log(bffArray.find(value => value == "Rozan"));
let mom = bffArray[2];
// Update the name of one of your parents.
mom = "Katy";
bffArray[2] = mom;
console.log(bffArray);

function sum(x, y) {
  return x + y;
}
let fun = sum(2, 4); // function call
console.log(fun);
function div(x, y) {
  return x / y;
}
function age(x) {
  if (x == 30) {
    return "You are cool";
  } else {
    return "You are nice";
  }
}
console.log(age(20));

const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers2 = [14, 442, 53, 664, 5, 6, 10, 45, 66];
function arrBig(array) {
  let result = array.filter(num => num >= 5);
  return result;
}
arrBig(numbers);
console.log(arrBig(numbers));
console.log(arrBig(numbers2));
function fourArrChar(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      result.push(array[i]);
    }
  }
  return result;
} // new function
function Ochr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "O") {
      result.push(array[i]);
    }
  }
  return result;
}
const names2 = ["Ali", "Hadi", "Nancy", "Olga"];
// console.log(fourArrChar(names2));
// console.log(Ochr(names2));
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function nameOfThatMonth(num) {
  let result = "";
  switch (num) {
    case 1:
      result = monthNames[0];
      break;
    case 2:
      result = monthNames[1];
      break;
    case 3:
      result = monthNames[2];
      break;
    case 4:
      result = monthNames[3];
      break;
    case 5:
      result = monthNames[4];
      break;
    case 6:
      result = monthNames[5];
      break;
    case 7:
      result = monthNames[6];
      break;
    case 8:
      result = monthNames[7];
      break;
    case 9:
      result = monthNames[8];
      break;
    case 10:
      result = monthNames[9];
      break;
    case 11:
      result = monthNames[10];
      break;
    case 12:
      result = monthNames[11];
      break;
    default:
      result = "This is not a month";
  }
  return result;
}
function nameOfThatMonthEasyVersion(num) {
  let result = "";
  let newNum = num - 1;
  if (num >= 1 && num <= 12) {
    result = monthNames[newNum];
  } else {
    result = "Sorry It is not a month";
  }
  return result;
}
console.log(nameOfThatMonthEasyVersion("hhhh"));
// console.log(nameOfThatMonth(100));
// console.log(nameOfThatMonth(2));
// console.log(nameOfThatMonth(22));
// function reverseNames(arr) {
//   let newArray = [];
//   let strToArr = "";
//   let str = "";
//   let revStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = arr[i]; // H a d i
//     strToArr = str.split("");
//     strToArr.reverse(); // i, d ,a, H
//     revStr = strToArr.join("");
//     newArray.push(revStr);
//   }
//   return newArray;
// }
function reverseNames(arr) {
  let newArray = [];
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]
      .split("")
      .reverse()
      .join("");
    newArray.push(str);
  }
  return newArray;
}
//const names = ["Hadi", "Olga", "Nancy", "Ahmad", "Ali"];

console.log(names);
console.log(reverseNames(names));

//const arr = ["😎", "💪🏻", "😇"];
// <array name> = [<value 1>, <value 2>, ...]

let arrStr = ["hi", "text", "text"]; // 1st way
console.log(arrStr);
let arrInt;
arrInt = []; // 2nd way
console.log(arrInt);
arrInt[0] = 22;
arrInt[1] = 22;
console.log(arrInt);

// Array(num) // to create array with num slots
let arrString = new Array(4);
let arrStr2 = Array("Hadi", "Ali");
console.log(arrStr2);
// Array.of() creating array
let strArr = Array.of(3);
console.log(strArr);
//Accessing using square brackets
arrInt[2] = 33;
arrInt[3] = 53;
// Adding items:
//Array.push()  // Adding to the lastItem
// Array.unshift() // Adding to the firstItem
arrInt.push(663);
arrInt.push(222);

arrInt.unshift(322);
console.log(arrInt);
console.log(typeof arrInt);
// Finding Items:
// Array.indexOf(<item>)
var firstNameArr = ["Ali", "Olga", "Hadi"];
console.log(firstNameArr.indexOf("hdukhfu"));
console.log(firstNameArr.indexOf("Ali"));

let arrStingName = ["Ali"];
console.log(arrStingName);
for (let i = 1; i <= 10; i++) {
  // i = 1
  arrStingName[i] = `Hadi ${i}`; //arr[1] = 'HAdi 1'
}
console.log(arrStingName);

// Removing items:
// Array.pop()  // Removing  the lastItem
// Array.shift()  // Removing the firstItem
let funArr = ["😎", "💪🏻", "😊"];
funArr.pop();
funArr.shift();
console.log(funArr);
const lastName = ["Ali", "Hadi"];
lastName[0] = "Nsreeny";
lastName[1] = "Dany";
console.log(lastName);

// const x = 0;
// //x = 2 + 2;
// console.log(x);
let names = ["Hadi", "Ali", "Nancy", "Dany"]; // array
let name = `This is Long Text
new line
snd line
`; // string
console.log(names.length); // index of array
console.log(name.length); // jam
// Array.slice()
console.log(names.slice(3));
console.log(names.splice(0, 2));

// Array.split()
let stringToArray = name.split(" ");
console.log(stringToArray);
// 1. Declare a variable named “euroCities” and assign an array to the variable e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”]. Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let euroCity = euroCities[1];
// 2. Change the first item in the array to “Berlin”.
euroCities[0] = "Berlin";
console.log(euroCities);
// 3. Print the length of the array “euroCities”.
console.log(euroCities.length);
// 4. Remove the last item of the array “euroCities”.
euroCities.pop();
console.log(euroCities);
// 5. Use an array method to add “Budapest” to the euroCities array.
euroCities.push("Budapest");
// 6. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = [" Hong Kong", "Tolyo", "Taiwan", "Manila", "Dubai"];
// 0            1           2          3        4
// 7. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

let newArray = asianCities.splice(1, 3);
console.log(newArray);

// Array.join()
const arraySting = ["This", "is", "array", "was", "string"];
let stringToarr = arraySting.join(" ");
console.log(stringToarr);

// sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
let intArr = [2, 4, 5, 7];
let result = 0;
let product = 1;
for (let i = 0; i < intArr.length; i++) {
  result += intArr[i]; // 2
  product *= intArr[i];
}
console.log(
  `The sum for your Array is ${result}, The product for your Array is ${product}.`
);

// Hello Frien Create an array filled with your friends’ and family’s names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. Bonus: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array.
const names2 = ["Hadi", "Ali", "Olga", "Nancy"];
for (let i = 0; i < names2.length; i++) {
  console.log(`Hello ${names2[i]}, and he is index ${i} of Names array`);
}

// City Names. Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: Berlin, Paris, Prague, Rome.
const cityNames = ["Berlin", "Paris", "London", "Dubai"];
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++) {
  cityNamesStr += cityNames[i];
  if (i == cityNames.length - 1) {
    cityNamesStr += ".";
  } else {
    cityNamesStr += ", ";
  }
}
console.log(cityNamesStr);
// Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
let numArr = [2, 3, 1, 4, 5]; // result => 1,4,2,3,6
let newNumArr = [];
let int = 0;
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    int++;
    newNumArr.push(int);
  } else {
    int--;
    newNumArr.push(int);
  }
}
console.log(newNumArr);
// Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sArA”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
const arrNames = ["sara", "ali", "naNCy"];
for (let i = 0; i < arrNames.length; i++) {
  arrNames[i] = // i= 0 => sara
    arrNames[i][0].toUpperCase() + arrNames[i].substr(1).toLowerCase();
} // s     =>       S                        ara    =>    ara
console.log(arrNames);

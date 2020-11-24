//DRY

// if (x <= 10) {
//   x += 1;
// } else {
//   x -= 1;
// }
// console.log(x);
// if (x <= 10) {
//   x += 1;
// } else {
//   x -= 1;
// }

// while (...)
let x = 1;
while (x <= 10) {
  console.log("Hadi");
  x++; // x = x + 1
}
let y = 1;
let result = 0;
while (y <= 10) {
  result = y * 9;
  console.log(`${y} * 9 = ${result}`);
  y++;
}
let count = 10;
while (count >= 0) {
  console.log(`this num is ${count} `);
  count--;
}
// do {...} while()

let a = 101;
do {
  console.log(a);
  a++; // a = a + 1 // ++ , -- increment , decrement
} while (a <= 100);
let zara = 100;
do {
  console.log(`there is ${zara} on the line `);
  zara--;
} while (zara >= 0);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 100; i <= 1000; ) {
  console.log(i);
  i += 100;
}

//for (..) {}
for (let i = 0; i <= 100; i++) {
  if (i == 30) {
    break;
  }
  console.log(i);
}
let xx = false;
for (let w = 0; w <= 100; w++) {
  if (xx) {
    console.log("That is it ");
    break;
  }
  if (w == 20) {
    xx = true;
  }
}
let result2 = 0;
for (let i = 1; i <= 10; i++) {
  // i =3
  for (let j = 1; j <= 10; j++) {
    // j = 1
    result2 = i * j;
    console.log(`i ${i} * j ${j} = ${result2}`);
  }
}

let str = "This is a log text";
for (let i = 0; i < str.length; i++) {
  console.log(`The ${i} letter is ${str[i]} `);
}

for (let i = 1; i <= 10; i++) {
  console.log("Hadi");
}

console.log("Hadi \n".repeat(10));
// Addition. Write a program to add up the numbers 1 to 20.
let counterSum = 0;
for (let i = 1; i <= 20; i++) {
  counterSum += i;
}
console.log(counterSum);

// There are i bottles of beer on the wall. Write a program that will output, “There is 1 bottle of beer on the wall.” “There are 2 bottles of beer on the wall” up until there are five bottles.
let text = "of cola on the wall";
for (let i = 1; i <= 5; i++) {
  if (i > 1) {
    console.log(`There are ${i} bottles ${text}`);
  } else {
    console.log(`There is ${i} bottle ${text}`);
  }
}
// The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else if (i % 2 == 1) {
    console.log(`${i} is odd`);
  }
}
console.log("Thank");

// YYYY
// YYYY
// YYYY
// YYYY
let box = "";
for (let i = 0; i <= 4; i++) {
  box += "YYYY \n";
}
console.log(box);
// 1, 2, 4, 8... 128
for (let i = 1; i <= 128; ) {
  // i++ or i--
  console.log(i);
  i = i * 2; //
}

// 0, 2, 4... 10
for (let i = 0; i <= 10; ) {
  console.log(i);
  i += 2;
}

// 3, 6, 9 ... 15
for (let i = 3; i <= 15; ) {
  console.log(i);
  i += 3;
}

// 9, 8, 7... 0
for (let i = 9; i >= 0; i--) {
  console.log(i);
  // i = i -1
}

// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(i);
  }
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let counter = 0;
for (let i = 0; i <= 4; ) {
  console.log(i);
  if (i == 4 && counter < 2) {
    i = 0;
    counter++;
  } else {
    i++; // i = i + 1
  }
}

/* 
T
TT
TTT
TTTT
TTTTT
TTTTTT
*/

let Tbox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      Tbox += "T";
      console.log(Tbox);
    }
  }
}
/* 
@@@@@@
@@@@
@@@
@@
@
*/

let atbox2 = "@@@@@@";
for (let i = 0; i <= 5; i++) {
  console.log(atbox2.slice(i));
}
// Array
let firstName = "Hadi";
let firstName1 = "Ali";
let firstName2 = "Olga";
let arrVar = [firstName, firstName1, firstName2];
let arr = ["Hadi", "Ali", "Olga", "Nancy"];
console.log(arr[2]);
let arrInt = [1, 2, 3, 4, 5, 6];
console.log(arrInt[3]);

let arrNum = ["First", "2nd", "3rd", "4th"];
//console.log(arrNum.length);
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]}`);
}
let arrSt = [];
for (let i = 0; i <= 10; i++) {
  arrSt[i] = 2 + i; // arrStr[0] = 2 +0
  console.log(arrSt); //0
}

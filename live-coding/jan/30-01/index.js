// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp = 2) => {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(4)); // -> 9

// Create a function will calculate a student degrees for 6 subjects,
//if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)
const studentDe = (...args) => {
  let result = "";
  let sum = 0;
  let avg = 0;
  console.log(args.length + " length");
  sum = args.reduce((acc, cur) => acc + cur);
  console.log(sum + " Sum");
  avg = Math.floor(sum / args.length);
  console.log(avg + " Avg");
  //   for (let i = 0; i < args.length; i++) {
  //     sum += args[i];
  //   }

  //if the average was less than 70 will print (F)
  if (avg < 70) {
    result = `this student has F mark the ava was ${avg}`;
  } else if (avg >= 70 && avg <= 80) {
    result = `this student has C mark the ava was ${avg}`;
  } else if (avg > 90) {
    result = `this student has A+ mark the ava was ${avg}`;
  } else {
    result = `Sorry something went wrong`;
  }

  return result;
};
console.log(studentDe(33, 4, 55, 66, 78, 34, 2));
// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx
const bankChecker = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split(" ");
  //console.log(strToArr);
  for (let i = 0; i < strToArr.length; i++) {
    let firstTwoChr = strToArr[i].slice(0, 2);
    // console.log(firstTwoChr);
    let remainderStr = strToArr[i].slice(2, strToArr[i].length);
    // console.log(remainderStr);
    if (firstTwoChr == "de" && strToArr[i][2] >= 0 && strToArr[i][2] <= 9) {
      if (remainderStr.length != 20 || isNaN(remainderStr)) {
        result = `This is not a valid bank account ${strToArr[i]}`;
        counter++;
      } else if (remainderStr.length == 20) {
        result = `The bank account is DE${remainderStr}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `There was no bank account in the text`;
  }
  return result;
};
console.log("Bank");
console.log(bankChecker("DElete in "));
//console.log(bankChecker("I delete  have bank DE"));
// Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3
// const countOccurrences = (string, letter) => {
//   let letterOccurrences = string.split(letter).length - 1;
//   return letterOccurrences;
// };
// console.log(countOccurrences("this is a string", "i"));

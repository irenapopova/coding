// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number
const emptySpaces = str => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      counter++;
    }
  }
  return str.length - counter + " Character in your text";
};
console.log("emptySpaces");
console.log(emptySpaces("Hi i"));
// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.
const salaryCalculator = (userName, salary, ...args) => {
  let thirtyPercent = 0.3;
  let twentyFivePercent = 0.25;
  let twentyPercent = 0.2;
  let fiftyFivePercent = 0.55;
  let finalSalary = 1;
  for (let i = 0; i < args.length; i++) {
    if (args.length == 0) {
      finalSalary = salary - salary * thirtyPercent;
    } else if (args.length == 1) {
      finalSalary = salary - salary * twentyFivePercent;
    } else if (args.length == 2) {
      finalSalary = salary - salary * twentyFivePercent;
    } else if (args.length > 2) {
      finalSalary = salary - salary * fiftyFivePercent;
    } else {
      finalSalary = "Sorry, something went wrong";
    }
  }
  return `${userName} has ${args.length} kids, so his/her salary after taxes ${finalSalary}€ `;
};
console.log("salaryCalculator");
console.log(salaryCalculator("Ali", 5000, "Zain", "Sandra"));
console.log(salaryCalculator("Olga", 4055, "Zain"));

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number
const phone = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    let firstThreeDigits = strToArr[i].slice(0, 3);
    if (firstThreeDigits == "030" || firstThreeDigits == "017") {
      if (isNaN(strToArr[i]) || strToArr[i].length !== 10) {
        result = `This is not a valid phone number ${strToArr[i]}`;
        counter++;
      } else if (strToArr[i].length == 10) {
        result = `The phone number is ${strToArr[i]}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `This is no phone number`;
  }
  return result;
};
console.log("Phone");
console.log(phone("Hi my 030221A398 number is "));
console.log(phone("I have a phone number 030221221"));

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

const bankChecker = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    let firstTwoChr = strToArr[i].slice(0, 2);
    let remainderStr = strToArr[i].slice(2, strToArr[i].length);
    //console.log(remainderStr);
    if (firstTwoChr == "de") {
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
console.log(bankChecker("Hi my bank account is "));
console.log(bankChecker("I delete  have bank DE"));

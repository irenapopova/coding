/* Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”. */

// else if (<boolean>){ ... }

//switch(<expression>){ ... }
const color = "Black";
switch (color) {
  case "Pink":
    console.log("cool");
    break;
  case "Black":
    console.log("Nice");
    break;
  case "white":
    console.log("sooo nice");
    break;
  default:
    console.log("Noooo that is crazy");
}

let month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("May");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("March");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sep");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;
  default:
    console.log("This is not real");
}

const x = 33;
switch (x) {
  case -1999.33:
    console.log("fine");
    break;
  case 22.22:
    console.log("this is wrong");
    break;
  case 100000000001:
    console.log("cool");
    break;
  default:
    console.log("So this is not fun or is it !!!");
}

//switch` vs. `else if`
const num = 1;
if (num <= 10 && num >= 0) {
  console.log("it is num in the range of 0-10");
  if (num == 1) {
    console.log(num);
  }
  if (num == 2) {
    console.log(num);
  }
  if (num == 3) {
    console.log(num);
  }
  if (num == 4) {
    console.log(num);
  }
} else {
  console.log("It is new num");
}
switch (num) {
  case 1:
    console.log(num);
    break;
  case 2:
    console.log(num);
    break;
  case 3:
    console.log(num);
    break;
  case 4:
    console.log(num);
    break;
  default:
    console.log("this is fun");
}
/* Let’s play mini FizzBuzz! For any given number, if the number is:
divisible by 3, print “Fizz”.
divisible by “5", print “Buzz”.
divisible by both 3 and 5, print “FizzBuzz”.
That is, if any of the above conditions apply, print the above words instead of the number.
Otherwise, just print the number.  */
const int = "";

if (int % 3 == 0 && int % 5 == 0) {
  console.log("FizzBuzz");
} else if (int % 3 == 0) {
  console.log("Fizz");
} else if (int % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(int);
}

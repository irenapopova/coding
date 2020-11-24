/* Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”. */
const firstName = "Ali";

const age = 22;

if (age < 13) {
  console.log(`${firstName} is a child`);
} else if (age < 20) {
  console.log(`${firstName} is a teenager`);
} else if (age < 30) {
  console.log(`${firstName} is a young adult`);
} else if (age >= 30) {
  console.log(`${firstName} is an adult`);
} else {
  console.log("Oi, put in a valid numeric age!");
}

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
Store Mark’s and John’s mass and height in variables.
Calculate both their BMIs and store their BMIs in variables.
Create a boolean variable containing information about whether Mark has a higher BMI than John.
Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
Create an if statement which prints the name and BMI of the person with the highest BMI */

//Q1 Store Mark's and John's mass and height in variables.

const markHeight = 1.65;
const markMass = 85;

const johnHeight = 1.9;
const johnMass = 120;

//Q2 Calculate both their BMIs and store their BMIs in variables.

const markBMI = markMass / (markHeight * markHeight);

const JohnBMI = johnMass / (johnHeight * johnHeight);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const markMoreCookies = markBMI > JohnBMI; // true or false

console.log(markMoreCookies); // to test

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

if (markBMI > JohnBMI) {
  console.log(`Is Mark's BMI higher than John's ${markMoreCookies}`);
} else {
  console.log(
    ` John enjoy GYM time, but Mark? Mark enjoy more having cookies and milk ${markMoreCookies} .`
  );
}

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markMoreCookies) {
  console.log(`Mark ${markBMI}`);
} else {
  console.log(`John ${JohnBMI}`);
}

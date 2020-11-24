// 3 types of errors (compilation aka compiler fails to compile, runtime, logic)
// try catch will find the runtime errors but not the parse errors like typo or syntax problems

// most of the error are coming from other places like working with data
// `try { ... } catch (e) { ... }`
let userAge = 25;
if (userAge == 25) {
  // if the user age is 25 print 'Happy days' and as you see its not printing that.
  console.log("something else");
}
console.log("Hi");
let userName = "";
// cool(); this is a fake function will make an error

// try --> to test a block of code
// catch --> to handel the error
// throw --> to create a custom errors
// finally --> to execute a code after try regardless of the result

// try {
//   console.log("Hi his is trying phase");
//   // cool();
//   //   if (userName == "") throw " Sorry something went wrong ";
//   // if there was an error this part will never run
//   console.log("2nd phase");
// } catch (err) {
//   console.log("this error is" + err);
// } finally {
//   userName = "xxx";
//   console.log("this will always run 😂");
// }
function display() {
  console.log("Hi this is a cool function");
}
// to call function many time
for (let i = 0; i < 8; i++) {
  display();
}
// to call function many time other way to do that 😎
(function manyTimeCalledFunction(num) {
  display();
  if (num > 1) manyTimeCalledFunction(num - 1);
})(8);

function print() {
  console.log("Hi i am Js");
}

const timerDisplay = setTimeout(
  () => console.log("Cool thats you have waited me"),
  1000
);
const timerPrint = setTimeout(print, 5000);
// If the function has not already been executed, you can stop the execution by calling the clearTimeout() method:
clearTimeout(timerDisplay);

// We will learn after HTML
//
// callbacks
// Promise
// async/await
// RxJs

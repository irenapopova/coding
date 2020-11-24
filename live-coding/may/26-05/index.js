//const print = require("./strars");
const fs = require("fs");
const args = process.argv.slice(2);
//print(args[0], args[1]);
function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number. Please try again`);
    process.exit();
  }
  return number;
}
function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}
function avg(numArray) {
  return sum(numArray) / numArray.length;
}
const [operation, ...rest] = args;

const numbers = rest.map(parseNum);
// sum 3 5 6 kdfjb
// avg 45 6 67
function med(numArray) {}
switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  case "med":
    //Today’s assessment here
    console.log(med(numbers));
    break;
  default:
    console.log(
      "I cannot do this, please type 'sum' to calculate Sum or 'avg' to calculate Avg"
    );
}
// create file
// writeFile will create or over write
fs.writeFile(
  "new.txt",
  "This is text done by NodeJs 😉 and some new add",
  (err) => {
    if (err) throw err;
    console.log("Done 👍🏻");
  }
);
// appendFile will create file
fs.appendFile("new2.txt", "Second file done by NodeJs 👌🏻", (err) => {
  if (err) throw err;
  console.log("Done 👍🏻");
});
// readFile will read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// rename file
// fs.rename("./hello.txt", "./hi.txt", (err) => {
//   if (err) throw err;
//   console.log("Done 👍🏻");
// });

// delete file
// const filePathName = "./hi.txt";
// fs.unlink(filePathName, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

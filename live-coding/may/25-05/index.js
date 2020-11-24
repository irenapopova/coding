// what is NodeJs?
// it's runtime open Source scripting language to write js outside the browser
// we used it to build backend services or API
// why NodeJs?
// has the biggest open source library aka you can add many cool Features to your app
// PayPal rebuilt the one on Java application and they found they has less people to write the code, 33% less code and 40% less files and even they had double request served per sec
// process object
//console.log(process);
//console.log(process.argv);
// console.log(process.argv0); keeps the original value of argv[0] passed when Node.js starts.
//console.log(`Hey ${process.argv[2]}`);

// process.argv.forEach((item, i) => {
//   console.log(`${i} : ${item}`);
// });
// The first index returns the absolute pathname of the executable that started the Node.js process.
// The second index has the absolute pathname of the file

const args = process.argv.slice(2);
console.log(args);
console.log(`Hey ${args[0]}`);
// fs (File System) built-in module in NodeJs
const fs = require("fs");
// read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
// write file
fs.writeFile("new.txt", "This is created file in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done 👍🏻");
});
console.log("Hi this is too fun");

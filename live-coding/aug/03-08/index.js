// server
// https://www.setthings.com/en/clientserver-architecture/
// request response cycle
// https://cascadingmedia.com/insites/2015/03/http-2.html
// The Hypertext Transfer Protocol (HTTP)
// HTTP status
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// HTTP Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

// creating a simple express server

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hey, I am Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`);
});
// To install express
//$ npm init -y
//$ npm i express --save
//$ nodemon index.js

// To Generate project skeleton
//$ npm i -g express-generator
//$ express -h
//$ express --ejs <project-name>
//   change directory:
// $ cd project-gen

// install dependencies:
//   $ npm install

// run the app:
//   $ DEBUG=project-gen:* npm start

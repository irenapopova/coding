// server
// request response cycle
//the hypertext Transfer Protocol (HTTP)
// HTTP Methods
// creating a simple express serer

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello I am a home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`server listen on http:/localhost:${port});
})

//$ npm init -y
//$ npm i express --save
//& nodemon index.js



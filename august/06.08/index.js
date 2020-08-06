// Middleware
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger);

app.get("/", (req, res) => {
  console.log(`Home`);
  res.send(`Home`);
});

app.get("/about", (req, res) => {
  console.log(`about`);
  res.send(`Hey`);
});

function logger(req, res, next) {
  console.log("log 1");
  next(); // next is not return
  //return;// if you want to return you need return, 
  //console.log("log 2");
}

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
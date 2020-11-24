// Middleware
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger);

app.get("/", (req, res) => {
  console.log(`Home`);
  res.send(`Home`);
});

app.get("/about", userLogged, (req, res) => {
  console.log(`about`);
  res.send(`Hey ${req.userName}`);
});

function logger(req, res, next) {
  console.log("log 1");
  next(); // next is not return
  // return; // if you want to return you need return :)
  // console.log("log 2");
}
function userLogged(req, res, next) {
  if (req.query.name === "Hadi") {
    req.userName = "Hadi";
    next();
  } else {
    res.send("Login or Register");
  }
}

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});

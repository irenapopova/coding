// Middleware
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger); // first execute logger and then

// we have access to  next in any route handling, but no need to do it
// the route handling is the : "/" - the slash
app.get("/", (req, res, next) => {
  console.log(`Home`);
  res.send(`Home`);
});
// route handling 
app.get("/about", userLogged,(req, res) => {
  console.log(`about`);
  res.send(`Hey`);
});

function logger(req, res, next) {
  console.log("log 1");
  next(); // next is not return
  //return;// if you want to return you need return, 
  //console.log("log 2");
}
function userLogged(req, res, next) {
  if (req.query.name === 'Irene') {
    req.userName = "Irene";
    next();
  } else {
    res.send("Login or register");
  }
}
// route handling
app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
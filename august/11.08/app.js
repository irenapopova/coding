const express = require("express");
const app = express();
const morgan = require("morgan");

//const userRouter = require("./router/users");
// const bookRouter = require("./router/");

// app.use("/users", userRouter);
// app.use

app.use((req, res, next1) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error)

});
app.use((error, req, res, next) => {
  req.status(error.status || 500)
  // error is an object
  res.json({
    error: {
      message: error.message,
    },
  });
});



module.export = app;
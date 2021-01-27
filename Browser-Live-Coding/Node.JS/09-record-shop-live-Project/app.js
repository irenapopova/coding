/* EXTERNAL MODULES */
const express = require("express")
const morgan = require("morgan")
const indexRoute = require("./routes/indexRoute")
const recordsRoute = require("./routes/recordsRoute")
const usersRoute = require("./routes/usersRoute")
const ordersRoute = require("./routes/ordersRoute")
/* INIT : creating express server*/
const app = express()

/* in express all the controllers are the middlewares */

/* USE MIDDLEWARES */
/* app.use(here specify middleware) */
app.use(morgan("dev"))
app.use(express.json())// to convert json object received from the client

/* ROUTES */
app.use("/", indexRoute)
app.use("/api/records", recordsRoute)
app.use("/api/users", usersRoute)
app.use("/api/orders", ordersRoute)

/* ERROR HANDLING */
//404 no route match
app.use((req, res, next) => {
  let error = new Error("No such route found")
  console.log(error.message)
  error.status = 404;
  next(error)
})

//universal Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    success: false, message: err.message
  })
})



/* Listening Port */
app.listen(3000, () => console.log("server is running"))

/* MVC modal views controller (pattern) */


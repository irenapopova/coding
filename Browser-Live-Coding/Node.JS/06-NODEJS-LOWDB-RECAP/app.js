
//CommonJS/ES5 way to import modules
const express = require("express");
//initiallizing express server
const app = express();

const setCors = require("./middlewares/security")

const usersRoutes = require("./Routes/usersRoutes")
const indexRoute = require("./Routes/indexRoute")
//3000 is the development port and process.env.PORT is for production
const PORT = 3000 || process.env.PORT;

//express json middleware, to parse req.body 
app.use(express.json())
//use cors middle for my server
app.use(setCors)



app.use("/users", usersRoutes)
app.use("/", indexRoute)


//Error Handling
app.use((req, res, next) => {
  let error = new Error("Route not found")
  error.status = 404
  console.log(error.status)
  /* res.json({status:error.status, message:error.message})  */
  next(error)
})
//universal Error Handling middleware
app.use((error, req, res, next) => {
  /* res.status() method*/
  res.status(error.status || 500)
  res.send({ success: false, message: error.message })
  /* res.status(200).json({}) */
})




/* app.post()
app.put()
app.patch()
app.delete() */

//listen all requests coming on this port.
app.listen(PORT, () => console.log("server is running on " + PORT + " port"));




//MVC
/* Model (database)
Views (pages display to client)
Controllers (handler which handle your request) */




//CommonJS /ES5 way to import modules 
/* const express = require("express")
const indexRoute = require('./Routes/indexRoute')
// initializing express server, creating an instance
const server = express()

server.use(express.json())

server.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
});
/* server.use("/", indexRoute); */

//3000 ist the development port and process.env.PORT is for production 
const PORT = 5000 || process.env.PORT
server.listen(PORT, () => console.log("server is running on " + PORT + "PORT")) * / 

//CommonJS/ES5 way to import modules
const express = require("express");
//initiallizing express server
const app = express();

const setCors = require("./middleware/security")

const usersRoutes = require("./routes/usersRoutes")
const indexRoute = require("./routes/indexRoute")
//3000 is the development port and process.env.PORT is for production
const PORT = 3000 || process.env.PORT;

//express json middleware, to parse req.body 
app.use(express.json())
//use cors middle for my server
app.use(setCors)

// Template engines 
// EJS- Embedded Javascript Templates
// Pug Template

// setting vew engine for  app
app.set("vew engine", "ejs")
// serve static files from public folder
app.use(express.static("public")) // no need to write public in the index.ejs style link path, from here the server knows from where to pick the css file ; 

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

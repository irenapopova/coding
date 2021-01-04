//CommonJS /ES5 way to import modules 
const express = require("express")

// initializing express server
const app = express()
const lowdb = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')
//create json file , I am linking the adopter with db
const adopter = new FileSync("db.json")

// I store all in variable db, 
const db = lowdb(adopter)

//set some defaults
// from the initial values I need only users in this example to create a few users 
db.defaults({ user: [{ id: 1, name: "Joseph" }, { id: 2, name: "Irene" },], })
  .write(); // save data into that file

//3000 ist the development port and process.env.PORT is for production 
const PORT = 3000 || process.env.PORT

const MiddleWare = (req, res, next) => {
  console.log("I am a MiddleWare")
  // with next I am transfering information to main server, next 
  // next is a building function, with next I am passing further information to main server route app.get
  if (req.method === "GET") {
    console.log("received get Request")
    next() // with next I am forwarding my request to the main server
  } else {
    res.send("will receive only GET request")
  }

}
//app is my server
app.use(MiddleWare)

//create GET / ROUTE ways
// we are receiving a request on slash "/", slash is the route name, the second is the function, which is called controller,
// controller/ handler function that controls the req and responses and it takes two arguments
app.get("/", (req, res) => {


  res.send("hi from server")
})
// the format is the same for all the routes
//"/users/login" - it is the route name
// app is listening on 
app.get("/users", (req, res) => {
  res.send("here you have all your users")
})

app.get("/records", (req, res) => {
  res.send("received request on /records")
})

//listen all requests coming on the port 
app.listen(PORT, () => console.log("server is running on " + PORT + "PORT"))


// MiddleWear is like a filter the doorkeeper between the server, it check the request from the client, if something is wrong the middleweare will send response, it will not let the req to go to the server, 
// server is handling bigger tasks 
// I can create many middlewares, which are the helpers, the workers that help the server , 
// middleware is kind of service Workers for frontend
// next 
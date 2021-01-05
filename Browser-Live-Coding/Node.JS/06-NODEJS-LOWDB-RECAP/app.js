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
    res.send("send only only GET/POST request")
  }

};

//app is my server
app.use(MiddleWare)
//EXPRESS json MiddleWare to parse req.body
app.use(express.json())
//! create GET / ROUTE - ways
// we are receiving a request on slash "/", slash is the route name, the second is the function, which is called controller,
// controller/ handler function that controls the req and responses and it takes two arguments
app.get("/", (req, res) => {
  console.log("I am a Main Server Route");
  res.send("Hi from server");
});
//
app.get("/users"(req, res)=> {
  /* console.log("receive request ...line 42") */ // it is not ending the process
  // with next() will go down and execute and end the process
  next()
  res.send("received requests in users")

  //end process
})

//! get single user from database
app.get("/users/:id", (req, res) => {
  let idParam = parseInt(req.params.id)
  let user = db.get("users").find({ id: idParam }).value()
  res.json({ success: true, user: user })

  //! CRUD operation
  // Reading Data from Database
  // the format is the same for all the routes
  //"/users/login" - it is the route name
  // app is listening on 
  // req and res are by defaults arguments, users is a property
  /* http://localhost:3000/users */
  app.get("/users", (req, res) => {
    /* res.send("here you have all your users") */
    // get all users from lawdb
    let users = db.get("users").sortBy("id").value()
    // if I do not write .value() it will not work
    let users = db.get("users").value()
    let posts = db.get("posts").value()

    //! sending response to my client
    // with star argument- "*"  I allow access to all the servers, any server can send me request and get the data from me 
    res.header("Access-Control-Allow-Origin", "*")
    /* res.send({ users: users, posts: posts }) */
    res.json({ users: users, posts: posts }) // better use a json object
    // status , if I want to change the status I can use res.status
    /* res.status(200).json({users}) */
    /* res.status(404).json({ success: false, err: "something wrong" })*/
    // end process
  })

  //! How to create/add DATA into my DATABASE
  app.post("/records", (req, res) => {
    console.log(req.body)
    //! adding and storing data in lowdb
    db.get("users").push(req.body).write()
    /* res.send("received request on /records") */
    res.json({ success: true, message: "data stored" })
  })

  //update data into our database
  app.patch("/users/:id", (req, res) => {
    console.log(req.params)
    let idParam = parseInt(req.params.id)

    db.get("users")
      .find({ id: idParam })
      .assign(req.body)
      .write()

    res.json({ success: true, message: "user updated" })
  })
  //! delete all users
  app.delete("/users", (req, res) => {
    db.get("users").remove().write()
    res.json({ success: true, message: "all users Deleted" })
  })

  //! Delete data from database

  app.delete("/users/:id", (req, res) => {
    let idParam = parseInt(req.params.id)
    db.get("users").remove({ id: idParam }).write()

    res.json({ success: true, message: "record deleted" })
  })

  /* app.post()
  app.put()
  app.patch()
  app.delete() */

  //! listen all requests coming on the port 
  app.listen(PORT, () => console.log("server is running on " + PORT + "PORT"))


//* MiddleWare is like a filter the doorkeeper between the server, it check the request from the client, if something is wrong the MiddleWare will send response, it will not let the req to go to the server, 
// server is handling bigger tasks 
// I can create many MiddleWares, which are the helpers, the workers that help the server , 
// middleware is kind of service Workers for frontend
// next 

//! post request allows user to attach a body and send data to me 
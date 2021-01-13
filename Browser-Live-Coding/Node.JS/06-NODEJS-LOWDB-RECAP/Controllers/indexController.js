//! create GET / ROUTE - ways
const path = require("path")

exports.Index = (request, response) => {
  console.log("I am Main Server Route");
  console.log(path.resolve(__dirname, "../views/index.html"))
  let name = ["Irene", "Daniel", "Adele"]
  let login = true;
  // use to send static html file to the client
  /* response.sendFile(path.resolve(__dirname, "../views/index.html")); */
  // when using a template engine use the render method 
  response.render("index", { users, login }) //compile template and send html file to the client, the second argument {name:name} or {name:user} or {users}is the value I want to pass 

}


/*   const Index = (request, response) => {
    console.log("I am Main Server Route");
    response.send("Hi from Server");
  }
  module.exports={Index} */
MVC stands for Model, View, and Controller. MVC separates an application into three components - Model, View, and Controller. Model: Model represents the shape of the data.

origin means server 

middleware is just like a function 

MVC - structure
handlers are the functions that are controlling my requests

when I divide app.js into separate files (indexRoute.js and indexController)
for indexRoute.js I need to import Router,


app.get("/", (req, res) => {
  console.log("I am a Main Server Route");
  res.send("Hi from server");
});

server.use("/", indexRoute);

get request needs a path and a Controller
post request needs a path , a body and Controller


next() - when nothing in parentheses means I am not passing anything, when I send next() by default req and res are passing 
next(error) -

with error we always have a massage 
rest api means we are using json and http protocol methods to communicate and the language is json

The route consists of 3 parts : the method, the path and the controller

```js
server.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
});
```
the request has two parts : the url and the body ,
the url is the path 
params means what we have after the domain name


```js
const express = require"express";

```

arrow function doesn't need the word function and we cannot use the = sign without an arrow 

specific export has to wrap in curly brackets and
whe export specifically have to import specifically
default export no need to wrap with {}


### indexController.js
```js
//! create GET / ROUTE - ways
// we are receiving a request on slash "/", slash is the route name, the second is the function, which is called controller,
// controller/ handler function that controls the req and responses and it takes two arguments
/* module.exports = IndexController (req, res) => {
  console.log("I am a Main Server Route");
  res.send("Hi from server");
}*/

exports.greeting = (req, res) => {
  console.log("I am a Main Server Route");
  /* res.send("Hi from server"); - send data to the browser*/
}


/* const IndexController = (req, res) => {
  console.log("I am a Main Server Route");
  res.send("Hi from server");
}
module.exports={IndexController} */

```
EJS
include repeatable parts of our site (partials) and pass data to my views
in the following tags I write javascript <%- %>
<%- include -%>
<% condition %>
<%= display value%>

<!-- <h1>Hi, <%=name %></h1> -->

templating inside of the views folder and the rest is standard Node practices
in the public folder place all the static files
Tree 

```js

- views
----- partials
---------- footer.ejs
---------- head.ejs
---------- header.ejs
----- pages
---------- index.ejs
---------- about.ejs
- package.json
- server.js

```

With using a server I decide which files the client can have access 

TODO: 
- TO create login controller file and to import login router 

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

#### 👇 with this code i create users via terminal
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"id":6,"name":"test"}' \
  http://localhost:3000/users  

  ```  
use middleware after initialise/create the server
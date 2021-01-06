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
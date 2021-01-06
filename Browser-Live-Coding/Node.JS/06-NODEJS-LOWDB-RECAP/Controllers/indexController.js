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
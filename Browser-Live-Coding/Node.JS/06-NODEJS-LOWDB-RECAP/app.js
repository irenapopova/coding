//CommonJS /ES5 way to import modules 
const express = require("express")
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
server.listen(PORT, () => console.log("server is running on " + PORT + "PORT"))
//CommonJS /ES5 way to import modules 
const express = require("express")
// initializing express server
const app 0 express()

//3000 ist the development port and process.env.PORT is for production 
const PORT = 3000 || process.env.PORT

//listen all requests coming on the port 
app.listen(PORT, () => console.log("server is running on " + PORT + "PORT"))



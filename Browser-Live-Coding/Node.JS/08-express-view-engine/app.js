const express = require('express')

const app = express()

// setting the view engine for the server 
app.set("view engine", "ejs")


let user = "Irene";
let isLogin = false;

app.get("/", (req, res) => {
  /* console.log(__dirname) */
  res.render("index")

  //the root:__dirname will take the address where server.js is in the above example and then to get to the index.html , the returned path is to get to the directory where public folder is
  /* res.sendFile(__dirname + "/index.html") */
  res.sendFile('public/index.html', { root: __dirname });
})

app.listen(3002, () => console.log("server is running on port 3002"))
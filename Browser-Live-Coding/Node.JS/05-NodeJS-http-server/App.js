const express = require("express")
const app = express()

app.get("/", (req, res) => {
  /* res.sendFile(__dirname+"/client-data/home.html")  */
  /* res.json({id:2, username:"nrcool"}) */
  res.send("welcome to my home page")    /* => res.write() res.end() */
})

app.get("/users", (req, res) => {
  /*  res.sendFile(__dirname+"/client-data/users.html") */
  res.send("this is users page")
})

app.listen(3000, () => console.log("express server is running"))
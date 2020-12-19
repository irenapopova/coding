const express = require("express")

const app = express()

app.get("/", (req, res) => {
  console.log("received get request on /")
  res.send("Hello from server")
})
const express = require("express");
const indexRouter = require("./routes/indexRoute")

const server = express();

server.use(express.json());


server.use("/", indexRouter);

server.post("/", function (req, res) {
  res.send("testing POST");
});


server.listen(5000, () => console.log("server is running"))
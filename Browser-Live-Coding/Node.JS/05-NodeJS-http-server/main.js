const http = require("http")
const fs = require("fs")

//creating server
let server = http.createServer((req, res) => {
  console.log(req)
  if (req.url === "/" && req.method === "GET") {
    let data = fs.readFileSync(__dirname + "/client-data/home.html", "utf-8")
    res.write(data)
  }
  if (req.url === "/users" && req.method === "GET") {
    let data123 = fs.readFileSync(__dirname + "/client-data/users.html", "utf-8")
    res.write(data123)
  }
  res.end()
})

//listening requests on port
server.listen(3000, () => console.log("my server is running"))

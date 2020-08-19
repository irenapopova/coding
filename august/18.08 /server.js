// MongoDB with Express
// But first REST API REpresentational State Transfer
// new version
const http = require("http");

//  loading dotenv lib
const dotenv = require("dotenv");

//loading configs from config.env
dotenv.config({
  path: './config.env',
})

const app = require("./app");

const PORT = process.env.PORT;

const server = http.createServer(app);
server.listen(PORT);
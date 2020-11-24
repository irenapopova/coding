// const fs = require("fs");
// const zlib = require("zlib");
// const path = require("path");

// //console.log(__dirname);

// const [filePath = path.join(__dirname, "input.txt")] = process.argv.slice(2); // ['index.txt','Hi','cool']

// const stream = fs
//   .createReadStream(filePath)
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream(filePath + ".gz"));

// stream.on("close", () => console.log("Done 👍🏻"));

const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hey I am server");
};
const server = http.createServer(requestListener);
server.listen(8080);

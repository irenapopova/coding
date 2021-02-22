/* NAMED EXPORT */
const path = require("path")

exports.index = (req, res, next) => {
  console.log(__dirname);

  res.sendFile(psth.resolve(___dirname, "..views/index.html"))
}

exports.index = (req, res, next) => {
  console.log(__dirname);

  res.sendFile(psth.resolve(___dirname, "..views/style/style.css"))
}
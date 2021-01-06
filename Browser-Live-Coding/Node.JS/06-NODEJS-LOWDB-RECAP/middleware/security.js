// middleware function
const setCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
}

module.exports = setCors


/*
named export
exports.setCors=()=>{

} */

/* named export */  // import ...... const {setCors}= require("./middleware")
/* default export */ // import ..... const setCors = require("...")
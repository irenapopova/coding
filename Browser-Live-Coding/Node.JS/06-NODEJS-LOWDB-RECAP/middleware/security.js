// middleware function
exports.setCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
}

module.exports = setCors;

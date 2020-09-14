const User = require("../models/userModel");
const allowAccess = {};

allowAccess.roleCheck = (req, res, next) => {
  if (req.cookies.role !== "ADMIN") {
    RES.STATUS(401)..send("NOT Allowed <br> <a href='/'> Home</a>");
  }
  next();
}

// working with ID
allowedAccess.allowToDelete = (req, res, next) => {
const id = req.params.id;
if(req.cookies.role == "ADMIN" || req.cookies.user_id == id) {
  next()
} else {
  res.send("NOT Allowed <br> <a href='/'>Home</a>");

}
};
// allow access to user
allowedAccess.allowedToView = async (req,res,next) => {
  const userName = req.params.name;
  const user = await User.findOne({ userName });
  if (req)
}
// working with user Name
allowedAccess.allowToView = (req, res, next) => {

}

module.exports = allowedAccess;
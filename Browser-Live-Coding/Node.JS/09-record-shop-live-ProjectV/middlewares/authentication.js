const UserModel = require("../model/userModel")


exports.auth = async (req, res, next) => {

  try {
    const token = req.header("x-auth")
    const user = await UserModel.findByToken(token)

    if (!user) {
      throw new Error("invalid token")
    } else {
      req.user = user;
      req.token = token;
      next()
    }
  }
  catch (err) {
    next(err)
  }


}
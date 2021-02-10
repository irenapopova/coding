const UserData = require("../model/userModel");
exports.getAllUsers = async (req, res, next) => {
  //getting all users from mongoDB
  try {
    let allUsers = await UserData.find();
    res.status(200).send({ allUsers });
  } catch (err) {
    next(err);
  }
};

exports.postAddNewUser = async (req, res, next) => {
  /*    console.log(req.body) */
  //adding new User into mongoDB

  try {
    const user = new UserData(req.body);
    await user.save(); //store data into database
    res.status(200).send({ user });
  } catch (err) {
    console.log(err.message);
    /*  res.status(404).send({err:err.message}) */
    next(err);
  }
};

exports.putUpdateUser = async (req, res, next) => {
  const { id } = req.params;
  //finding existing user with that id in database and update
  try {
    const updatedUser = await UserData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({ updatedUser });
  } catch (err) {
    next(err);
  }
};

exports.deleteSingleUser = async (req, res, next) => {
  const { id } = req.params;
  //finding that User //deleting User
  try {
    const UserDeleted = await UserData.findByIdAndRemove(id);
    if (UserDeleted) {
      res.status(200).send({ UserDeleted });
    } else {
      res.status(404).send("Already Deleted that record");
    }
  } catch (err) {
    next(err);
  }
};

exports.getSingleUser = async (req, res, next) => {
  const { id } = req.params;
  //get/read single user from mongoDB
  try {
    const user = await UserData.findById(id).select("-_id -__v");
    if (user) {
      res.status(200).send({ user });
    } else {
      res.status(404).send("No such record found with that Id");
    }
  } catch (err) {
    next(err);
  }
};

//CRUD operation
//RESTful API  representational state transfer
/* module.exports={getAllUsers,postAddNewUser} */
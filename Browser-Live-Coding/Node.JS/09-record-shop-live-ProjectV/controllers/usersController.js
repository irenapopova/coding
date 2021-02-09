const db = require("../model/db")

exports.getAllUsers = (req, res, next) => {
  //getting/reading all Users from db.json
  //db.get("Users")=> target this property in db.json
  // .value() that means get value of that property
  let allUsers = db.get("users").value()
  res.send({ allUsers })
}

exports.postAddNewUser = (req, res, next) => {
  console.log(req.body)
  //add User into db.json
  db.get("users").push(req.body).last().assign({ id: new Date().getTime().toString() }).write()
  res.send("NEW User added into database")
}

exports.putUpdateUser = (req, res, next) => {
  const { id } = req.params
  //selector/pointer //finding that User //update properties //store changes
  db.get("users").find({ id }).assign(req.body).write()

  res.send("User updated")
}

exports.deleteSingleUser = (req, res, next) => {
  const { id } = req.params
  //selector/pointer //finding that User //deleting User //store changes
  let User = db.get("users").find({ id }).value()
  if (User) {
    db.get("users").remove({ id }).write()
    res.send("User deleted")
  } else {
    let error = new Error("no such User found in database")
    error.status = 404
    next(error)
  }

}

exports.getSingleUser = (req, res, next) => {
  const { id } = req.params
  let singleUser = db.get("users").find({ id }).value()
  /*  res.send({singleUser}) */
  res.status(200).json({ success: true, User: singleUser })
  /*  res.status(404).json({success:false,message: "we couldn't find User with that specified ID"}) */
}

//CRUD operation
//RESTful API  representational state transfer
/* module.exports={getAllUsers,postAddNewUser} */
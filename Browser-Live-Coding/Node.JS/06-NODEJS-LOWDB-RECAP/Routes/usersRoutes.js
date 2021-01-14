const router = require("express").Router()
const {
  getSingleUser,
  getAllUsers,
  addNewUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} = require("../Controllers/userController");


//get single user from database
router.get("/:id", getSingleUser)
//Crud operation 
//reading data from database
/* http://localhost:3000/users */
router.get("/", getAllUsers)


//create/add data into your database
router.post("/", addNewUser)

//update data into our database
router.patch("/:id", updateUser)


//delete all users
router.delete("/", deleteAllUsers)
//Delete data from database

router.delete("/:id", deleteUser)



module.exports = router
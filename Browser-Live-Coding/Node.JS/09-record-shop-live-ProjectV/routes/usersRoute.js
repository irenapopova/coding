const express = require("express")

const router = express.Router()

const { getAllUsers, postAddNewUser, putUpdateUser, deleteSingleUser, getSingleUser } = require("../controllers/usersController")
const db = require("../model/db")

/* GET ALL UserS FROM RESOURCES */
router.get("/", getAllUsers)

/* POST REQUEST TO ADD NEW User */
router.post("/", postAddNewUser)

/* PUT REQUEST TO UPDATE SIGNLE User IN DATABASE */
router.put("/:id", putUpdateUser)

/* DELETE REQUEST TO DELETE SIGNLE User IN DATABASE */
router.delete("/:id", deleteSingleUser)

//GET SIGNLE User FRO  DATABASE
router.get("/:id", getSingleUser)


/* DEFAULT EXPORT */
module.exports = router

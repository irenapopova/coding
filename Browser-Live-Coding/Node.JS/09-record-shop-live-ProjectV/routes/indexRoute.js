const express = require("express")
/* SUB MODULE */
const router = express.Router()

/* IMPORTING CONTROLLERS */
const { index } = require("../controllers/indexController")
const userModel = require("..model/userModel")
const 

router.get("/", index)

/* Default export */
module.exports = router
const express = require("express")
/* SUB MODULE */
const router = express.Router()

/* IMPORTING CONTROLLERS */
const { index } = require("../controllers/indexController")


router.get("/", index)

/* Default export */
module.exports = router
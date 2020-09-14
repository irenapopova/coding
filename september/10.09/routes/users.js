const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();

router.get("/", userControllers.getAllUsers);

module.exports = router;
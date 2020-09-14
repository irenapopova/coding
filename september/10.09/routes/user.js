const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();
const allowedAccess = require("../controllers/authControllers");

// localhost:3000/user/view/userName
router.get("/view/:name", allowAccess.allowedView, userControllers.getOne);
router.get(
  "/del/:id",
  allowAccess.allowedDelete,
  userControllers.deleteOneById);



const router = require("express").Router()
const { Index } = require("../Controllers/indexController")


//create GET / route
router.get("/", Index);


module.exports = router




/* const router = require('express').Router();

// if I don't use the curly brackets{} in indexController file i use default
const { greeting } = require("../Controllers/indexController")

Router.route('/').get(greeting)
Router.route('/').post(greeting)

module.exports = Router */
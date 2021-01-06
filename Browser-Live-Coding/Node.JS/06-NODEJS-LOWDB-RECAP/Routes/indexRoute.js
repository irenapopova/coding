const Router = require('express').Router();

// if I dont use the curly brackets{} in indexCController file i use default
const { greeting } = require("../Controllers/indexController")

Router.route('/').get(greeting)
Router.route('/').post(greeting)

module.exports = Router
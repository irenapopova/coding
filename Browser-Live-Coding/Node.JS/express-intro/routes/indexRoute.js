const router = require("express").Router();
const { sayHello } = require("../controllers/indexController")

router.route("/").get(sayHello)

module.exports = router;
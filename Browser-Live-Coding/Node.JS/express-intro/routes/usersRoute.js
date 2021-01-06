const router = require("express").Router();

const { addUser, getUser, getAllUsers, deleteUser } = require("../controllers/usersController");
const { route } = require("./indexRoute");

/** inside the route the path concatinates/builds on the main route  */
route.route("/").post(addUser); /* this "/"  is equivalent to localhost:500/users/ */
route.route("/:id").get(getUser); /* the "/:id is equivalent to localhost:500/users/:id*/
route.route("/").get(getAllUsers);
route.route("/:id").delete(deleteUser);

module.export = router;
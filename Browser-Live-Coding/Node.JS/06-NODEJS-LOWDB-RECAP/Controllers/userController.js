const db = require("../Model/db");

exports.getSingleUser = (req, res, next) => {
  let idParam = parseInt(req.params.id);
  let user = db.get("users").find({ id: idParam }).value();
  if (user) {
    res.json({ success: true, user: user });
  } else {
    let error = new Error("user not found")
    error.status = 404
    next(error)
  }

};

exports.getAllUsers = (req, res) => {
  //get all users from lowdb
  let users = db.get("users").sortBy("id").value();
  console.log(db);
  console.log(users);
  //sending reponse to our client
  res.json({ users: users });
  /*  res.send({users:users}) */
  //end process
};
exports.addNewUser = (req, res) => {
  console.log(req.body);
  //adding and storing data in lowdb
  db.get("users").push(req.body).write();
  res.json({ success: true, message: "data stored" });
};

exports.updateUser = (req, res) => {
  console.log(req.params);
  let idParam = parseInt(req.params.id);

  db.get("users")
    .find({ id: idParam })
    .assign(req.body) //replace/update
    .write();

  res.json({ success: true, message: "user updated" });
};

exports.deleteUser = (req, res) => {
  let idParam = parseInt(req.params.id);
  db.get("users").remove({ id: idParam }).write();

  res.json({ success: true, message: "record deleted" });
};

exports.deleteAllUsers = (req, res) => {
  db.get("users").remove().write();
  res.json({ success: true, message: "all users Deleted" });
};
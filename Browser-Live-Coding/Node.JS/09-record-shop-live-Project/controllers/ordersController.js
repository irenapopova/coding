const db = require("../model/db")

exports.getAllOrders = (req, res, next) => {
  //getting/reading all Orders from db.json
  //db.get("Orders")=> target this property in db.json
  // .value() that means get value of that property
  let allOrders = db.get("orders").value()
  res.send({ allOrders })
}

exports.postAddNewOrder = (req, res, next) => {
  console.log(req.body)
  //add Order into db.json
  db.get("orders").push(req.body).last().assign({ id: new Date().getTime().toString() }).write()
  res.send("NEW Order added into database")
}

exports.putUpdateOrder = (req, res, next) => {
  const { id } = req.params
  //selector/pointer //finding that Order //update properties //store changes
  db.get("orders").find({ id }).assign(req.body).write()

  res.send("Order updated")
}

exports.deleteSingleOrder = (req, res, next) => {
  const { id } = req.params
  //selector/pointer //finding that Order //deleting Order //store changes
  let Order = db.get("orders").find({ id }).value()
  if (Order) {
    db.get("orders").remove({ id }).write()
    res.send("Order deleted")
  } else {
    let error = new Error("no such Order found in database")
    error.status = 404
    next(error)
  }

}

exports.getSingleOrder = (req, res, next) => {
  const { id } = req.params
  let singleOrder = db.get("orders").find({ id }).value()
  /*  res.send({singleOrder}) */
  res.status(200).json({ success: true, Order: singleOrder })
  /*  res.status(404).json({success:false,message: "we couldn't find Order with that specified ID"}) */
}

//CRUD operation
//RESTful API  representational state transfer
/* module.exports={getAllOrders,postAddNewOrder} */

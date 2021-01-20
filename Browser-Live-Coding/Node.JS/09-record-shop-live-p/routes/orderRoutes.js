// create routes for orders

const db = require("../model/db")

exports.getAllOrders = (req, res, next) => {
  //getting/reading all Orders from db.json
  //db.get("Orders")=> target this property in db.json
  // .value() that means get value of that property
  let allOrders = db.get("orders").value()
  res.send({ allOrders })
}
export.postAddNewOrder = (req, res, next) => {
  console.log(req.body)
  // add order into db.json
  db.get("orders").push(req.body).last().assign({ id: new Date().getTime().toString() }).write()
  res.send("New Order added to database")
}

exports.putUpdateOrder = (req, res, next) => {
  const { id } = req.params
  //selector/pointer // finding that Order // update properties //store changes 
  db.get("orders").find{ id }.assign(req.body).write()

  res.send("Order Updated")
}

exports.deleteSingleOrder=(req,res,next) =>{
  const {id} = req.params 
  //selector/ pointer // finding that order //deleting order // store changes 
  let Order = db.get("orders").find{id}.value()
}
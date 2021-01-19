exports.getAllRecords = (req, res, next) => {
  res.send("sending all records from our database")
}

exports.postAddNewRecord = (req, res, next) => {
  res.send("NEW record added into database")
}


/* module.exports={getAllRecords,postAddNewRecord} */

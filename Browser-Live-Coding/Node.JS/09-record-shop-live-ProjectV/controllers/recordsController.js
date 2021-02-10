
const RecordData = require("../model/recordModel");
exports.getAllRecords = async (req, res, next) => {
  //getting/reading all records from mongoDB
  try {
    let allRecords = await RecordData.find();
    res.status(200).send({ allRecords });
  } catch (err) {
    next(err);
  }
};

exports.postAddNewRecord = async (req, res, next) => {
  console.log(req.body);
  //adding new Record into mongoDB
  try {
    const record = new RecordData(req.body);
    await record.save(); //store data into database
    res.status(200).send({ record });
  } catch (err) {
    console.log(err.message);
    /*  res.status(404).send({err:err.message}) */
    next(err);
  }
};

exports.putUpdateRecord = async (req, res, next) => {
  const { id } = req.params;
  //finding existing record with that id in database and update
  try {
    const updatedRecord = await RecordData.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).send({ updatedRecord })
  } catch (err) {
    next(err);
  }
};

exports.deleteSingleRecord = async (req, res, next) => {
  const { id } = req.params;
  //finding existing record with that id in database and delete
  try {
    const recordDeleted = await RecordData.findByIdAndRemove(id)
    if (recordDeleted) {
      res.status(200).send({ recordDeleted })
    } else {
      res.status(404).send("Already Deleted that record")
    }

  }
  catch (err) {
    next(err)
  }
};

exports.getSingleRecord = async (req, res, next) => {
  const { id } = req.params;
  //get/read single record from mongodb
  try {
    const record = await RecordData.findById(id).select("-_id -__v")
    if (record) {
      res.status(200).send({ record })
    }
    else {
      res.status(404).send("No such record found with that Id")
    }
  } catch (err) { next(err) }

};

//CRUD operation
//RESTful API  representational state transfer
/* module.exports={getAllRecords,postAddNewRecord} */
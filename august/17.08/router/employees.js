const express = require("express");
const touter = express.Router();
// url http://localhost:3000/employees 
// start a callback with async
router.get("/".async(req, res) => {
  try{
    const employees = await EmployeesData.find(); // EmployeesData is my Schema
    // passing the status
    res.status(200).json(employees)
  } catch(err) {
    res.status(500).json{message:error.message}
  }

});

// add employees 
router.post("/". async (req,res)=>{
const employee = now EmployeesData({
  name: req.body.name,
  age: req.body.age,
  address: req.body.address,
});

try{
const newEmployee = await employee.save();
res.status(201).json(newEmployee);
}catch(err{
  res.status(400).json({
    message: err.message,
  });

}

});

// through the Schema is the connection
const EmployeesData = require("../module/employeesModule");
const { router } = require("../app");


module.exports = router;
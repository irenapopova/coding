const express = require("express");
const touter = express.Router();
const EmployeesData = require("../model/employeesModel")
// get all employee
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

// update one employee
route.patch("/name", getEmployee, async (req,res)=>{
//res.send(
  // checking from the req body if 
console.log(req.body);
  // here we assigning the age
  res.employee.age
)
//getting data from the body 
if (req.body.add !=null){ 
res.employee.add = req.body.add;
}
})

// delete an employee
router.delete

router
  .router("/:name")
  // i am handlig 
  // get employee is my middleware
  .get(getEmployees, getOneEmployee)
  .patch(getEmployee, updateOneEmployee)
  .delete(getEmployee, deleteOneEmployee);
// through the Schema is the connection
const EmployeesData = require("../module/employeesModule");
const { router, route } = require("../app");

// GET  http://localhost:3000/employees/ -->  get all employees
// POST http://localhost:3000/employees/ -->  add employee
// GET http://localhost:3000/employees/:name -->  get employee by name
// PATCH http://localhost:3000/employees/:name -->  update employee by name
// UPDATE aka PUT http://localhost:3000/employees/:name -->  update employee by name
// DELETE http://localhost:3000/employees/:name -->  delete employee by name

module.exports = router;
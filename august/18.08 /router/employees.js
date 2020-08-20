const express = require("express");
const router = express.Router();
const EmployeesData = require("../model/employeesModel")
// get all employee
// url http://localhost:3000/employees 
// start a callback with async
// 
const {
  getEmployee,
  getAdd,
  getAllEmployee,
  addNewEmployee,
  getOneEmployee,
  updateOneEmployee,
  deleteOneEmployee,
  updateAllEmployeeData,
  updateManyEmployees,
} = require("../controllers/employeeController");

// root rout is a function to control router in express
router.route("/").get(getAllEmployee).post(addNewEmployee);
// route with name value
router
  .route("/:name")
  // every router is calling a function with a method 
  .get(getEmployee, getOneEmployee) // get is calling One employee
  .patch(getEmployee, updateOneEmployee) // .patch update OneEmployee
  .put(getEmployee, updateAllEmployeeData) // .put changes all the info 
  .delete(getEmployee, deleteOneEmployee);


// GET  http://localhost:3000/employees/ -->  get all employees
// POST http://localhost:3000/employees/ -->  add employee
// GET http://localhost:3000/employees/:name -->  get employee by name
// PATCH http://localhost:3000/employees/:name -->  update employee by name
// UPDATE aka PUT http://localhost:3000/employees/:name -->  update employee by name
// DELETE http://localhost:3000/employees/:name -->  delete employee by name


// GET MANY EMPLOYEES BY ADDRESS
router.get("/", async (req, res) => {
  try {
    const employees = await EmployeesData.find(); // EmployeesData is my Schema
    // passing the status
    res.status(200).json(employees)
  } catch (err) {
    res.status(500).json({ message: error.message })
  }

});
// ======================end=================================//
// Update many employees by Address 
// router.put("/update/:add", getAdd, updateManyEmployees);

// add employees 
router.post("/", async (req, res) => {
  const employee = new EmployeesData({ // the body express is waiting and in postman I have to put the same body in order to create a new employee, 
    name: req.body.name, // {"name": "Chakri", "age": 45, "address": "Landgrafen"} -json
    age: req.body.age,
    address: req.body.address,
  });
  // in try in .save is executing a mongoose action
  try { // it tries to save if not goes to catch block
    const newEmployee = await employee.save(); // save is a mongoose method to save info to database
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });

  }

});

// update one employee
router.patch("/name", getEmployee, async (req, res) => {
  //res.send(
  // checking from the req body if 
  console.log(req.body);
  // here we assigning the age
  res.employee.age
}
)

/* // delete an employee
router.delete
 */

/* // through the Schema is the connection
const EmployeesData = require("../module/employeesModule");
const { router, route } = require("../app"); */


module.exports = router;
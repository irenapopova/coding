const express = require("express");
const router = express.Router();
const EmployeesData = require("../model/employeesModel");
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
// root route
router.route("/").get(getAllEmployee).post(addNewEmployee);
// route with name value
router
  .route("/:name")
  .get(getEmployee, getOneEmployee)
  .patch(getEmployee, updateOneEmployee)
  .put(getEmployee, updateAllEmployeeData)
  .delete(getEmployee, deleteOneEmployee);

// GET  http://localhost:3000/employees/ -->  get all employees
// POST http://localhost:3000/employees/ -->  add employee
// GET http://localhost:3000/employees/:name -->  get employee by name
// PATCH http://localhost:3000/employees/:name -->  update employee by name
// UPDATE aka PUT http://localhost:3000/employees/:name -->  update employee by name
// DELETE http://localhost:3000/employees/:name -->  delete employee by name

// Get many employees by address
router.get("/search/:add", getAdd, (req, res) => {
  res.status(200).json(res.employee);
});
// Update many employees by Address
router.put("/update/:add", getAdd, updateManyEmployees);

module.exports = router;

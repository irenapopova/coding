const EmployeesData = require("../model/employeesModel");

// middleware
const getEmployee = async (req, res, next) => {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.find({ name: req.params.name });
    employee = await EmployeesData.findOne({ name: req.params.name });
    if (employee == null)
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
  console.log(employee);
  //res.employee = employee[0];
  res.employee = employee;
  next();
};
// 
const getAdd = async (req, res, next) => {
  let employee;
  // 
  try {
    // employee = await EmployeesData.find({ add: req.params.add }).limit(70);
    employee = await EmployeesData.find({ add: req.params.add });
    if (employee == null)
      // 
      return res.status(404).json({ message: "employee NOT Found" });
  } catch (err) {
    res.status(500).json({ // 
      message: err.message,
    });
  }
  console.log(employee);
  // res.employee = employee;
  next();
};


//====================================

// getAllEmployee
const getAllEmployee = async (req, res) => {
  try {
    // with a await we  go to the database and then with EmployeesData.find(); we go inside the collection mongoDB,
    const employees = await EmployeesData.find(); // find goes to the database and gets all the data for the employees or whatever the data is
    // res.status(200).json(employees); // res.status line send the info back to postman
    // console.log(employees);
    //client -> postman (it's like the browser)
    //server -> express /nodejs

    //send a request using postman to the server: like http://localhost:3000/employees
    //server will process the request and send back the response.
    //the server send a response back using res.status(200).json({employees})
    res.status(200).json(
      employees.map((employee) => {
        // creating a new object based on old one , 
        return {
          employeeId: employee._id,
          employeeName: employee.name,
          age: employee.age,
          employeeAddedDate: employee.employeeAddedDate,
          request: {
            type: "GET",
            url: `http://localhost:3000/employees/${employee.name}`,
          },
        };
      })
    );

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// add new employee
const addNewEmployee = async (req, res) => {
  const employee = new EmployeesData({
    // Request contains many information among them are headers, body or authorization
    // Body below is a representation of the employee itself coming as part of JSON
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  // try to execute if not the control goes to catch block
  try {
    const newEmployee = await employee.save(); // save is mongoose method; i give the above info to mongoose, and mongoose maps/converts the info to be understandable to mongoDB
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// ==getOneEmployee === //
const getOneEmployee = (req, res) => {
  res.status(200).json(res.employee);
};

//! ==== updating One Employee  =====// 
const updateOneEmployee = async (req, res) => {
  console.log(req.body);

  if (req.body.name != null) {
    res.employee.name = req.body.name;
  }
  if (req.body.age != null) {
    res.employee.age = req.body.age;
  }
  //
  if (req.body.add != null) {
    res.employee.add = req.body.add;
  }
  //
  try {
    await res.employee.save();
    res.status(200).json({ message: "Employee updated", data: res.employee });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// With 'DELETE' operant to remove Employee =====//
const deleteOneEmployee = async (req, res) => {
  try {
    await res.employee.remove();
    res.status(200).json({ message: "Employee Deleted" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ! update All Employees  =========//

const updateAllEmployeeData = async (req, res) => {
  try {
    // update (method of MongoDB) and updateOne IS methods (MONGOOSE)  and it modifies only one document, and updateOne is a mongoose
  // update() : By default, the update() method updates a single document.Include the option { multi: true } to update all documents that match the query criteria.Hence we can use it as both ways.
    await EmployeesData.updateOne(
      // updateOne() : It update only one top most document in a collection with matching filter.
      { name: req.params.name },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          add: req.body.add,
        },
      }
    );
    res.status(200).json({ message: "Employee Updated" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//  UPDATE * MANY * Employees DATA  ========//
const updateManyEmployeeData = async (req, res) => {
  try {
    await EmployeesData.updateMany(  //!updateMany
      { add: req.params.add },
      {
        $set: { add: req.body.add },
      }
    );
    res.status(200).json({ message: "Add got update" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// modules =============//
// 
module.exports = {
  getEmployee,
  getAdd,
  getAllEmployee,
  updateOneEmployee,
  getOneEmployee,
  addNewEmployee,
  deleteOneEmployee,
  updateAllEmployeeData,
  /* updateManyEmployees, */
};



// Questions 
// Mongo DB methods ?
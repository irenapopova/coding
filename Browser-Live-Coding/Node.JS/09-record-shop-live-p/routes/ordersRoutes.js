const express = require("express")

const router = express.Router()

const { getAllOrders, postAddNewOrder, putUpdateOrder, deleteSingleOrder, getSingleOrder } = require("../controllers/ordersController")
const db = require("../model/db")

/* GET ALL OrderS FROM RESOURCES */
router.get("/", getAllOrders)

/* POST REQUEST TO ADD NEW Order */
router.post("/", postAddNewOrder)

/* PUT REQUEST TO UPDATE SIGNLE Order IN DATABASE */
router.put("/:id", putUpdateOrder)

/* DELETE REQUEST TO DELETE SIGNLE Order IN DATABASE */
router.delete("/:id", deleteSingleOrder)

//GET SIGNLE Order FRO  DATABASE
router.get("/:id", getSingleOrder)


/* DEFAULT EXPORT */
module.exports = router

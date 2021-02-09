const express = require("express")

const router = express.Router()

const { getAllRecords, postAddNewRecord, putUpdateRecord, deleteSingleRecord, getSingleRecord } = require("../controllers/recordsController")
const db = require("../model/db")

/* GET ALL RECORDS FROM RESOURCES */
router.get("/", getAllRecords)

/* POST REQUEST TO ADD NEW RECORD */
router.post("/", postAddNewRecord)

/* PUT REQUEST TO UPDATE SIGNLE RECORD IN DATABASE */
router.put("/:id", putUpdateRecord)

/* DELETE REQUEST TO DELETE SIGNLE RECORD IN DATABASE */
router.delete("/:id", deleteSingleRecord)

//GET SIGNLE RECORD FRO  DATABASE
router.get("/:id", getSingleRecord)


/* DEFAULT EXPORT */
module.exports = router
const { body } = require("express-validator");

const rules = [
  body("title").notEmpty().isString().isLength({ min: 3 })
    .withMessage("title should be string"),
  body("artist").notEmpty().isString().isLength({ min: 3 }).withMessage("password too short"),
  body("year")
    .notEmpty()
    .isInt().isLength({ min: 4 })
    .withMessage("year should be numeric"),
  body("img")
    .trim()
    .notEmpty()
    .isURL()
    .withMessage("img url should be string"),
  body("price")
    .isInt()
    .notEmpty()
    .withMessage("price should be in numeric"),
]


module.exports = rules;
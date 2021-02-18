const bcrypt = require(("bcrypt"))

/**create hash password */
bcrypt.hash()

/**match password */
bcrypt.compare()

exports.encrypt = async (password) => {
  if (!password) return "";

  let hashPassword = await bcrypt.hash(password, 10)
  return hashedPassword;
}

exports.compare = async (password, hashedpassord) => {
  let valid = await bcrypt.compare(password, hashedpassord)
  return valid;
  /** return awyit bcrypt.compare(password,hashedpassword*/
}
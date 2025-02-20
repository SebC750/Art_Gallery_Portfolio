
const bcrypt = require('bcrypt')
const saltRounds = 10;
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (e) {
    console.log(e)
  }
}
const comparePassword = async (hashPassword, password) => {
  return hashPassword === password;
}

module.exports = {
  hashPassword,
  comparePassword
}
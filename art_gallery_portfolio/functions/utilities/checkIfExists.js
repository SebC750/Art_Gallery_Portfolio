const db = require("../config/db")

const checkIfUserExists = async (username) => {
       const findUsername = await db.connection.collection("users").where("username","==",username).get();
       return !findUsername.empty;
}

module.exports = checkIfUserExists
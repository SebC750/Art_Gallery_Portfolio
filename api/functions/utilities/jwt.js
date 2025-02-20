const jwt = require("jsonwebtoken");
const functions = require("firebase-functions");

const SECRET_KEY = functions.config().token.secret_key;

const generateJWTToken = async (username) => {
    if (!SECRET_KEY) {
        console.error("Cannot generate token without the key.");
        return null;
    }

    if (!username) {
        console.error("No username provided.");
        return null;
    }
    const token = jwt.sign(
        { user: username },
        SECRET_KEY,
        { expiresIn: "30m" }
    );

    return token;
};

module.exports = generateJWTToken;


const jwt = require("jsonwebtoken")
require("dotenv").config()
const authentication = async (req, res, next) => {
    try {
        const tokenHeader = req.cookies.jwt

        if (!tokenHeader) {
            res.status(401).json({ message: "You are not authorized." })
        }

        await jwt.verify(tokenHeader, SECRET_KEY, (err, result) => {
            if(err){
                return {"message":"Could not verify token.", status: 403}
            }
            req.user = result;
            next();
        }
        )
        
    } catch (e) {
        console.error(e)
    }
}

module.exports = authentication;
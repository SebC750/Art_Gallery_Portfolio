const admin = require("firebase-admin");

const firebaseAuthentication = async (req,res, next) => {
    try{
        const firebaseToken = req.headers.authorization?.split("Bearer ")[1];
        
        if(!firebaseToken){
            res.status(401).json({message: "You are not authorized."})
        }
 
        const response = await admin.auth().verifyIdToken(firebaseToken)
        req.user = response;
        next();
    }catch(e){
          console.error(e)
    }
}

modules.export = firebaseAuthentication;
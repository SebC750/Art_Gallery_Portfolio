const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
        console.log("All users")
        res.send("All users")
    })
router.get("/:id", (req, res) => {
        const id = req.params.id;
        console.log("User #: ", id)
        
    })
router.post("/createNewUser", function(req,res){

})
router.put("/updatePassword", function(req,res){

})
router.put("/updateEmail", function(req,res){

})
router.put("/thirdPartyAuth", function(req,res){
    
})
router.delete("/deleteUser"

)
module.exports = router;
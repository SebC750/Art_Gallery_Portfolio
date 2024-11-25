const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
        console.log("All blogs")
        res.send("All blogs")
    })
router.get("/:id", (req, res) => {
        const id = req.params.id;
        console.log("Blog #: ", id)
        
    })

module.exports = router;
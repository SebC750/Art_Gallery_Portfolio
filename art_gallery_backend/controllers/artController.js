const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
       console.log("All artworks");
    })
router.get("/:id", (req, res) => {
       console.log("Artwork #: ")
    })


module.exports = router;
const express = require("express");
const router = express.Router();
const artworkControllers = require("../controllers/artController");

router.get("/", artworkControllers.getAllArtworks)
router.get("/:id", artworkControllers.getArtworkById)
router.get("/upload", artworkControllers.uploadArtwork)
router.get("/update", artworkControllers.updateArtwork)
router.get("/delete", artworkControllers.deleteArtwork)

module.exports = router                            
const express = require("express");
const router = express.Router();
const artworkControllers = require("../controllers/artController");
const authMiddleware = require("../middleware/authentication")
const logApiCall = require("../middleware/logging")

router.use(logApiCall)

router.get("/", authMiddleware, artworkControllers.getAllArtworks)
router.get("/:id", authMiddleware, artworkControllers.getArtworkById)
router.post("/upload", authMiddleware, artworkControllers.uploadArtwork)
router.put("/update/:id", authMiddleware, artworkControllers.updateArtwork)
router.delete("/delete/:id", authMiddleware, artworkControllers.deleteArtwork)

module.exports = router     
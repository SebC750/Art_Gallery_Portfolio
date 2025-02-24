const express = require("express");
const artRouter = express.Router();
const artworkControllers = require("../controllers/artController");
const authMiddleware = require("../middleware/authentication")
const logApiCall = require("../middleware/logging")

artRouter.use(logApiCall)

artRouter.get("/", authMiddleware, artworkControllers.getAllArtworks)
artRouter.get("/:id", authMiddleware, artworkControllers.getArtworkById)
artRouter.post("/upload", authMiddleware, artworkControllers.uploadArtwork)
artRouter.put("/update/:id", authMiddleware, artworkControllers.updateArtwork)
artRouter.delete("/delete/:id", authMiddleware, artworkControllers.deleteArtwork)

module.exports = artRouter    
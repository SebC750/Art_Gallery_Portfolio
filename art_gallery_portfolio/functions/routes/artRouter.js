const express = require("express");
const artRouter = express.Router();
const artworkControllers = require("../controllers/artController");

artRouter.use(logApiCall)

artRouter.get("/", artworkControllers.getAllArtworks)
artRouter.get("/:id", artworkControllers.getArtworkById)
artRouter.post("/upload", artworkControllers.uploadArtwork)
artRouter.put("/update/:id", artworkControllers.updateArtwork)
artRouter.delete("/delete/:id", artworkControllers.deleteArtwork)

module.exports = artRouter    
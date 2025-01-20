const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/commentController");

router.get("/getAllComments/:id", commentControllers.getAllCommentsByUserId);
router.get("/getAllComments/:artworkId", commentControllers.getAllCommentsByArtworkId);
router.post("/postNewComment/:id", commentControllers.postNewComment);
router.put("/updateComment/:id", commentControllers.updateComment);
router.delete("/deleteComment/:id", commentControllers.deleteComment);

module.exports = router;
const express = require("express");
const router = express.Router();
const commentControllers = require("../controllers/commentController");
const firebaseAuth = require("../middleware/authentication")
const logApiCall = require("../middleware/logging")

router.use(logApiCall)

router.get("/:id", commentControllers.getCommentByUserId);
router.post("/", firebaseAuth, commentControllers.postNewComment);
router.put("/:id", firebaseAuth, commentControllers.updateComment);
router.delete("/:id", firebaseAuth, commentControllers.deleteComment);

module.exports = router;
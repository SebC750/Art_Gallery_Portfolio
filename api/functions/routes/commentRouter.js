const express = require("express");
const commentRouter = express.Router();
const commentControllers = require("../controllers/commentController");
const firebaseAuth = require("../middleware/authentication")
const logApiCall = require("../middleware/logging")

commentRouter.use(logApiCall)

commentRouter.get("/:id", commentControllers.getCommentByUserId);
commentRouter.post("/", firebaseAuth, commentControllers.postNewComment);
commentRouter.put("/:id", firebaseAuth, commentControllers.updateComment);
commentRouter.delete("/:id", firebaseAuth, commentControllers.deleteComment);

module.exports = commentRouter;
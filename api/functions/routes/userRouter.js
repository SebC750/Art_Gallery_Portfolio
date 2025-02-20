const express = require("express");
const userRouter = express.Router();
const userControllers = require("../controllers/userController");
const firebaseAuth = require("../middleware/authentication")
const logApiCall = require("../middleware/logging")

userRouter.use(logApiCall)
userRouter.get("/", userControllers.getAllUsers)
userRouter.get("/:id", userControllers.getUserById);
userRouter.post("/login", userControllers.login);
userRouter.post("/register", userControllers.register);
userRouter.post("/logout", userControllers.logout);
userRouter.post("/username", firebaseAuth, userControllers.addUsername);
userRouter.put("/username/:id", firebaseAuth, userControllers.updateUsername)
userRouter.put("/email/:id", firebaseAuth, userControllers.updateUserEmail);
userRouter.put("/password/:id", firebaseAuth, userControllers.updatePassword);
userRouter.delete("/:id", firebaseAuth, userControllers.deleteUser);

module.exports = userRouter  
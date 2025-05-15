const express = require("express");
const userRouter = express.Router();
const userControllers = require("../controllers/userController");

userRouter.use(logApiCall)
userRouter.get("/", userControllers.getAllUsers)
userRouter.get("/:id", userControllers.getUserById);
userRouter.post("/login", userControllers.login);
userRouter.post("/register", userControllers.register);
userRouter.post("/logout", userControllers.logout);
userRouter.post("/username", userControllers.addUsername);
userRouter.put("/username/:id", userControllers.updateUsername)
userRouter.put("/email/:id", userControllers.updateUserEmail);
userRouter.put("/password/:id", userControllers.updatePassword);
userRouter.delete("/:id", userControllers.deleteUser);

module.exports = userRouter  
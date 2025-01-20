const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");

router.get("/:id", userControllers.getUserById);
router.post("/login", userControllers.login);
router.post("/logout", userControllers.logout);
router.post("/register", userControllers.register);
router.put("/updateUsername", userControllers.updateUsername)
router.put("/updateEmail", userControllers.updateUserEmail);
router.put("/updatePassword", userControllers.updatePassword);
router.delete("/deleteUser", userControllers.deleteUser);

module.exports = router                            
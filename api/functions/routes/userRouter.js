const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");
const firebaseAuth = require("../middleware/authentication")
const logApiCall = require("../middleware/logging")

router.use(logApiCall)

router.get("/:id", userControllers.getUserById);
router.post("/login", userControllers.login);
router.post("/register", userControllers.register);
router.post("/username", firebaseAuth, userControllers.addUsername);
router.put("/username/:id", firebaseAuth, userControllers.updateUsername)
router.put("/email/:id", firebaseAuth, userControllers.updateUserEmail);
router.put("/password/:id", firebaseAuth, userControllers.updatePassword);
router.delete("/:id", firebaseAuth, userControllers.deleteUser);

module.exports = router    
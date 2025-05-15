const baseUserRepository = require("../models/user");
const baseUserInterface = baseUserRepository;
const getAllUsers = async (req, res) => {
  try {
    const response = await baseUserInterface.getAllUsers()
    res.json({ data: response })
  } catch (e) {
    console.log(e)
  }
}
const getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "Missing userId in request." });
  }

  try {
    const user = await baseUserInterface.getUserById(userId);
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body
    await baseUserInterface.login(username, password, res);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body
    const response = baseUserInterface.register(username, password);
    res.json(response)
  } catch (e) {
    throw e
  }
}
const logout = async (res) => {
  res.cookie("jwt", "", {
    maxAge: 0,
    httpOnly: true,
    //secure: true, 
    sameSite: "Strict"
  });

  res.json({ message: "Logged out successfully" });
}
const updatePassword = async (req, res) => {
  try {

  } catch (e) {
    throw e
  }
}
const updateUsername = async (req, res) => {
  try {

  } catch (e) {
    throw e
  }
}
const updateUserEmail = async (req, res) => {
  try {

  } catch (e) {
    throw e
  }
}
const deleteUser = async (req, res) => {
  try {

  } catch (e) {
    throw e
  }
}
const addUsername = async (req, res) => {
  try {

  } catch (e) {
    throw e
  }
}

const userControllers = {
  getAllUsers,
  getUserById,
  login,
  register,
  logout,
  addUsername,
  updateUsername,
  updatePassword,
  updateUserEmail,
  deleteUser
}

module.exports = userControllers;

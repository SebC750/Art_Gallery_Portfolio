const baseUserRepository = require("../repository/user");
const admin = require("firebase/auth");
const baseUserInterface = baseUserRepository.baseUserRepository;
const loginInterface = userRepository.logRepository;
const thirdPartyAuthInterface = userRepository.thirdPartyRepository;

const getUserById = async (req,res) =>{
   
   try{
       const response = baseUserInterface.getUserById()
   }catch(e){
    throw e
   }
}
const login = async (req,res) =>{
 try{

   }catch(e){
    throw e
   }
}
const register = async (req,res) =>{
  try{

  }catch(e){
    throw e
  }
}
const updatePassword = async (req,res) => {
  try{

  }catch(e){
    throw e
  }
}
const updateUsername = async (req,res) =>{
  try{

  }catch(e){
    throw e
  }
}
const updateUserEmail = async (req,res) =>{
  try{

  }catch(e){
    throw e
  }
}
const deleteUser = async (req,res) =>{
  try{

  }catch(e){
    throw e
  }
}
const addUsername = async (req,res) => {
  try{

  }catch(e){
    throw e
  }
}

const userControllers = {
  getUserById,
  login,
  register,
  addUsername,
  updateUsername,
  updatePassword,
  updateUserEmail,
  deleteUser
}

module.exports = userControllers;

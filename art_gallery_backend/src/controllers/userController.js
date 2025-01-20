const getUserById = async (req,res) =>{

}
const login = async (req,res) =>{
 
}
const logout = async () =>{

} 
const register = async (req,res) =>{

}
const updatePassword = async (req,res) => {

}
const updateUsername = async (req,res) =>{

}
const updateUserEmail = async (req,res) =>{

}
const deleteUser = async (req,res) =>{

}

const userControllers = {
  getUserById: getUserById(),
  login: login(),
  logout: logout(),
  register: register(),
  updateUsername: updateUsername(),
  updatePassword: updatePassword(),
  updateUserEmail: updateUserEmail(),
  deleteUser: deleteUser()
}

module.exports = userControllers;

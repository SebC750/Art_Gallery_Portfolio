const connection = require("../config/db")
const db = connection.getDB();

class UserRepository{
    constructor(){
        if(!instance){
            this.collection = "users";
            instance = this;
        }
         return instance;
    }
    async logout(){
        
    }
    async getUserById(userId){
        const response = await db.collection(this.collection).doc(userId).get();
        const userData = {
            id: response.id,
            ...response.data()
        }
        return userData;
    }
    async updateUsername(userId, newUsername){
        const response = await db.collection(this.collection).doc(userId).update({
            username: newUsername
        })
        if(!response){
            return;
        }
        return response;
    }
    async updatePassword(userId, newPassword){
        const response = await db.collection(this.collection).doc(userId).update({
            password: newPassword
        })
        if(!response){
            return;
        }
        return response;
    }
    async updateEmail(userId, newEmail){
        const response = await db.collection(this.collection).doc(userId).update({
            email: newEmail
        })
        if(!response){
            return;
        }
        return response;
    }
    async deleteUser(userId){
        const response = await db.collection(this.collection).doc(userId).delete();
        if(!response){
            return;
        }
        return response;  
    }
}

class LoginUserRepository extends UserRepository{
    LoginUserRepository(){
        super();
    }
    async loginAuthentication(username, password){
       
    }
    async createNewUser(username, email, password){

    }
}

class ThirdPartyAuthUserRepository extends UserRepository{
    ThirdPartyAuthUserRepository(){
        super()
    }
    async loginAuthentication(email, password){

    }
    async createNewUser(email, password, oauthProvider){

    }
}
const loginUserRepository = new LoginUserRepository();
const thirdPartyAuthUserRepository = new ThirdPartyAuthUserRepository();

module.exports = {
    logRepository: loginUserRepository,
    thirdPartyRepository: thirdPartyAuthUserRepository
}
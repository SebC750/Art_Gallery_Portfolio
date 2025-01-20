class UserRepository{
    UserRepository(collection){
      this.collection = collection;
    }
    async loginAuthentication(...credentials){

    }
    async createNewUser(...user){

    }
    async logout(){

    }
    async getUserById(){

    }
    async updateUsername(newUsername){

    }
    async updatePassword(newPassword){

    }
    async updateEmail(newEmail){

    }
    async deleteUser(userId){

    }
}
class LoginUserRepository extends User{
    LoginUserRepository(collection){
        super(collection);
    }
}

class ThirdPartyAuthUser extends User{
    ThirdPartyAuthUserRepository(collection){
        super(collection)
    }
    
}
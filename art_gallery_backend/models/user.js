class User{
    User(dateJoined){
      this.dateJoined = dateJoined;
    }
}
class LoginUser extends User{
    LoginUser(username, password, email, dateJoined){
        super(dateJoined);
        this.username = username;
        this.password = password;
        this.email = email;
    }
    loginAuthentication(username, password){

    }
    getUser(userId){

    }
    createNewUser(newUser){

    }
    updatePassword(newPassword){

    }
    updateEmail(newEmail){

    }
    deleteUser(userId){

    }
}

class ThirdPartyAuthUser extends User{
    ThirdPartyAuthUser(oauthProvider, oauthUsername, oauthEmail, dateJoined){
        super(dateJoined)
        this.oauthProvider = oauthProvider;
        this.oauthUsername = oauthUsername;
        this.oauthEmail = oauthEmail;
    }
    loginAuthentication(authToken, username, email){

    }
    getUser(userId){

    }
    createNewUser(authToken, username, email){

    }
    deleteUser(userId){

    }
}
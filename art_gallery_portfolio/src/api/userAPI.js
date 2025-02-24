import APIconfigs from "./config";

class UserAPI {
    static instance = null;
    constructor(configurations) {
        if (!UserAPI.instance) {
            this.apiURL = configurations.apiURL;
            this.headers = configurations.headers;
            UserAPI.instance = this;
        }
        return UserAPI.instance;
    }
    async getUsersById(){
        
    }
    async register(){

    }
    async login(){

    }
    async logout(){

    }
    async updateUsername(){

    }
    async updatePassword(){

    }
    async updateEmail(){

    }
    async deleteAccount(){

    }
}

const userAPI = new UserAPI(APIconfigs);

export default userAPI;
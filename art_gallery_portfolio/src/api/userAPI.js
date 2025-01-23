import APIconfigs from "./config";

class UserAPI {
    constructor(configurations) {
        if (!instance) {
            this.apiURL = configurations.apiURL;
            this.headers = configurations.headers;
            instance = this;
        }
        return instance;
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
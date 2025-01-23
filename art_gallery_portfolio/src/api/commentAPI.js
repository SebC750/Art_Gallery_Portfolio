import APIconfigs from "./config";

class CommentAPI{
    constructor(configurations){
         if(!instance){
            this.apiURL = configurations.apiURL
            this.header = configurations.headers
            instance = this;
         }
         return instance;
    }
    async getCommentByUserId(){

    }
    async getCommentByArtworkId(){

    }
    async postNewComment(){

    }
    async updateComment(){

    }
    async deleteComment(){

    }
}

const commentApi = new CommentAPI(APIconfigs);

export default commentApi;
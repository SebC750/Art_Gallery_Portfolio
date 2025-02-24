import APIconfigs from "./config";

class CommentAPI{
    static instance = null;
    constructor(configurations){
         if(!CommentAPI.instance){
            this.apiURL = configurations.apiURL
            this.header = configurations.headers
            CommentAPI.instance = this;
         }
         return CommentAPI.instance;
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
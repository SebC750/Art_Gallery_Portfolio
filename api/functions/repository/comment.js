const connection = require("../config/db")
const db = connection.getDB();

class CommentRepository{
    constructor(){
        if(!instance){
            this.collection = "comments";
            instance = this;
        }
         return instance;
    }
    async getAllCommentsByUserId(userId){
        const response = await db.collection(this.collection).doc(userId).get();
    }
    async getCommentByUserId(userId){
        
    }
    async getAllCommentsByArtworkId(artId){
        const response = await db.collection(this.collection).doc(artId).get();

    }
    async postNewComment(userId, artId, metadata){
        const response = await db.collection(this.collection).doc(artId).set(
                {
                id: userId,
                artId: artId,
                ...metadata,
            })
    }
    async updateComment(userId, artId){

    }         
    async deleteComment(userId, artId){
 
    }
}

const commentRepository = new CommentRepository();

module.exports = commentRepository;
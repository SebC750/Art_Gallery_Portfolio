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
    async getCommentByUserId(userId){
        const response = await db.collection(this.collection).doc(userId).get();
        const comment = {
            id: response.id,
            ...response.data()
        }
        return comment;
    }
    async getAllCommentsByArtworkId(artId){
        const response = await db.collection(this.collection).doc(artId).get();
        const commentSection = response.docs.map((art) => ({
            id: art.id,
            ...art.data()
        }))
        return commentSection;
    }
    async postNewComment(userId, artId, metadata){
        const response = await db.collection(this.collection).doc(artId).set(
                {
                userId: userId,
                artId: artId,
                ...metadata,
            })
        return response;
    }
    async updateComment(commentId, newContent){
        const response = await db.collection(this.collection.doc(commentId)).set({
            content: newContent
        })
        return response;
    }         
    async deleteComment(commentId){
        const response = await db.collection(this.collection).doc(commentId).delete()
        return response;
    }
}

const commentRepository = new CommentRepository();

module.exports = commentRepository;
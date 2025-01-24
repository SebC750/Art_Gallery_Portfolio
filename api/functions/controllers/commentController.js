const commentRepository = require("../repository/comment")

const getCommentByUserId = async (req,res) => {
   const userId = req.params.id;
   if(!userId){
      res.status(400).json({message: "Please include the unique identifier of the requested comment."})
   }
   try{   
       const response = commentRepository.getCommentByUserId(userId);
       if(!response){
         res.status(404).json({message: "Could not retrieve comment from the user."});
       }
       res.status(200).json({message: `Comment retrieved from user ${userId}`, data: response});
   }catch(e){
         throw e;
   }   
}
const getAllCommentsByArtworkId = async (req,res) => {
   const artId = req.params.id;
   try{
       const response = commentRepository.getAllCommentsByArtworkId(artId);
       if(!response){
         res.status(404).json({message: "Could not find any comments associated with this artwork."})
       }
       res.status(200).json({message: `Comments found for artwork # ${artId}`, data: response})
   }catch(e){
      throw e
   }   
}
const postNewComment = async (req, res) => {
   const {userId, artId, metadata} = req.body;
   if(!userId || !artId || !metadata){
      res.status(400).json({message: "Please include the data for the new comment."});
   }
   try{
       const response = commentRepository.postNewComment(userId, artId, metadata)
       if(!response){
         res.status(400).json({message: "Comment could not be posted."});
       }
       res.status(200).json({message: "Comment posted."});
   }catch(e){
      throw e
   }   
}
const updateComment = async (req,res) => {
   const {commentId, newContent} = req.body;   
   if(!commentId || !newContent){
      res.status(400).json({message: "Please include the unique identifier and new content of the comment."})
   }
   try{
        const response = commentControllers.updateComment(commentId, newContent);
        if(!response){
         res.status(400).json({message: "Could not update comment."});
        }
        res.status(200).json({message: "Comment successfully updated."})
   }catch(e){
      throw e
   }   
}

const deleteComment = async (req,res) => {
   const commentId = req.params.id;
   if(!commentId){
      res.status(400).json({message: "Please provide the unique identifier of the comment."})
   }
   try{
        const response = commentControllers.deleteComment(commentId);
        if(!response){
         res.status(400).json({message: "Could not delete the comment."});
        }
        res.status(200).json({message: "Message successfully deleted."})
   }catch(e){
      throw e
   }   
}

const commentControllers = {
   getCommentByUserId,
   getAllCommentsByArtworkId,
   postNewComment,
   updateComment,
   deleteComment
}

module.exports = commentControllers
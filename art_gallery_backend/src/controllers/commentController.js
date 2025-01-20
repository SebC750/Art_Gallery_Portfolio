const getAllCommentsByUserId = async (req, res) => {
           
}
const getCommentByUserId = async (req,res) => {

}
const getAllCommentsByArtworkId = async (req,res) => {

}
const postNewComment = async (req, res) => {

}
const updateComment = async (req,res) => {

}

const deleteComment = async (req,res) => {

}

const commentControllers = {
   getAllCommentsByUserId: getAllCommentsByUserId(),
   getCommentByUserId: getCommentByUserId(),
   getAllCommentsByArtworkId: getAllCommentsByArtworkId(),
   postNewComment: postNewComment(),
   updateComment: updateComment(),
   deleteComment: deleteComment()
}

module.exports = commentControllers
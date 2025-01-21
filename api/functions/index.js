const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const artControllers = require("./controllers/artController")
const userControllers = require("./controllers/userController")
const commentControllers = require("./controllers/commentController")

//---------------------------------------------------------------------//
// Artwork functions                                                   //
//---------------------------------------------------------------------//
exports.getAllArtworks = onRequest(artControllers.getAllArtworks);
exports.getArtworkById = onRequest(artControllers.getArtworkById);
exports.uploadArtwork = onRequest(artControllers.uploadArtwork);
exports.updateArtwork = onRequest(artControllers.updateArtwork);
exports.deleteArtwork = onRequest(artControllers.deleteArtwork);
//---------------------------------------------------------------------//
// User functions                                                      //               
//---------------------------------------------------------------------//
exports.login = onRequest(userControllers.login);
exports.register = onRequest(userControllers.register);
exports.logout = onRequest(userControllers.logout);
exports.getUserById = onRequest(userControllers.getUserById);
exports.updatePassword = onRequest(userControllers.updatePassword);
exports.updateUserEmail = onRequest(userControllers.updateUserEmail);
exports.updateUsername = onRequest(userControllers.updateUsername);
exports.deleteUser = onRequest(userControllers.deleteUser);
//---------------------------------------------------------------------//
// Comment functions                                                   //                 
//---------------------------------------------------------------------//
exports.getAllCommentsByArtworkId = onRequest(commentControllers.getAllCommentsByArtworkId);
exports.getAllCommentsByUserId = onRequest(commentControllers.getAllCommentsByUserId);
exports.getCommentByUserId = onRequest(commentControllers.getCommentByUserId);
exports.postNewComment = onRequest(commentControllers.postNewComment);
exports.updateComment = onRequest(commentControllers.updateComment);
exports.deleteComment = onRequest(commentControllers.deleteComment);
const artRepository = require("../models/art");

const getAllArtworks = async (res) => {
    try {
        const response = await artRepository.getAllArtworks();
        if(!response){
            res.status(400).json({message: "No artworks available in the database."})
        }
        res.json({ message: "All artworks retrieved", data: response });
    } catch (e) {
        throw e;
    }
}
const getArtworkById = async (req, res) => {
    const artworkId = req.params.id;
    if(!artworkId){
        res.status(400).json({message: "Please provide the artwork's unique identifier."})
    }
    try {
        const response = await artRepository.getArtworksById(artworkId);
        if(!response){
            res.status(404).json({message: "The requested artwork could not be found."})
        }
        res.json({message: `Artwork # ${artworkId} retrieved`, data: response})
    } catch (e) {
        throw e;
    }
}
const uploadArtwork = async (req, res) => {
    const artworkMetadata = req.body;
    if(!artworkMetadata){
        res.status(400).json({message: "Please provide information about the new artwork."})
    }
    try{
     const response = await artRepository.uploadArtwork(artworkMetadata);
     if(!response){
        res.status(400).json({message: "Could not upload the artwork."})
     }
     res.status(200).json({message: "Artwork created."})
    }catch(e){
        throw e;
    }
}
const updateArtwork = async (req, res) => {
    const artworkId = req.params.id;
    if(!artworkId){
        res.status(400).json({message: "Artwork id is required for deletion."})
    }
    try {
        const response = await artRepository.updateArtwork(artworkId);
        if(!response){
            res.status(400).json({message: "Could not update the artwork."})
        }
        res.json({message: `Artwork # ${artworkId} updated`})
    } catch (e) {
        throw e;
    }
}
const deleteArtwork = async (req, res) => {
    const artworkId = req.params.id;
    if(!artworkId){
        res.status(400).json({message: "Artwork id is required for deletion."})
    }
    try {
        const response = await artRepository.deleteArtwork(artworkId);
        if(!response){
            res.status(404).json({message: "Could not delete the artwork."})
        }
        res.status(200).json({message: `Artwork # ${artworkId} retrieved`})
    } catch (e) {
        throw e;
    }
}

const artworkControllers = {
    getAllArtworks,
    getArtworkById,
    uploadArtwork,
    updateArtwork,
    deleteArtwork
}

module.exports = artworkControllers;

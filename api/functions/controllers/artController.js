const artRepository = require("../repository/art");

const getAllArtworks = async (res) => {
    try {
        const response = await artRepository.getAllArtworks();
        res.json({ message: "All artworks retrieved", data: response });
    } catch (e) {
        throw e;
    }
}
const getArtworkById = async (req, res) => {
    const artworkId = req.params.id;
    try {
        const response = await artRepository.getArtworksById(artworkId);
        res.json({message: `Artwork # ${artworkId} retrieved`, data: response})
    } catch (e) {
        throw e;
    }
}
const uploadArtwork = async (req, res) => {
    const artworkMetadata = req.params;
    try{
     await artRepository.uploadArtwork(artworkMetadata);
     res.json({message: "Artwork created."})
    }catch(e){
        throw e;
    }
}
const updateArtwork = async (req, res) => {
    const artworkId = req.params.id;
    try {
        const response = await artRepository.updateArtwork(artworkId);
        res.json({message: `Artwork # ${artworkId} retrieved`, data: response})
    } catch (e) {
        throw e;
    }
}
const deleteArtwork = async (req, res) => {
    const artworkId = req.params.id;
    try {
        const response = await artRepository.deleteArtwork(artworkId);
        res.json({message: `Artwork # ${artworkId} retrieved`, data: response})
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

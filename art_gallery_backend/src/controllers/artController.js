const getAllArtworks = (res) =>{

}
const getArtworkById = (req, res) =>{
    const artworkId = req.params.id;
}
const uploadArtwork = (req, res) =>{
    const artworkMetadata = req.params;
}
const updateArtwork = (req, res) =>{
    const artworkId = req.params.id;
}
const deleteArtwork = (req, res) =>{
    const artworkId = req.params.id;
}

const artworkControllers = {
    getAllArtworks: getAllArtworks(),
    getArtworkById: getArtworkById(),
    uploadArtwork: uploadArtwork(),
    updateArtwork: updateArtwork(),
    deleteArtwork: deleteArtwork()
}

module.exports = artworkControllers;

const connection = require("../config/db")
const db = connection.getDB();

class ArtRepository {
     static instance = null;
     constructor() {
          if (!ArtRepository.instance) {
               this.collection = "artworks";
               ArtRepository.instance = this;
          }
          return ArtRepository.instance;
     }
     async getAllArtworks() {
          const response = await db.collection("artworks").get();
          const artworks = response.docs.map((documents) => ({
               id: documents.id,
               ...documents.data()
          }))
          return artworks;
     }
     async getArtworksById(artId) {
          const response = await db.collection("artworks").doc(artId).get();
          const artwork = {
               id: response.id,
               ...response.data()
          }
          return artwork;
     }
     async uploadArtwork(metadata) {
          const response = await db.collection("artworks").doc().set(metadata)
          return response;
     }
     async updateArtwork(artId, newMetadata) {
          const response = await db.collection("artworks").doc(artId).update(newMetadata)
          if (!response) {
               console.error("Error. Could not update artwork metadata.")
               return;
          }
          return response;
     }
     async deleteArtwork(artId) {
          const response = await db.collection("artworks").doc(artId).delete();
          if (!response) {
               console.error("Error. Could not delete artwork from metadata.")
          }
          return response;
     }
}

const artRepository = new ArtRepository("artwork")
module.exports = artRepository;
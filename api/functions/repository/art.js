const connection = require("../config/db")
const db = connection.getDB();

class ArtRepository{
    constructor(collection){
        if(!instance){
            this.collection = collection;
            instance = this;
        }
         return instance;
    }
    async getAllArtworks(){
         const response = await db.collection("artworks").get();
         const artworks = response.docs.map((documents) =>({
            id: documents.id,
            ...documents.data()
         }))
         return artworks;
    }
    async getArtworksById(id){
         const response = await db.collection("artworks").doc(id).get();
         const artwork = {
            id: response.id,
            ...response.data()
         }
         return artwork;
    }
    async uploadArtwork(metadata){
         const response = await db.collection("artworks").doc().set(metadata)
         return response;
    }
    async updateArtwork(id, newValue){
         const response = await db.collection("artworks").doc(id).set({attribute: newValue})
    }
    async deleteArtwork(id){

    }
}

const artRepository = new ArtRepository("artwork")
module.exports = artRepository;
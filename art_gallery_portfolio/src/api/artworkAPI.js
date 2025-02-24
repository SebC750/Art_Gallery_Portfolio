import APIconfigs from "./config";

class ArtworkAPI{
     static instance = null;
    constructor(configurations){
         if(!ArtworkAPI.instance){
            this.apiURL = configurations.apiURL
            this.header = configurations.headers
            ArtworkAPI.instance = this
         }
         return ArtworkAPI.instance;
    }
    async getAllArtworks(){
         const apiCall = this.apiURL+`/functions/getAllArtworks`
         const response = await fetch(apiCall)
         .then(data => data.json())
         .catch(e => console.error(e));
         return response;
    }
    async getArtworkById(){

    }
    async uploadNewArtwork(){

    }
    async updateArtworkMetadata(){

    }
    async deleteArtwork(){

    }
}

const artworkAPI = new ArtworkAPI(APIconfigs);

export default artworkAPI;
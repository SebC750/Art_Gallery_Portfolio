import APIconfigs from "./config";

class ArtworkAPI{
    constructor(configurations){
         if(!instance){
            this.apiURL = configurations.apiURL
            this.header = configurations.headers
            instance = this
         }
         return instance;
    }
    async getAllArtworks(){
         const apiCall = this.apiURL+`/api/functions/getAllArtworks`
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
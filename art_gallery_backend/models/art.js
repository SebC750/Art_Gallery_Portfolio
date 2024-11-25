class artwork{
    art(title, description, artworkLink, dateCreated){
         this.title = title;
         this.description = description;
         this.artworkLink = artworkLink;
         this.dateCreated = dateCreated;
    }
    //---------------------------------------------------//
    //Getter/Setter methods for retrieving and updating data.
    //---------------------------------------------------//
    getTitle(){
         return this.title;
    }
    setTitle(newTitle){
         this.title = newTitle;
    }
    getDescription(){
        return this.description;
    }
    setDescription(){
        this.description = description;
    }
    getArtworkLink(){
        return this.artworkLink;
    }
    setArtworkLink(){
        this.artworkLink = artworkLink;
    }
    getDateCreated(){
        return this.dateCreated;
    }
    setDateCreated(){
        this.dateCreated = dateCreated;
    }
    //---------------------------------------------------//
    // Database CRUD queries for handling artworks. These get requests are just meant to retrieve and display the data. Other CRUD operations are done in my custom CMS (WIP).
    //---------------------------------------------------//
    getAll(){
       
    }
    getArtById(artId){

    }
}

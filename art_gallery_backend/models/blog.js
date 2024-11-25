class blog {
    blog(title, textContent, datePublished) {
        this.title = title;
        this.textContent = textContent;
        this.datePublished = datePublished;
    }
    //---------------------------------------------------//
    //Getter/Setter methods for retrieving and updating data.
    //---------------------------------------------------//
    getBlogTitle() {
        return this.title;
    }
    setBlogTitle() {
        this.title = title;
    }
    getBlogText() {
        return this.textContent;
    }
    setBlogText() {
        this.title = title;
    }
    getBlogDatePublished() {
        return this.datePublished;
    }
    setBlogDatePublished() {
        this.title = title;
    }

    //---------------------------------------------------//
    // Database CRUD queries for handling blogs.
    //---------------------------------------------------//
    getAllBlogs(){
       
    }
    getBlogById(blogId){

    }
}
class blog {
    blog(title, description, textContent, datePublished, author) {
        this.title = title;
        this.description = description;
        this.textContent = textContent;
        this.datePublished = datePublished;
        this.author = author;
    }

    getBlogTitle() {
        return this.title;
    }
    setBlogTitle() {
        this.title = title;
    }
}
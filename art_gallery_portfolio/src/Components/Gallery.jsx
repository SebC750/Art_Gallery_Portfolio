import artworks from "../artworks.json"
import { useState, useEffect } from "react"
import "../Styles/Gallery.css"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import {sortByTitle, sortByYear} from "./SortByFilter.js"
const Gallery = () => {
    const [allArtworks, getAllArtworks] = useState(artworks)
    const [isArtworkSelected, setIsArtworkSelected] = useState(false)
    const showSelectedArtwork = (file, title, year, description) => {
        setIsArtworkSelected(true)
        getAllArtworks({ file: file, title: title, year: year, description: description })
    }
    const backToGallery = () => {
        setIsArtworkSelected(false)
        getAllArtworks(artworks)
    }
    const sortByFilter = (filterType) =>{
        if(filterType === "title"){
            const sortedArray = sortByTitle(allArtworks, filterType)
            getAllArtworks(sortedArray)
        }
        else if(filterType === "year"){
            const sortedArray = sortByYear(allArtworks,filterType)
            getAllArtworks(sortedArray)
            return getAllArtworks(sortedArray)
        }
        
    }
    return (
        <div>
            <Navbar />
            <div id="Gallery">
                <div className="container">

                    <div className="gallery-title">
                        Galleria 
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Filter by</button>
                        <div className="dropdown-menu">
                            <ul>
                                <div className="dropdown-item" onClick={() => sortByFilter("title")}>
                                    Title
                                </div>
                                <div className="dropdown-item" onClick={() => sortByFilter("year")}>
                                    Year Completed
                                </div>
                            </ul>

                        </div>

                    </div>
                    
                    {allArtworks ? (
                        <div className="row row-cols-3">
                            {allArtworks.map((val, index) => (
                                <div key={index} className="art-gallery-properties">
                                    <img src={val.file} className="d-block" alt="this is a piece of art" onClick={() => showSelectedArtwork(val.file, val.title, val.year, val.description)} />
                                    <h2 className="img-title"> {val.title}</h2>
                                    <p> Date completed: {val.year}</p>
                                </div>
                            ))}
                        </div>
                    ) : <div className="missing-art-message"> Nothing to show here. </div>}
                    <button type="button" className="btn btn-outline-info w-100" style={{marginBottom: 20}}> Back to top</button>
                </div>

            </div>

            <Footer />
        </div>
    )
}
export default Gallery
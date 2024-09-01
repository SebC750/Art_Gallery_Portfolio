import artworks from "../artworks.json"
import { useState, useEffect } from "react"
import "../Styles/Gallery.css"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
const Gallery = () => {
    const [allArtworks, getAllArtworks] = useState(artworks)
    const [isArtworkSelected, setIsArtworkSelected] = useState(false)
    const showSelectedArtwork = (file,title,year,description) =>{
           setIsArtworkSelected(true)
           getAllArtworks({file: file, title: title, year: year, description: description})
    }
    const backToGallery = () =>{

    }
    
    return (
        <div>
            <Navbar/>
            <div id="Gallery">
                <div className="container">

                    {allArtworks ? (
                        <div className="row row-cols-3">
                            {allArtworks.map((val, index) => (
                                <div key={index} className="art-gallery-properties">
                                    <img src={val.file} className="d-block" alt="this is a piece of art" onClick={() => showSelectedArtwork(val.file,val.title,val.year,val.description)}/>
                                    <h2> {val.title}</h2>
                                    <h4> Completed: {val.year}</h4>
                                </div>
                            ))}
                        </div>
                    ) : <div className="missing-art-message"> Nothing to show here. </div>}

                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Gallery
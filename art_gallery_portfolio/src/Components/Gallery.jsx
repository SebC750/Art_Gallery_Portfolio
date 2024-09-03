import artworks from "../artworks.json"
import { useState, useEffect } from "react"
import "../Styles/Gallery.css"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import { sortByTitle, sortByDate } from "./SortByFilter.js"
const Gallery = () => {
    const [allArtworks, getAllArtworks] = useState(artworks)
    const [isArtworkSelected, setIsArtworkSelected] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const showSelectedArtwork = (file, title, date, description) => {
        setIsArtworkSelected(true)
        console.log("File: " + file, "Date" + date, "Title: " + title)
        getAllArtworks({ file: file, title: title, date: date, description: description })
    }
    const backToGallery = () => {
        setIsArtworkSelected(false)
        getAllArtworks(artworks)
    }
    const sortByFilter = (filterType) => {
        if (filterType === "title") {
            try {
                setErrorMessage(null)
                const sortedArray = sortByTitle([...allArtworks])
                console.log(sortedArray)
                if (!sortedArray) {
                    console.log("Could not get results.")
                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }


                getAllArtworks(sortedArray)


            } catch (e) {
                console.error(e)
                console.log("Sorry, there are no artworks to sort.")
                setErrorMessage("Oops, could not sort the artworks! Sorry!")
                getAllArtworks(allArtworks)
            }

        }
        else if (filterType === "year") {
            try {
                setErrorMessage(null)
                const sortedArray = sortByDate([...allArtworks])
                console.log(sortedArray)
                if (!sortedArray) {
                    console.log("Could not get results.")
                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }


                getAllArtworks(sortedArray)


            } catch (e) {
                console.error(e)
                console.log("Sorry, there are no artworks to sort.")
                setErrorMessage("Oops, could not sort the artworks! Sorry!")
                getAllArtworks(allArtworks)
            }
        }

    }
    return (
        <div>
            <Navbar />
            <div id="Gallery">
                <div className="container">

                    <div className="gallery-title" id="top-of-gallery">
                        Galleria
                    </div>

                    <div className="dropdown">
                        <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Sort by</button>
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
                    <div className="error-message"> {errorMessage} </div>
                    {!isArtworkSelected ? (
                        allArtworks ? (
                            <div className="row row-cols-3">
                                {allArtworks.map((val, index) => (
                                    <div key={index} className="art-gallery-properties">
                                        <img
                                            src={val.file}
                                            className="d-block"
                                            alt="this is a piece of art"
                                            onClick={() => showSelectedArtwork(val.file, val.title, val.date, val.description)}
                                        />
                                        <h2 className="img-title"> {val.title}</h2>
                                        <p>Date completed: {val.year}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="missing-art-message">Nothing to show here.</div>
                        )
                    ) : (
                        <div>
                            <div style={{color: "white"}}> {allArtworks.file} </div>
                            
                        </div>
                    )}



                    <a href="#top-of-gallery"> <button type="button" className="btn btn-outline-info w-100" style={{ marginBottom: 20 }}> Back to top</button>  </a>
                </div>

            </div>

            <Footer />
        </div >
    )
}
export default Gallery
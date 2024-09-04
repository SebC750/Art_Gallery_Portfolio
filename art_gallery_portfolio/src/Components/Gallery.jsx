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

    const handleImgDownloadAttempt = (e) => {
        e.preventDefault()
    }
    const handleDragAttempt = (e) => {
        e.preventDefault();
    };
    const showSelectedArtwork = (file, title, date, description) => {
        setErrorMessage(null)
        try {
            setIsArtworkSelected(true)

            getAllArtworks({ file: file, title: title, date: date, description: description })
        } catch (e) {
            console.error(e)

            setErrorMessage("Sorry. The selected artwork cannot be displayed at the moment.")
        }

    }
    const backToGallery = () => {
        setErrorMessage(null)
        try {
            setIsArtworkSelected(false)
            getAllArtworks(artworks)
        } catch (e) {
            console.error(e)

            setErrorMessage("Cannot redirect back to gallery.")
        }


    }
    const sortByFilter = (filterType) => {
        if (filterType === "title") {
            try {
                setErrorMessage(null)
                const sortedArray = sortByTitle([...allArtworks])
                console.log(sortedArray)
                if (!sortedArray) {

                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }


                getAllArtworks(sortedArray)


            } catch (e) {
                console.error(e)

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

                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }


                getAllArtworks(sortedArray)


            } catch (e) {
                console.error(e)

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


                    {errorMessage ? <div className="error-message"> {errorMessage} </div> : null}
                    {!isArtworkSelected ? (
                        <div>
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
                            allArtworks && !errorMessage ? (
                            <div className="row row-cols-3">
                                {allArtworks.map((val, index) => (
                                    <div key={index} className="art-gallery-properties">
                                        <div
                                            style={{
                                                backgroundImage: `url(${val.file})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '100%',
                                                height: '400px'
                                            }}

                                            onContextMenu={handleImgDownloadAttempt}
                                            onDragStart={handleDragAttempt}

                                            className="d-block w-100 img-thumbnail"
                                            onClick={() => showSelectedArtwork(val.file, val.title, val.date, val.description)}
                                        />
                                        <h2 className="img-title"> {val.title}</h2>
                                        <p>Date completed: {val.date}</p>
                                    </div>
                                ))}
                            </div>
                            ) : null
                        </div>) : (
                        <div className="selected-artwork-container">
                            <div className="row">
                                <div className="col">
                                    <img
                                        src={allArtworks.file}
                                        onContextMenu={handleImgDownloadAttempt}
                                        onDragStart={handleDragAttempt}
                                        alt="This is the selected artwork."
                                        className="d-block w-100 img-thumbnail"
                                    />
                                </div>
                                <div className="col d-flex flex-column">
                                    <div className="selected-artwork-description flex-grow-1">
                                        <span>{allArtworks.title}</span>
                                        <p>Date completed: {allArtworks.date}</p>
                                        <div className="description-container flex-grow-1 d-flex flex-column justify-content-start">
                                            <div className="description-title">
                                                <p>Description</p>
                                            </div>
                                            <div className="description-content">
                                                {allArtworks.description}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-outline-info btn-lg w-100 mt-auto" onClick={() => backToGallery()}> Back to Gallery</button>
                                </div>

                            </div>
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
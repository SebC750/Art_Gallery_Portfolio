import artworks from "../json/artworks.json"
import { useState } from "react"
import "../Styles/Gallery.css"
import { sortByTitle, sortByDate } from "../Utilities/SortByFilter.js"
import GalleryList from "../Components/GalleryList.jsx"
import ArtExhibit from "../Components/ArtExhibit.jsx"

const Gallery = () => {

    const [allArtworks, setArtworks] = useState(artworks)

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
            setArtworks({ file: file, title: title, date: date, description: description })
        } catch (e) {
            console.error(e)

            setErrorMessage("Sorry. The selected artwork cannot be displayed at the moment.")
        }
    }
    const backToGallery = () => {
        setErrorMessage(null)
        try {

            setIsArtworkSelected(false)
            setArtworks(artworks)
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
                if (!sortedArray) {
                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }
                setArtworks(sortedArray)
            } catch (e) {
                console.error(e)
                setErrorMessage("Oops, could not sort the artworks! Sorry!")
                setArtworks(allArtworks)
            }
        }

        else if (filterType === "date") {
            try {
                setErrorMessage(null)
                const sortedArray = sortByDate([...allArtworks])
                if (!sortedArray) {
                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }
                setArtworks(sortedArray)
            } catch (e) {
                console.error(e)
                setErrorMessage("Oops, could not sort the artworks! Sorry!")
                setArtworks(allArtworks)
            }
        }
    }
    return (
        <div>

            <div id="Gallery">
                <div className="container">
                    {errorMessage ? <div className="error-message"> {errorMessage} </div> : null}
                    {isArtworkSelected && allArtworks ? (
                        <ArtExhibit
                            allArtworks={allArtworks}
                            backToGallery={backToGallery}
                            handleImgDownloadAttempt={handleImgDownloadAttempt}
                            handleDragAttempt={handleDragAttempt}
                        />
                    ) : (
                        <GalleryList
                            allArtworks={allArtworks}
                            showSelectedArtwork={showSelectedArtwork}
                            sortByFilter={sortByFilter}
                            handleImgDownloadAttempt={handleImgDownloadAttempt}
                            handleDragAttempt={handleDragAttempt}
                            errorMessage={errorMessage}
                        />
                    )}
                    {!isArtworkSelected && (<a href="#top-of-gallery" className="d-flex align-items-center justify-content-center link-dark link-offset-3"> <i className="bi bi-arrow-up"></i> Back to top </a>)}
                </div>
            </div>

        </div >
    )
}
export default Gallery
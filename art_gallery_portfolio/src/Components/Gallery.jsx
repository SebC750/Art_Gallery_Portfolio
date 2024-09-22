import artworks from "../artworks.json"
import { useState, useEffect } from "react"
import "../Styles/Gallery.css"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import { sortByTitle, sortByDate } from "./SortByFilter.js"
/* 
Gallery: This is the gallery page. It is where all of the artworks are shown to the user. For compactness and organization, the artworks are organized in rows of 3 images each.
The gallery includes all of the artworks and a sort by option that allows you to sort the images by either title or the date they were first published on the internet. The images are sorted by feeding the array into a merge sort algorithm that splits the array into halves recursively until it is split into single index subarrays.
Then, they are put back together in sorted order.
When clicking on a gallery image, the page will switch the display to a double column format. The full size umage is shown on the left and the title, date of publication and description is shown on the right.
*/
const Gallery = () => {
    //This stores either all of the artworks available or the specific artwork selected by the user. When the user opens the gallery, it will set this state to all of the artworks available by default. Thus it will initially show a grid of all the images and the specific image when selected.

    const [allArtworks, setArtworks] = useState(artworks)
    //This is a boolean value that checks to see if the user selected an artwork. When a user clicks on an image, the value is set to true. This is meant to control whether it only shows a specific image or the whole gallery.
    const [isArtworkSelected, setIsArtworkSelected] = useState(false)
    //This error message is displayed whenever exceptions are catched in the functions. 
    const [errorMessage, setErrorMessage] = useState(null)
    //These next two functions help deter users from downloading images. This is to deter art thieves but this is still not foolproof if people have enough willpower.
    const handleImgDownloadAttempt = (e) => {
        e.preventDefault()
    }
    const handleDragAttempt = (e) => {
        e.preventDefault();
    };

    const showSelectedArtwork = (file, title, date, description) => {
        //Clear the error message so that it does not remain even if the issue is resolved.
        setErrorMessage(null)
        try {
            //Indicate that an artwork is selected, changing what html will be shown to the user.
            setIsArtworkSelected(true)
            //Set the list of artworks to only have the selected artpiece. 
            setArtworks({ file: file, title: title, date: date, description: description })
        } catch (e) {
            console.error(e)
            //If it fails, set this error message to display it to the user.
            setErrorMessage("Sorry. The selected artwork cannot be displayed at the moment.")
        }

    }
    const backToGallery = () => {
        setErrorMessage(null)
        try {
            //Set this to false to switch back to the default gallery page.
            setIsArtworkSelected(false)
            //Retrieve all the artworks again.
            setArtworks(artworks)
        } catch (e) {
            console.error(e)

            setErrorMessage("Cannot redirect back to gallery.")
        }


    }
    const sortByFilter = (filterType) => {
        //This function takes the attribute to sort by and decides which sorting function it should use given the function's argument (title or date published).
        if (filterType === "title") {
            try {
                setErrorMessage(null)
                //Retrieve the sorted array of artworks and set the result to the sortedArray variable.
                const sortedArray = sortByTitle([...allArtworks])

                if (!sortedArray) {
                    //If the algorithm fails, return the error message and close out of the function.
                    setErrorMessage("Oops, could not sort the artworks! Sorry!")
                    return null
                }

                //Reset the state that holds all of the artworks to have the newly sorted array.
                setArtworks(sortedArray)


            } catch (e) {
                console.error(e)

                setErrorMessage("Oops, could not sort the artworks! Sorry!")
                //If it fails, set the artwork array back to have all of the artworks to reset.
                setArtworks(allArtworks)
            }

        }
        //Do the same for sorting by date.
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
            <Navbar />
            <div id="Gallery">
                <div className="container">

                    <div className="gallery-title" id="top-of-gallery">
                        Galleria
                    </div>
                    {/* Only show the error message if there is an error at all.*/}
                    {errorMessage ? <div className="error-message"> {errorMessage} </div> : null}
                    {/*First check if a user has selected an artwork. Otherwise, show the whole gallery. */}
                    {!isArtworkSelected ? (
                        <div>
                            {/* Using Bootstrap's dropdown to create the button for selecting sorting options.*/}
                            <div className="dropdown">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Sort by</button>
                                <div className="dropdown-menu">
                                    <ul>
                                        <div className="dropdown-item" onClick={() => sortByFilter("title")}>
                                            Title
                                        </div>
                                        <div className="dropdown-item" onClick={() => sortByFilter("date")}>
                                            Year Completed
                                        </div>
                                    </ul>

                                </div>

                            </div>
                            {/*If no artworks in particular are selected by the user, we must first check if there are any artworks to show at all. */}
                            {allArtworks && !errorMessage ? (
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
                                    {allArtworks.map((val, index) => (
                                        <div key={index} className="art-gallery-properties">
                                            {/* If a user clicks on the image, show the artwork by passing the data into the function*/}
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
                             ) : null }</div>) : (
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
                                        {/* Make sure that the column for the artwork information is responsive to the image itself. This makes it so that the description box resizes according to the size of the image. */}
                                        <div className="selected-artwork-description flex-grow-1">
                                            <span>{allArtworks.title}</span>
                                            <p>Date completed: {allArtworks.date}</p>
                                            <div className="description-container flex-grow-1 d-flex flex-column justify-content-start">
                                                <div className="description-title">
                                                    <p>Description</p>
                                                </div>
                                                <div className="description-content">
                                                   <p> {allArtworks.description} </p> 
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-outline-info btn-lg w-100 mt-auto" onClick={() => backToGallery()}> Back to Gallery</button>
                                    </div>

                                </div>
                            </div>
                    )}



                           {!isArtworkSelected ? ( <a href="#top-of-gallery"> <button type="button" className="btn btn-outline-info w-100" id="back-to-top-btn" style={{ marginBottom: 20 }}> Back to top</button>  </a>) : null}
                        </div>

            </div>

                <Footer />
            </div >
            )
}
            export default Gallery
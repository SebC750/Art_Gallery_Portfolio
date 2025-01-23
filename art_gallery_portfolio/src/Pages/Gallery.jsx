import artworks from "../artworks.json"
import { useState, useEffect } from "react"
import "../Styles/Gallery.css"
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import artworkAPI from "../api/artworkAPI.js"
import commentApi from "../api/commentAPI.js"
import userAPI from "../api/userAPI.js"
import { sortByTitle, sortByDate } from "../Utilities/SortByFilter.js"
/* 
Gallery: This is the gallery page. It is where all of the artworks are shown to the user. For compactness and organization, I organized the artworks in rows of 3 images each.
The gallery includes all of the artworks and a sort by option that allows you to sort the images by either title or the date they were first published on the internet. 
The artwork and its metadata are formatted as a hero section.
*/
const Gallery = () => {
    //I need a state to store all of my artworks in.
    const [allArtworks, setArtworks] = useState(artworks)

    const [isArtworkSelected, setIsArtworkSelected] = useState(false)
    
    const [errorMessage, setErrorMessage] = useState(null)
    //This is to deter art thieves but this is still not foolproof if people have enough willpower.
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
            setIsArtworkSelected(true)
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
           
            setIsArtworkSelected(false)           
            setArtworks(artworks)
        } catch (e) {
            console.error(e)

            setErrorMessage("Cannot redirect back to gallery.")
        }


    }
    const sortByFilter = (filterType) => {
        //This function takes the attribute to sort by because it needs to know what to sort by.
        if (filterType === "title") {
            try {
                setErrorMessage(null)
                //Need to set a new variable that holds the newly sorted array so that it can update the state.
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
            <Navbar />
            <div id="Gallery">
                <div className="container">
                    <h2 className="text-info text-center p-3" id="top-of-gallery">
                        Galleria
                    </h2>                   
                    {errorMessage ? <div className="error-message"> {errorMessage} </div> : null}
                    {/*First check if a user has selected an artwork. Otherwise, show the whole gallery. */}
                    {!isArtworkSelected ? (
                        <div>                         
                            <div className="dropdown p-3 d-flex justify-content-center">
                                <button type="button" className="btn btn-info btn-lg rounded-pill dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Sort by</button>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li className="dropdown-item" onClick={() => sortByFilter("title")}>
                                            Title
                                        </li>
                                        <li className="dropdown-item" onClick={() => sortByFilter("date")}>
                                            Year Completed
                                        </li>
                                    </ul>

                                </div>
                            </div>                          
                            {allArtworks && !errorMessage ? (
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                                    {allArtworks.map((val, index) => (
                                        <div key={index} className="bg-transparent text-center p-4 text-info art-gallery-properties">
                                            
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

                                                className="d-block w-100 img-fluid"

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
                                            className="d-block w-100 img-fluid shadow"
                                        />
                                    </div>

                                    <div className="col d-flex flex-column">
                                        
                                        <div className="selected-artwork-description text-info flex-grow-1">
                                            <span>{allArtworks.title}</span>
                                            <p>Date completed: {allArtworks.date}</p>
                                            <div className="description-container flex-grow-1 d-flex flex-column justify-content-start">
                                                <div className="description-title bg-info">
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


                           {/* The selected artwork page doesn't need a back to top button cause the components are sized to fit in the viewport.*/}
                           {!isArtworkSelected ? ( <a href="#top-of-gallery"> <button type="button" className="btn btn-info w-100" id="back-to-top-btn" style={{ marginBottom: 20 }}> Back to top</button>  </a>) : null}
                        </div>

            </div>

                <Footer />
            </div >
            )
}
            export default Gallery
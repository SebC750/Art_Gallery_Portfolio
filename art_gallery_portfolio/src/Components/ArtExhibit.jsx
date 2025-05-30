import React from 'react'
import {Link} from "react-router-dom"
import "../Styles/Gallery.css"
const ArtExhibit = ({allArtworks, backToGallery, handleImgDownloadAttempt, handleDragAttempt}) => {
    return (
        <div className="mt-3">
            <Link to="/Gallery" type="button" className="link link-dark link-offset-3 text-end my-3" id="back-button" onClick={() => backToGallery()}> <i className="bi bi-arrow-left"></i> Back to Gallery </Link>
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <img
                        src={allArtworks.file}
                        onContextMenu={handleImgDownloadAttempt}
                        onDragStart={handleDragAttempt}
                        alt="This is the selected artwork."
                        className="d-block w-100 img-fluid shadow"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <div className="selected-artwork-description flex-grow-1">
                        <h3 className="fw-bold">{allArtworks.title}</h3>
                        <p>Date completed: {allArtworks.date}</p>
                        <div className="flex-grow-1 d-flex flex-column justify-content-start">
                            <div className="border border-2 border-start-0 border-top-0 border-end-0 border-bottom-2">
                                <h4> Description </h4>
                            </div>
                            <div className="p-3">
                                <p> {allArtworks.description} </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ArtExhibit
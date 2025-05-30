import React from 'react'

const GalleryList = ({ allArtworks, showSelectedArtwork, sortByFilter, handleImgDownloadAttempt, handleDragAttempt, errorMessage }) => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <h2 className="text-center" id="top-of-gallery">
                    <i className="bi bi-image"></i> Gallery
                </h2>
                <div className="dropdown p-3 d-flex justify-content-center">
                    <button type="button" className="btn btn-sm btn-dark rounded-pill dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <i className="bi bi-sort-alpha-down"></i> Sort by</button>
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
            </div>
            {allArtworks && !errorMessage ? (
                <div className="row">
                    {allArtworks.map((val, index) => (
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div key={index} className="bg-transparent text-center p-4 art-gallery-properties">
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
                                <h2 className="fw-bold mt-3"> {val.title}</h2>
                            <p>{val.date}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            ) : null} </div>
    )
}

export default GalleryList
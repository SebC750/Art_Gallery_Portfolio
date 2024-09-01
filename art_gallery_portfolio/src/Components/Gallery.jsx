import artworks from "../artworks.json"
import {useState, useEffect} from "react"
import "../Styles/Gallery.css"
const Gallery = () => {
    const [allArtworks, getAllArtworks] = useState(artworks)
    useEffect(() =>{
console.log(allArtworks)
    },[])
    return (
        <div id="Gallery">
            <div className="container">

                {allArtworks ? (
                    <div className="row row-cols-3">
                        {allArtworks.map((val,index) =>(
                            <div key={index} className="art-gallery-properties">
                                <img src={val.file} className="d-block w-100 h-100"alt="this is a piece of art" />
                                <h2> {val.title}</h2>
                                <h4> Completed: {val.year}</h4>
                            </div>
                        ))}
                    </div>
                ) : <div className="missing-art-message"> Nothing to show here. </div>}

            </div>
        </div>
    )
}
export default Gallery
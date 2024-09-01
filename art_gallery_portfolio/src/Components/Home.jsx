import "../Styles/Home.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import {Link} from "react-router-dom"
const Home = () => {
    const carouselImageDimensions = { width: 600, height: 1000 }
    return (
        <div>
            <Navbar/>
            <div className="container">

                <div className="intro-container-bg">
                    <div className="row">
                        <div className="col">
                            <div className="intro-content">
                                <div className="intro-title">
                                    <h2> Hi! I'm DeezDijou.</h2>
                                </div>
                                <div className="intro-description">
                                    <p> And this is my art gallery. Here, you will find the complete collection of my best artworks. </p>
                                    <p> Within this compendium of art, you will find things such as: </p>
                                    <ul>
                                        <li> Single panel artpieces.</li>
                                        <li> Comics</li>
                                        <li> Animated Gifs</li>

                                    </ul>
                                    <p> Feel free to look around if you'd like. I post new drawings occassionally when I'm not too busy or if i dont have access to a desktop/laptop.</p>
                                    <div className="redirect-to-contacts">
                                         <Link to="/Gallery"> <button className="btn btn-outline-info btn-lg" style={{marginRight: 20}}> Go to the gallery </button></Link>  
                                         <Link to="/About"> <button className="btn btn-outline-info btn-lg"> More about me </button></Link>  
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col">
                            <div id="intro-carousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    
                                    <div className="carousel-item active">
                                        <img src="Artworks/bauhaus_saree.svg" className="img-thumbnail" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Artworks/fallout_4_natalia.svg" className="img-thumbnail" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Artworks/serena_mtv_downtown.svg" className="img-thumbnail" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Artworks/vision_video_goth.svg" className="img-thumbnail" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Artworks/goth_cd_melinda.svg" className="img-thumbnail" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>

                                </div>
                                <button className="carousel-control-prev" id="carousel-buttons" type="button" data-bs-target="#intro-carousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hideen="true"></span>
                                    <span className="visually-hidden"> </span>
                                </button>
                                <button className="carousel-control-next" id="carousel-buttons" type="button" data-bs-target="#intro-carousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hideen"> </span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
         <Footer/>

        </div>
    )
}
export default Home
import "../Styles/Home.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import {Link} from "react-router-dom"
//This is the homepage. Users will be greeted by this page upon entering the site. You will see here a brief introduction that explains who I am and what this website is about.
//To the right of the introduction is a carousel that switches between multiple images. This is meant to give users am expectation of the type of content they will see in this page.
const Home = () => {
    //Set the carousel dimensions to fit in the screen and align with the introduction.
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
                                    <h2> Hi! My name is Sebastian Chalarca ! (Also known as DeezDijou!)</h2>
                                </div>
                                <div className="intro-description">
                                    <p> And this is my art gallery. Here, you will find the complete collection of my best artworks. </p>
                                    <p> Within this compendium of art, you will find things such as: </p>
                                    <ul>
                                        <li> Single panel artpieces.</li>
                                        <li> Comics</li>
                                        <li> Animated Gifs</li>
                                        <li> Sketches </li>
                                    </ul>
                                    <p> Feel free to look around! I post new drawings occassionally when I'm not too busy or if i dont have access to a desktop/laptop. My full collection is right here but i am also elsewhere.</p>
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
                                        <img src="Artworks/fallout_1_natalia.svg" className="img-thumbnail" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
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
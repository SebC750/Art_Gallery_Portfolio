import "../Styles/Home.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {Link} from "react-router-dom"
//This is the homepage. Users will be greeted by this page upon entering the site. You will see here a brief introduction that explains who I am and what this website is about.
//To the right of the introduction is a carousel that switches between multiple images. This is meant to give users an expectation of the type of content they will see in this page.
const Home = () => {
    
    const carouselImageDimensions = { width: 800, height: 1000 }
    return (
        <>
            <Navbar/>
            <div className="container mt-4 mb-2">
                <div className="intro-container-bg">
                    <div className="row">
                    <div className="col-lg-6 col-12">
                            <div className="intro-content">
                                <div className="text-info">
                                    <h2> Hi! My name is Sebastian Chalarca ! (Also known as DeezDijou!)</h2>
                                </div>
                                <div className="text-info">
                                    <p> And this is my art gallery. Here, you will find the complete collection of my best artworks. </p>
                                    <p> Within this compendium of art, you will find things such as: </p>
                                    <ul>
                                        <li> Single panel artpieces.</li>
                                        <li> Comics</li>
                                        <li> Animated Gifs</li>
                                        <li> Sketches </li>
                                    </ul>
                                    <p> Feel free to look around! I post new drawings occassionally when I'm not too busy or if i dont have access to a desktop/laptop. My full collection is right here but i am also elsewhere.</p>
                                    <div className="d-flex gap-2 justify-content-center justify-content-lg-start p-2">
                                         <Link to="/Gallery"> <button className="btn btn-info btn-lg rounded-pill"> Go to the gallery </button></Link>  
                                         <Link to="/About"> <button className="btn btn-info btn-lg rounded-pill border border-black border-0 border-bottom-2 border-top-0"> More about me </button></Link>  
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <div className="col-lg-6 col-12">
                            <div id="intro-carousel" className="carousel slide shadow" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    
                                    <div className="carousel-item active">
                                        <img src="Artworks/bauhaus_saree.svg" className="img-fluid object-cover" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Artworks/fallout_1_natalia.svg" className="img-fluid object-cover" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Artworks/serena_mtv_downtown.svg" className="img-fluid object-cover" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Artworks/vision_video_goth.svg" className="img-fluid object-cover" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="Artworks/goth_cd_melinda.svg" className="img-fluid object-cover" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork" />
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

        </>
    )
}
export default Home
import { Link } from "react-router-dom"
import Carousel from "../json/carousel.json"

const Home = () => {

    const carouselImageDimensions = { width: 800, height: 500 }
    return (
        <>

            <div className="container mt-4 mb-2">
                <div className="intro-container-bg">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <h2 className="fs-1 fw-bold"> Welcome </h2>
                            <p> This is my gallery website. Feel free to look around.</p>
                            <nav className="d-flex align-items-center gap-3">
                                <Link to="/Gallery" role="button" className="link link-dark link-underline-dark link-offset-3"> Go to gallery </Link>
                                <Link to="/About" role="button" className="link link-dark link-underline-dark link-offset-3"> About me </Link>
                            </nav>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div id="intro-carousel" className="carousel slide shadow" data-bs-ride="carousel">
                                <div className="carousel-inner w-auto">
                                    {Carousel.map((image) => (
                                        <div className={`carousel-item ${image.active ? "active" : ""}`}>
                                            <img src={image.src} className="img-fluid object-cover" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt={image.alt} />
                                        </div>
                                    ))}
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

        </>
    )
}
export default Home
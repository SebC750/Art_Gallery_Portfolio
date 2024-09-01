
const Home = () => {
    const carouselImageDimensions = {width:1000,height:1500}
    return (
        <div>
            <h1> The complete art collection</h1>
            <div id="intro-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="Artworks/clueless.svg" className="d-block w-100" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork"/>
                    </div>
                    <div className="carousel-item ">
                    <img src="Artworks/bauhaus_saree.svg" className="d-block w-100" height={carouselImageDimensions.height} width={carouselImageDimensions.width} alt="this is an artwork"/>
                    </div>
                    <div className="carousel-item">
                        <img src="Artworks/b"
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#intro-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hideen="true"></span>
                <span className="visually-hidden"> Previous </span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#intro-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hideen"> Next</span>
            </button>
            
        </div>
    )
}
export default Home
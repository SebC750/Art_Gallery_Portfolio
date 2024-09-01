import Navbar from "./Navbar.jsx"
import "../Styles/About.css"
const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container" style={{marginTop: "100px"}}>
                <div className="about-title"> <h2> About </h2> </div>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Who am i?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body"> My name is DeezDijou</div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}
export default About
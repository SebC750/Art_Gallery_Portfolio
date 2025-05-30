import Navbar from "../Components/Navbar.jsx"
import "../Styles/About.css"
import Footer from "../Components/Footer.jsx"
import { Link } from "react-router-dom"
import AboutData from "../json/about.json"
const About = () => {

    return (
        <div>
            <div className="container">
                <h2 className="mt-3" id="top-of-about"> <i className="bi bi-question-circle-fill"> </i> FAQ / About me </h2>
                <div className="accordion accordion-flush mb-3" id="about-accordion">
                    {AboutData.map((data, index) => (
                        <div className={`accordion-item ${index === 0 ? "active" : ""}`} key={index}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#question${index}`} aria-expanded="false" aria-controls={`question${index}`}>
                                    <h5> {data.question} </h5>
                                </button>
                            </h2>
                            <div id={`question${index}`} className="accordion-collapse collapse" data-bs-parent="#about-accordion">
                                <div className="accordion-body"> {data.answer} </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/" className="d-flex align-items-center justify-content-center gap-2 link-dark link-offset-3"> <i className="bi bi-arrow-left"></i> Back to homepage </Link>
            </div>
        </div>
    )
}
export default About
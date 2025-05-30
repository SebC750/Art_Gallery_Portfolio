import '../Styles/Navbar.css'
import { Link } from "react-router-dom"
import API from "../api/API"

const api = new API()
const Navbar = () => {
    return (
        <div>
            <header >
                <nav className="navbar navbar-expand-md border border-bottom-2 border-start-0 border-top-0 border-end-0">
                    <div className="container">
                        <h1 className="fs-1 p-2 fw-bold text-center md:text-start">
                            deezdijou
                        </h1>
                        <button
                            className="btn btn-outline-dark navbar-toggler"
                            data-bs-toggle="collapse"
                            data-bs-target="#nav-items"
                            aria-controls="nav-items"
                            aria-expanded="false"> <i className="bi bi-list"> </i></button>
                        <div className="collapse navbar-collapse justify-content-end" id="nav-items">
                            <div className="navbar-nav gap-2 align-items-center" id="navbar-items">
                                <Link to="/" role="button" className="btn btn-dark rounded-pill"> <i class="bi bi-house-fill"></i> Home  </Link>
                                <Link to="/Gallery" role="button" className="btn btn-dark rounded-pill"> <i className="bi bi-image"></i> Gallery </Link>
                                <Link to="/About" role="button" className="btn btn-dark rounded-pill"> <i className="bi bi-question-circle-fill"></i> About </Link>
                                <Link to="/Login" className="d-flex align-items-center gap-2 text-dark"> <i className="bi bi-person-circle fs-1"></i> Login </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}
export default Navbar
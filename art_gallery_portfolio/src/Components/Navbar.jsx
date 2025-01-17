import '../Styles/Navbar.css'
import {Link} from "react-router-dom"
//This is the navbar. The navbar provides a simple but sleek navigational tool. Each button takes you to the home, gallery or about page.
//UPDATE (09/14/2024): I felt like the navbar would fit better if it was transparent to further minimalize the webpage design.
const Navbar = () => {
    return (
        <div>
            
            <header>
                <nav className="mx-4 navbar">
                    <h1 className="text-info fs-3 p-2">
                        SEBASTIAN CHALARCA
                    </h1>
                    <div className="d-flex gap-2">
                    <Link to="/"> <a role="button" className="btn btn-info rounded-pill shadow"> Home  </a> </Link>
                    <Link to="/Gallery"> <a role="button" className="btn btn-info rounded-pill shadow"> Gallery </a></Link>
                    <Link to="/About">  <a role="button" className="btn btn-info rounded-pill shadow">  About </a></Link>
                    
                    </div>
                </nav>
            </header>

        </div>
    )
}
export default Navbar
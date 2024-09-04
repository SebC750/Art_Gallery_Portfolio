import '../Styles/Navbar.css'
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            
            <header>
                <nav className="navbar">

                    <div className="navbar-logo">
                        
                        SEBASTIAN CHALARCA
                    </div>
                    <div className="navbar-items">
                    <Link to="/"> <div className="btn btn-outline-info btn-lg">  Home  </div> </Link>
                    <Link to="/Gallery"> <div className="btn btn-outline-info btn-lg"> Gallery </div></Link>
                    <Link to="/About">  <div className="btn btn-outline-info btn-lg">  About</div></Link>
                    </div>
                </nav>
            </header>

        </div>
    )
}
export default Navbar
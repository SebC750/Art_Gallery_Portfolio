import '../Styles/Home.css'
const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="navbar-logo">
                          <img src="d-initial-logo.svg" height="80" width="80" alt="website-logo"/>
                          eedijou
                    </div>
                    <div className="navbar-items">
                        <div className="btn btn-outline-success btn-lg"> <a href="#Home"> Home </a> </div>
                        <div className="btn btn-outline-primary btn-lg"> <a href="#Gallery"> Gallery</a> </div>
                        <div className="btn btn-outline-danger btn-lg"> <a href="#About"> About</a></div>
                    </div>
                </nav>
            </header>
           
        </div>
    )
}
export default Navbar
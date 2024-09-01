import '../Styles/Navbar.css'

const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar">

                    <div className="navbar-logo">
                        
                        DEEZDIJOU
                    </div>
                    <div className="navbar-items">
                        <div className="btn btn-outline-info btn-lg"> <a href="#Home"> Home </a> </div>
                        <div className="btn btn-outline-info btn-lg"> <a href="#Gallery"> Gallery</a> </div>
                        <div className="btn btn-outline-info btn-lg"> <a href="#About"> About</a></div>
                    </div>
                </nav>
            </header>

        </div>
    )
}
export default Navbar
import "../Styles/Footer.css"
const Footer = () => {
    
    return (
            <footer className="p-4">
                <div className="container">
                    <div className="d-flex gap-4 justify-content-center">              
                        <a href="https://www.reddit.com/user/Reub_ic/" className="text-dark">  <i className="bi bi-reddit fs-3"> </i></a>
                        <a href="https://www.instagram.com/sebastian_chalarca_dev/" className="text-dark"> <i className="bi bi-instagram fs-3"> </i> </a>                      
                    </div>
                    <p align="center" className="mt-3 text-dark opacity-50" style={{fontSize: "10px"}}> Art Gallery, Sebastian Chalarca {new Date().getFullYear()} </p>
                </div>
                
            </footer>

    )
}
export default Footer
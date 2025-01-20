import "../Styles/Footer.css"
const Footer = () => {
    //This is the footer. It includes links to my social media accounts for users to look further into my work.
    return (
            <footer className="p-4">
                <div className="container">
                    <div className="d-flex gap-4 justify-content-center">              
                        <a href="https://www.reddit.com/user/Reub_ic/" className="text-info"> <img src="social_media_icons/Reddit_Icon_2Color.svg" alt="reddit account link" aria-label="reddit logo account link" height="30" width="30"/> </a>
                        <a href="https://www.instagram.com/sebastian_chalarca_dev/" className="text-info"> <img src="social_media_icons/Instagram_Glyph_Gradient.svg" alt="instagram account link" aria-label="instagram logo account link" height="30" width="30"/> </a>                      
                    </div>
                    <p align="center" className="mt-3 text-info opacity-50" style={{fontSize: "10px"}}> Art Gallery, Sebastian Chalarca 2025</p>
                </div>
                
            </footer>

    )
}
export default Footer
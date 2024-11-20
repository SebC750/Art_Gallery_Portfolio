import "../Styles/Footer.css"
const Footer = () => {
    //This is the footer. It includes links to my social media accounts for users to look further into my work.
    return (
        <div >
            <footer >
                <div className="footer">
                   
                    <div className="footer-message">

                        <h2> Like what you see? Check out more of my stuff at: </h2>
                    </div>
                    <div className="social-media-links">
                        <a href="https://www.instagram.com/sebastianchalarcadev/" className="logo-anchors text-info"> <img src="social_media_icons/Reddit_Icon_2Color.svg" alt="reddit account link" aria-label="reddit logo account link" height="50" width="50"/> Reub_ic</a>
                        <a href="https://www.reddit.com/user/Reub_ic/" className="logo-anchors text-info"> <img src="social_media_icons/Instagram_Glyph_Gradient.svg" alt="instagram account link" aria-label="instagram logo account link" height="50" width="50"/> sebastianchalarcadev</a>                      
                    </div>
                    <p align="center" class="footer-brand"> Art Gallery, Sebastian Chalarca 2024</p>
                </div>
                
            </footer>
        </div>
    )
}
export default Footer
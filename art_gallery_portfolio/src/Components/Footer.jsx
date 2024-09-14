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
                        <a href="https://www.instagram.com/deezdijou/" className="logo-anchors"> <img src="Assets/instagram_logo.svg" className="social-media-logo" alt="this is the instagram logo" /> <p> deezdijou</p></a>
                        <a href="https://www.reddit.com/user/Reub_ic/" className="logo-anchors"><img src="Assets/reddit_logo.svg" className="social-media-logo" alt="this is the reddit logo" /> <p> deezdijou</p></a>
                        <a href="https://www.deviantart.com/derpytots" className="logo-anchors"><img src="Assets/deviantart_logo.svg" className="social-media-logo" alt="this is the deviantart logo" /> <p> DerpyTots </p></a>
                    </div>
                    <p align="center" class="footer-brand"> Art Gallery, Sebastian Chalarca 2024</p>
                </div>
                
            </footer>
        </div>
    )
}
export default Footer
import { HashLink as Link} from 'react-router-hash-link'
import './footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="flex-container nav-links">
                    <div className="links-list">
                        <p>Links</p>
                        <div className='flex-container ul'>
                            <Link to="#gallery">Gallery</Link>
                            <Link to="#comments">Testimonials</Link>
                            <Link to="#blog">Blog</Link>
                        </div>
                    </div>
                    <div className="info-list">
                        <p>Info</p>    
                        <div className='flex-container ul'>
                            <Link to="#about">About</Link>
                            <Link to="#contact">Contact</Link>
                            <Link to="#products">Pricing</Link>
                        </div>
                     </div>
                    <div className="concect-list" id="contact">   
                        <p>Connect</p>
                        <div className='flex-container ul' >
                            <Link to="/">Facebook</Link>
                            <Link to="/">Instagram</Link>
                            <Link to="/">TikTok</Link>
                        <div/>
                        </div>
                    </div>
                </div>  
                <div className="flex-container bottom-line"> 
                    <div className="disclamer">
                        <p>© 2023 ICE+CREAM&CO. All rights reserved.</p>
                    </div>
                    <div className="social-links">
                        <span className="iconify" data-icon="ph:facebook-logo"></span>
                        <span className="iconify" data-icon="ph:instagram-logo"></span>
                        <span className="iconify" data-icon="ph:tiktok-logo"></span>
                    </div>
                </div>  
          </div>
        </div>
    )
}

export default Footer
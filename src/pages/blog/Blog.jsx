import PinkCone from '../../pictures/dekoracijos/pink-cone.png'
import Image3 from '../../pictures/Image3.png'
import Image4 from '../../pictures/Image4.png'
import Image5 from '../../pictures/Image5.png'
import Image6 from '../../pictures/Image6.png'
import'./blog.css'


const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
            <img className="pink-cone" src={PinkCone} alt="pink-cone"/>
           <div className="blog-main-part">
                <div className="blog-text-part">
                    <h2>Blog</h2>
                    <p>Stay up to date with our tasty adventures and learn 
                        amazing ice cream facts from the experts at our 
                        whimsical ice cream wonderland blog</p>       
                </div>        
                <div className="flex-container">    
                    <div className="blog-story-box story-one">
                        <img src={Image6} alt="ice-cream"/>
                        <span className="iconify bookmark" data-icon="ph:bookmark-simple-fill"></span>
                        <p>Scooping Up Happiness: Exploring the World of Artisanal Ice Cream</p>
                    </div>
                    <div className="blog-story-box story-two">
                        <img src={Image3} alt="ice-cream"/>
                        <span className="iconify bookmark" data-icon="ph:bookmark-simple-fill"></span>
                        <p>Chill Out with Cool Creations: Innovative Ice Cream Flavors and Recipes</p>
                    </div>
                    <div className="blog-story-box story-three">
                        <img src={Image4} alt="ice-cream"/>
                        <span className="iconify bookmark" data-icon="ph:bookmark-simple-fill"></span>
                        <p>The Science of Ice Cream: A Deep Dive into Creamy Concoctions</p>
                    </div>
                    <div className="blog-story-box story-four">
                        <img src={Image5} alt="ice-cream"/>
                        <span className="iconify bookmark" data-icon="ph:bookmark-simple-fill"></span>
                        <p>The Science of Ice Cream: A Deep Dive into Creamy Concoctions</p>
                    </div>  
                </div>    
             </div>      
        </div>
    </div>
  )
}

export default Blog
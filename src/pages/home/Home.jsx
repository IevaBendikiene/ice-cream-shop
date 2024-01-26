import IceCream1 from'../../pictures/Icecream-gallery1.png'
import IceCream2 from'../../pictures/Icecream-gallery2.png'
import IceCream3 from'../../pictures/Icecream-gallery3.png'
import IceCream4 from'../../pictures/Icecream-gallery4.png'
import IceCream5 from'../../pictures/Icecream-gallery5.png'
import IceCream6 from'../../pictures/Icecream-gallery6.png'
import BlueIceCream from '../../pictures/dekoracijos/blue-ice-cream.png'
import './home.css'

const Home= () =>{
    return(
        <div className="home">
            <header id="home">
                <div className="right-half"></div>
                <div className="container">
                    <h1 >Scoop up <span>happiness</span> with every bite.</h1>
                </div> 
            </header>
            <div className="gallery">
                <div className="container">
                    <img className="blue-ice-cream" src={BlueIceCream} alt="blue ice-cream" />
                    <h2>Our Ice Creams</h2>
                    <div className="inner-container-grid">  
                        <img className="img-small" src={IceCream6} alt="ice-cream"/>
                        <img className="img-big" src={IceCream3} alt="ice-cream"/>
                        <img className="img-extra-small" src={IceCream2} alt="ice-cream"/>  
                        <img className="img-big" src={IceCream4} alt="ice-cream"/>
                        <img className="img-big" src={IceCream1} alt="ice-cream"/>
                        <img className="img-medium" src={IceCream5} alt="ice-cream"/>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Home
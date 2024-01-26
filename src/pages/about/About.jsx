import PeopleImage from'../../pictures/photo(3).png'
import ChocoletCone from '../../pictures/dekoracijos/chocolate-cone.png'
import './about.css'

const About = () => {
  return (
    <div className='about-us'>
      <div className="container flex-container">
            <div className="about-us-text">
                <h2>About Us</h2>
                <p>At ICE+CREAM & CO, were on a mission to 
                    spread joy by crafting delicious, out-of-
                    this-world ice cream experiences. Our 
                    playful cartoon shop is the home of 
                    scrumptious flavors, smiling faces, and 
                    unending fun!
                </p>
            </div>
            <div>
                <img className="people-img" src={PeopleImage} alt="people chating"/>
            </div>
            <img  className="chocolate-cone" src={ChocoletCone} alt="chocolate-ice-cream"/>
        </div>
    </div>
  )
}

export default About
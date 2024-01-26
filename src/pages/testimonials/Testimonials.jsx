import RightSign from '../../pictures/right.png'
import LeftSign from '../../pictures/left.png'
import Aavatar1 from '../../pictures/avatars/avatar1.png'
import Aavatar2 from '../../pictures/avatars/avatar2.png'
import Aavatar3 from '../../pictures/avatars/avatar3.png'
import HappyGirl from'../../pictures/dekoracijos/happy-girl.png'
import'./testimonials.css'

const Testimonials = () => {
  return (
    <div className='comments'>
       <div className="container flex-container">
            <img className="direction-sign" src={LeftSign} alt="left-sign"/>
            <div className="comment-box comment-first">
                <img src={Aavatar1} alt="profile pic"/>
                <p>The flavors are out of this 
                    world! I can’t get enough.</p>
                <p className="avatar-name">Samantha Jones</p>
            </div>
            <div className="comment-box comment-second">
                <img src={Aavatar2} alt="profile pic"/>
                <p>My kids love the cartoon 
                    atmosphere, and I love 
                    the taste.</p>
                <p className="avatar-name">John Thompso</p>
            </div>
            <div className="comment-box comment-third">
                <img src={Aavatar3} alt="profile pic"/>
                <p>Their chocolate is the 
                    best in town!</p>
                <p className="avatar-name">Ava Johnson</p>
            </div>
            <img className="direction-sign" src={RightSign} alt="right sign"/>
            <img className="happy-girl" src={HappyGirl} alt="happy girl"/>
        </div>/
    </div>
  )
}

export default Testimonials
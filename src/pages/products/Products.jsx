import Vanilla from '../../pictures/vanilla.png'
import Fruit from '../../pictures/fruit.png'
import Chocolate from '../../pictures/chocolate.png'
import RightSign from '../../pictures/right.png'
import LeftSign from '../../pictures/left.png'
import './products.css'

const Products = () => {
  return (
    <div className='products' id="products">
      <div className="container">
         <h2>Our Products</h2>
         <div className="ice-creams flex-container">
            <img className="direction-sign" src={LeftSign} alt="left sign"/>
            <div className="ice-cream-box vanilla">
                <img src={Vanilla} alt="vanilla ice-cream"/>
                <h3>Vanilla ice cream</h3>
                <hr/>
                <p>Creamy, sweet, and classic, it's a timeless favorite.</p>
                <button className="btn-read">READ MORE</button>
            </div>
            <div className="ice-cream-box fruit">
                <img src={Fruit} alt="fruit sorbet"/>
                <h3>Fruit sorbet</h3>
                <hr/>
                <p>Refreshing and tangy, it bursts with natural fruit flavors.</p>
                <button className="btn-read">READ MORE</button>
            </div>
            <div className="ice-cream-box chocolate">
                <img src={Chocolate} alt="chocolate ice-cream"/>
                <h3>Chocolate gelato</h3>
                <hr/>
                <p>Rich, indulgent, and oh-so-smooth, a chocoholic's dream.</p>
                <button className="btn-read">READ MORE</button>
            </div>
            <img className="direction-sign" src={RightSign} alt="right-sign"/>
         </div>
        </div>
    </div>
  )
}

export default Products
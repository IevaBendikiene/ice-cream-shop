import { BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar';
import Products from './pages/products/Products';
import About from './pages/about/About';
import Testimonials from './pages/testimonials/Testimonials';
import Blog from './pages/blog/Blog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar /> 
        <div>
          <Home />
          <Products />
          <About />
          <Testimonials />
          <Blog />
        </div>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;

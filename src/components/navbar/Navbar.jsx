
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    // Toggles display of the menu by flipping the showMenu state
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    //Closes menu by setting showMenu state to false
    const closeMenu = () => {
        setShowMenu(false);
    };

    //Function to handle clicks outside the menu and close it
    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            closeMenu();
        };
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return(
        <div className="navbar">
          <div className="container flex-container" > 
                <Link to="/" className="logo flex-container">   
                        <span className="iconify icon" data-icon="ph:ice-cream"></span>
                        <p>ICE+CREAM<span> & CO</span></p>
                </Link> 
                <nav className="desktop">
                    <div className="flex-container">
                        <Link to="/">home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/products">products</Link>
                        <Link to="/blog">blog</Link>
                        <Link to="/contact">contact</Link>
                    </div>
                </nav>
                <nav className="mobile" ref={menuRef}>
                    <button className={`icon ${showMenu ? 'showMenu' : ''}`} onClick={toggleMenu} >
                            <span className="iconify" data-icon="ph:list-bold"></span>
                            <div className={`myLinks ${showMenu ? 'showMenu' : ''}`}>
                                <Link to="/" onClick={closeMenu}>home</Link>
                                <Link to="/" onClick={closeMenu}>about</Link>
                                <Link to="/" onClick={closeMenu}>products</Link>
                                <Link to="/" onClick={closeMenu}>blog</Link>
                                <Link to="/" onClick={closeMenu}>contact</Link>
                            </div>
                    </button>
                </nav>   
            </div> 
        </div>
    )
}

export default Navbar
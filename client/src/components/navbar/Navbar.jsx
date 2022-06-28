import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false);
    
    const toggleMenu = () => setClick(!click);
    
    return (
        <>
        <nav>
            <label className="logo"><Link to="/">HuyV</Link></label>
            <div className={!click ? 'hamburger' : 'hamburger open'}  onClick={toggleMenu}>
                <div className="hamburger_btn"></div>
            </div>
            <ul className={!click ? 'nav-panel' : 'nav-panel nav-active'}>
                <li className="nav-button">
                    <Link to="/">About me</Link>
                </li>
                <li className="nav-button">
                    <Link to="/works">Work</Link>
                </li>
                <li className="nav-button">
                <Link to="/resume">Resume</Link>
                </li>
                <li className="nav-button">
                    <Link to="/contact">Contact</Link>
                </li>
                {/* <li className="nav-button"><a href="/work">Work</a></li>
                <li className="nav-button"><a href="/contact">Contact</a></li>
                */}
            </ul>
        </nav>
        </>
    )
};

export default Navbar;
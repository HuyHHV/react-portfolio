import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
        <nav>
            <label className="logo">HuyV</label>
            <div className="hamburger">
                <div className="hamburger_btn"></div>
            </div>
            <ul class="nav-panel">
                <li className="nav-button">
                    <Link to="/about-me">About me</Link>
                </li>
                <li className="nav-button">
                    <Link to="/Work">Work</Link>
                </li>
                <li className="nav-button">
                    <a href="./assets/CV.docx">Resume</a>
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
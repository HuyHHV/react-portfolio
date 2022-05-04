import React, { useState } from 'react';

const Navbar = () => {
    return (
        <div>
            <label className="logo">HuyV</label>
            <div className="hamburger">
                <div className="hamburger_btn"></div>
            </div>
            <ul class="nav-panel">
                <li className="nav-button"><a href="#about-me">About me</a></li>
                <li className="nav-button"><a href="#work">Work</a></li>
                <li className="nav-button"><a href="#contact">Contact</a></li>
                <li className="nav-button"><a href="./assets/CV.docx">Resume</a></li>
            </ul>
        </div>
    )
};

export default Navbar;
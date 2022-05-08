import React from 'react';
import { Link } from 'react-router-dom';
import photo from './personalphoto.png';
import './hero.css'
function HeroSection() {
    return (
        <div className="hero" id="about-me">
            <div className="margin-top"></div>
            <div className="hero-body">
                <div className=" greeting">
                    <p>
                        Hello! I'm Huy 
                        <br/>
                        I'm a pasionate full-stack developer based in Adelaide. I'm eager to apply time management and organizational skills in various environments. Seeking entry-level opportunities to expand skills while facilitating company growth.
                    </p>
                    <Link to="/about-me">Learn more...</Link>
                </div>
                <div className="avawrapper "> 
                    <img id="avatar" src={photo} alt="persnal photo"/> 
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
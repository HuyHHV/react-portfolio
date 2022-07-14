import React from 'react';
import { Link } from 'react-router-dom';
import photo from './personalphoto.png';
import './Hero.css'
function HeroSection() {
    return (
        <div className="hero" id="about-me">
            <div className="margin-top"></div>
            <div className="hero-body">
                <div className=" greeting">
                    <h1>Hello!</h1>
                    <h1>I am Huy Vo.</h1>
                    <h1>I'm a Web Developer.</h1>
                    <Link to="/about" className='link_container'>About me</Link>
                    <Link to="/works" className='link_container'>My projects</Link>
                </div>
                <div className="avawrapper "> 
                    <img id="avatar" src={photo} alt="persnal photo"/> 
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
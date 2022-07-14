import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css'
function Landingpage() {
    return (
        <div className="aboutme-wrapper">
            <div className="about-me">
                <p>
                    Hello! My name is Huy Vo.
                    <br/>
                    I'm a pasionate full-stack developer based in Adelaide. I'm eager to apply time management and organizational skills in various environments. Seeking entry-level opportunities to expand skills while facilitating company growth.
                </p>
            </div>
            <div className="skills ">
                <h1>My skills</h1>
                <div className='skill-list'>
                    <a>HTML</a>
                    <a>CSS</a>
                    <a>Javascript</a>
                    <a>ReactJs</a>
                    <a>NodeJs</a>
                    <a>MongoDB</a>
                    <a>MySQL</a>
                    <a>GraphQL</a>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;
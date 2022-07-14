import React from 'react';
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
                    <h2>HTML</h2>
                    <h2>CSS</h2>
                    <h2>Javascript</h2>
                    <h2>ReactJs</h2>
                    <h2>NodeJs</h2>
                    <h2>MongoDB</h2>
                    <h2>MySQL</h2>
                    <h2>GraphQL</h2>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;
import React from 'react';
import './Footer.css'
function Footer() {
    
    return (
        <>
        <footer>
            <div className="footer-wrapper">
                <h4>Created by Huy Vo 2022</h4>
                <ul className='footer-panel'>
                    <li> vohuy819@gmail.com </li>
                    <li> <a href="https://github.com/HuyHHV"><i className="fab fa-github"></i> Github</a></li>
                    <li> <a href="https://www.linkedin.com/in/huy-vo-a5b638118/"><i className="fab fa-linkedin"></i> Linkedin</a></li>
                </ul>
            </div>
        </footer>
        </>
    )
};

export default Footer;
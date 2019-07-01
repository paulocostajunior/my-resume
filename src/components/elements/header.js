import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="header-info">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Information</li>
                    <li>Projects</li>
                </ul>
            </nav>

            <div className="banner">
            
                <div className="banner-text">
                    <div className="main-text">
                        <h3>Welcome to my portfolio page,</h3>
                        <h1>I am Paulo Costa Jr.</h1>
                        <h3>Fullstack Webdeveloper</h3>                
                        <hr/>
                        <ul className="social">
                            <li><a href="https://www.linkedin.com/in/paulo-costa-jr-048470144/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/PauloCostaJunior" target="_blank"><i className="fa fa-github"></i></a></li>
                        </ul>
                    </div>
                </div>

                <ul className="scrolldown social">
                    <li><a className="smoothscroll" href="#about"><i className="fa fa-arrow-down"></i></a></li>
                </ul>
        
            </div>
        </header>
    );
}

export default Header;
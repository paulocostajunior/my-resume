import React from 'react';
import './header.css';
import '../../../resumeData';
import resumeData from '../../../resumeData';
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
                        <h3>Welcome to my resume page,</h3>
                        <h1>I am {resumeData.name}</h1>
                        <h3>{resumeData.role}</h3>                
                        <hr/>
                        <ul className="social">
                        { 
                            resumeData.socialLinks.map(item => {
                                return(
                                    <li key={item.name}>
                                        <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                    </li>
                                );
                            })
                        }
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
import React from 'react';
import './header.css';
import '../../../resumeData';
import { Element, Link } from 'react-scroll';
import Headroom from 'react-headroom';

const Header = () => {
    return (
        <Element name="header"> 
            <Headroom>
                <header>
                    <nav>
                        <ul className="header-info sticky">
                            <li>
                                <Link 
                                    className="header"
                                    to="header"
                                    spy={true} 
                                    smooth={true} 
                                    offset={0} 
                                    duration={1000}>
                                    Home
                                </Link>    
                            </li>
                            <li>
                                <Link 
                                    className="header"
                                    to="about-me"
                                    spy={true} 
                                    smooth={true} 
                                    offset={0} 
                                    duration={1000}>
                                    About Me
                                </Link> 
                            </li>
                            <li>
                                <Link 
                                    className="header"
                                    to="information"
                                    spy={true} 
                                    smooth={true} 
                                    offset={0} 
                                    duration={1000}>
                                    Information
                                </Link> 
                            </li>
                            {/* <li>Projects</li> */}
                        </ul>
                    </nav>
                </header>
            </Headroom>
        </Element>
    );
}

export default Header;
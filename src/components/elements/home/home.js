import React from 'react';
import './home.css';
import resumeData from '../../../resumeData';
import { Element,Link } from 'react-scroll';

const Home = () => {
    return (
        <Element name="home">
            <div className="home">
            <div className="banner">
                
                <div className="banner-text">
                    <div className="main-text">
                        <h3>Welcome to my resume page,</h3>
                        <h1>{resumeData.name}</h1>
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
                    <li>
                        <Link 
                            to="about-me"
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={1000}>
                            <a className="smoothscroll" href="#about"><i className="fa fa-arrow-down"></i></a>
                        </Link>
                        
                    </li>
                </ul>
        
            </div>
            </div>
        </Element>
    );
}

export default Home;
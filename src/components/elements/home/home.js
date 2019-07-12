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
                        <h3>Hello, my name is</h3>
                        <h1>{resumeData.name}</h1>
                        <h3>I'm a {resumeData.role}</h3>                
                        <hr/>
                        <div className="social">
                            { 
                                resumeData.socialLinks.map((item, index) => {
                                    return(
                                            <div key={index} className="social-item">
                                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                            </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

           
                    <div className="scrolldown smoothscroll">
                        <Link 
                            to="about-me"
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={1000}>
                           <i className="fa fa-arrow-down"></i>
                        </Link>                        
                    </div>
       
        
            </div>
            </div>
        </Element>
    );
}

export default Home;
import React from 'react';
import './aboutMe.css';
import resumeData from '../../../resumeData';
import { Element } from 'react-scroll';

const AboutMe = () => {
    return (
        <Element name="about-me">
            <article>
                <div className="about-me">
                    <div className="display-about-me text">
                        <img src={require("../../../assets/my-photo.png")}/>
                        
                        <div style={{marginLeft: "2vw;"}} className="about-me-text">
                            <h2>About Me</h2>
                            
                            <p>{resumeData.aboutMeDescription}
                            </p>

                            <h3>Contact Details</h3>
                            <p>{resumeData.name}</p>
                            <p>{resumeData.country}</p>
                            <p>{resumeData.email}</p>
                        </div>
                    </div>
                </div>
            </article>
        </Element>
    );
}

export default AboutMe;
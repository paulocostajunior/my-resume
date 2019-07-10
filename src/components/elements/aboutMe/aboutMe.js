import React from 'react';
import './aboutMe.css';
import resumeData from '../../../resumeData';

const AboutMe = () => {
    return (
        <article>
        <div className="about-me">
            <div className="display-about-me text">
                <img src="https://via.placeholder.com/300"/>
                
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
    );
}

export default AboutMe;
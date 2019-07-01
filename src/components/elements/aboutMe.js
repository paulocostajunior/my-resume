import React from 'react';
import './aboutMe.css';

const AboutMe = () => {
    return (
        <article>
        <div className="about-me">
            <div className="display-about-me text">
                <img src="https://via.placeholder.com/300"/>
                
                <div style={{marginLeft: "2vw;"}} className="about-me-text">
                    <h2>About Me</h2>
                    
                    <p>I've recently graduated from Analysis and Systems Development in Brazil. I am a self taught Full Stack Web Developer, currently studying React and React Native.<br/> 
                    I've been working with JQuery, PHP, HTML and CSS for the past 3 years.
                    </p>

                    <h3>Contact Details</h3>
                    <p>Paulo Costa Jr</p>
                    <p>Brazil</p>
                    <p>costapaulojr@gmail.com</p>
                </div>
            </div>
        </div>
    </article>
    );
}

export default AboutMe;
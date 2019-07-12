import React from 'react';
import './information.css';
import resumeData from '../../../resumeData';
import { Element } from 'react-scroll';

const Information = () => {
    return (
        <Element name="information">
            <article>

                <div className="flex_container">
                    <div className="detals flex_item_left">
                        <h2><span className="underline">Education</span></h2>
                    </div>
                

                    <div className="details flex_item_right">
                        { 
                            resumeData.education.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2>{item.courseName}</h2>
                                    <p className="subtitle-spacing">{item.place}</p>
                                </div>
                                );
                            })
                        }
                    </div>
                </div>
                
                <div className="flex_container">
                    <div className="detals flex_item_left">
                        <h2><span className="underline">Courses</span></h2>
                    </div>

                    <div className="details flex_item_right">
                        {
                            resumeData.courses.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2>{item.name}</h2>
                                    <p className="subtitle-spacing">{item.place}</p>
                                </div>
                                );
                            })
                        }
                        
                    </div>
                </div>

                <div className="flex_container">
                    <div className="detals flex_item_left">
                        <h2><span className="underline">Experience</span></h2>
                    </div>

                    <div className="details flex_item_right">
                        { 
                            resumeData.jobs.map((item, index) => {
                                return(
                                    <div key={index}>
                                        <h2>{item.role}</h2>
                                        <p className="subtitle-spacing">{item.date}</p>
                                        <p className="job-description">{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="flex_container">
                    <div className="flex_item_left">
                        <h2><span className="underline">Technical Skills</span></h2>
                    </div>

                    <div className="flex_item_right">
                    <h2>Coding</h2>
                        {
                            resumeData.techSkills.map((item, index) => {
                                return(
                                    <p key={index}>{item.coding}</p>
                                );
                            })
                        }
                    <h2>Tools</h2>
                        {
                            resumeData.techSkills.map((item, index) => {
                                return(
                                    <p key={index}>{item.tools}</p>
                                );
                            })
                        }
                    <h2>Languages</h2>
                        {
                            resumeData.techSkills.map((item, index) => {
                                return(
                                    <p key={index}>{item.languages}</p>
                                );
                            })
                        }
                    </div>
                    
                </div>
            
            </article>
        </Element>
    );
}

export default Information;
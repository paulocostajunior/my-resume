import React from 'react';

const Information = () => {
    return(
        <article>
        <div class="flex_container">
            <div class="detals flex_item_left">
                <h2><span class="underline">Education</span></h2>
            </div>
            <div class="details flex_item_right">
                <h2>Analysis and Systems Development<h2>
                <p class="subtitle-spacing">Centro Universitário Barão de Mauá • Jan 2016 / June 2019</p>

                <h2>Architecture and Urbanism<h2>
                <p class="subtitle-spacing"> Centro Universitário Barão de Mauá • Jan 2010 / December 2014</p>
            </div>
        </div>

        <div class="flex_container">
            <div class="detals flex_item_left">
                <h2><span class="underline">Courses</span></h2>
            </div>
            <div class="details flex_item_right">
                <h2>Modern React With Redux [2019]<h2>
                <p class="subtitle-spacing">Udemy - Stephen Grider</p>

                <h2>React - The Complete Guide (incl Hooks, React Router, Redux)<h2>
                <p class="subtitle-spacing">Udemy - Maximilian Schwarzmüller</p>

                <h2>Web Front-End Foundation<h2>
                <p class="subtitle-spacing">Udacity</p>

                <h2>Adobe (Photoshop, Illustrator e InDesign)<h2>
                <p class="subtitle-spacing">Immaginare, School of Creation and Design - Ribeirão Preto - São Paulo</p>
            </div>
        </div>

        <div class="flex_container">
            <div class="detals flex_item_left">
                <h2><span class="underline">Experience</span></h2>
            </div>
            <div class="details flex_item_right">
                <h2>Junior Software Developer​, Centro Universitário Barão de Mauá<h2>
                <p class="subtitle-spacing">Ribeirão Preto - São Paulo (May/2018 – June/2019)</p>
                <p class="job-description"> I worked as a Full Stack Web Developer, designing and developing user-friendly web applications for
                students, teachers and also for almost every company's departments. Besides that, i also maintained
                lots of web applications and implemented new functionalities when needed. I used PHP, HTML, CSS,
                Javascript(jQuery) and SQL Server for almost every application.</p>

                <h2>Intern​,​ Centro Universitário Barão de Mauá<h2>
                <p class="subtitle-spacing">Ribeirão Preto - São Paulo (August/2016 – May/2018)</p>
                <p style="font-style:normal;">I worked as a Full Stack Web Developer using PHP, HTML, CSS, Javascript(jQuery) and SQL Server.</p>
            </div>
        </div>

        <div class="flex_container">
            <div class="flex_item_left">
                <h2><span class="underline">Technical Skills</span></h2>
            </div>
            <div class="flex_item_right">
                <h2>Coding</h2>
                <p>HTML, CSS, Javascript (React, React Native, Redux, Nodejs), Angular</p>
                <p>PHP, .NET, SQL Server, MySQL, Mongodb</p>
           
                <h2>Tools</h2>
                <p>Git, NPM/Yarn/Bower, Trello, Photoshop, Illustrator.</p>
                <p>PHP, .NET, SQL Server, MySQL, Mongodb</p>

                <h2>Languages</h2>
                <p>English, Fluent / Portuguese, Native.</p>
            </div>
        </div>

    </article>
    )
}
import React from 'react';

const METATAGS = {
    title: "Keith Richards - Resume",
    meta: {
        name: "description",
        content: "View the resume and work history of Raleigh, NC based Web Developer Keith Richards."
    }
};

class Resume extends React.Component {
    render() {
        return (
            <div className="content" id="resume">
                <div className="box">
                    <h1>Work Experience</h1>
                    <section className="work-experience">
                        <h2>Web Applications Developer - Dakno Marketing</h2>
                        <span>April 2015 - Present</span>
                        <ul>
                            <li>
                                Develop real estate search application using React,
                                ES6 JavaScript, and Webpack, connecting to legacy
                                PHP API. Maintain high code standards via ESLint
                                and commenting. 
                            </li>
                            <li>
                                Maintain over 50 databases of regional real estate
                                information, modifying existing update scripts as
                                required.
                            </li>
                            <li>
                                Setup new regional real estate databases and in 
                                accordance with regional Multiple Listing Service
                                board specific compliance guidelines. Code new 
                                update scripts to align data with existing 
                                infrastructure requirements.
                            </li>
                            <li>
                                Code client HTML/CSS as required.
                            </li>                  
                        </ul>
                    </section>
                    <section className="work-experience">
                        <h2>Cryptologic Linguist - United States Marine Corps</h2>
                        <span>May 2010 - May 2015</span>
                        <ul>
                            <li>
                                Served as Team Leader for Charlie Company, 4th
                                Platoon, 2d Radio Battalion. Oversaw day to 
                                day activities of 6 Marines in a highly dynamic
                                environment.
                            </li>
                            <li>
                                Instructed platoon-level courses on Signals 
                                Intelligence operations, in both classified 
                                and non-classified environments.
                            </li>
                            <li>
                                Led periodic inventories and routine maintenance
                                of over $4M in classified equipment, in accordance
                                with Department of Defense, Marine Corps, and unit policies.
                            </li>
                            <li>
                                Maintained proficiency in Modern Standard Arabic,
                                as outlined by the Interagency Language Roundtable.
                            </li>
                            <li>
                                Awarded Navy and Marine Corps Achievement Medal 
                                while forward deployed to Tripoli, Libya.
                            </li>
                            <li>
                                Achieved rank of Sergeant.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

export default Resume;

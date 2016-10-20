import React from 'react';
import MetaManager from 'react-metamanager';

const METATAGS = {
    title: "Keith Richards - Professional Life",
    meta: {
        name: "description",
        content: "A brief introduction to the professional life of Keith Richards, a Raleigh, NC based web developer."
    }
};

export default class Professional extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>Me: Professionally</h1>
                    <p>
                        No portfolio site would be complete without a rundown of
                        abilities and accolades. I'd be remiss if I left it out.
                    </p>
                    <ul>
                        <li>
                            I spent 3 years in college studying computer science.
                            Throughout the curriculum, I studied Object Oriented 
                            Programming in Java, Data Structures in C/C++, Relational
                            Database Management/SQL using some PL/SQL and Java, 
                            basic web development in PERL, with UNIX spread 
                            throughout.
                        </li>
                        <li>
                            With the knowledge attained in school, I was then able
                            to self-learn PHP, and wrote a few applications in it.
                        </li>
                        <li>
                            I gained familiarity with Python 2.7 through employment.
                            I like Python; It's elegant.
                        </li>
                        <li>
                            I self-learned React and wrote a real estate search 
                            application in it. The application was done in ES6 syntax,
                            and transpiled via Babel. In the process, I learned
                            about NPM, Webpack, and V8JS. I'm still very hesitant
                            to call myself a JavaScript developer though. Pre-ES6
                            syntax is a trip.
                        </li>
                        <li>
                            I received a certification in MongoDB from MongoDB
                            University.
                        </li>
                        <li>
                            I'm very comfortable in HTML/CSS.
                        </li>
                        <li>
                            I've dabbled in devops, but I'm far from experienced.
                            It's such a broad topic - I have years of learning to 
                            do.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

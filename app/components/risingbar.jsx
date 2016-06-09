import React from 'react';
import {PageHead} from "./pagehead";

const METATAGS = {
    title: "Keith Richards - Biography",
    meta: {
        name: "description",
        content: "You should check out my potfolio project.  It's pretty great."
    }
};

class RisingBar extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>Project: Rising Bar App</h1>
                    <h2>risingbarapp.com</h2>
                    <p>
                        Rising Bar began as a fun side project.  I had recently 
                        completed a MonogDB certification course and wanted to apply
                        my newfound knowledge.  It was also a chance for me to 
                        get a little more intimate with Python.
                    </p>
                    <p>
                        The project began as a nutrient logging system written in
                        Python, leveraging MongoDB as a database for user accounts.
                        It quickly became apparent that NoSQL wasn't suited for
                        this type of project, so I ultimately converted to a traditional
                        MySQL RDBMS.
                    </p>
                    <p>
                        As I began to push myself to break from comfort zones, I managed
                        to break the entire app. At that time, I learned the vital importance
                        of Git.  I used it at work, but didn't use it as well as I should.
                    </p>
                    <p>
                        I set up a working prototype pretty quickly, but it rendered
                        static HTML pages and lacked the modern app punch-up.  It was then
                        that I decided to break away from a Python/Flask/Jinja2 project
                        and transition to a Python/Flask RESTful API backend and a
                        React frontend.
                    </p>
                    <p>
                        The scope of the project has changed several times.  I'd
                        love to launch it as a hybrid app and eventually convert to
                        a native app.
                    </p>
                </div>
            </div>
        );
    }
}

export default PageHead(RisingBar, METATAGS);
import React from 'react';
import { Link } from 'react-router';

import {PageHead} from "./pagehead";

const METATAGS = {
    title: "Keith Richards - Raleigh, NC Web Developer",
    meta: {
        name: "description",
        content: "This is the project page of Keith Richards."
    }
};

class Projects extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>Check out my projects</h1>
                    <Link to="projects/portfolio"><h3>My Portfolio</h3></Link>
                    <Link to="projects/risingbar"><h3>Rising Bar App</h3></Link>
                </div>
            </div>
        );
    }
}

export default PageHead(Projects, METATAGS);
import React from 'react';
import { Link } from 'react-router';
import PageHead from "react-pagehead";

const METATAGS = {
    title: "Keith Richards - Projects",
    meta: {
        name: "description",
        content: "Take a look at some of the Keith Richards' projects."
    }
};

class Projects extends React.Component {
    render() {
        return (
            <div className="content">
                <Link to="/projects/portfolio" className="box half">
                    <h2>My Portfolio</h2>
                    <p>Check out my portfolio</p>
                </Link>
                <Link to="/projects/risingbar" className="box half">
                    <h2>Rising Bar App</h2>
                    <p>Learn more about Rising Bar App</p>
                </Link>
                <Link to="/projects/reactpagehead" className="box half">
                    <h2>React-PageHead</h2>
                    <p>Available on NPM!</p>
                </Link>
            </div>
        );
    }
}

export default PageHead(Projects, METATAGS);

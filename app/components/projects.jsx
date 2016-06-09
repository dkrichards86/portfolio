import React from 'react';
import { Link } from 'react-router';

class Projects extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>Check out my projects</h1>
                    <Link to="portfolio"><h3>My Portfolio</h3></Link>
                    <Link to="risingbar"><h3>Rising Bar App</h3></Link>
                </div>
            </div>
        );
    }
}

export default Projects;
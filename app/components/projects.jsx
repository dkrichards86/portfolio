import React from 'react';
import { Link } from 'react-router';

import {PageHead} from "./pagehead";

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
                <Link to="portfolio" className="box half">
                    <h3>My Portfolio</h3>
                    <p>Check out my portfolio</p>
                </Link>
                <Link to="risingbar" className="box half">
                    <h3>Rising Bar App</h3>
                    <p>Learn more about Rising Bar App</p>
                </Link>
            </div>
        );
    }
}

export default PageHead(Projects, METATAGS);
import React from 'react';
import { Link } from 'react-router';

import {PageHead} from "./pagehead";

const METATAGS = {
    title: "Keith Richards - Raleigh, NC Web Developer",
    meta: {
        name: "description",
        content: "This is the portfolio of Raleigh, NC based web developer and all-around cool guy, Keith Richards."
    }
};

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1><span className="largetext">Keith Richards </span>Raleigh, NC Based Web Developer</h1>
                    <Link to="professional"><h3>Professional Web Developer.</h3></Link>
                    <Link to="personal"><h3>Amateur Powerlifter.</h3></Link>
                    <Link to="resume"><h3>Former Marine.</h3></Link>
                    <h3>Consummate Bro.</h3>
                </div>
            </div>
        );
    }
}

export default PageHead(Home, METATAGS);
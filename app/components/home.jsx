import React from 'react';
import { Link } from 'react-router';
import PageHead from "react-pagehead";

const METATAGS = {
    title: "Keith Richards - Raleigh, NC Web Developer",
    meta: {
        name: "description",
        content: "This is the portfolio of Raleigh, NC based web developer and consummate bro, Keith Richards."
    }
};

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1 className="largetext">Keith Richards</h1>
                    <section className="blurb">
                        <strong>I am a...</strong>
                        <h3><Link to="professional">Professional Web Developer</Link></h3>
                        <h3><Link to="personal">Amateur Powerlifter</Link></h3>
                        <h3><Link to="resume">Former Marine</Link></h3>
                        <h3>Consummate Bro</h3>
                    </section>
                </div>
            </div>
        );
    }
}

export default PageHead(Home, METATAGS);
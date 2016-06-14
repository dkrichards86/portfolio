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
                <div>
                    <div className="component-image">
                        <img src="./images/consummatebro.png" alt="Raleigh, NC web developer Keith Richards is the consummate bro." />
                    </div>
                    <div className="box">
                        <h1 className="largetext">Keith Richards</h1>
                        <section className="blurb">
                            <p>
                                I am a professional web developer, an amateur powerlifter, a former Marine, and the consummate bro.
                            </p>
                            <Link to="/personal" className="home-btn">About Me</Link>
                            <Link to="/resume" className="home-btn">My Work</Link>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageHead(Home, METATAGS);
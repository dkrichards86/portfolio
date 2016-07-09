import React from 'react';
import { Link } from 'react-router';
import { pageHead } from './react-pagehead';

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
            <div className="content" id="home">
                <div>
                    <div className="component-image">
                        <h1>Keith Richards</h1>
                    </div>
                    <div className="box">
                        <section className="blurb">
                            <p>
                                I am a professional web developer, an amateur powerlifter, a former Marine, and the consummate bro.
                            </p>
                            <div className="home-buttons">
                                <Link to="/personal" className="home-btn">About Me</Link>
                                <Link to="/resume" className="home-btn">My Work</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default pageHead(Home, METATAGS);
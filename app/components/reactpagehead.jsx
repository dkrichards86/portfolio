import React from 'react';
import PageHead from "react-pagehead";

const METATAGS = {
    title: "Keith Richards - Rising Bar App",
    meta: {
        name: "description",
        content: "Rising Bar App is a series of weight training calculators and logs. The project is still in development."
    }
};

class ReactPagehead extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>Project: React-PageHead</h1>
                    <a href="http://www.dkrichards.com" title="React-PageHead">
                        <h2>React-PageHead</h2>
                    </a>
                    <p>
                        React-PageHead is my first published project.  I published
                        it to NPM under ISC license.
                    </p>
                    <p>
                        In 2014, when Google announced their ability to crawl JavaScript
                        content, a whole new world of SEO capabilities were revealed.
                        React-PageHead exists to tap into this new world.
                    </p>
                    <p>
                        React-PageHead renders dynamic page head content - meta tags,
                        titles, scripts, etc. - on a per-component basis. Feed it an
                        object of tags and it will parse them and write them to the DOM.
                    </p>
                    <p>
                        I spent a few weeks watching my changes appear on Google results.
                        In time, I finally felt confident enough in my project to publish it.
                    </p>
                    <p>
                        The project is available on <a href="https://www.npmjs.com/package/react-pagehead" title="React-PageHead on NPM">NPM</a> and <a href="https://github.com/dkrichards86/react-pagehead" title="React-PageHead on GitHub">Github</a>.
                    </p>
                </div>
            </div>
        );
    }
}

export default PageHead(ReactPagehead, METATAGS);
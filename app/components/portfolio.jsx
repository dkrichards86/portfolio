import React from 'react';
import {PageHead} from "./pagehead";

const METATAGS = {
    title: "Keith Richards - Biography",
    meta: {
        name: "description",
        content: "You should check out my potfolio project.  It's pretty great."
    }
};

class Portfolio extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>Project: Portfolio</h1>
                    <p>
                        My portfolio project was an opportunity for me to learn 
                        some more advanced React concepts.
                    </p>
                </div>
            </div>
        );
    }
}

export default PageHead(Portfolio, METATAGS);
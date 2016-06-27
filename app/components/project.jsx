import React from 'react';
import { Link } from 'react-router';
import PageHead from "react-pagehead";
const Markdown = require('markdown');

class Project extends React.Component {
    render() {
        let md_content = "Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it."
        let html_content = Markdown.toHTML( md_content );
        
        return (
            <div className="content">
                <div className="box">
                    {html_content}
                </div>
            </div>
        );
    }
}

export default Project;
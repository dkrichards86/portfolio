import React from 'react';
import { Link } from 'react-router';
import PageHead from "react-pagehead";
const markdown = require('markdown').markdown;

class Project extends React.Component {
    getMarkdown() {
        let path = `./assets/projects/${this.props.params.userId}`;
        let content = require(path);
        let htmlContent = markdown.toHTML(content);
        return {__html: htmlContent};
    }
    
    render() {
        return (
            <div className="content">
                <div className="box" dangerouslySetInnerHTML={this.getMarkdown()} />
            </div>
        );
    }
}

export default Project;
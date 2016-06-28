import React from 'react';
import { Link } from 'react-router';
import PageHead from "react-pagehead";
const markdown = require('markdown').markdown;

const VALID_PAGES = [
    "portfolio",
    "reactpagehead",
    "risingbarapp"
];

class Project extends React.Component {
    getMarkdown() {
        let pageParam;
        if (VALID_PAGES.indexOf(this.props.params.project) != -1) {
            pageParam = this.props.params.project;
        }
        else {
            pageParam = "invalid";
        }
        
        let content = require("../assets/projects/" + pageParam);
        let htmlContent = markdown.toHTML(content.content);
        
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

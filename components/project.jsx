import React from 'react';
import { Link } from 'react-router';
const markdown = require('markdown').markdown;

import 'whatwg-fetch';

const VALID_PAGES = [
    "portfolio",
    "reactpagehead",
    "risingbar"
];

class Project extends React.Component {
    componentWillMount() {
        let path = `api/${this.props.params.project}`;
        let projectData;
        
        fetch(path)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            projectData = JSON.parse(json);
        });
        
        /*
        let pageParam;
        if (VALID_PAGES.indexOf(this.props.params.project) != -1) {
            pageParam = this.props.params.project;
        }
        else {
            pageParam = "invalid";
        }
        
        this.pageContent = require("../assets/projects/" + pageParam);
        */
    }
    
    getMarkdown() {
        let htmlContent = markdown.toHTML(this.pageContent.content);
        
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
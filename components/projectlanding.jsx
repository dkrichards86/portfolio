import React from 'react';
import { Link } from 'react-router';
import { pageHead } from './react-pagehead';

import 'whatwg-fetch';

const METATAGS = {
    title: "Keith Richards - Projects",
    meta: {
        name: "description",
        content: "Take a look at some of the Keith Richards' projects."
    }
};

class ProjectLanding extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    componentWillMount() {
         let path = '../api/projectlist';
        
        fetch(path)
        .then( response => response.json() )
        .then( json => {
            this.setState({
                posts: json
            });
        });
    }
    
    render() {
        this.projects = this.state.posts.map( (project, i) => {
            let postLink = `projects/${project.slug}`;
            
            return <Link to={postLink} className="box" key={i}>
                    <h2>{project.title}</h2>
                    <p>{project.tagline}</p>
                </Link>;
        });
        
        return (
            <div className="content">
                {this.projects}
            </div>
        );
    }
}

export default pageHead(ProjectLanding, METATAGS);

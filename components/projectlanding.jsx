import React from 'react';
import { Link } from 'react-router';
import MetaManager from 'react-metamanager';

import 'whatwg-fetch';

const METATAGS = {
    title: "Keith Richards - Projects",
    meta: [
        { name: "description", content: "Take a look at some of the Keith Richards' projects." }
    ]
};

export default class ProjectLanding extends React.Component {
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
            
            return <Link to={postLink} className="box list-item" key={i}>
                    <h2>{project.title}</h2>
                    <p>{project.tagline}</p>
                </Link>;
        });
        
        return (
            <MetaManager tags={METATAGS}>
                <div className="content">
                    {this.projects}
                </div>
            </MetaManager>
        );
    }
}

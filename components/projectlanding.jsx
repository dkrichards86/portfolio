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

const PROJECTS = [
    {
        link: "/projects/portfolio",
        title: "My Portfolio",
        content: "Check out my portfolio"
    },
    {
        link: "/projects/risingbar",
        title: "Rising Bar App",
        content: "Learn more about Rising Bar App"
    },
    {
        link: "/projects/reactpagehead",
        title: "React-PageHead",
        content: "Available on NPM!"
    }
];

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {posts: []};
    }
    componentWillMount() {
         let path = '../api/projectlist';
        
        fetch(path)
        .then( response => response.json() )
        .then( json => {
            console.log(json);
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

export default pageHead(Projects, METATAGS);

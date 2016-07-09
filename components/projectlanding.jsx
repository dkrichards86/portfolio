import React from 'react';
import { Link } from 'react-router';
import { pageHead } from './react-pagehead';

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
    componentWillMount() {
        this.projects = PROJECTS.map( (project, i) => {
            return <Link to={project.link} className="box" key={i}>
                    <h2>{project.title}</h2>
                    <p>{project.content}</p>
                </Link>;
        });
    }
    
    render() {
        return (
            <div className="content">
                {this.projects}
            </div>
        );
    }
}

export default pageHead(Projects, METATAGS);
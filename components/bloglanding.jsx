import React from 'react';
import { Link } from 'react-router';
import { pageHead } from './react-pagehead';

import 'whatwg-fetch';

const METATAGS = {
    title: "Keith Richards - Blog",
    meta: {
        name: "description",
        content: "Read some of my badass blog posts."
    }
};

class BlogLanding extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    
    componentWillMount() {
         let path = '../api/postlist';
        
        fetch(path)
        .then( response => response.json() )
        .then( json => {
            this.setState({
                posts: json
            });
        });
    }
    
    render() {
        this.projects = this.state.posts.map( (postt, i) => {
            let postLink = `posts/${postt.slug}`;
            
            return <Link to={postLink} className="box" key={i}>
                    <h2>{postt.title}</h2>
                    <p>{postt.tagline}</p>
                </Link>;
        });
        
        return (
            <div className="content">
                {this.projects}
            </div>
        );
    }
}

export default pageHead(BlogLanding, METATAGS);
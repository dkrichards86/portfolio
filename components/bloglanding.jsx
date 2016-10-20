import React from 'react';
import { Link } from 'react-router';
import MetaManager from 'react-metamanager';

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
        
        this.postDate = null;
    }
    
    componentWillMount() {
         let path = '../api/postlist';
        
        fetch(path)
        .then( response => response.json() )
        .then( json => {
            this.setState({
                posts: json
            }, this.setDate());
        });
    }
    
    
    
    render() {
        this.projects = this.state.posts.map( (post, i) => {
            let postLink = `blog/${post.slug}`;
            
            return <Link to={postLink} className="box list-item" key={i}>
                    <h2>{post.title}</h2>
                    <p>{post.tagline}</p>
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

export default pageHead(BlogLanding, METATAGS);

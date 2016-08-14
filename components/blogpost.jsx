import React from 'react';
import { Link } from 'react-router';
const markdown = require('markdown').markdown;

import 'whatwg-fetch';

class Post extends React.Component {
    constructor() {
        super();

        this.state = {
            content: {body: "Loading"}
        };
    }

    componentDidMount() {
        let path = `../api/posts/${this.props.params.title}`;
        
        fetch(path)
        .then( response => response.json() )
        .then( json => {
            this.setState({
                content: json
            });
        });
    }
    
    getMarkdown(markdownContent) {
        let htmlContent = markdown.toHTML(markdownContent).replace(/^<p>/, "").replace(/<\/p>$/, "");

        return {__html: htmlContent};
    }
    
    render() {
	let h1;
        let h2;

        if (this.state.content.header) {
            h1 = <h1 dangerouslySetInnerHTML={this.getMarkdown(this.state.content.header)} />;
        }

        if (this.state.content.subheader) {
            h2 = <h2 dangerouslySetInnerHTML={this.getMarkdown(this.state.content.subheader)} />;
        }

        return (
            <div className="content">
                <article className="box">
                    {h1}
                    {h2}
                    <p dangerouslySetInnerHTML={this.getMarkdown(this.state.content.body)} />
                </article>
            </div>
        );
    }
}

export default Post;

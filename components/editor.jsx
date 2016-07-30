import React from 'react';
import Input from './input';
import TextArea from './textarea';

const fetch = require('whatwg-fetch');

export default class Editor extends React.Component {
    submitPost() {
        if (
            this.state.postkey && this.state.posttitle && this.state.postheader &&
            this.state.postsubheader && this.state.postbody
        ) { 
           
            fetch('/api/post', {
                method: 'POST',
                body: JSON.stringify({
                	key: this.state.postkey,
                	title: this.state.posttitle,
                    header: this.state.postheader,
                    subheader: this.state.postsubheader,
                    body: this.state.postbody,
            	})
            });
        }
    }
    
    render() {
        return (
            <div>
               <Input name="postkey" />
               <Input name="posttitle" />
               <Input name="postheader" />
               <Input name="postsubheader" />
               <TextArea name="postbody" />
               <button onClick={this.submitPost.bind(this)}>Submit</button>
            </div>);
    }
}
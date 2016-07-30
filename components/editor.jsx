import React from 'react';
import Input from './input';
import TextArea from './textarea';

import 'whatwg-fetch';

export default class Editor extends React.Component {
    handleChange(key, value) {
        let stateObj = {};
        
        stateObj[key] = value;
        
        this.setState(stateObj);
    
    }
    
    submitPost() {
        if (
            this.state.postkey && this.state.posttitle && this.state.postheader &&
            this.state.postsubheader && this.state.postbody
        ) {
	    fetch('/api/post', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
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
               <Input name="postkey" label="Auth Key" eventHandler={this.handleChange.bind(this, "postkey")}/>
               <Input name="posttitle" label="Title" eventHandler={this.handleChange.bind(this, "posttitle")}/>
               <Input name="postheader" label="Header" eventHandler={this.handleChange.bind(this, "postheader")}/>
               <Input name="postsubheader" label="Subheader" eventHandler={this.handleChange.bind(this, "postsubheader")}/>
               <TextArea name="postbody" label="Post Body" eventHandler={this.handleChange.bind(this, "postbody")}/>
               <button onClick={this.submitPost.bind(this)}>Submit</button>
            </div>);
    }
}

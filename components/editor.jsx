import React from 'react';
import Input from './input';
import TextArea from './textarea';

import 'whatwg-fetch';

export default class Editor extends React.Component {
    componentWillMount() {
	if (this.props.params.title) {
            this.isEdit = this.props.params.title;
        }

        let stateObj = {
            posttitle: "",
            postheader: "",
            postsubheader: "",
            postbody: ""
        };

        if (this.isEdit) {
	    stateObj['posttitle'] = this.isEdit;
	}        

        this.setState(stateObj);            

        this.getPost();
    }
    
    getPost() {
        let path = `../api/edit/${this.props.params.title}`;
        
        fetch(path)
        .then( response => response.json() )
        .then( json => {
            this.setState({
                postheader: json.header,
                postsubheader: json.subheader,
                postbody: json.body
            });
        });
    }
    
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

		let path = '../api/post';

		if (this.isEdit) {
		    path = `../api/edit/${this.isEdit}`;
		}            

	        fetch(path, {
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
            <div className="content">
               <div className="box">
                  <Input name="postkey" label="Auth Key" inputType="password" value="password" eventHandler={this.handleChange.bind(this, "postkey")}/>
                  <Input name="posttitle" label="Title" value={this.state.posttitle} eventHandler={this.handleChange.bind(this, "posttitle")}/>
                  <Input name="postheader" label="Header" value={this.state.postheader} eventHandler={this.handleChange.bind(this, "postheader")}/>
                  <Input name="postsubheader" label="Subheader" value={this.state.postsubheader} eventHandler={this.handleChange.bind(this, "postsubheader")}/>
                  <TextArea name="postbody" label="Post Body" value={this.state.postbody} eventHandler={this.handleChange.bind(this, "postbody")}/>
                  <button onClick={this.submitPost.bind(this)}>Submit</button>
               </div>
            </div>);
    }
}

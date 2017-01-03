import React from 'react';
import { Dropdown } from './dropdown';
import Input from './input';import TextArea from './textarea';

import 'whatwg-fetch';

export default class Editor extends React.Component {
    componentWillMount() {
        let stateObj = {
            posttitle: "",
            postheader: "",
            postsubheader: "",
            postbody: "",
            postmetatitle: "",
            postmetadesc: ""
        };
        
        if (this.props.location.pathname.indexOf("editpost") != -1) {
            stateObj["posttype"] = "post";
            this.isEdit = "post";
        }
        else if (this.props.location.pathname.indexOf("editproject") != -1) {
            stateObj["posttype"] = "project";
            this.isEdit = "project";
        }
        else {
            stateObj["posttype"] = "post";
        }

        this.setState(stateObj);            

        if (this.isEdit && this.props.params.title) {
            this.getPost();
        }
    }
    
    getPost() {
        let path = `../api/${this.isEdit}/${this.props.params.title}`;
        
        fetch(path)
        .then( response => response.json() )
        .then( json => {
            this.setState({
                postslug: this.props.params.title,
                posttitle: json.title,
                posttagline: json.tagline,
                postheader: json.header,
                postsubheader: json.subheader,
                postbody: json.body,
                postmetatitle: json.metatitle,
                postmetadesc: json.metadesc
            });
        });
    }
    
    handleChange(key, value) {
        let stateObj = {};
        
        stateObj[key] = value;
        
        this.setState(stateObj);
    
    }
    
    submitPost() {
        if (this.state.postkey && this.state.posttitle) {

    		let path = `../api/${this.state.posttype}/`;
	    
	        fetch(path, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        key: this.state.postkey,
                        type: this.state.posttype,
                        slug: this.state.postslug,
                        title: this.state.posttitle,
                        tagline: this.state.posttagline,
                        header: this.state.postheader,
                        subheader: this.state.postsubheader,
                        body: this.state.postbody,
                        metatitle: this.state.postmetatitle,
                        metadesc: this.state.postmetadesc
            	    })
                })
                .then( response => this.setState({response: response}));
        }
    }
    
    render() {
        let dropdownChoices = [
            {
                label: "Post",
                value: "post"
            },
            {
                label: "Project",
                value: "project"
            }
        ];
        
        return (
            <div className="content">
                <div className="box">
                    <Dropdown label="Type" options={dropdownChoices} value={this.state.posttype} eventHandler={this.handleChange.bind(this, "posttype")}/>
                    <Input name="postslug" label="URL Slug" value={this.state.postslug} eventHandler={this.handleChange.bind(this, "postslug")} />
                    <Input name="posttitle" label="Post Title" value={this.state.posttitle} eventHandler={this.handleChange.bind(this, "posttitle")} />
                    <Input name="posttagline" label="Post Tagline" value={this.state.posttagline} eventHandler={this.handleChange.bind(this, "posttagline")} />
                    <Input name="postmetatitle" label="Meta Title" value={this.state.postmetatitle} eventHandler={this.handleChange.bind(this, "postmetatitle")}/>
                    <Input name="postmetadesc" label="Meta Description" value={this.state.postmetadesc} eventHandler={this.handleChange.bind(this, "postmetadesc")}/>
                    <Input name="postheader" label="Header" value={this.state.postheader} eventHandler={this.handleChange.bind(this, "postheader")}/>
                    <Input name="postsubheader" label="Subheader" value={this.state.postsubheader} eventHandler={this.handleChange.bind(this, "postsubheader")}/>
                    <TextArea name="postbody" label="Post Body" value={this.state.postbody} eventHandler={this.handleChange.bind(this, "postbody")}/>
                    <Input name="postkey" label="Auth Key" inputType="password" value="password" eventHandler={this.handleChange.bind(this, "postkey")}/>
                  <button onClick={this.submitPost.bind(this)}>Submit</button>
               </div>
            </div>);
    }
}

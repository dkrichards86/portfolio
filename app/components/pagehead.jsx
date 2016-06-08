import React from "react";

const PAGE_HEAD_ATTR = "data-page-head"

export const PageHead = (Component, tags) => class extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.clearMetaTags();
        this.addTags(); 
    }
    
    addTags() {
        for (let key in tags) {
            if (tags.hasOwnProperty(key)) {
                if (key == "meta") {
                    if (Array.isArray(tags[key])) {
                        this.parseTagArray(tags[key]);
                    }
                    else {
                        this.addMetaTag(tags[key]);
                    }
                }
                else if (key == "title") {
                    this.addTitleTag(tags[key]);
                }
            }
        }
    }
    
    addMetaTag(tagData) {
        let newTag = document.createElement("meta");
        for (let dataValue in tagData) {
            if (tagData.hasOwnProperty(dataValue)) {
                newTag[dataValue] = tagData[dataValue];
            }
        }
        
        newTag.setAttribute(PAGE_HEAD_ATTR, true);
        document.head.appendChild(newTag);
    }
    
    addTitleTag(text) {
        document.title = text;
    }
    
    clearMetaTags() {
        let elems = document.querySelectorAll(`[${PAGE_HEAD_ATTR}]`);
        
        for (let i = 0; i < elems.length; i++) {
            elems[i].parentNode.removeChild(elems[i]);
        }
    }
    
    parseTagArray(tagData) {
        tagData.map( (oneTag) => {
            this.addMetaTag(oneTag);
        });
    }
    
    render() {
        return <Component {...this.props} />;
    }
};
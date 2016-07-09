import React from "react";

const PAGE_HEAD_ATTR = "data-page-head"

const VALID_KEYS = [
    "base",
    "link",
    "meta",
    "script",
    "title"
];

export const pageHead = (Component, tags) => {
    class PageHead extends Component {
        constructor(props) {
            super(props);
        }

        componentWillMount() {
            this._clearExistingTags();
            this._addTags();
        }

        _addTags() {
            for (let key in tags) {
                if (tags.hasOwnProperty(key) && this._validKey(key)) {
                    if (key == "title") {
                        this._addTitleTag(tags[key]);
                    }
                    else {
                        if (Array.isArray(tags[key])) {
                            this._parseTagArray(key, tags[key]);
                        }
                        else {
                            this._addTag(key, tags[key]);
                        }
                    }
                }
            }
        }

        _validKey(key) {
            return VALID_KEYS.indexOf(key) != -1;
        }

        _parseTagArray(key, tagData) {
            tagData.map((oneTag) => {
                this.addTag(key, oneTag);
            });
        }

        _clearExistingTags() {
            let elems = document.querySelectorAll(`[${PAGE_HEAD_ATTR}]`);

            for (let i = 0; i < elems.length; i++) {
                elems[i].parentNode.removeChild(elems[i]);
            }
        }

        _addTag(key, tagData) {
            let newTag = document.createElement(key);
            for (let dataValue in tagData) {
                if (tagData.hasOwnProperty(dataValue)) {
                    newTag[dataValue] = tagData[dataValue];
                }
            }

            newTag.setAttribute(PAGE_HEAD_ATTR, true);
            document.head.appendChild(newTag);
        }

        _addTitleTag(text) {
            document.title = text;
        }

        render() {
            return <Component {...this.props} />;
        }
    }
    
    return PageHead;
}
var PAGE_HEAD_ATTR = "data-page-head";

var VALID_KEYS = [
    "base",
    "link",
    "meta",
    "script",
    "title"
];
    
function Pagehead(tags) {
    this.tags = tags;
}

Pagehead.prototype._addTag = function(key, tagData) {
    var newTag = document.createElement(key);
    for (var dataValue in tagData) {
        if (tagData.hasOwnProperty(dataValue)) {
            newTag[dataValue] = tagData[dataValue];
        }
    }

    newTag.setAttribute(PAGE_HEAD_ATTR, true);
    document.head.appendChild(newTag);
};

Pagehead.prototype._addTags = function() {
    for (var key in this.tags) {
        if (this.tags.hasOwnProperty(key) && this._validKey(key)) {
            if (key == "title") {
                this._addTitleTag(this.tags[key]);
            }
            else {
                if (Array.isArray(this.tags[key])) {
                    this._parseTagArray(key, this.tags[key]);
                }
                else {
                    this._addTag(key, this.tags[key]);
                }
            }
        }
    }
};

Pagehead.prototype._addTitleTag = function(text) {
    document.title = text;
};

Pagehead.prototype.applyTags = function() {
    this._clearExistingTags();
    this._addTags();
};

Pagehead.prototype._clearExistingTags = function() {
    var elems = document.querySelectorAll(`[${PAGE_HEAD_ATTR}]`);

    for (var i = 0; i < elems.length; i++) {
        elems[i].parentNode.removeChild(elems[i]);
    }
};

Pagehead.prototype._parseTagArray = function(key, tagData) {
    tagData.map((oneTag) => {
        this.addTag(key, oneTag);
    });
};

Pagehead.prototype._validKey = function(key) {
    return VALID_KEYS.indexOf(key) != -1;
};

module.exports = Pagehead;

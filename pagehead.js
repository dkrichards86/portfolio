var pageHead = function(tags) {
    var PAGE_HEAD_ATTR = "data-page-head"

    var VALID_KEYS = [
        "base",
        "link",
        "meta",
        "script",
        "title"
    ];

    this._clearExistingTags();
    this._addTags();

    function _addTags() {
        for (var key in tags) {
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

    function _validKey(key) {
        return VALID_KEYS.indexOf(key) != -1;
    }

    function _parseTagArray(key, tagData) {
        tagData.map((oneTag) => {
            this.addTag(key, oneTag);
        });
    }

    function _clearExistingTags() {
        var elems = document.querySelectorAll(`[${PAGE_HEAD_ATTR}]`);

        for (var i = 0; i < elems.length; i++) {
            elems[i].parentNode.removeChild(elems[i]);
        }
    }

    function _addTag(key, tagData) {
        var newTag = document.createElement(key);
        for (var dataValue in tagData) {
            if (tagData.hasOwnProperty(dataValue)) {
                newTag[dataValue] = tagData[dataValue];
            }
        }

        newTag.setAttribute(PAGE_HEAD_ATTR, true);
        document.head.appendChild(newTag);
    }

   function _addTitleTag(text) {
        document.title = text;
    }
}

module.exports = pageHead;
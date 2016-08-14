/**
 * Search Handler
 */
const React = global.React;
const objectAssign = require("object-assign");

import ComboBox from "./combobox";
import Dropdown from "./dropdown";
import DropdownMulti from "./dropdownmulti";
import Input from "./input";
import OmniBox from "./omnibox";
import SlideToggle from "./slidetoggle";

import Common from "../common";
import Ajax from "../ajax";

import "../css/components.css";

export default class SearchHandler extends React.Component {
    /**
     * Filter property types by selected classes
     */
    filterListingStatuses() {
        this.filteredListingStatuses = [];
        let dataSet = this.props.fields["listing_statuses"];

        let statusType = this.state.data.status_type || 0;

        for (let i = 0; i < dataSet.length; i++) {
            let item = dataSet[i].slice();
            if (statusType == 0 && item[2] == 0) {
                this.filteredListingStatuses.push(item);
            }
        }
    }

    /**
     * Filter property types by selected classes
     */
    filterPropertyTypes() {
        this.filteredPropertyTypes = [];
        let dataSet = this.props.fields["property_types"];
        let stagingArr = this.props.fields["property_class"].map( (index) => {
            return index[0];
        });
        let propertyClasses = [];

        if ((this.state.data["property_class"]) && (this.state.data["property_class"].length > 0)) {
            propertyClasses = this.state.data["property_class"];

            for (let i = 0; i < dataSet.length; i++) {
                let item = dataSet[i].slice();

                if (propertyClasses.indexOf(item[2].toString()) != -1) {
                    item[2] = this.props.fields["property_class"][stagingArr.indexOf(item[2])][1];
                    this.filteredPropertyTypes.push(item);
                }
            }
        }
    }

    getOmniFields(){
        const VALID_OMNI_FIELDS = [9, 8, 10, 11, 21, 20, 18, 17];



        return VALID_OMNI_FIELDS.map( (field) => {
            if (this.props.fields.data[0].hasOwnProperty(field)) {
                return field;
            }
        }).filter( (elem) => {
            return elem != undefined;
        });
    }

    /**
     * Groups search params of like field type
     * @param dataSet incoming search field XML
     * @returns {Array}
     */
    groupFilterSearches(dataSet){
        if (!dataSet) {
            return null;
        }

        let dataOut = [];

        for (let key in dataSet){
            if (dataSet[key] != "") {
                dataOut.push(dataSet[key]);
            }
        }

        return dataOut;
    }

    /**
     * Handles state changes
     * @param key
     * @param value
     */
    handleChange(key, value) {
        let stateObject = Common.changeHandler(key, value, this.state.data);
        this.setState({data: stateObject});
    }

    /**
    * Form submission
    */
    handleSubmit() {
        this.setSession(this.asyncSubmit);
    }

    /**
     * Pack the location fields into a centralized omni field
     * @param stateObj
     * @returns {*}
     */
    packOmniLocations(stateObj) {
        let dataSet = ["city", "county", "address", "zip", "mls_num", "subdivision", "condo", "area", "keyword", "map"];

        for (let i = 0; i < dataSet.length; i++) {
            let key = dataSet[i];

            if (!stateObj[key]) {
                continue;
            }

            if (typeof stateObj["omni"] == "undefined") {
                stateObj["omni"] = [];
            }

            if (typeof stateObj[key] == "object") {
                //iterate over array keys
                for (let j = 0; j < stateObj[key].length; j++) {
                    stateObj["omni"].push([stateObj[key][j], key, key]);
                }
            }
            else if (typeof stateObj[key] == "string") {
                //but don't interate over string chars
                stateObj["omni"].push([stateObj[key], key, key]);
            }

            delete(stateObj[key]);
        }

        return stateObj;
    }

    /**
     * Render a Combobox
     * @param key element identifier
     * @param dataSource data object
     * @param elemLabel title
     * @param className class name
     * @returns {XML}
     */
    renderCombobox(key, dataSource, elemLabel, className="dakidx-box dakidx-half") {
        return (
            <ComboBox
                placeholder={elemLabel}
                label={elemLabel}
                className={className}
                id={key}
                key={key}
                dataSet={dataSource}
                value={this.state.data[key]}
                event={this.handleChange.bind(this, key)} />
        );
    }

    /**
     * Render a Dropdown
     * @param key element identifier
     * @param dataSource data object
     * @param elemLabel title
     * @returns {XML}
     */
    renderDropdown(key, dataSource, elemLabel) {
        return (
            <Dropdown
                label={elemLabel}
                className="dakidx-box dakidx-half"
                id={key}
                key={key}
                dataSet={dataSource}
                value={this.state.data[key]}
                event={this.handleChange.bind(this, key)} />
        );
    }

    /**
     * Render a Multiselect
     * @param key element identifier
     * @param dataSource data object
     * @param elemLabel title
     * @param className class name
     * @param tag tag
     * @returns {XML}
     */
    renderDropdownMulti(key, dataSource, elemLabel, className, tag = "") {
        let dropdownValue = [];

        if (typeof this.state.data[key] != "undefined") {
            dropdownValue = this.state.data[key];
        }

        return (
            <DropdownMulti
                label={elemLabel}
                tag={tag}
                className={className}
                id={key}
                key={key}
                dataSet={dataSource}
                value={dropdownValue}
                event={this.handleChange.bind(this, key)} />
        );
    }

    /**
     * Render the omnibox
     * @param className
     * @returns {XML}
     */
    renderOmniBox(className="dakidx-box") {
        return (<OmniBox
            label="Search by Location"
            placeholder="Where would you like to search?"
            tag="header"
            className={className}
            fields={this.getOmniFields()}
            value={this.state.data["omni"]}
            property_class={this.state.data["property_class"]}
            status_type={this.state.data["status_type"]}
            event={this.handleChange.bind(this, "omni")}
            />);
    }

    /**
     * Render a Slide toggle
     * @param key element identifier
     * @param elemLabel title
     * @returns {XML}
     */
    renderSlideToggle(key, elemLabel) {
        return (
            <SlideToggle
                label={elemLabel}
                id={key}
                key={key}
                value={this.state.data[key]}
                event={this.handleChange.bind(this, key)}
                />
        );
    }

    /**
     * Render a Slide toggle
     * @param key element identifier
     * @param elemLabel title
     * @returns {XML}
     */
    renderTextInput(key, elemLabel) {
        return (
            <Input
                type="text"
                label={elemLabel}
                id={key}
                key={key}
                canClear={true}
                value={this.state.data[key]}
                event={this.handleChange.bind(this, key)}
                />
        );
    }

    /**
     * Build valid data to set session
     * @param success
     * @param dataSet
     */
    setSession(success, dataSet=this.state.data) {
        //validate our current state
        let validState = this.validator(dataSet);

        //break the omni field into it's components
        let stateObj = this.unpackOmniLocations(validState);

        if (success.name == "bound asyncClear") {
            success();
        }
        else {
            let args = objectAssign({}, stateObj);
            args["search_data_sent"] = "true";

            for (let key in args) {
                if (key != "dak_coords") {
                    args[key] = encodeURIComponent(args[key]).split("%22").join("\"");
                }
            }

            let postbody = "arguments=" + JSON.stringify(args);
            var url = this.props.solution + "/data/setsession";
            if (this.props.session_id) {
                url = this.props.solution + "/data/setsession/" + this.props.session_id
            }

            Ajax.postAJAX(url, postbody, success, this.asyncFailure);
        }

        //update React state to reflect these changes
        this.setState({data: stateObj});
    }

    /**
     * Separate the combined omni field into its subordinate fields
     * @param dataSet
     * @returns {*}
     */
    unpackOmniLocations(dataSet) {
        let stateObj = objectAssign({}, dataSet);

        if (! stateObj["omni"]) {
            return stateObj;
        }

        var has_map_bounds = false;

        for (let i = 0; i < stateObj["omni"].length; i++) {
            let key = stateObj["omni"][i][2];
            let value = stateObj["omni"][i][0];

            if (typeof stateObj[key] == "undefined") {
                stateObj[key] = [];
            }
            else if (typeof stateObj[key] == "string") {
                let tempStorage = stateObj[key];
                stateObj[key] = [];
                if (tempStorage != "") {
                    stateObj[key].push(tempStorage);
                }
            }

            if (key == "map") {
                has_map_bounds = true;
            }

            stateObj[key].push(value);
        }

        if (!has_map_bounds) {
            delete(stateObj["dak_coords"]);
            delete(stateObj["dak_coords_type"]);
        }

        return stateObj;
    }

    /**
     * Make sure the selected statuses are available in the specified status type
     */
    validateListingStatuses(dataSet) {
        if ((! this.props.fields["listing_statuses"]) || (! dataSet["listing_statuses"])) {
            return dataSet;
        }

        let stateObj = objectAssign({}, dataSet);

        //build a lookup of status ids
        let statusLookup = this.props.fields["listing_statuses"].map( (status) => {
            return status[0];
        });

        let statusType = stateObj.status_type || 0;
        let selectedStatuses = stateObj["listing_statuses"];
        let stagingArray = [];

        for (let i = 0; i < selectedStatuses.length; i++) {
            let item = selectedStatuses[i];

            //get the full status data from the id
            let oneStatus = this.props.fields["listing_statuses"][statusLookup.indexOf(item)];

            //remove the index if it doesn't match the status_type
            if (statusType != oneStatus[2]) {
                stagingArray.push(item);
            }
        }

        //removed staged property types
        for (let j = 0; j < stagingArray.length; j++) {
            let popIndex = selectedStatuses.indexOf(stagingArray[j]);
            if (popIndex != -1) {
                selectedStatuses.splice(popIndex, 1);
            }
        }

        stateObj["listing_statuses"] =  selectedStatuses;

        return stateObj;


    }

    /**
     * Make sure prices are ordered appropriately
     * @param dataSet
     * @returns {*}
     */
    validatePrice(dataSet) {
        let stateObj = objectAssign({}, dataSet);

        let minPrice = parseInt(stateObj["min_price"]);
        let maxPrice = parseInt(stateObj["max_price"]);

        if (maxPrice > 0 && minPrice > 0 && maxPrice < minPrice) {
            stateObj["min_price"] = maxPrice;
            stateObj["max_price"] = minPrice;
        }

        return stateObj;
    }

    /**
     * Coerce a default property class if none selected
     */
    validatePropertyClasses(dataSet) {
        const DEFAULT_PROPERTY_CLASS = this.props.fields["property_class"][0][0];
        let stateObj = objectAssign({}, dataSet);

        if (!stateObj["property_class"] || stateObj["property_class"].length == 0) {
            stateObj["property_class"] = [DEFAULT_PROPERTY_CLASS];
        }

        return stateObj;
    }

    /**
     * Ensure property types and classes align
     */
    validatePropertyTypes(dataSet) {
        if (! this.props.fields["property_types"] || !dataSet.hasOwnProperty("property_types")) {
            return dataSet;
        }

        let stateObj = objectAssign({}, dataSet);

        let propertyTypeData = this.props.fields["property_types"];
        let typeLookup = propertyTypeData.map( (propType) => {
            return propType[0];
        });

        let stagingArray = [];

        let propertyTypeState = stateObj["property_types"];

        //stage invalid items for removal
        for (let i = 0; i < propertyTypeState.length; i++) {
            let item = propertyTypeState[i];

            let selectedType = propertyTypeData[typeLookup.indexOf(item)];

            if (stateObj["property_class"].indexOf(selectedType[2]) == -1) {
                stagingArray.push(item);
            }
        }

        //removed staged property types
        for (let j = 0; j < stagingArray.length; j++) {
            let popIndex = propertyTypeState.indexOf(stagingArray[j]);
            if (popIndex != -1) {
                propertyTypeState.splice(popIndex, 1);
            }
        }

        stateObj["property_types"] =  propertyTypeState;

        return stateObj;
    }

    /**
     * Validation Controller
     * @param seed data, validation stage
     * @returns {*}
     */
    validator(seed, stage="submit") {
        let validPC = this.validatePropertyClasses(seed);
        let validPT = this.validatePropertyTypes(validPC);
        let validLS = this.validateListingStatuses(validPT);

        if (stage == "pane") {
            return validLS;
        }
        else {
            return this.validatePrice(validLS);
        }
    }
}

global.SearchHandler = SearchHandler;

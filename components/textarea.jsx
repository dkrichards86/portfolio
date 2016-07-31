import React from 'react';

export default class TextArea extends React.Component {
    constructor(props) {
        super();
        
        this.state = {
            textValue: ""
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Set the initial state of the combobox
     */
    componentWillMount(){
        this.resizeBox();
        this.setState({textValue: this.props.value});
    }

    /**
     * Incoming props
     * @param props
     */
    componentWillReceiveProps(props) {
        this.resizeBox();
        this.setState({textValue: props.value});
    }

    /**
     * Blur the omnibox label
     */
    handleBlur() {
        this.props.eventHandler(this.state.textValue);
    }

    /**
     * Handles text input
     * @param event
     */
    handleChange(event) {
        this.resizeBox();

        this.setState({textValue: event.target.value});
    }

    /**
     * Resize based on key input
     */
    resizeBox() {
        this.refs.textbox.style.height = "";
        this.refs.textbox.style.height = this.refs.textbox.scrollHeight + "px";

    }

    /**
     * Render component
     * @returns {XML}
     */
    render() {
        return (
            <div className="editor-block"
                 onBlur={this.handleBlur}
                 tabIndex="-1" >
                <label>
                    {this.props.label}
                </label>
                <textarea onChange={this.handleChange} value={this.state.textValue} ref="textbox">{this.props.value}</textarea>
            </div>
        );
    }
}
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

    componentDidMount() {
        this.setState({textValue: this.props.value}, this.resizeBox());
    }

    componentWillReceiveProps(props) {
        this.setState({textValue: props.value}, this.resizeBox());
    }

    handleBlur() {
        this.props.eventHandler(this.state.textValue);
    }

    handleChange(event) {
        this.resizeBox();

        this.setState({textValue: event.target.value});
    }

    resizeBox() {
        this.refs.textbox.style.height = "";
        this.refs.textbox.style.height = this.refs.textbox.scrollHeight + "px";
    }

    render() {
        return (
            <div className="editor-block editor-textarea"
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

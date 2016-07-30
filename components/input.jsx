import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
        
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    
    componentWillMount(){
        this.setState({textValue: this.props.value});
    }

    componentWillReceiveProps(props) {
        this.setState({textValue: props.value});
    }

    handleBlur() {
        this.setState({
            focus: false
        });
        
        this.props.eventHandler(this.state.textValue);
    }
    
    handleChange(event) {
        this.setState({textValue: event.target.value});
    }

    handleFocus() {
        this.setState({
            focus: true
        });
    }

    render() {
        var labelClass = "";
        if (this.state.focus) {
            labelClass = "focused";
        }

        return (
            <div className={this.props.className}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}>
                <label className={labelClass}>
                    {this.props.placeholder}
                </label>
                <input name={this.props.name} onChange={this.handleChange} />
            </div>);
    }
}

Input.propTypes = {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
}
import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
    }

    handleBlur() {
        this.setState({
            focus: false
        });
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
                onFocus={this.handleFocus.bind(this)}
                onBlur={this.handleBlur.bind(this)}>
                <label className={labelClass}>
                    {this.props.placeholder}
                </label>
                <input name={this.props.name} />
            </div>);
    }
}

Input.propTypes = {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
}
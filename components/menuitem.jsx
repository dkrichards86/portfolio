import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
    render() {
        return (
            <Link to={this.props.route} activeClassName="active">
                {this.props.label}
            </Link>
        );
    }
}
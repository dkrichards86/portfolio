import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
    render() {
        return (
            <nav>
                {this.props.children}
            </nav>
        );
    }
}
import React from 'react';
import { IndexLink, Link } from 'react-router';

import Menu from './menu';
import MenuItem from './menuitem';

export default class Social extends React.Component {
    render() {
        return (
            <aside>
                <a href="http://www.github.com"><img src="./images/github.png" alt="Browse my work on GitHub" /></a>
                <a href="http://codepen.io/dkrichards86/"><img src="./images/codepen.png" alt="See some work on CodePen" /></a>
                <a href="www.linkedin.com/in/dkrichards"><img src="./images/linkedin.png" alt="View my profile on LinkedIn" /></a>
            </aside>
        );
    }
}
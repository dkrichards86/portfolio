import React from 'react';
import { IndexLink, Link } from 'react-router';

import Menu from './menu';
import MenuItem from './menuitem';
import Social from './social';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <IndexLink to="/"><span className="headline">Keith Richards</span></IndexLink>
                <Social />
                <Menu>
                    <MenuItem label="Life" route="personal" icon="code" />
                    <MenuItem label="Work" route="professional" icon="person" />
                    <MenuItem label="Resume" route="resume" icon="work" />
                </Menu>
            </header>
        );
    }
}
import React from 'react';
import { IndexLink, Link } from 'react-router';

import Menu from './menu';
import MenuItem from './menuitem';
import Social from './social';

export default class Header extends React.Component {
    render() {
        return (
            <div className="sticky">
                <header>
                    <IndexLink to="/"><span className="headline">Keith Richards</span></IndexLink>
                    <Social />
                    <Menu>
                        <MenuItem label="Life" route="/personal" icon="code" />
                        <MenuItem label="Work" route="/professional" icon="person" />
                        <MenuItem label="Resume" route="/resume" icon="work" />
                        <MenuItem label="Projects" route="/projects" icon="work" />
                    </Menu>
                </header>
            </div>
        );
    }
}
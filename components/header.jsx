import React from 'react';
import { IndexLink, Link } from 'react-router';

import Social from './social';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <IndexLink to="/"><span className="headline">Keith Richards</span></IndexLink>
                <Social />
            </header>
        );
    }
}

import React from 'react';
import MenuItem from "./menuitem";

export default class Menu extends React.Component {
    render() {
        return (
            <nav>
                <MenuItem label="Life" route="/personal" />
                <MenuItem label="Work" route="/professional" />
                <MenuItem label="Resume" route="/resume" />
                <MenuItem label="Projects" route="/projects" />
            </nav>
        );
    }
}
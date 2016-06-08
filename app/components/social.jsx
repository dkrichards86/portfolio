import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class Social extends React.Component {
    constructor() {
        this.state = {toggled: false};
    }
    
    handleClick() {
        if (this.state.toggled) {
            this.refs.social.style.display = "none";
        }
        else {
            this.refs.social.style.display = "block";
        }
        
        this.setState({toggled: !this.state.toggled});
    }
    
    render() {
        return (
            <aside>
                <i className="menu-icon" onClick={this.handleClick.bind(this)} />
                <div className="soclial-links" rel="social">
                    <a href="https://github.com/dkrichards86/" target="_blank"><img src="./images/github.png" alt="Browse my work on GitHub" /></a>
                    <a href="http://codepen.io/dkrichards86/" target="_blank"><img src="./images/codepen.png" alt="See some work on CodePen" /></a>
                    <a href="www.linkedin.com/in/dkrichards" target="_blank"><img src="./images/linkedin.png" alt="View my profile on LinkedIn" /></a>
                </div>
            </aside>
        );
    }
}
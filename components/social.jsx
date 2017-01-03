import React from 'react';

export default class Social extends React.Component {
    constructor() {
        super();
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
                <div className="social-links" ref="social">
                    <a href="https://github.com/dkrichards86/" target="_blank" title="View code samples on GitHub"><img src="/images/github.png" alt="Browse my work on GitHub" /></a>
                    <a href="http://codepen.io/dkrichards86/" target="_blank" title="View code samples on CodePen"><img src="/images/codepen.png" alt="See some work on CodePen" /></a>
                    <a href="http://www.linkedin.com/in/dkrichards" target="_blank" title="View my profile on LinkedIn"><img src="/images/linkedin.png" alt="View my profile on LinkedIn" /></a>
                </div>
            </aside>
        );
    }
}
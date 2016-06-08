import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './header';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ReactCSSTransitionGroup
                    component="main"
                    transitionName="fade"
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
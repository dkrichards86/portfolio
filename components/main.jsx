import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './header';
import Menu from './menu';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main">
                    <Menu />
                    <ReactCSSTransitionGroup
                        component="main"
                        transitionName="slide"
                        transitionEnterTimeout={400}
                        transitionLeaveTimeout={400}>
                        {React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

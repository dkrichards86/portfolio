import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory, useRouterHistory } from 'react-router';

import Header from './components/header';
import Home from './components/home';
import Invalid from './components/invalid';
import Main from './components/main';
import Personal from './components/personal';
import Portfolio from './components/portfolio';
import Professional from './components/professional';
import Projects from './components/projects';
import ReactPagehead from './components/reactpagehead';
import Resume from './components/resume';
import RisingBar from './components/risingbar';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="reactpagehead" component={ReactPagehead} />
            <Route path="personal" component={Personal} />
            <Route path="portfolio" component={Portfolio} />
            <Route path="professional" component={Professional} />
            <Route path="projects" component={Projects} />
            <Route path="resume" component={Resume} />
            <Route path="risingbar" component={RisingBar} />
        </Route>
        <Route path="*" component={Invalid}/>
    </Router>,
    document.getElementById('app')
);
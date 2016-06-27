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
import Project from './components/project';
import ProjectLanding from './components/projectlanding';
import ReactPagehead from './components/reactpagehead';
import Resume from './components/resume';
import RisingBar from './components/risingbar';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="personal" component={Personal} />
            <Route path="professional" component={Professional} />
            <Route path="projects" component={ProjectLanding} />
            <Route path="projects/:project" component={Project} />
            <Route path="projects/portfolio" component={Portfolio} />
            <Route path="projects/reactpagehead" component={ReactPagehead} />
            <Route path="projects/risingbar" component={RisingBar} />
            <Route path="resume" component={Resume} />
        </Route>
        <Route path="*" component={Invalid}/>
    </Router>,
    document.getElementById('app')
);

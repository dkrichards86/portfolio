import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import Home from './components/home';
import Main from './components/main';
import Personal from './components/personal';
import Professional from './components/professional';
import Project from './components/project';
import ProjectLanding from './components/projectlanding';
import Resume from './components/resume';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="personal" component={Personal} />
            <Route path="professional" component={Professional} />
            <Route path="projects" component={ProjectLanding} />
            <Route path="projects/:title" component={Project} />
            <Route path="resume" component={Resume} />
        </Route>
    </Router>,
    document.getElementById('app')
);

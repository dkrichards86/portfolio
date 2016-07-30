import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import Editor from './components/editor';
import Header from './components/header';
import Home from './components/home';
import Invalid from './components/invalid';
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
            <Route path="editor" component={Editor} />
            <Route path="editor/:title" component={Editor} />
            <Route path="personal" component={Personal} />
            <Route path="professional" component={Professional} />
            <Route path="projects" component={ProjectLanding} />
            <Route path="projects/:project" component={Project} />
            <Route path="resume" component={Resume} />
        </Route>
        <Route path="*" component={Invalid}/>
    </Router>,
    document.getElementById('app')
);

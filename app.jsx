import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import BlogLanding from './components/bloglanding';
import Editor from './components/editor';
import Header from './components/header';
import Home from './components/home';
import Invalid from './components/invalid';
import Main from './components/main';
import Personal from './components/personal';
import Post from './components/blogpost';
import Professional from './components/professional';
import Project from './components/project';
import ProjectLanding from './components/projectlanding';
import Resume from './components/resume';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="blog" component={BlogLanding} />
            <Route path="blog/:title" component={Post} />
            <Route path="newproject" component={Editor} />
            <Route path="newpost" component={Editor} />
            <Route path="newproject" component={Editor} />
            <Route path="newpost" component={Editor} />
            <Route path="personal" component={Personal} />
            <Route path="professional" component={Professional} />
            <Route path="editpost/:title" component={Editor} />
            <Route path="editproject/:title" component={Editor} />
            <Route path="projects" component={ProjectLanding} />
            <Route path="projects/:title" component={Project} />
            <Route path="resume" component={Resume} />
        </Route>
        <Route path="*" component={Invalid}/>
    </Router>,
    document.getElementById('app')
);

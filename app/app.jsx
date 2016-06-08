import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory, useRouterHistory } from 'react-router';
//import { createHashHistory } from '../node_modules/react-router/node_modules/history';
import Header from './components/header';
import Home from './components/home';
import Invalid from './components/invalid';
import Main from './components/main';
import Personal from './components/personal';
import Professional from './components/professional';
import Resume from './components/resume';

//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="personal" component={Personal} />
            <Route path="professional" component={Professional} />
            <Route path="resume" component={Resume} />
        </Route>
        <Route path="*" component={Invalid}/>
    </Router>,
    document.getElementById('app')
);
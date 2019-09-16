import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter as Router} from 'react-router-dom'
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HeaderComponent from './HeaderComponent';
import ProjectsPageContent from './ProjectPageContent';

const routing = (
    <Router>
        <HeaderComponent />
        <div>
            <Route path="/" component={App}/>
            <Route path="/repos" component={ProjectsPageContent}/>
        </div>
    </Router>
) 

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter as Router} from 'react-router-dom'
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PageContent from './PageContent'
import HeaderComponent from './HeaderComponent';

const routing = (
    <Router>
        <HeaderComponent />
        <div>
            <Route path="/" component={App}/>
            <Route path="/repos" component={PageContent}/>
        </div>
    </Router>
) 

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

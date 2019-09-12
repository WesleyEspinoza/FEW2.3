import React from 'react';
import { Route, Link, HashRouter as Router } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PageContact from './PageContact.js'
import PageAbout from './PageAbout.js'
import ProductDetail from './ProductDetail';

const routing = (
  <Router>
    <Header />
    <div>
      <Route path="/home" component={App} />
      <Route path="/about" component={PageAbout} />
      <Route path="/contact" component={PageContact} />
      <Route path="/product-detail" component={ProductDetail} />
    </div>
    <Footer />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

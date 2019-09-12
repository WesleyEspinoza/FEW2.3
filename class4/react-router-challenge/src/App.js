import React from 'react';
import './App.css';

import Header from './Header'
import Footer from './Footer'

import ProductsAll from './ProductsAll'
import PageAbout from './PageAbout'
import PageContact from './PageContact'
import ProductDetail from './ProductDetail'

import data from './data'

function App() {
  return (
    <div className="App" style={{width:'960px', margin: 'auto'}}>


      <ProductsAll />

      
    </div>
  );
}

export default App;

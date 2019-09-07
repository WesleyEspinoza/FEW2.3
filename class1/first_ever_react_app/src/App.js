import React from 'react';
import User from 'github-api';
import HeaderComponent from './HeaderComponent'
import PageContent from './PageContent'
import './css/App.css';

let me = new User("", null, "81e6bae962a6d4c712a3075b3044cfe0b49017fa")

console.log(me.listRepos());

function App() {
  return (
    <div className="App-header">
      <HeaderComponent />
      <PageContent />
    </div>
  );
}


export default App;

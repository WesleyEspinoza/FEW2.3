import React from 'react'
import './css/App.css';
import Project from './Project';

class PageContent extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }
  
  componentDidMount() {
    this.fetchUser()
  }

  fetchUser() {    
    fetch('https://api.github.com/users/WesleyEspinoza/repos')
  .then(response => response.json())
  .then((data) =>{
    this.setState({ data });
    });
  }

  render(){
    var projects = []
    if(this.state && this.state.data){
      projects = this.state.data.map(({id, name, language, html_url}, index) => {
        return (
          <Project key={`project-${id}`} title={name} language={language} link={html_url} />
        )

  
        
      });
    }
    

    return (
      <ul className="PageContent">
                <div>{projects}</div>
      </ul>
      );
  }

}

export default PageContent;
import React from 'react'
import './css/App.css';
import Project from './Project';

class ProjectsPageContent extends React.Component {
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
      projects = this.state.data.map(({id, name, language, html_url, description}, index) => {

        var words = []
        var project = undefined

        if (description) {
          words =description.split(" ");

        if (words[words.length - 1 ] === "[{--Port--}]"){
          
            project = <Project key={`project-${id}`} title={name} language={language} link={html_url} />
          
        } 
      }

      return project

      });
    }
    

    return (
      <div className="PageContent">
        {projects}
      </div>
      );
  }

}

export default ProjectsPageContent;
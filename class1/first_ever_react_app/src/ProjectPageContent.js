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
    var inProgProjects = []
    var futureProjects = []
    var finishedProjects = []
    if(this.state && this.state.data){
      finishedProjects = this.state.data.map(({id, name, language, html_url, description}, index) => {

        var words = []
        var project = undefined

        if (description) {
          words =description.split(" ");
        if (words[words.length - 1 ] === "[{--Cur--}]"){
          inProgProjects.push( <Project key={`project-${id}`} title={name} language={language} link={html_url} />)
        } else if (words[words.length - 1 ] === "[{--Updt--}]"){
          futureProjects.push( <Project key={`project-${id}`} title={name} language={language} link={html_url} />)
        } else if (words[words.length - 1 ] === "[{--Fin--}]"){
          project = <Project key={`project-${id}`} title={name} language={language} link={html_url} />
        } 
      }

      return project

      });
    }
    

    return (
      <div className="PageContent">
        <h1 className="Title">Currently Working on</h1>
      
        <div className="ProjectsGrid">
          {inProgProjects}
        </div>
        <h1>Will Update</h1>
        <div className="ProjectsGrid">
          {futureProjects}
        </div>
        <h1>No Future plans</h1>
        <div className="ProjectsGrid">
          {finishedProjects}
        </div>
      </div>
      );
  }

}

export default ProjectsPageContent;
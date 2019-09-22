import React from 'react';
import './css/RepoPage.css';
import Project from './Project.js';
/**
 * setup the project component.
 * @return {div}
 */
class RepoPageContent extends React.Component {
  /**
 * setup the project component.
 */
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  /**
 * setup the project component.
 */
  componentDidMount() {
    this.fetchUser();
  }

  /**
 * setup the project component.
 */
  fetchUser() {
    fetch('https://api.github.com/users/WesleyEspinoza/repos')
        .then((response) => response.json())
        .then((data) =>{
          this.setState({data});
        });
  }

  /**
 * setup the project component.
 * @return {div}
 */
  render() {
    const inProgProjects = [];
    const futureProjects = [];
    let finishedProjects = [];
    if (this.state && this.state.data) {
      finishedProjects = this.state.data.map(({
        id,
        name,
        language,
        html_url,
        description}, index) => {
        let words = [];
        let project = undefined;
        let keyWord = undefined;

        if (description) {
          words =description.split(' ');
          keyWord = words[words.length - 1];

          if (keyWord === '[{--Cur--}]') {
            inProgProjects.push( <Project
              key={`project-${id}`}
              title={name}
              language={language}
              link={html_url}/>);

          } else if (keyWord === '[{--Updt--}]') {
            futureProjects.push( <Project
              key={`project-${id}`}
              title={name}
              language={language}
              link={html_url}/>);

          } else if (keyWord === '[{--Fin--}]') {
            project = <Project
              key={`project-${id}`}
              title={name}
              language={language}
              link={html_url} />;
          }
        }

        return project;
      });
    }


    return (
      <div className="">
        <div className="Title">
          <h1>Currently Working on</h1>
        </div>

        <div className="ProjectsGrid">
          {inProgProjects}
        </div>
        <div className="Title">
          <h1>Will Update</h1>
        </div>


        <div className="ProjectsGrid">
          {futureProjects}
        </div>

        <div className="Title">
          <h1>No Future plans</h1>
        </div>

        <div className="ProjectsGrid">
          {finishedProjects}
        </div>
      </div>
    );
  }
}

export default RepoPageContent;

import React from 'react'
import './css/HomePageContent.css'
import { withRouter } from 'react-router-dom'

function HomePageContent() {
  //logic
  const ProjectsButton = withRouter(({ history }) => (
    <button className="Button"
      type='button'
      onClick={() => { history.push('/Repos') }}
    >
      Repos
    </button>
  ))

  const AboutButton = withRouter(({ history }) => (
    <button className="Button"
      type='button'
      onClick={() => { history.push('/About') }}
    >
      About
    </button>
  ))
  const ResumeButton = withRouter(({ history }) => (
    <button className="Button"
      type='button'
      onClick={() => { history.push('/Resume') }}
    >
      Resume
    </button>
  ))
  return (

    <div className="MainContent">
        <h1 className="Name">
            Erick Wesley Espinoza
        </h1>
        <div className="ButtonContainer">
            <ProjectsButton />
            <AboutButton />
            <ResumeButton />
        </div>

    </div>

  );}

export default HomePageContent;
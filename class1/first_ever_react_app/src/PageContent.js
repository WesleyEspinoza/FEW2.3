import React from 'react'
import './css/App.css';
import Project from './Project';

function PageContent() {
  return (
  <div className="PageContent">
      <Project title="Tetris Dots" image="/python.png" link="#" />
      <Project title="Zombie Server" image="/iphone.png" link="#" />
      <Project title="Amazing Colors" image="/js.png" link="#" />
      <Project title="Flip Toggle" image="/android.png" link="#" />
      <Project title="121 Second St" image="/iphone.png" link="#" />
      <Project title="Slide Shows" image="/android.png" link="#" />
  </div>);
}

export default PageContent;
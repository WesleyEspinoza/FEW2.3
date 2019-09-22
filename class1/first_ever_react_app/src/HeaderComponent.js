// eslint-disable-next-line
import React from 'react';
import './css/HeaderComponent.css';
/**
 * setup the header component.
 * @return {div}
 */
function HeaderComponent() {
  // logic
  return (
    <div className="HeaderComponent">
      <div className="Header">
        <a href="#home">Home </a>
        <a href="#about">About </a>
        <a href="#resume">Resume </a>
         Erick Wesley Espinoza
      </div>
    </div>
  ); // returns the view
}

export default HeaderComponent;

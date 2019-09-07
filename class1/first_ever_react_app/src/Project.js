import React from 'react'
import Card from 'react-bootstrap/Card'
import "./css/Project.css"

function Project({ image, title, link }) {
  return (
    <Card className="Project" style={{ width: '15rem', height: '12rem', background: 'rgba(46, 51, 56, 0.2)' }}>
    <Card.Img variant="top" src={image} style={{ width: '5rem', height: '5rem'}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Link href={link}>Link to project</Card.Link>
      </Card.Body>
    </Card>
  ) 
}

export default Project
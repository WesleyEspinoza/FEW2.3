import React from 'react'
import "./css/Project.css"


class Project extends React.Component {
  constructor() {
    super()
    this.state = {
      image: '/python.png'
    }
  }

  componentDidMount() {
    switch(this.props.language) {
      case 'Swift':
        this.setState({image: '/iphone.png'})
        break;
      case 'JavaScript':
        this.setState({image: '/js.png'})
        break;
      case 'Python':
        this.setState({image: '/python.png'})
        break;
      case 'Kotlin':
        this.setState({image: '/android.png'})
        break;
        case 'C++':
          this.setState({image: '/c++.png'})
          break;
      default:
        // code block
    }
  }

  render(){
    return (
      <div className='p'>
        <div className='card'>
        <h1>{this.props.title}</h1>
        <h2>{<img src={this.state.image} />}</h2>
        <a href={this.props.link}>Link to project</a>
        </div>
  
      </div>
    ) 
  }
}


export default Project
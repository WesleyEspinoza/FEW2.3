import React from 'react';
import './css/RepoPage.css';

/**
 * setup the project component.
 * @return {div}
 */
class Project extends React.Component {
  /**
 * setup the project component.
 */
  constructor() {
    super();
    this.state = {
      image: '/python.png',
    };
  }
  /**
 * setup the project component.
 */
  componentDidMount() {
    switch (this.props.language) {
      case 'Swift':
        this.setState({image: '/iphone.png'});
        break;
      case 'JavaScript':
        this.setState({image: '/js.png'});
        break;
      case 'Python':
        this.setState({image: '/python.png'});
        break;
      case 'Kotlin':
        this.setState({image: '/android.png'});
        break;
      case 'C++':
        this.setState({image: '/c++.png'});
        break;
      default:
        // code block
    }
  }
  /**
 * setup the project component.
 * @return {div}
 */
  render() {
    return (
      <div className='p'>
        <div className='card'>
          <h1>{this.props.title}</h1>
          <h2>{<img src={this.state.image} />}</h2>
          <a href={this.props.link}>Link to project</a>
        </div>

      </div>
    );
  }
}


export default Project;

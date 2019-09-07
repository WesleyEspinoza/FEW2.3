import React from 'react'
import './App.css';

class Product extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: false
    }
  }


  render() {
    return (
      <div  key={`id-${this.props.id}`} className="products">
        <h1>{this.props.name}</h1>
        <h2>{this.props.description}</h2>
        <h3>{this.props.price}</h3>
        <h4>{this.props.category}</h4>
      </div>
    );
  }
}

export default Product;
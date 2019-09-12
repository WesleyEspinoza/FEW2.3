import React from 'react'
import './App.css';

class Counter extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }


  componentDidMount() {
    var current_count = 0
    console.log(this.props.data)

    current_count = this.props.data.reduce((n, val) => {
            return n + (val.category === this.props.item);
  }, 0);

    this.setState({count: current_count})
  }


  render() {
    return(
      <div className="counter">{this.state.count}</div>
    );
  }
}

export default Counter;
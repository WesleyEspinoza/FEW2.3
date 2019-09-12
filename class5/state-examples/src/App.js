import React from "react";
import "./App.css";

import SVG from "./components/SVG";
import Title from "./components/Title";
import Counter from "./components/Counter";

class App extends React.Component {

  constructor() {
    super(); // You must call super() in the constructor!

    // State is an object with properties
    // In this case there is one property: count
    this.state = {
      count: 0
    };
  }

  addCount(counter){
      var newCount = this.state.count
      newCount += counter
      this.setState({count: newCount})
}

renderSVG(count){
  if (count >= 10) {
    return(<SVG />)
  }
}
renderBFButton(count){
  if (count >= 10) {
    return(<Counter title={"Buy Factory"} addCount={this.addCount.bind(this)}/>)
  }
}



  render(){


    return (
      <div className="App">
        <header className="App-header">
          {/* Counts in 1s */}
          <Title text={this.state.count} />
          <div >

          <Counter counter={1} addCount={this.addCount.bind(this)}/>

          {/* Counts in 3s */}
          <Counter counter={3} addCount={this.addCount.bind(this)}/>

        {/* Counts in 5s */}
          <Counter counter={5} addCount={(num) => {
            this.addCount(num)
          }}/>
          {this.renderBFButton(this.state.count)}
          </div>
          {this.renderSVG(this.state.count)}
        </header>
      </div>
    );
  }

}

export default App;

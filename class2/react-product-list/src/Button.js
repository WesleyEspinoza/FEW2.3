import React from 'react'
import './App.css';
import Counter from './Counter'

class Button extends React.Component {

  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  render(){
    let btn_class = this.state.selected ? "button-selected" : "button";
    return (
      <button key={`category-${this.props.index}`} className={btn_class} 
        onClick={(e) => {
          if (this.state.selected === false){
            this.props.setCategory();
            this.setState({selected: true})
          } else {
            this.props.removeCategory();
            this.setState({selected: false})
          }
        }}>
          {this.props.item} <Counter data={this.props.data} item={this.props.item}/>
        </button >
    );

  }
}

export default Button
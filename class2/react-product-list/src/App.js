isport React, { Component } from 'react';
import Button from './Button'
import Product from './Product'
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      categories_selected: []
    }
  }
  
  render() {

    const {categories_selected} = this.state

    console.log(categories_selected)

    var products = inventory.map(({name, price, description, id, category}, index) => {
      if (categories_selected.indexOf(category) !== -1) {
      return (
        <Product key={`product-${id}`} name={name} price={price} description={description} id={id} category={category}  />
      )
      } else {
        return null
      }

      
    });

    const buttons = categories.map((item, index) => {
      return (
        <Button 
          key={`button-${index}`}
          index={index} 
          item={item} 
          app={this} 
          setCategory={() => {
          this.setState((state) => {
            var categories_selected = state.categories_selected
              categories_selected.push(item);
            return {
              categories_selected,
            };
          });
        }}
          removeCategory={() => {
          this.setState((state) => {
            var categories_selected = state.categories_selected
            categories_selected = categories_selected.filter(value => value !== item);
            return {
              categories_selected,
            };
          });
        }} />
      );
    });

    const cats_string = this.state.categories_selected.map((item, index) => {

      return (
          <div key={`item-${index}`} className="ul">{item + ", "} </div>
      );
    });

    return (
      <div className="App">
        <h1>Show products here</h1>
        <h2>
          {cats_string}
        </h2>
        
          <ul className="grid-container">
            <div className = "Buttons">
              {buttons}
            </div>

            </ul>
      

        <ul className="grid-container">
          {products}
        </ul>

      </div>
    );
  }
}

export default App;

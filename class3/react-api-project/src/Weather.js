import React from 'react'

class Weather extends React.Component {
  render() {

        // This method returns undefined or a JSX component
        if (this.props.weather === null) {
          // If there is no data return undefined
          return <div className="error-message">No Data</div>
        } else if (this.props.weather.cod === '404' || this.props.weather.cod === '400') {
          return <div className="error-message">{this.props.weather.message}</div>
        }
          
        

        console.log(this.props.weather)
    
        /* 
        This next step needs another level of error checking. It's 
        possible to get a JSON response for an invalid zip in which 
        case the step below fails. 
        */ 
        // Take the weather data apart to more easily populate the component
        const { main, description, icon } = this.props.weather.weather[0]
        const { temp, pressure, humidity, temp_min, temp_max } = this.props.weather.main 
        
        return (
          <div className="result">
            <div>Title: {main}</div>
            <div>Desc: {description}</div>
            <div>Icon: {icon}</div>
            <div>Temp: {temp}</div>
            <div>Pressure: {pressure}</div>
            <div>Humidity: {humidity}</div>
            <div>Temp Min: {temp_min} Max:{temp_max}</div>
          </div>
        )
      }
  }


export default Weather;
import React, { Component } from "react";

export default class Temperature extends Component {

    shouldComponentUpdate(nextProps,nextState){
            if(nextProps.temp===this.props.temp){
                return false
            }
            return true
    }
  render() {
      console.log(process.env.REACT_APP_API_KEY)
    return (
      <div>
        <h2>{this.props.cityname}</h2>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${this.props.code}@2x.png`}
            alt=""
          />
        </div>
        <h3>Temperature: {this.props.temp}</h3>
        <p>Max: {this.props.tempMax}</p>
        <p>Min: {this.props.tempMin}</p>
      </div>
    );
  }
}

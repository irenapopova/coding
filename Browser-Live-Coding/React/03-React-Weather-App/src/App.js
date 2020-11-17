import React, { Component } from "react";
import Temperature from "./Temperature";

console.log(process.env)

export default class App extends Component {
  //execute process of lifecyles in react
  //1. run constructor
  //2. run static getDerivedStateFromProps
  //3. run render
  //4. run componentDidMount (setting our state, whenever you set state ,React will call render method again)
  //5. run render

  constructor(props) {
    //used to initialize and bind custom method
    super(props);
    this.state = {
      cityName: "",
      initialCity:"berlin",
      weather: null,
    };
    this.getCityName = this.getCityName.bind(this);
    this.searchWeather = this.searchWeather.bind(this);
  }

  componentDidMount() {
    //onload
    //best place to fetch or load data from server or eny external sources
    this.fetchData(this.state.initialCity);

    setInterval(()=>{
      this.fetchData(this.state.initialCity)
    }, 5000);

    //executes only once
  }

/*   shouldComponentUpdate(nextProps, nextState) {
    if (this.state.weather) {
      if (nextState.weather.main.temp === this.state.weather.main.temp) {
        return false; //(dont call render method)
      } else {
        return true; //(run render method)
      }
    } else {
      return true;
    }
  } */

  //react will call it just before render method after constrcutor
  /* static getDerivedStateFromProps(){
  //i will check the user city and return into my state
  console.log(navigator)
  return {
    initialCity:"frankfurt"
  }
} */

  getCityName(e) {
    this.setState({
      cityName: e.target.value,
    });
  }

  searchWeather(e) {
    e.preventDefault();
    this.fetchData(this.state.cityName);
    this.setState({
      initialCity:this.state.cityName
    })
  }

  fetchData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        /*   console.log(result); */
        this.setState({ weather: result });
      });
  };

/*   getSnapshotBeforeUpdate(prevProps,prevState){
    return {name:"Naqvi"}
  }

  componentDidUpdate(prevProps,prevState, snapshot){
      console.log(snapshot)
  } */
  render() {
    console.log("render from parent");
    const { weather } = this.state;

    return (
      <div>
        <form onSubmit={this.searchWeather}>
          <input
            type="text"
            name="city"
            value={this.state.cityName}
            onChange={this.getCityName}
          />
          <input type="submit" value="getWeather" />
        </form>
        {weather && (
          <Temperature
            cityname={weather.name}
            code={weather.weather[0].icon}
            temp={weather.main.temp}
            tempMin={weather.main.temp_min}
            tempMax={weather.main.temp_max}
          />
        )}
      </div>
    );
  }
}

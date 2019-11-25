import React, { Fragment } from 'react';
import axios from 'axios';




class Weather extends React.Component {
constructor() {
    super();
    this.state = {
      data: null,
      name:'',
      icon:'',
      iconDescrib:'',
      temp: 0,
      humidity: 0,
      windSpeed: 0,
      windDegree: 0,
    }
    this.apiKey = "9591fedf7a26aca76eb1f38cdbd96577";
}

componentDidMount = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${this.apiKey}`)
    .then((response) => {
      this.setState({
        name: response.data.name,
        icon: response.data.weather[0].icon,
        iconDescrib: response.data.weather[0].description,
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        windDegree: response.data.wind.deg,
      })
    })
      console.log(position.coords.latitude, position.coords.longitude);
  });
}


render() {
  return(
    <div>
      <div className='card1'>
        <h2>{this.state.name}</h2>
        <img src={`https://openweathermap.org/img/wn/${this.state.icon}.png`} alt={this.state.iconDescrib} width="100px" />
      </div>
      <div className='card2'>
        <p>{this.state.temp}°C</p>
        <p>{this.state.windSpeed*3.6}km/h</p>
        <p>{this.state.humidity}%</p>
        <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} width="50px" style={{transform: `rotate(${this.state.windDegree}deg)`}}/>
      </div>
    </div>
  )
}
}


export default Weather;
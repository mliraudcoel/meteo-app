import React, { Fragment } from 'react';
import axios from 'axios';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      localisation:'',
      data: null,
      name:'',
      icon:'',
      iconDescrib:'',
      temp: 0,
      humidity: 0,
      windSpeed: 0,
      windDegree: 0,
    }
  }

  searchLocalisation = (event) => {
    this.setState({
      localisation: event.target.value,
    })
  };

  getLocalisationMeteo = () => {
    let urlString = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.localisation}&units=metric&appid=9591fedf7a26aca76eb1f38cdbd96577`;
    axios(urlString)
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
        console.log(response)
      },
    );
  };

  render() {
    return(
      <Fragment>
      <p>Recherchez la météo par localisation :</p>
      <input 
      placeholder="Enter localisation" 
      className = "searchBar"
      id="name"
      name="localisation"
      type="text"
      value= {this.state.localisation}
      onChange= {this.searchLocalisation}
    />
      <button type="button" className="searchButton" onClick={this.getLocalisationMeteo}>Search</button>
      <h2>{this.state.name}</h2>
      <img src={`https://openweathermap.org/img/wn/${this.state.icon}.png`} alt={this.state.iconDescrib} width="100px" />
      <p>{this.state.temp}°C</p>
      <p>{this.state.windSpeed*3.6}km/h</p>
      <p>{this.state.humidity}%</p>
      <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} width="50px" style={{transform: `rotate(${this.state.windDegree}deg)`}}/>
    </Fragment>
    )
  }

}

export default SearchBar;

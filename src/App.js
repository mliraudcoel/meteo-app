import React from 'react';
import Weather from './Components/Weather/Weather';
import SearchBar from './Components/SearchBar/SearchBar';

import './App.css';


function App() {
return (
<div className="App">
<img src={`${process.env.PUBLIC_URL}/assets/images/cloud.jpg`} width="100%" height="200px"/>
  <h1>L'appli meteo</h1>
  <div className="meteo">
    <div className="weatherLocation">
    <Weather />
    </div>
    <div className="searchCard">
    <SearchBar />
    </div>
</div>
</div>
);
}

export default App;

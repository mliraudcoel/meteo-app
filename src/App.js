import React from 'react';
import Weather from './Components/Weather/Weather';
import SearchBar from './Components/SearchBar/SearchBar';

import './App.css';




function App() {
return (
<div className="App">
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

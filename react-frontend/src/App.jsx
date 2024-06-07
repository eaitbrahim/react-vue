import React from 'react';
import './App.css';
import SensorTiles from './SensorTiles';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Temperature Data</h1>
    </header>

    <SensorTiles />
  </div>
);

export default App;

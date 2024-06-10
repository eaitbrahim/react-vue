import React from 'react';
import classes from './App.module.css';
import SensorTiles from './components/sensors/SensorTiles';

const App = () => (
  <div className={classes.App}>
    <header className={classes.Header}>
      <h1>All Sensor using React</h1>
    </header>

    <SensorTiles />
  </div>
);

export default App;

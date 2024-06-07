import React from 'react';
import classes from './Tile.module.css';
import ReadingValue from './ReadingValue';
import BatteryIcon from '../shared/BatteryIcon';

const Tile = ({ data }) => {
  
  return (
  <div className={classes.Tile}>
    <h2>{data.SensorName}</h2>
    <p>{data.SensorType}</p>
    
    <ReadingValue value={data.reading} min={data.AlarmRange.min} max={data.AlarmRange.max} />
    
    <p>Alarm Range: {data.AlarmRange.min} ° F to {data.AlarmRange.max} ° F </p>
    <p>Reading: {Date(data.readingDateTime).toString()}</p>
    <p>Sensor ID: {data.SensorId} / {data.Probe}</p>
    
    <BatteryIcon level={data.batteryLevel} />
  </div>
)};

export default Tile;

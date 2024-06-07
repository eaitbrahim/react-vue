import React from 'react';
import classes from './Tile.module.css';
import ReadingValue from './ReadingValue';
import BatteryIcon from '../shared/BatteryIcon';

const Tile = ({ data }) => (
  <div className={classes.Tile}>
    <h2>{data.SensorName}</h2>
    <p>{data.SensorType}</p>
    <p>
      <ReadingValue value={data.Reading} min={data.AlarmRange.min} max={data.AlarmRange.max} />
    </p>
    <p>Alarm Range: {data.AlarmRange.min} ° F to {data.AlarmRange.max} ° F </p>
    <p>Reading: {data.ReadingDateTime}</p>
    <p>Sensor ID: {data.SensorId} / {data.Probe}</p>
    <p>
      <BatteryIcon level={data.BatteryLevel} />
    </p>
  </div>
);

export default Tile;

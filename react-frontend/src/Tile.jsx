import React from 'react';

const Tile = ({ data }) => (
  <div className="tile">
    <h2>{data.SensorName}</h2>
    <p>Sensor Type: {data.SensorType}</p>
    <p>Reading: {data.ReadingDateTime}</p>
    <p>Probe: {data.Probe}</p>
    <p>Battery Level: {data.BatteryLevel}</p>
  </div>
);

export default Tile;

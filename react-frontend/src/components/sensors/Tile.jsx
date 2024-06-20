import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Tile.module.css';
import ReadingValue from './ReadingValue';
import BatteryIcon from '../shared/BatteryIcon';
import { useTileMode } from '../../context/TileModeContext';

const Tile = ({ data } ) => {
  const { expanded } = useTileMode();
  const [backgroundColor, setBackgroundColor] = useState('#8cd98c');
  const [color, setColor] = useState('#ffffff');

  const handleBackgroundColorChange = (bgColor, color) => {
    setBackgroundColor(bgColor);
    setColor(color)
  };

  return (
  <div className={classes.Tile} style={{ backgroundColor: backgroundColor, color }}>
    <Link to={`/sensor/${data.SensorId}`} className={classes.link}>
      <h2>{data.SensorName}</h2>
      { !expanded && (<ReadingValue 
              value={data.reading} 
              min={data.AlarmRange.min} 
              max={data.AlarmRange.max}
              onBackgroundColorChange={handleBackgroundColorChange} />)}
              
      {expanded && (
          <>
            <p>{data.SensorType}</p>
            <ReadingValue 
              value={data.reading} 
              min={data.AlarmRange.min} 
              max={data.AlarmRange.max}
              onBackgroundColorChange={handleBackgroundColorChange} />
            
            <p>Alarm Range: {data.AlarmRange.min} ° F to {data.AlarmRange.max} ° F </p>
            <p>Reading: {Date(data.readingDateTime).toString()}</p>
            <p>Sensor ID: {data.SensorId} / {data.Probe}</p>
            <BatteryIcon level={data.batteryLevel} />
          </>
      )}
    </Link>
  </div>
)};

export default Tile;

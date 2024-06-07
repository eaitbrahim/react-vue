import React from 'react';
import { FaBatteryFull, FaBatteryHalf, FaBatteryEmpty } from 'react-icons/fa';
import classes from './BatteryIcon.module.css';

const BatteryIcon = ({ level }) => {
  let Icon;
  let percentageColor;

  if (level >= 75) {
    Icon = FaBatteryFull;
    percentageColor = 'green';
  } else if (level >= 50) {
    Icon = FaBatteryHalf;
    percentageColor = 'orange';
  } else {
    Icon = FaBatteryEmpty;
    percentageColor = 'red';
  }

  const iconStyle = {
    color: percentageColor,
    fontSize: '36px',
    margin: 'auto', 
  };

  return (
    <div className={classes.BatteryIcon}>
      <Icon style={iconStyle} />
      <span className={classes.Percentage}>{level}%</span>
    </div>
  );
};

export default BatteryIcon;

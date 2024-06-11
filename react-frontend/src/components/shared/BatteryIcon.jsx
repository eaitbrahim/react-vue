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
    percentageColor = 'darkOrange';
  } else {
    Icon = FaBatteryEmpty;
    percentageColor = 'red';
  }

  return (
    <div className={classes.BatteryIcon}>
      <Icon className={classes.icon} style={{color: percentageColor}} />
      <span className={classes.Percentage}>{level}%</span>
    </div>
  );
};

export default BatteryIcon;

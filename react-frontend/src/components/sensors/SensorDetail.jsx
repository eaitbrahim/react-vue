import React from 'react';
import { Link } from 'react-router-dom';
import Sensor from './Sensor';
import TwentyFourHoursHistoryChart from './TwentyFourHoursHistoryChart';
import Profile from './Profile';
import Readings from './Readings';
import classes from './SensorDetail.module.scss';

const SensorDetail = () => {
  return (
    <div className={classes.SensorDetail}>
      <div className={classes.item}>
        <Sensor />
      </div>
      <div className={classes.item}>
        <TwentyFourHoursHistoryChart />
      </div>
      <div className={classes.item}>
        <Profile />
      </div>
      <div className={classes.item}>
        <Readings />
      </div>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default SensorDetail;
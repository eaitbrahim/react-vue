import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import classes from './Sensor.module.scss';

const Readings = () => {
  return (
    <div className={classes.Sensor}>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={faTools} size="6x" />
      </div>
      <div className={classes.message}>
        Readings Under Construction
      </div>
    </div>
  );
};

export default Readings;
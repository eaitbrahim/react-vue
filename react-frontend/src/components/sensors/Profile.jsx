import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import classes from './Sensor.module.scss';

const Profile = () => {
  return (
    <div className={classes.Sensor}>
      <div className={classes.icon}>
        <FontAwesomeIcon icon={faTools} size="6x" />
      </div>
      <div className={classes.message}>
        Profile Under Construction
      </div>
    </div>
  );
};

export default Profile;
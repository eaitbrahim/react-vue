import React from 'react';
import { faExclamationCircle, faSignal, faBatteryEmpty } from '@fortawesome/free-solid-svg-icons';
import Alarm from './Alarm';
import classes from './Alarms.module.scss';

function Alarms() {
  return (
    <div className={classes.alerts}>
      <Alarm message="8 sensors have triggered an alarm" icon={faExclamationCircle} />
      <Alarm message="12 sensors have triggered a communication alarm" icon={faSignal} />
      <Alarm message="5 sensors have low battery" icon={faBatteryEmpty} />
    </div>
  );
}

export default Alarms;
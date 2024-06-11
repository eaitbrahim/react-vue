import React from 'react';
import classes from './ReadingValue.module.css';

const ReadingValue = ({ value, min, max, onBackgroundColorChange }) => {
  let backgroundColor, color;
    
  if (value < min) {
    backgroundColor = '#3899ff';//blue
    color = '#ffffff';
  } else if (value > max) {
    backgroundColor = '#990200';//red
    color = '#ffffff';
  } else if(value == '#'){
    backgroundColor = '#f8a736';// orange
    color = '#000000';
  } else {
    backgroundColor = '#8cd98c';//green
    color = '#000000';
  }

  onBackgroundColorChange(backgroundColor, color);

  return (
    <span className={classes.ReadingValue}>
      {value === undefined ? '' : (value === '#' ? 'Probe missing' : `${value.toFixed(2)}° F`)}
    </span>
  );
};

export default ReadingValue;

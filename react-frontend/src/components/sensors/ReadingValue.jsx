import React from 'react';
import classes from './ReadingValue.module.css';

const ReadingValue = ({ value, min, max }) => {
    let backgroundColor;
    
  if (value < min) {
    backgroundColor = 'blue';
  } else if (value > max) {
    backgroundColor = 'red';
  } else {
    backgroundColor = 'green';
  }

  const style = {
    backgroundColor: backgroundColor,
  };

  return (
    <span className={classes.ReadingValue} style={style}>
      {value && value.toFixed(2)} ° F
    </span>
  );
};

export default ReadingValue;

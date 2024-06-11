import React from 'react';
import classes from './Site.module.scss';

function Site() {
  return (
    <div className={classes.site}>
      <select>
        <option>Site 1</option>
        <option>Site 2</option>
        <option>Site 3</option>
      </select>
    </div>
  );
}

export default Site;
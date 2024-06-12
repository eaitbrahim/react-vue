import React, { useState } from 'react';
import { useTileMode } from '../../context/TileModeContext';
import styles from './TileMode.module.scss';


function TileMode() {
    const { expanded, toggleMode } = useTileMode();
  
    return (
      <div className={styles.tileMode}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={expanded}
            onChange={toggleMode}
            className={styles.checkbox}
          />
          <span className={styles.slider}></span>
          <span className={styles.label}>{expanded ? 'Collapse' : 'Expand'}</span>
        </label>
      </div>
    );
  }
  
  export default TileMode;
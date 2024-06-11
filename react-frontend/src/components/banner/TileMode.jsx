import React, { useState } from 'react';
import styles from './TileMode.module.scss';

function TileMode() {
  const [expanded, setExpanded] = useState(false);

  const toggleMode = () => {
    setExpanded(!expanded);
  };

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
        <span className={styles.label}>{expanded ? 'Expand' : 'Collapse'}</span>
      </label>
    </div>
  );
}

export default TileMode;
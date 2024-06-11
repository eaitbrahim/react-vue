import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Logout.module.scss';

function Logout() {
  return (
    <div className={styles.logout}>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faSignOutAlt} className={styles.icon} />
        Logout
      </button>
    </div>
  );
}

export default Logout;
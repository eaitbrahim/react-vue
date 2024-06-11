import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search..." className={styles.input} />
      <FontAwesomeIcon icon={faSearch} className={styles.icon} />
    </div>
  );
}

export default Search;
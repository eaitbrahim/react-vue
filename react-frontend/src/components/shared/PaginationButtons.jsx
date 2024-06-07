import React from 'react';
import styles from './PaginationButtons.module.css';

const PaginationButtons = ({ currentPage, totalPages, onPrevPage, onNextPage, isNextDisabled }) => {
  return (
    <div className={styles.PaginationButtons}>
      <button onClick={onPrevPage} disabled={currentPage === 1} className={styles.PaginationButton}>
        Prev
      </button>
      <button onClick={onNextPage} disabled={isNextDisabled} className={styles.PaginationButton}>
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;

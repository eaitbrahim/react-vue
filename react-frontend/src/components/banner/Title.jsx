import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import styles from './Title.module.scss';

function Title() {
    const match = useMatch('/sensor/:id');
    const title = match ? 'Sensor Detail' : 'All Sensors';

    return (
        <div className={styles.title}>
        <span>{title}</span>
        </div>
    );
}

export default Title;
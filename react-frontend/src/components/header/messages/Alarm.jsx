import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Alarm.module.scss';

function Alarm({ message, icon }) {
    const [backgroundColor, setBackgroundColor] = useState('red');
    const [textColor, setTextColor] = useState('white');

    useEffect(() => {
        const interval = setInterval(() => {
          setBackgroundColor((prevColor) => (prevColor === 'red' ? 'white' : 'red'));
          setTextColor((prevColor) => (prevColor === 'white' ? 'blue' : 'white'));
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
    
    return (
    <div className={styles.alarm} style={{ backgroundColor, color: textColor }}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        {message}
    </div>
    );
}

export default Alarm;
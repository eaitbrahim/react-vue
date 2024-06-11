import React from 'react';
import Title from './Title';
import TileMode from './TileMode';
import Search from './Search';
import Logout from './Logout';
import styles from './Banner.module.scss';

function Banner() {
    return (
        <div className={styles.banner}>
        <Title />
        <div className={styles.actions}>
            <TileMode />
            <Search />
            <Logout />
        </div>
        </div>
    );
}
  
export default Banner;
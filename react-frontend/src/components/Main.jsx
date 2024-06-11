import React from 'react';
import SlideMenu from './menu/SlideMenu';
import SensorTiles from './sensors/SensorTiles';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.container}>
      <SlideMenu />
      <SensorTiles />
    </div>
  );
}

export default Main;
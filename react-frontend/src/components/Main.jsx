import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SlideMenu from './menu/SlideMenu';
import SensorTiles from './sensors/SensorTiles';
import SensorDetail from './sensors/SensorDetail';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.container}>
        <SlideMenu />
        <Routes>
            <Route path="/" element={<SensorTiles />} />
            <Route path="/sensor/:id" element={<SensorDetail />} />
        </Routes>
    </div>
  );
}

export default Main;
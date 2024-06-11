import React from 'react';
import classes from './App.module.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import SlideMenu from './components/menu/SlideMenu';

const App = () => (
  <div className={classes.app}>
    <Header />
    <Banner />
    <SlideMenu/>
  </div>
);

export default App;

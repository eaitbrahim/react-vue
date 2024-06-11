import React from 'react';
import classes from './App.module.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';

const App = () => (
  <div className={classes.app}>
    <Header />
    <Banner />
  </div>
);

export default App;

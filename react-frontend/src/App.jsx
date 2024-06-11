import React from 'react';
import classes from './App.module.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Main from './components/Main';

const App = () => (
  <div className={classes.app}>
    <Header />
    <Banner />
    <Main/>
  </div>
);

export default App;

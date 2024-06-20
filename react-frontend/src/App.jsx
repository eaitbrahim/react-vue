import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import classes from './App.module.scss';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Body from './components/Body';
import { TileModeProvider } from './context/TileModeContext';

const App = () => (
  <Router>
      <TileModeProvider>  
          <div className={classes.app}>
            <Header />
            <Banner />
            <Body/>
          </div>
      </TileModeProvider>
    </Router>
);

export default App;

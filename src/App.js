import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route , Switch, Routes  } from 'react-router-dom';
import LeftMenu from './components/LeftMenu';
import Header from './components/Header';
import DataDisplay from './components/DataDisplay';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <LeftMenu />
          <DataDisplay />
        </div>
      </div>
    </Router>



  );
}

export default App;

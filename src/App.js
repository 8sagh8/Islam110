import './App.css';
import React from 'react';
import LeftMenu from './components/LeftMenu';
import Header from './components/Header';
import DataDisplay from './components/DataDisplay';



function App() {
  return (
    // <Router>
      <div className="App">
        <Header />
        <div className="content">
          <LeftMenu />
          <DataDisplay />
        </div>
      </div>
    // </Router>



  );
}

export default App;

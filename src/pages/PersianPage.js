// import './App.css';
import React from 'react';
import LeftMenu from '../components/LeftMenu';
import Header from '../components/Header';
import FarsiDisplay from '../components/FarsiDisplay';



function App() {
  return (
    // <Router>
      <div className="App">
        <Header />
        <div className="content">
          <LeftMenu />
          <FarsiDisplay />
        </div>
      </div>
    // </Router>



  );
}

export default App;

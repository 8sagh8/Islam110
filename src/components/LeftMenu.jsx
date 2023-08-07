import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <Link to="/page1">Topics</Link>
      <Link to="/page2">References</Link>
      <Link to="/page3">Events</Link>
      // add more as you need
    </div>
  );
}

export default LeftMenu;

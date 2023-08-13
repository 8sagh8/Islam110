import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  const zakiriBooksLink = "https://drive.google.com/drive/folders/13v2FOCE1jxoMFamo0qPzIgNuFPLqWayv"
  const youtubeLink = "https://www.youtube.com/"
    return (
      <div className="left-menu">
        <Link to="/page1">Events</Link>
        <a href={zakiriBooksLink} target="_blank" rel="noopener noreferrer">
          Zakiri Books
        </a>
        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
          YouTube Link
        </a>
        <Link to="/page4">Page 4</Link>
        <Link to="/page5">Page 5</Link>
        <Link to="/page6">Page 6</Link>
        <Link to="/page7">Page 7</Link>
        <Link to="/page8">Page 8</Link>
        <Link to="/page9">Page 9</Link>
      </div>
    );
  }

export default LeftMenu;



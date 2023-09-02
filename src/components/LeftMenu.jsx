import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  const zakiriBooksLink = "https://drive.google.com/drive/folders/13v2FOCE1jxoMFamo0qPzIgNuFPLqWayv"
  const sunniBooksLink = "https://drive.google.com/drive/u/1/my-drive"
  const arabicBooksLink = "https://drive.google.com/drive/folders/1zUTIORX95hR6f6PIytimxnv5YKpOyat7"
  const youtubeLink = "https://www.youtube.com/"
    return (
      <div className="left-menu">
        <Link to="/">References</Link>
        <Link to="/EventPage">Events Page</Link>
        <Link to="/PersianPage">Persian Grammar</Link>
        <a href={zakiriBooksLink} target="_blank" rel="noopener noreferrer">
          Zakiri Books
        </a>
        <a href={sunniBooksLink} target="_blank" rel="noopener noreferrer">
          Sunni Books
        </a>
        <a href={arabicBooksLink} target="_blank" rel="noopener noreferrer">
          Arabic Grammar Books
        </a>
        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
          YouTube Link
        </a>
    
      
      </div>
    );
  }

export default LeftMenu;



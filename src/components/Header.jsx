import React from 'react';
import logo from '../assets/logo.png'; // replace this with your actual logo file

const Header = () => {
  const titleHeading = "Islamic Hub";

  const mainDivStyle = {  
    display: 'flex',
    textAlign: "left",
    paddingLeft: "20px",
    backgroundColor: "#f8f8f8",
    borderBottom: "1px solid #ddd",
  }

  const headerStyle = {
    display: 'inline', 
    fontFamily: "'Font Name', sans-serif",
    fontSize: '4rem',
    width: '100%',
    textAlign: 'center',
  };
  const imgStyle = {
    width: '90px',
  }

  return (
    <div style={mainDivStyle}>
          <img style={imgStyle} src={logo} alt="Logo" /> 
          <h1 style={headerStyle}>{titleHeading}</h1>
     
    </div>

  );
}

export default Header;


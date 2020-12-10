import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './Header.css';

const Header = (props) => {

  return (
    <div className="Header">
      {/* <h1 className="Header-h1">Our Little Secret</h1> */}
      <NavBar 
      user={props.user}
      handleLogout={props.handleLogout}/>
    </div>
  );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/create' className='NavBar-link'>Add A Product</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/view-all-products' className='NavBar-link'>View All Products</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/view-lip-products' className='NavBar-link'>View Lip Products</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/view-eye-products' className='NavBar-link'>View Eye Products</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/view-cheek-products' className='NavBar-link'>View Cheek Products</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/view-face-products' className='NavBar-link'>View Face Products</Link>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/' className='NavBar-link'>Home Page</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/view-all-products' className='NavBar-link'>View All Products</Link>
    </div>;
  
    

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = (props) => {
//   let nav = props.user ?
//     <div>
//       <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//       <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/' className='NavBar-link'>Home Page</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/create' className='NavBar-link'>Add A Product</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/view-all-products' className='NavBar-link'>View All Products</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/view-lip-products' className='NavBar-link'>View Lip Products</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/view-eye-products' className='NavBar-link'>View Eye Products</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/view-cheek-products' className='NavBar-link'>View Cheek Products</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/view-face-products' className='NavBar-link'>View Face Products</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/cart' className='NavBar-link'>Cart</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;

//     </div>
//     :
//     <div>
//       <Link to='/login' className='NavBar-link'>LOG IN</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/' className='NavBar-link'>Home Page</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/view-all-products' className='NavBar-link'>View All Products</Link>
//     </div>;
  
    

//   return (
//     <div className='NavBar'>
//       {nav}
//     </div>
//   );

// }



// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CartPayment from '../CartPayment/CartPayment'

const NavBar = (props) => {
  let nav = props.user ? (
    <div>
      <nav >
        <div class="container-fluid">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div class="navbar-header ">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#main-navigation"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div class="collapse navbar-collapse" id="main-navigation">
            <div className="make-nav-bar-block">
              <ul class="nav text-center">
                <li>
                  <Link
                    to=""
                    className="NavBar-link"
                    onClick={props.handleLogout}
                  >
                    Log Out
                  </Link>
                  <span className="NavBar-welcome">
                    Welcome, {props.user.name}
                  </span>
                </li>
                <li>
                    <Link to="/signup" className="NavBar-link">
                      Sign Up
                    </Link>
                  </li>
                <li>
                  <Link to="/" className="NavBar-link">
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link to="/create" className="NavBar-link">
                    Add A Product
                  </Link>
                </li>
                <li>
                  <Link to="/view-all-products" className="NavBar-link">
                    View All Products
                  </Link>
                </li>
                <li >
                <div className="test">Our Little Secret</div>
                </li>
                <li>
                  <Link to="/view-eye-products" className="NavBar-link">
                    View Eye Products
                  </Link>
                </li>
                <li>
                  <Link to="/view-cheek-products" className="NavBar-link">
                    View Cheek Products
                  </Link>
                </li>
                <li>
                  <Link to="/view-face-products" className="NavBar-link">
                    View Face Products
                  </Link>
                </li>
                <li>
                  <Link to="/view-lip-products" className="NavBar-link">
                    View Lip Products
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="NavBar-link">
                  <i class="fas fa-shopping-cart">Cart</i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
    </div>
  ) : (
    <div>
      <nav class="navbar navbar-default navbar-fixed-top fadeInDown">
        <div class="container-fluid">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div class="navbar-header ">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#main-navigation"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div class="collapse navbar-collapse" id="main-navigation">
            <div className="make-nav-bar-block">
              <ul class="nav text-center">
                <div>
                  <li>
                    <Link to="/login" className="NavBar-link">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="NavBar-link">
                      Sign Up
                    </Link>
                  </li>
                  <li class="navbar-brand ">
                  <div className="test">Our Little Secret</div>
                  </li>
                  <li>
                    <Link to="/" className="NavBar-link">
                      Home Page
                    </Link>
                  </li>
                  <li>
                    <Link to="/view-all-products" className="NavBar-link">
                      View All Products
                    </Link>
                  </li>
                </div>
                ;
              </ul>
            </div>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
      ;
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;


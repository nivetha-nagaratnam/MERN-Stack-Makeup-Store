import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <div>
      <nav>
        <div class="container-fluid">
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

          <div class="collapse navbar-collapse" id="main-navigation">
            <div className="make-nav-bar-block">
              <ul class="nav text-center">
                <li>
                  <div className="NavBar-link" onClick={props.handleLogout}>
                    Log Out <br></br>
                    <span className="NavBar-welcome">
                      Welcome, {props.user.name}
                    </span>
                  </div>
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
                <li>
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
        </div>
      </nav>
    </div>
  ) : (
    <div>
      <nav>
        <div class="container-fluid">
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

          <div class="collapse navbar-collapse" id="main-navigation">
            <div className="make-nav-bar-block">
              <ul class="nav text-center">
                <li>
                  <Link to="/signup" className="NavBar-link">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <div className="test">Our Little Secret</div>
                </li>
                <li>
                  <Link to="/login" className="NavBar-link">
                    Log In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;

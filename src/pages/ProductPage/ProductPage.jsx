import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
// import './ProductPage.css';

const ProductPage = (props) => {
  return (
    <div className="ProductPage">
      <NavBar 
      user={props.user}
      handleLogout={props.handleLogout}/>
    </div>
  );

};

export default ProductPage;
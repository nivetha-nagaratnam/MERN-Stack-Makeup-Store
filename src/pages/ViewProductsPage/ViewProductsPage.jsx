import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

class ViewProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/products')
      .then(res => {
        this.setState({
            products: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ViewProductsList');
      })
  };


  render() {
    const products = this.state.products;
    let productList;

    if(!products) {
        productList = "there is no product record!";
    } else {
        productList = products.map((product, k) =>
        <ProductCard product={product} key={k} history={this.props.history}/>
      );
    
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
          </div>

          <div className="list">
                {productList}
          </div>
        </div>
      </div>
    );
  }
}

export default ViewProductsPage;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductCard extends Component {

  onDeleteClick (id) {
    axios
      .delete('http://localhost:3000/api/products/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error from ProductDetailsPage_deleteClick");
      })
  };

  render() {
    const  product  = this.props.product;
    return (
      <div className="card-container">
        <div className="desc">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.rating}</p>
          <div className="row">
            <div className="col-md-6">
              <Link to={`/product-detail/${product._id}`}>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg btn-block"
                >
                  <p>Details</p>
                </button>
              </Link>
              <br />
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={this.onDeleteClick.bind(this, product._id)}
              >
                Delete Product
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;

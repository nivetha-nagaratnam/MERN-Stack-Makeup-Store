import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductsDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/products/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error from ProductDetailsPage");
      })
  };

  render() {

    const product = this.state.product;
    let productItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ product.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Brand</td>
            <td>{ product.brand }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Shade</td>
            <td>{ product.colour }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Price</td>
            <td>{ product.price }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Description</td>
            <td>{ product.description }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Category</td>
            <td>{ product.category }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Rating</td>
            <td>{ product.rating }</td>
          </tr>
        </tbody>
      </table>
    </div>

return (
  <div className="ShowBookDetails">
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <br /> <br />
        </div>
        <br />
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Products's Record</h1>
          <p className="lead text-center">
              View Products's Info
          </p>
          <hr /> <br />
        </div>
      </div>
      <div>
        { productItem }
      </div>

    </div>
  </div>
);
}
}

export default ProductsDetailPage;

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductsDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      user: '',
      content:'',
      rating:''
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const data = {
      user: this.state.user,
      content: this.state.content,
      rating: this.state.rating
    };

    axios
      .post("http://localhost:3000/api/reviews/products/"+this.props.match.params.id+'/reviews', data)
      .then((res) => {
        this.setState({
          user: "",
          content: "",
          rating: ""
        });
        //redirect
        // this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateReview!");
      });
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/products/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          product: res.data
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

// const review = this.state.product.review[0];
// let reviewItem = <div>
//   <table className="table table-hover table-dark">
//     {/* <thead>
//       <tr>
//         <th scope="col">#</th>
//         <th scope="col">First</th>
//         <th scope="col">Last</th>
//         <th scope="col">Handle</th>
//       </tr>
//     </thead> */}
//     <tbody>
//       <tr>
//         <th scope="row">1</th>
//         <td>User</td>
//         <td>{ product.review.user }</td>
//       </tr>
//       <tr>
//         <th scope="row">2</th>
//         <td>Content</td>
//         <td>{ product.review.content }</td>
//       </tr>
//       <tr>
//         <th scope="row">3</th>
//         <td>Rating</td>
//         <td>{ product.review.rating }</td>
//       </tr>
//     </tbody>
//   </table>
// </div>

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
      <div>
        <h2>Reviews & Ratings</h2>
        <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    name="user"
                    className="form-control"
                    value={this.state.user}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Add A Product Review"
                    name="content"
                    className="form-control"
                    value={this.state.content}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>
                    Rate The Product:
                    <select name="rating" value={this.state.rating} onChange={this.onChange}>
                      <option value="☆☆☆☆☆">☆☆☆☆☆</option>
                      <option value="★☆☆☆☆">★☆☆☆☆</option>
                      <option value="★★☆☆☆">★★☆☆☆</option>
                      <option value="★★★☆☆">★★★☆☆</option>
                      <option value="★★★★☆">★★★★☆</option>
                      <option value="★★★★★">★★★★★</option>
                    </select>
                  </label>
                </div>
                <br />
                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
      </div>
      {/* <div>
        {reviewItem}
      </div> */}

    </div>
  </div>
);
}
}

export default ProductsDetailPage;

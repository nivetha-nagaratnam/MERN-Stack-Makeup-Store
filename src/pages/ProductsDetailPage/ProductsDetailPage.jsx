import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import katvond_liner from "../../images/katvond-eyeliner.png";
import better_than_s from "../../images/twoface-mascara.png";
import flyliner from "../../images/fenty-eyeliner.png";
import laura_powder from "../../images/laura-powder.png";
import nars_concealer from "../../images/nars-concealor.png";
import fenty_highlighter from "../../images/fenty-highlighter.jpeg";
import hoola_bronzer from "../../images/benefit- bronzer.jpeg";
import tarte_blush from "../../images/tarte- blush.jpeg";
import kylie_gloss from "../../images/kylie- lip gloss.jpeg";
import fenty_gloss from "../../images/fenty-lip gloss.jpeg";
import mac_lipstick from "../../images/mac- lipstick.jpeg";

class ProductsDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      review: [],
      user: "",
      content: "",
      rating: "",
      dupe: [],
      name: "",
      price: "",
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
      rating: this.state.rating,
    };

    axios
      .post(
        "http://localhost:3000/api/reviews/products/" +
          this.props.match.params.id +
          "/reviews",
        data
      )
      .then((res) => {
        this.setState({
          ...this.state,
          user: "",
          content: "",
          rating: "",
        });
        //redirect
        // this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateReview!");
      });
  };

  onSubmit1 = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      price: this.state.price,
    };

    axios
      .post(
        "http://localhost:3000/api/dupes/products/" +
          this.props.match.params.id +
          "/dupes",
        data
      )
      .then((res) => {
        this.setState({
          ...this.state,
          name: "",
          price: "",
        });
        //redirect
        // this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateDupe!");
      });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/products/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          product: res.data,
          review: Object.values(res.data.review) || null,
          dupe: Object.values(res.data.dupe) || null,
        });
      })
      .catch((err) => {
        console.log("Error from ProductDetailsPage");
      });
  }

  render() {
    const product = this.state.product;
    let productItem = (
      <div>
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
              <td>{product.name}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Brand</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Shade</td>
              <td>{product.colour}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Price</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Description</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Category</td>
              <td>{product.category}</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Rating</td>
              <td>{product.rating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    const review = this.state.review;
    let reviewItems = review.map((rev) => {
      return (
        <tbody>
          <tr>
            <td>{rev.user}</td>
            <td>{rev.content}</td>
            <td>{rev.rating}</td>
          </tr>
        </tbody>
      );
    });

    let image = "";

    if (this.state.product.name === "Tattoo Eyeliner") {
      image = <img src={katvond_liner} alt="liner" />;
    } else if (this.state.product.name === "Better Than Sex Mascara") {
      image = <img src={better_than_s} alt="mascaras" />;
    } else if (
      this.state.product.name === "Flyliner Longwear Liquid Eyeliner"
    ) {
      image = <img src={flyliner} alt="liner" />;
    } else if (this.state.product.name === "Translucent Loose Setting Powder") {
      image = <img src={laura_powder} alt="powder" />;
    } else if (this.state.product.name === "Radiant Creamy Concealer") {
      image = <img src={nars_concealer} alt="concealer" />;
    } else if (this.state.product.name === "Killawatt Freestyle Highlighter") {
      image = <img src={fenty_highlighter} alt="highlighter" />;
    } else if (this.state.product.name === "Hoola Matte Bronzer") {
      image = <img src={hoola_bronzer} alt="bronzer" />;
    } else if (this.state.product.name === "Amazonian Clay 12-Hour Blush") {
      image = <img src={tarte_blush} alt="blush" />;
    } else if (this.state.product.name === "High Gloss") {
      image = <img src={kylie_gloss} alt="liner" />;
    } else if (
      this.state.product.name === "Gloss Bomb Universal Lip Luminizer"
    ) {
      image = <img src={fenty_gloss} alt="lipgloss" />;
    } else if (this.state.product.name === "Matte Lipstick") {
      image = <img src={mac_lipstick} alt="lipstick" />;
    } else {
      image = "";
    }

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
              <p className="lead text-center">View Products's Info</p>
              {image}
              <hr /> <br />
            </div>
          </div>
          <div>{productItem}</div>
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
                  <select
                    name="rating"
                    value={this.state.rating}
                    onChange={this.onChange}
                  >
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
          <br></br>
          <div></div>

          <div>
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Review</th>
                  <th>Rating</th>
                </tr>
              </thead>
              {reviewItems}
            </table>
          </div>

          <h2>Dupes</h2>
          <form noValidate onSubmit={this.onSubmit1}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Dupe Name"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="text"
                placeholder="Add Dupe Price"
                name="price"
                className="form-control"
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              className="btn btn-outline-warning btn-block mt-4"
            />
          </form>
          <Link to={`/product-detail/${product._id}/dupes/show`} className='NavBar-link'>View All Dupes</Link>
        </div>
      </div>
    );
  }
}

export default ProductsDetailPage;

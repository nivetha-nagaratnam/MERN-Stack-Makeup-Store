import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
import natasha_eyeshadow from "../../images/natasha-eyepalette.png";
import "./ProductsDetailPage.css";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
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
      image: "",
      modal: false,
      modal1: false,
    };
  }

  addToCart = (id, quantity) => {
    let requestData = {
      productId: id,
      quantity: quantity,
    };
    axios
      .post("/api/cart", requestData)
      .then((res) => {
        console.log("item Added", res);
      })
      .catch((err) => {
        console.log("couldn't add item");
      });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  toggle1 = () => {
    this.setState({
      modal1: !this.state.modal1,
    });
  };

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
        "/api/reviews/products/" +
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
        //refresh page
        window.location.reload(false);
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
      image: this.state.image,
    };

    axios
      .post(
        "/api/dupes/products/" +
          this.props.match.params.id +
          "/dupes",
        data
      )
      .then((res) => {
        this.setState({
          ...this.state,
          name: "",
          price: "",
          image: "",
        });
      })
      .catch((err) => {
        console.log("Error in CreateDupe!");
      });
  };

  componentDidMount() {
    axios
      .get("/api/products/" + this.props.match.params.id)
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

    const review = this.state.review;
    let reviewItems = review.map((rev) => {
      return (
        <tbody>
          <tr >
            <td >{rev.user}</td>
            <td >{rev.content}</td>
            <td >{rev.rating}</td>
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
    } else if (this.state.product.name === "Sunset Eyeshadow Palette") {
      image = <img src={natasha_eyeshadow} alt="eyeshadow" />;
    } else {
      image = "";
    }

    return (
      <React.Fragment>
        <main className="product-detail-container">
          <div className="left-side">
            <div className="image_product">{image}</div>
          </div>

          <div className="right-side">
            <div className="product-header">
              <div className="brand-title">{product.brand}</div>
              <div className="name-title">{product.name}</div>
              <div className="brand-title">{product.rating}</div>
            </div>

            <div className="product-body">
              <p> Shade: {product.colour}</p>
              <p>{product.description}</p>
            </div>

            <div className="product-links">
              <MDBContainer>
                <div className="links">
                  <MDBBtn
                    onClick={this.toggle1}
                    color="dark"
                    className="btn btn-dark btn-rounded mb-4"
                  >
                    ADD A DUPE
                  </MDBBtn>
                  <div>
                    <Link
                      to={`/product-detail/${product._id}/dupes/show`}
                      className="btn btn-dark btn-rounded mb-4"
                    >
                      View All Dupes
                    </Link>
                  </div>

                  <button
                    onClick={(e) => this.addToCart(product._id, 1)}
                    className="btn btn-dark btn-rounded mb-4"
                  >
                    Add to cart
                  </button>

                  <MDBModal
                    isOpen={this.state.modal1}
                    fade={false}
                    toggle={this.toggle1}
                  >
                    <MDBModalHeader toggle={this.toggle1}>
                      <span style={{ fontWeight: "bold" }}>Add A Dupe</span>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <form noValidate onSubmit={this.onSubmit1}>
                        <div className="modal-body mx-3">
                          <div className="md-form mb-5">
                            <i className="fas fa-cart-plus prefix grey-text"></i>
                            <input
                              type="text"
                              placeholder="Enter Dupe Name"
                              name="name"
                              classNameName="form-control"
                              value={this.state.name}
                              onChange={this.onChange}
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="orangeForm-name"
                            ></label>
                          </div>
                          <div className="md-form mb-5">
                            <i className="fas fa-dollar-sign prefix grey-text"></i>
                            <input
                              type="text"
                              placeholder="Add Dupe Price"
                              name="price"
                              classNameName="form-control"
                              value={this.state.price}
                              onChange={this.onChange}
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="form32"
                            ></label>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-dark" type="submit">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="dark" onClick={this.toggle1}>
                        Close
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </div>
              </MDBContainer>
            </div>

            <div className="price">
              <span>${product.price}</span>
              <span
                className="likebtn-wrapper"
                data-theme="custom"
                data-icon_l="hrt2"
                data-icon_l_c_v="#fb0545"
                data-icon_d_c_v="#000000"
                data-ef_voting="buzz"
                data-identifier="like"
                data-counter_zero_show="true"
                data-share_size="large"
              ></span>
            </div>
          </div>
        </main>

        <div className="line"></div>
        <br></br>
        <br></br>
        <div className="rating-title"> Reviews & Ratings </div>

        <div>
          <span>
            <div>
              <MDBContainer>
                <div className="rate-link">
                  <MDBBtn
                    onClick={this.toggle}
                    color="dark"
                    className="btn btn-dark btn-rounded mb-4 "
                  >
                    RATE & REVIEW
                  </MDBBtn>
                </div>
                <MDBModal
                  isOpen={this.state.modal}
                  fade={false}
                  toggle={this.toggle}
                >
                  <MDBModalHeader
                    className="make-modal-font-bigger"
                    toggle={this.toggle}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Ratings & Review{" "}
                    </span>
                  </MDBModalHeader>
                  <MDBModalBody className="make-modal-font-bigger">
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="modal-body mx-3">
                        <div className="md-form mb-4">
                          <div className="md-form mb-4">
                            <input
                              type="text"
                              placeholder="Enter Your Name"
                              name="user"
                              className="form-control"
                              value={this.state.user}
                              onChange={this.onChange}
                            />
                            <label
                              data-error="wrong"
                              data-success="right"
                              for="form32"
                            ></label>
                          </div>
                          <input
                            type="text"
                            placeholder="Add A Product Review"
                            name="content"
                            className="form-control"
                            value={this.state.content}
                            onChange={this.onChange}
                          />
                          <label
                            data-error="wrong"
                            data-success="right"
                            for="form32"
                          ></label>
                        </div>
                        <div className="md-form mb-5">
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
                          <label
                            data-error="wrong"
                            data-success="right"
                            for="form32"
                          ></label>
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-dark" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="dark" onClick={this.toggle}>
                      Close
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBContainer>
            </div>
          </span>
        </div>

        <div className="col-md-10 ">
          <table className="table table-hover">
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
      </React.Fragment>
    );
  }
}

export default ProductsDetailPage;

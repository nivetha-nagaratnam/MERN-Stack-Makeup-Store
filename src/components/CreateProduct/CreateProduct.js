import React, { Component } from "react";
import axios from "axios";
import "./CreateProduct.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      rating: "",
      description: "",
      brand: "",
      colour: "",
      category: "",
    };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: this.state.name,
      price: this.state.price,
      rating: this.state.rating,
      description: this.state.description,
      brand: this.state.brand,
      colour: this.state.colour,
      category: this.state.category,
    };

    axios
      .post("/api/products", data)
      .then((res) => {
        this.setState({
          name: "",
          price: "",
          rating: "",
          description: "",
          brand: "",
          colour: "",
          category: "",
        });
        //redirect
        this.props.history.push("/");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Error in CreateProduct!");
      });
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow className="body">
            <MDBCol md="12">
              <MDBCard className="body_max ">
                <MDBCardBody>
                  <form noValidate onSubmit={this.onSubmit}>
                    <p className="font-title1">Add Product</p>
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name of Product"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Brand of Product"
                      name="brand"
                      className="form-control"
                      value={this.state.brand}
                      onChange={this.onChange}
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Shade
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Shade of Product"
                      name="colour"
                      className="form-control"
                      value={this.state.colour}
                      onChange={this.onChange}
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Price of Product"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={this.onChange}
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Product Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Enter Description of Product"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    <br />
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Product Category
                    </label>
                    &nbsp;
                    <select
                      className="form-control"
                      name="category"
                      value={this.state.category}
                      onChange={this.onChange}
                    >
                      <option value="" disabled selected>
                        Product Category
                      </option>
                      <option value="face">Face</option>
                      <option value="lips">Lips</option>
                      <option value="cheeks">Cheeks</option>
                      <option value="eyes">Eyes</option>
                    </select>
                    <br />
                    <label
                      htmlFor="defaultFormContactMessageEx"
                      className="grey-text"
                    >
                      Ratings
                    </label>
                    &nbsp;
                    <select
                      className="form-control"
                      name="rating"
                      value={this.state.rating}
                      onChange={this.onChange}
                    >
                      <option value="" disabled selected>
                        Ratings
                      </option>
                      <option value="☆☆☆☆☆">☆☆☆☆☆</option>
                      <option value="★☆☆☆☆">★☆☆☆☆</option>
                      <option value="★★☆☆☆">★★☆☆☆</option>
                      <option value="★★★☆☆">★★★☆☆</option>
                      <option value="★★★★☆">★★★★☆</option>
                      <option value="★★★★★">★★★★★</option>
                    </select>
                    <div className="text-center mt-4">
                      <MDBBtn color="dark" type="submit">
                        Add Product
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default CreateProduct;

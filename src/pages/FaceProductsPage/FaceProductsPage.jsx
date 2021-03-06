import React, { Component } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import tokenService from "../../utils/tokenService";
import "./FaceProductsPage.css";

class FaceProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/products/face", {
        headers: {
          Authorization: "Bearer " + tokenService.getToken(),
        },
      })
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ViewProductsList");
      });
  }

  render() {
    const products = this.state.products;
    console.log("PrintProduct: " + products);
    let productList;

    if (!products) {
      productList = "there is no product record!";
    } else {
      productList = products.map((product, k) => (
        <ProductCard product={product} key={k} history={this.props.history} />
      ));
    }

    return (
      <div className="ShowBookList">
        <div className="vfp-container">
          <div className="row"></div>

          <div className="list">{productList}</div>
        </div>
      </div>
    );
  }
}

export default FaceProductsPage;

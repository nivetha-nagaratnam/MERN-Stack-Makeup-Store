import React, { Component } from "react";
import axios from "axios";
import "./CartPage.css";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      payload: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/cart")
      .then((res) => {
        this.setState({
          ...this.state,
          carts: res.data.data.items,
          payload: res.data.data
        });
      })
      .catch((err) => {
        console.log("Error in fetchCart");
      });
  }

  fetchCart = () => {
    axios
      .get("http://localhost:3000/api/cart")
      .then((res) => {
        this.setState({
          ...this.state,
          carts: res.data.data.items,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("Error in fetchCart");
      });
  };

  increaseQty = (id) => {
    let increaseQtyData = {
      productId: id,
      quantity: 1,
    };
    axios
      .post("http://localhost:3000/api/cart", increaseQtyData)
      .then((res) => {
        console.log(res.data.items);
        this.fetchCart();
        alert("Item Incremented");
      })
      .catch((err) => {
        console.log("Error in fetchCart");
      });
  };

  emptyCart = () => {
    axios
      .delete("http://localhost:3000/api/cart/empty-cart")
      .then((res) => {
        this.fetchCart();
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in empty cart");
      });
  };

  render() {
    return (
      <main>
        <section>
          <div className="banner-innerpage">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 align-self-center text-center">
                  <h1 className="title">Cart Listing</h1>
                  <h6 className="subtitle op-8">
                    hi
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="spacer">
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-9">
                  <div className="row shop-listing">
                    <table className="table shop-table">
                      <tr>
                        <th className="b-0">Name</th>
                        <th className="b-0">Price</th>
                        <th className="b-0">Quantity</th>
                        <th className="b-0 text-right">Total Price</th>
                      </tr>
                      {this.state.carts.map((item, i) => (
                        <tr>
                          <td>{item.productId.name}</td>
                          <td>{item.productId.price}</td>
                          <td>
                            <button
                              onClick={(e) =>
                                this.increaseQty(item.productId._id)
                              }
                              className="btn btn-primary btn-sm"
                            >
                              +
                            </button>
                            {item.quantity}
                            <button className="btn btn-primary btn-sm">
                              -
                            </button>
                          </td>
                          <td className="text-right">
                            <h5 className="font-medium m-b-30">{item.total}</h5>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colspan="3" align="right">
                          Subtotal :{this.state.payload.subTotal}
                        </td>
                        <td colspan="4" align="right">
                          <button
                            className="btn btn-danger"
                            onClick={(e) => this.emptyCart()}
                          >
                            Empty cart
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default CartPage;

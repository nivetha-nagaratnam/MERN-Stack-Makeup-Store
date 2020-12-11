import React, { Component } from "react";
import axios from "axios";
import "./CartPage.css";
import CartPayment from "../../components/CartPayment/CartPayment";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

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
      .get("/api/cart")
      .then((res) => {
        this.setState({
          ...this.state,
          carts: res.data.data.items,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log("Error in fetchCart");
      });
  }

  fetchCart = () => {
    axios
      .get("/api/cart")
      .then((res) => {
        this.setState({
          ...this.state,
          carts: res.data.data.items,
          payload: res.data.data,
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
      .post("/api/cart", increaseQtyData)
      .then((res) => {
        console.log(res.data.items);
        this.fetchCart();
      })
      .catch((err) => {
        console.log("Error in fetchCart");
      });
  };

  emptyCart = () => {
    axios
      .delete("/api/cart/empty-cart")
      .then((res) => {
        this.fetchCart();
        this.props.history.push("/");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Error in empty cart");
      });
  };

  render() {
    return (
      <main className="make-row">
        <CartPayment />

        <br></br>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody className="make-body-bigger">
                  <section>
                    <div className="banner-innerpage">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-md-6 align-self-center text-center">
                            <h1 className="title">My Basket</h1>
                            <h6 className="subtitle op-8">Order Overview</h6>
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
                                  <th className="b-0 text-right">
                                    Total Price
                                  </th>
                                </tr>
                                {this.state.carts.map((item, i) => (
                                  <tr>
                                    <td>{item.productId.name}</td>
                                    <td> ${item.productId.price}</td>
                                    <td>
                                      <button
                                        onClick={(e) =>
                                          this.increaseQty(item.productId._id)
                                        }
                                        className="btn btn-dark"
                                      >
                                        +
                                      </button>
                                      {item.quantity}
                                    </td>
                                    <td className="text-right">
                                      <h5 className="font-medium m-b-30">
                                        ${item.total}
                                      </h5>
                                    </td>
                                  </tr>
                                ))}
                                <tr>
                                  <td colspan="3" align="right">
                                    Subtotal: ${this.state.payload.subTotal}
                                  </td>
                                  <td colspan="4" align="right">
                                    <button
                                      className="btn btn-dark"
                                      onClick={(e) => this.emptyCart()}
                                    >
                                      Clear Cart
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
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </main>
    );
  }
}

export default CartPage;

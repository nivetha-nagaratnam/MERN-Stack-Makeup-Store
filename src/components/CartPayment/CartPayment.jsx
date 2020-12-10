import React, { Component } from 'react';
import './CartPayment.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';

class CartPayment extends Component {

  state = {
    modal14: false
  }
  
  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <div>
        <MDBContainer>
        <MDBModal isOpen={this.state.modal14} fade={false} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}> <span style={{ fontWeight: 'bold' }}>Order Confirmation</span></MDBModalHeader>
          <MDBModalBody className="modal-font">
          Hello customer thank you for shopping at Our Little Secret. We are working hard to 
          to prepare your order. Here is your <span style={{ fontWeight: 'bold' }}>Order Number:XXXXXXXXXX</span>. Check your email to recieve
          shipping updates. Thank You :)
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="dark" onClick={this.toggle(14)}>Close</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody className='make-box-bigger'>
                  <div className="row-cart">
                    <div className="col-75">
                      <div className="container-cart">
                        <div className="row-cart">
                          <div className="col-50">
                            <div className="font-title">Billing Address</div>
                            <label className="label-cart" for="fname">
                              <i className="fas fa-user"></i> Full Name
                            </label>
                            <input
                              className="input-cart"
                              type="text"
                              id="fname"
                              name="firstname"
                              placeholder="John M. Doe"
                            />
                            <label className="label-cart" for="email">
                              <i className="fas fa-envelope"></i> Email
                            </label>
                            <input
                              className="input-cart"
                              type="text"
                              id="email"
                              name="email"
                              placeholder="john@example.com"
                            />
                            <label className="label-cart" for="adr">
                              <i className="fas fa-address-card"></i> Address
                            </label>
                            <input
                              className="input-cart"
                              type="text"
                              id="adr"
                              name="address"
                              placeholder="141 Bay Street"
                            />
                            <label className="label-cart" for="city">
                              <i className="fas fa-institution"></i> City
                            </label>
                            <input
                              className="input-cart"
                              type="text"
                              id="city"
                              name="city"
                              placeholder="Toronto"
                            />

                            <div className="row-cart">
                              <div className="col-50">
                                <label className="label-cart" for="state">
                                  Province
                                </label>
                                <input
                                  className="input-cart"
                                  type="text"
                                  id="state"
                                  name="state"
                                  placeholder="ON"
                                />
                              </div>
                              <div className="col-50">
                                <label className="label-cart" for="zip">
                                  Postal Code
                                </label>
                                <input
                                  className="input-cart"
                                  type="text"
                                  id="zip"
                                  name="zip"
                                  placeholder="xxx xxx"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-50">
                            <div className="font-title">Payment</div>
                            <label className="label-cart" for="fname">
                              Accepted Cards
                            </label>
                            <div className="icon-container">
                              <i className="fab fa-cc-visa visa"></i>
                              <i className="fab fa-cc-amex amex"></i>
                              <i className="fab fa-cc-mastercard mastercard"></i>
                              <i className="fab fa-cc-discover discover"></i>
                            </div>
                            <label className="label-cart" for="cname">
                              Name on Card
                            </label>
                            <input
                              className="input-cart"
                              type="text"
                              id="cname"
                              name="cardname"
                              placeholder="John More Doe"
                            />
                            <label className="label-cart" for="ccnum">
                              Credit card number
                            </label>
                            <input
                              className="input-cart"
                              type="text"
                              id="ccnum"
                              name="cardnumber"
                              placeholder="1111-2222-3333-4444"
                            />
                            <label className="label-cart" for="expmonth">
                              Exp Month
                            </label>
                            <input
                              className="input-cart"
                              type="text"
                              id="expmonth"
                              name="expmonth"
                              placeholder="September"
                            />
                            <div className="row-cart">
                              <div className="col-50">
                                <label className="label-cart" for="expyear">
                                  Exp Year
                                </label>
                                <input
                                  className="input-cart"
                                  type="text"
                                  id="expyear"
                                  name="expyear"
                                  placeholder="2018"
                                />
                              </div>
                              <div className="col-50">
                                <label className="label-cart" for="cvv">
                                  CVV
                                </label>
                                <input
                                  className="input-cart"
                                  type="text"
                                  id="cvv"
                                  name="cvv"
                                  placeholder="352"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <label className="label-cart">
                          <input
                            className="input-cart"
                            type="checkbox"
                            checked="checked"
                            name="sameadr"
                          />{" "}
                          Shipping address same as billing
                        </label>
                        <input
                          className="input-cart"
                          type="submit"
                          value="Submit Your Order"
                          className="btn btn-primary btn-dark btn-cart"
                          onClick={this.toggle(14)}
                        />
                      </div>
                    </div>
                    <div className="col-25"></div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer> 
      </div>
    );
  }
}

export default CartPayment;

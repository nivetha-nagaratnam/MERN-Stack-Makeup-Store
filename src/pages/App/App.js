import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProductPage from '../ProductPage/ProductPage';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';
import './App.css';
import CreateProduct from '../../components/CreateProduct/CreateProduct';
import ViewProductsPage from '../ViewProductsPage/ViewProductsPage';
import ViewDupesPage from '../ViewDupesPage/ViewDupesPage';
import ProductsDetailPage from '../ProductsDetailPage/ProductsDetailPage';
import LipProductsPage from '../LipProductsPage/LipProductsPage';
import EyeProductsPage from '../EyeProductsPage/EyeProductsPage';
import CheekProductsPage from '../CheekProductsPage/CheekProductsPage'
import FaceProductsPage from '../FaceProductsPage/FaceProductsPage'
import CartPage from '../CartPage/CartPage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser()
    };
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };


  render() {
    return (
      <div>
        <ProductPage user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route path="/create" component={CreateProduct} />
          <Route exact path="/view-all-products" component={ViewProductsPage} />
          <Route exact path="/product-detail/:id/dupes/show"  component={ViewDupesPage} />
          <Route exact path="/view-lip-products" component={LipProductsPage} />
          <Route exact path="/view-eye-products" component={EyeProductsPage} />
          <Route
            exact
            path="/view-cheek-products"
            component={CheekProductsPage}
          />
          <Route
            exact
            path="/view-face-products"
            component={FaceProductsPage}
          />
          <Route
            exact
            path="/product-detail/:id"
            component={ProductsDetailPage}
          />
          <Route
            exact
            path="/cart"
            component={CartPage}
            render={({ history }) => (
              <CartPage
                history={history}
              />
            )}          
          />
        </Switch>
      </div>
    );
  }
}

export default App;

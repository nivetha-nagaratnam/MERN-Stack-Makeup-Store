import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProductPage from '../ProductPage/ProductPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  
  }
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div>
        <ProductPage 
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
        <h1 className="App"> Welcome To Makeup Store</h1>
        <Switch>
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}  
              handleSignupOrLogin={this.handleSignupOrLogin}    
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}  
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./pages/signin/signin";
import Register from "./pages/register/register";
import ResetPassword from "./pages/forgetpassword/resetpassword";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  render() {
    return (
      <Router>
        <Route exact path='/' component={SignIn} />
        <Route path='/register' component={Register} />
        <Route path='/resetpassword' component={ResetPassword} />
      </Router >
    );
  }
}

export default App;

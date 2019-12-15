import React, { Component } from 'react';
import SignIn from "./pages/signin/signin";
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
      <div className='App'>
        <SignIn />
      </div>
    );
  }
}

export default App;

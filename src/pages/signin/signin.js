import React, { Component } from "react";
import "./signin.css";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) { }

    render() {
        return (
            <React.Fragment>
                <div class='container'>
                    <div class='row'>
                        <div class='col-sm-9 col-md-7 col-lg-5 mx-auto'>
                            <div class='card card-signin my-5'>
                                <div class='card-body'>
                                    <h5 class='card-title text-center'>Sign In</h5>
                                    <form class='form-signin'>
                                        <div class='form-label-group'>
                                            <input
                                                type='email'
                                                id='inputEmail'
                                                class='form-control'
                                                placeholder='Email address'
                                                required
                                                autofocus
                                            ></input>
                                            <label for='inputEmail'>Email address</label>
                                        </div>

                                        <div class='form-label-group'>
                                            <input
                                                type='password'
                                                id='inputPassword'
                                                class='form-control'
                                                placeholder='Password'
                                                required
                                            ></input>
                                            <label for='inputPassword'>Password</label>
                                        </div>

                                        <div class='custom-control custom-checkbox mb-3'>
                                            <input
                                                type='checkbox'
                                                class='custom-control-input'
                                                id='customCheck1'
                                            ></input>
                                            <label class='custom-control-label' for='customCheck1'>
                                                Remember password
                      </label>
                                        </div>
                                        <button
                                            class='btn btn-lg btn-primary btn-block text-uppercase'
                                            type='submit'
                                        >
                                            Sign in
                    </button>
                                        <hr class='my-4'></hr>
                                        <a class='d-block text-center mt-2 small' href='#'>
                                            Register
                    </a>
                                        <a class='d-block text-center mt-2 small' href='#'>
                                            Forgot Password?
                    </a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SignIn;
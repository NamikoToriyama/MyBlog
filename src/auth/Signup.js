import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import firebase from "firebase";
import '../css/Login.css';

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
        <div className="sign-up-content">
          <form onSubmit={this.handleSignUp} className="sign-up">
          <h1 className="sign-up-title">Sign up</h1>
            <label>
              Email
              <input
                style={{ width: "100%" }}
                name="email"
                type="email"
                placeholder="Email"
                className="sign-up-input"
              />
            </label>
            <label>
              Password
              <input
                style={{ width: "100%" }}
                name="password"
                type="password"
                placeholder="Password"
                className="sign-up-input"
              />
            </label>
            <button type="submit" class="sign-up-button">Sign Up!!</button>
            <div>
              <Link to="/Login"><p className="login-signup">▷ Login</p></Link>
            </div>
          </form>
          
        </div>
      );
  }
}

export default withRouter(SignUpContainer);

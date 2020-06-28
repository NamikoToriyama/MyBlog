import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import firebase from "firebase";

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
        <div>
          <h1>Sign up</h1>
          <form onSubmit={this.handleSignUp}>
            <label>
              Email
              <input
                style={{ width: "100%" }}
                name="email"
                type="email"
                placeholder="Email"
              />
            </label>
            <label>
              Password
              <input
                style={{ width: "100%" }}
                name="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <button type="submit">Sign Up</button>
          </form>
          <Link to="/Login">Login</Link>
        </div>
      );
  }
}

export default withRouter(SignUpContainer);

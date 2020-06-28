import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import firebase from "firebase";

class LogInContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
        <div>
          <h1>Log in</h1>
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
            <button type="submit">Log in</button>
          </form>
          <Link to="/Signup">Sign up</Link>
        </div>
      );
    };
}

export default withRouter(LogInContainer);

import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import firebase from "firebase";
import '../css/form.css';

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
      <div className="sign-up-content">
      <form onSubmit={this.handleSignUp} className="sign-up">
      <h1 className="sign-up-title">Login</h1>
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
        <button type="submit" className="sign-up-button">Login</button>
        <div>
          <Link to="/Signup"><p className="login-signup">▷ Sign up</p></Link>
        </div>
      </form>
      
    </div>
      );
    };
}

export default withRouter(LogInContainer);

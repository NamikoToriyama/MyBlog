import React, { Component } from 'react';
import {Route,HashRouter as Router } from 'react-router-dom';
import firebase from "firebase";

import Header from './Header';

import Login from './auth/Login';
import Signup from './auth/Signup';
import PrivateRoute from './PrivateRoute';

import Home from './Home';
import List from './components/List';
import LatestList from './components/LatestList';
import Add from './components/Add';
import Update from './components/Update';
import Delete from './components/Delete';
import Article from './components/Article';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppRouter extends Component {

  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  
  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }
    return (
      <div>   
          <Router>
          <React.Fragment>
            <MuiThemeProvider>
              <Header />
            </MuiThemeProvider>
            </React.Fragment>
              <Route exact path='/' component={Home}/>
              <Route exact path='/Login' component={Login}/>
              <Route exact path='/Signup' component={Signup}/>
              <Route exact path='/List' component={List}/>
              <Route exact path='/LatestList' component={LatestList}/>
              <Route exact path='/Article' component={Article}/>
              <PrivateRoute path="/Add" authenticated={this.state.authenticated} component={Add} />
              <PrivateRoute path="/Update" authenticated={this.state.authenticated} component={Update} />
              <PrivateRoute path="/Delete" authenticated={this.state.authenticated} component={Delete} />
          </Router>
      </div>
    );
  }
}

export default AppRouter;
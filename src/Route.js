import React, { Component } from 'react';
import {Route,HashRouter as Router} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Login from './auth/Login';
import Signup from './auth/Signup';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Article from './components/Article';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './auth/AuthProvider';


class AppRouter extends Component {
  render() {
    return (
      <div>
        <AuthProvider>
          <Router>
              <Header />
              <Route exact path='/' component={Home}/>
              <Route exact path='/Login' component={Login}/>
              <Route exact path='/Signup' component={Signup}/>
              <Route exact path='/List' component={List}/>
              <Route exact path='/Article' component={Article}/>
              <PrivateRoute exact path='/Add' component={Add}/>
              <PrivateRoute exact path='/Edit' component={Edit}/>
              <PrivateRoute exact path='/Delete' component={Delete}/>
          </Router>
        </AuthProvider>
      </div>
    );
  }
}

export default AppRouter;
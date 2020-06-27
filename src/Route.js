import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Router>
            <Header />
            <Route exact path='/List' component={List}/>
            <Route exact path='/Add' component={Add}/>
            <Route exact path='/Edit' component={Edit}/>
            <Route exact path='/Delete' component={Delete}/>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
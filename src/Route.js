import React, { Component } from 'react';
import {Route,HashRouter as Router} from 'react-router-dom'
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import Article from './Article';


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
            <Route exact path='/Article' component={Article}/>
        </Router>
      </div>
    );
  }
}

export default AppRouter;
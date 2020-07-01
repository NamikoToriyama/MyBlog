import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import firebase from 'firebase';
import { Button } from '@material-ui/core';
import AppBar from 'material-ui/AppBar';
import Toolbar from '@material-ui/core/Toolbar'

import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.logout = this.logout.bind(this);
    this.home = this.home.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });


  logout() {
    firebase.auth().signOut();
    alert("ログアウトしました");
    this.props.history.push('/')
  }

  home(){
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <AppBar
          position="static"
          className="header"
          onLeftIconButtonClick={this.handleToggle}
        >
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={this.handleToggle}
          >
            <AppBar />
            <MenuItem
              primaryText='HOME'
              containerElement={<Link to="/" />}
              onClick={this.handleToggle}
            />
             <MenuItem
              primaryText='ブログ記事一覧'
              containerElement={<Link to="/List" />}
              onClick={this.handleToggle}
            />
             <MenuItem
              primaryText='ブログを書く'
              containerElement={<Link to="/Add" />}
              onClick={this.handleToggle}
            />
            <MenuItem
              primaryText='記事の削除'
              containerElement={<Link to="/Delete" />}
              onClick={this.handleToggle}
            />
          </Drawer>

          <Toolbar>
            <Button color="inherit" onClick={this.logout} ><p className="head">Sign out</p></Button>
            <Button color="inherit "><Link to="/Login" className="head">Login</Link></Button>
          </Toolbar>
        </AppBar>
        <div className="top" onClick={this.home}>
          <div className="title">
            This is my Life!!!
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);

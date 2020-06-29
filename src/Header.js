import React, { Component } from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import firebase from 'firebase';
import { Button } from '@material-ui/core';
import AppBar from 'material-ui/AppBar';
import Toolbar from '@material-ui/core/Toolbar'

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Chip from 'material-ui/Chip';
import Login from './auth/Login';

import { Route, Redirect } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.logout = this.logout.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });


  logout() {
    firebase.auth().signOut();
    alert("ログアウトしました");
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
            <Button color="inherit" onClick={this.logout} className="head">Sign out</Button>
            <Button color="inherit "><Link to="/Login" className="head">Login</Link></Button>
          </Toolbar>
        </AppBar>
        <div className="top">
          <div className="title">
            This is my Life!!!
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Header);

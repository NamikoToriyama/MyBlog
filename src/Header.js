import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import { Button } from '@material-ui/core';


class Header extends React.Component {
  render() {
    return (
        <div>
          <header className="header">
            <div>
              <div className="links">
                <Link to="/"><p className="head">HOME</p></Link>
              </div>
              <div className="links">
                <Link to="/List"><p className="head">ブログ記事一覧</p></Link>
              </div>
              <div className="links">
                <Link to="/Add"><p className="head">ブログを書く</p></Link>
              </div>
              <div className="links">
              <Link to="/Delete"><p className="head">記事の削除</p></Link>
              </div>
            </div>
            <div>
            
            <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
            <Button>
              <Link to="/Login">Sign in</Link>
            </Button>
            </div>
          </header>
          <div className="title">
            ♡ ♡ ♡ Namiko's Blog ♡ ♡ ♡
          </div>
         </div>
        
    );
  }
}


export default Header;

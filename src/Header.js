import React from 'react';
import './css/App.css';
import { Link } from 'react-router-dom'
import firebase from 'firebase';


class Header extends React.Component {
  render() {
    return (
          <header class="header">
            <div class="title">
              ♡ ♡ ♡ Namiko's Blog ♡ ♡ ♡
            </div>
            <div>
              <div class="links">
                <Link to="/"><p class="head">HOME</p></Link>
              </div>
              <div class="links">
                <Link to="/List"><p class="head">ブログ記事一覧</p></Link>
              </div>
              <div class="links">
                <Link to="/Add"><p class="head">ブログを書く</p></Link>
              </div>
              <div class="links">
                <Link to="/Delete"><p class="head">記事の削除</p></Link>
              </div>
            </div>
            <div>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            <Link to="/Signup">Sign up</Link>
            </div>
          </header>
        
    );
  }
}


export default Header;

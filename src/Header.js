import React from 'react';
import './css/App.css';
import { Link } from 'react-router-dom'
import firebase from 'firebase';


class Header extends React.Component {
  render() {
    return (
          <header className="header">
            <div className="title">
              ♡ ♡ ♡ Namiko's Blog ♡ ♡ ♡
            </div>
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
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            <Link to="/Signup">Sign up</Link>
            </div>
          </header>
        
    );
  }
}


export default Header;

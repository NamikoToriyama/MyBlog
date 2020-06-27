import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Article extends Component {

  render() {
    return (
      <div class="box">
        <div className="article">
        <h1>{this.props.location.state.title}</h1>
        <p class="category">カテゴリ:{this.props.location.state.category}</p>
        <div className="panel">
            <p className="content">{this.props.location.state.content}</p>
        </div>
        <div>
          <Link to="/List">▷ 記事一覧に戻る</Link>
        </div>
      </div>
      </div>
  );
  }
}
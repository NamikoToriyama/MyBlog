import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const moment = require('moment')

export default class Article extends Component {

  render() {
    return (
      <div className="box">
        <div className="article">
          <h1>{this.props.location.state.title}</h1>
          <p className="">作成日:{moment(this.props.location.state.create_data).format("YYYY年 MM月 YY日 h:mm")}</p>
          <p className="category">カテゴリ:{this.props.location.state.category}</p>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../css/form.css';
const moment = require('moment')


export default class Article extends Component {

  replaceBr(text){
    var regex = /(\n)/g
        return text.split(regex).map(function (line) {
            if (line.match(regex)) {
                return React.createElement('br')
            }
            else {
                return line;
            }
        });
  }

  render() {
    return (
        <div className="article">
          <h1 class="article-title">{this.props.location.state.title}</h1>
          <p>作成日:{moment(this.props.location.state.create_data).format("YYYY年 MM月 YY日 h:mm")}</p>
          <p className="category">カテゴリ:{this.props.location.state.category}</p>
          <div className="panel">
          <p className="content">{this.replaceBr(this.props.location.state.content)}</p>
          </div>
          <div>
                <Link to="/List">▷ 記事一覧に戻る</Link>
          </div>
          
        </div>
    );
  }
}
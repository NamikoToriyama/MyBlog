import React, { Component } from 'react';
import { withRouter } from 'react-router'

class Title extends Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.edit = this.editArticle.bind(this);
  }

  onClick() {    
    this.props.history.push({
      pathname: '/Article',
      state: { 
        article_id : this.props.article_id,
        title: this.props.title,
        category: this.props.category,
        content: this.props.content,
      }
    });
  }

  editArticle(){
    this.props.history.push({
      pathname: '/Edit',
      state: { 
        article_id : this.props.article_id,
        title: this.props.title,
        category: this.props.category,
        content: this.props.content,
      }
    });
  }

  render() {
    return (
      <li className="todo">
        <nav className="panel">
          <div className="panel-heading">
            <p>{this.props.article_id}</p>
            <p>{this.props.title}</p>
            <button  onClick={this.onClick}>詳細をみる</button>
            <button  onClick={this.edit}>記事の修正</button>
          </div>
        </nav>
      </li>
    );
  }
}
export default withRouter(Title);
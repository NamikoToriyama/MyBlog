import React, { Component } from 'react';
import { withRouter } from 'react-router'

class Todo extends Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  debug(){
    console.log(this.props)
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

  render() {
    return (
      <li className="todo">
        <nav className="panel">
          <div className="panel-heading">
            <p>{this.props.article_id}</p>
            <p>{this.props.title}</p>
            <button  onClick={this.onClick}>詳細をみる</button>
          </div>
        </nav>
      </li>
    );
  }
}
export default withRouter(Todo);
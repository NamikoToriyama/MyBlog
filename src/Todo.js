import React, { Component } from 'react';

class Todo extends Component {
  debug(){
    console.log(this.props)
  }
  render() {
    // {this.debug()}
    return (
      <li className="todo">
        <nav className="panel">
          <div className="panel-heading">
            <p>{this.props.article_id}</p>
            <p>{this.props.title}</p>
            {/* <p>{this.props.content}</p>
            <p>{this.props.category}</p> */}
          </div>
        </nav>
      </li>
    );
  }
}

export default Todo;
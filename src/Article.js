import React, { Component } from 'react';

export default class Article extends Component {

  debug(){
    console.log(this.props)
  }
  render() {
    {this.debug()}
    return (
      <div class="box">
        <div className="article">
        <h1>{this.props.location.state.title}</h1>
        <p class="category">{this.props.location.state.category}</p>
        <div className="panel">
            <p className="content">{this.props.location.state.content}</p>
        </div>
      </div>
      </div>
  );
    // return (
      // <li className="article">
      //   <h1>{this.props.title}</h1>
      //   <p class="category">{this.props.category}</p>
      //   <div className="panel">
      //       <p>{this.props.content}</p>
      //   </div>
      // </li>
    // );
  }
}
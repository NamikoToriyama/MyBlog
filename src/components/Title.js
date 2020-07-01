import React, { Component } from 'react';
import { withRouter } from 'react-router'
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const moment = require('moment')

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
        create_data: this.props.create_data,
        category: this.props.category,
        content: this.props.content,
      }
    });
  }

  editArticle(){
    this.props.history.push({
      pathname: '/Update',
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
      <div>
      <Card>
        <p>{this.props.article_id}</p>
        <CardTitle title={this.props.title} subtitle={moment(this.props.create_data).format("dddd, MMMM Do YYYY, h:mm a")}/>
        <CardActions>
          <FlatButton label="詳細をみる" onClick={this.onClick}/>
          <FlatButton label="記事の修正" onClick={this.edit}/>
        </CardActions>
      </Card>
      </div>    
    );
  }
}
export default withRouter(Title);
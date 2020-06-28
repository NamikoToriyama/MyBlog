import React, { Component } from 'react';
import firebase from "firebase";
const moment = require('moment')
require('moment-timezone')

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      content: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  addFirestore(collection, size){
    moment.tz.setDefault('Asia/Tokyo')
    let now = moment()
    collection.add({
      title: this.state.title,
      category: this.state.category,
      content: this.state.content,
      create_data: now.format(),
      article_id: size
    });
  }

  onClick() {    
    const collection = firebase.firestore().collection('articles');
    let size = 0
    collection.orderBy('article_id', 'desc').limit(1).get().then(snapshot => { 
      snapshot.forEach(doc => {
        size = doc.data()["article_id"]
      })
      this.addFirestore(collection, size+1)
      this.setState({ title: '',  category: '', content: ''});
    })
  }

  render() {
    const { title, category, content } = this.state;
    return (
      <div className="box">
        <div className="field">
          <label className="label">Title</label>
          <input
            className="input"
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <div className="field">
          <label className="label">Category</label>
          <input
            className="input"
            value={this.state.category}
            onChange={e => this.setState({ category: e.target.value })}
          />
        </div>
        <div className="field">
          <label className="label">Content</label>
          <textarea
            className="input"
            id="blogContent"
            rows={10}
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value })}
          />
        </div>

        <div className="control">
          {title &&
            category && 
              content &&(
              <button className="button is-link" onClick={this.onClick}>
                Submit
              </button>
            )}
        </div>
      </div>
    );
  }
}
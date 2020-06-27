import React, { Component } from 'react';
import firebase from "firebase";

class Edit extends Component {
  constructor(props) {
    super(props);
    let title = this.props.location.state.title
    this.state = {
      article_id: this.props.location.state.article_id,
      title: title,
      category: this.props.location.state.category,
      content: this.props.location.state.content,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {    
    const collection = firebase.firestore().collection('articles');

    // 昔のものを消去する
    collection.where("article_id", "==", this.state.article_id).get().then(snapshot => { 
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        // 新しく追加する
        collection.add({
          title: this.state.title,
          category: this.state.category,
          content: this.state.content,
          article_id: this.state.article_id
        });
        firebase.firestore().collection('articles').doc(doc.id).delete();
      })
    })
    this.props.history.push('/List')
  }

  render() {
    return (
      <div class="box">
        <div className="field">
          <label className="label">Title**</label>
          <input
            className="input"
            defaultValue={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <div className="field">
          <label className="label">Category**</label>
          <input
            className="input"
            defaultValue={this.state.category}
            onChange={e => this.setState({ category: e.target.value })}
          />
        </div>
        <div className="field">
          <label className="label">Content**</label>
          <input
            className="input"
            id= "blogContent"
            defaultValue={this.state.content}
            onChange={e => this.setState({ content: e.target.value })}
          />
        </div>

        <div>
          <button className="button is-link" onClick={this.onClick}>
            修正
          </button>
        </div>
      </div>
    );
  }
}

export default Edit;

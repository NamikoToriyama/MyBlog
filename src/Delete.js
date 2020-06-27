import React, { Component } from 'react';
import firebase from "firebase";
import List from './List';


export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article_id: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  getDocumentId(){
    firebase.firestore()
      .collection('articles')
      .where("article_id", "==", Number(this.state.article_id))
      .limit(10)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
            
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          firebase.firestore().collection('articles').doc(doc.id).delete();
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }

  onClick() {    
    this.getDocumentId()
    this.props.history.push('/List')
  }

  render() {
    return (
      <div>
        <p>消す記事の番号を入力してください</p>
        <input
            className="input"
            value={this.state.article_id}
            onChange={e => this.setState({ article_id: e.target.value })}
          />
          <div className="control">
              <button className="button is-link" onClick={this.onClick}>
                Submit
          </button>
          </div>
          <List />
      </div>
      
    );
  }
}
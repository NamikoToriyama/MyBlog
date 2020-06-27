import React, { Component } from "react";
import './firebase';
import firebase from "firebase";
import "firebase/storage";
import Todo from "./Todo";


class List extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.text = []
  }

  componentDidMount() {
    firebase.firestore()
      .collection('articles')
      .limit(10)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data())
          this.setState({ data: doc.data()|| [] });
          this.text.push(this.state)
        })
      })
    .catch(err => {
      console.log('Error getting documents', err); 
    });
  }

  debug(data){
    console.log(data)
  }

  test(){
    Object.entries(this.text).map( article =>  {
      console.log(article[1]["data"])
    })
  }

  render() {
    return (
      <div class="box">
      <ul>
        {/* {this.debug(this.text)}
        {this.test()} */}
        {/* {this.debug(this.state)} */}
        
        {Object.entries(this.text).map( article =>  (
          <Todo key={article[1]["data"]["article_id"]} article_id={article[1]["data"]["article_id"]}  title={article[1]["data"]["title"]} category={article[1]["data"]["category"]} content={article[1]["data"]["content"]}/>
        ))}
        
        <Todo key={this.state.data["article_id"]} article_id={this.state.data["article_id"]} title={this.state.data["title"]} category={this.state.data["category"]} content={this.state.data["content"]}/>
          
      </ul>
      </div>
    );
  }
}

export default List;

import React, { Component } from "react";
import '../firebase';
import firebase from "firebase";
import "firebase/storage";
import Todo from "./Title";


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      update: true,
    };
    this.text = []
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    firebase.firestore()
      .collection('articles')
      .limit(20)
      .orderBy("article_id", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.setState({ data: doc.data()|| [] });
          this.text.push(this.state)
        })
        this.setState({update: false})
      })
    .catch(err => {
      console.log('Error getting documents', err); 
    });
  }

  shouldComponentUpdate() {
    if(this.state.update) {
      return true;
    }
    else {
      return false;
    }
  }
 
  onClick() {    
    this.props.history.push({
        pathname: '/Article',
        state: { 
          article_id : this.state.article_id,
          title: "title",
          category: "category",
          content: "content",
        }
      });
  }

  render() {
    return (
      <div class="box">
      <ul>       
        {Object.entries(this.text).map( article =>  (
          <Todo key={article[1]["data"]["article_id"]} article_id={article[1]["data"]["article_id"]}  title={article[1]["data"]["title"]} category={article[1]["data"]["category"]} content={article[1]["data"]["content"]}/>
        ))}
                  
      </ul>
      </div>
    );
  }
}

export default List;

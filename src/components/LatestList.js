import React, { Component } from "react";
import '../firebase';
import firebase from "firebase";
import "firebase/storage";
import Todo from "./Title";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const moment = require('moment')


class LatestList extends Component {
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
      .limit(3)
      .orderBy("article_id", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.setState({ data: doc.data()|| [] });
          this.text.push(this.state)
          console.log(doc.data())
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
          create_data: moment.now(),
          category: "category",
          content: "content",
        }
      });
  }

  render() {
    return (
      <div>
      <h2>最近の記事</h2>
      <div className="box">
        <ul>       
          {Object.entries(this.text).map( article =>  (
            <React.Fragment>
            <MuiThemeProvider>
              <Todo key={article[1]["data"]["article_id"]} 
                    title={article[1]["data"]["title"]} 
                    create_data={article[1]["data"]["create_data"]}
                    category={article[1]["data"]["category"]} 
                    content={article[1]["data"]["content"]}/>
            </MuiThemeProvider>
            </React.Fragment>
          ))}
                    
        </ul>
      </div>
      </div>
    );
  }
}

export default LatestList;

import React, { Component } from "react";
import '../firebase';
import firebase from "firebase";
import "firebase/storage";
import Title from "./Title";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
      .limit(10)
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
          create_data: "create_data",
          category: "category",
          content: "content",
        }
      });
  }

  render() {
    return (
      <div className="box">
      <ul>       
        {Object.entries(this.text).map( article =>  (
           <React.Fragment>
           <MuiThemeProvider>
          <Title 
          key={article[1]["data"]["article_id"]} 
          article_id={article[1]["data"]["article_id"]}  
          title={article[1]["data"]["title"]} 
          create_data={article[1]["data"]["create_data"]}
          category={article[1]["data"]["category"]} 
          content={article[1]["data"]["content"]}/>
          </MuiThemeProvider>
            </React.Fragment>
        ))}
                  
      </ul>
      </div>
    );
  }
}

export default List;

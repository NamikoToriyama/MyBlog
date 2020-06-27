import React from "react";
import List from './components/List';

class Home extends React.Component {
  render() {
    return (
      <>
      <h1>Home</h1>
      <h2>ブログ記事一覧</h2>
      <List />
      </>
    )
  }
};

export default Home;

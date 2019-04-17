import React, { Component } from "react";
import ReactDOM from "react-dom";
import CounterWithDocumentTitleUpdate from "./CounterWithDocumentTitleUpdate";
import FriendStatus from "./FriendStatus";

class App extends Component {
  render() {
    return <FriendStatus friendId="21" />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

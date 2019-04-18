import React, { Component } from "react";
import ReactDOM from "react-dom";
import CounterWithDocumentTitleUpdate from "./CounterWithDocumentTitleUpdate";
import FriendStatus from "./FriendStatus";
import CounterWithReducer from "./CounterWithReducer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <CounterWithDocumentTitleUpdate />
        <FriendStatus friendId="21" /> */}
        <CounterWithReducer />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

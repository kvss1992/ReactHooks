import React, { Component } from "react";
import ReactDOM from "react-dom";
import CounterWithDocumentTitleUpdate from "./CounterWithDocumentTitleUpdate";

class App extends Component {
  render() {
    return <CounterWithDocumentTitleUpdate />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListOfBooks from "./listOfBooks";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ListOfBooks />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React, { Component } from "react";
import Page from "./containers/Page";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}

export default App;

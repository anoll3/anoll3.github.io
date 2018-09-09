import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";

class App extends Component {
  render() {
    return (
      <div className="App">
        Ashley's GitHub Page
      </div>
    );
  }
}

export default connect()(App);

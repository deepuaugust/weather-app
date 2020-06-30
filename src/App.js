import React, { Component } from "react";
import ResumeHeader from "./components/resumeHeader";
import ResumeBody from "./components/resumeBody";
import injectSheet from "react-jss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import styles from "./App.style.js";

/**
 * @description - Render the App class.
 * @returns {Node} - HTML code.
 */
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <ResumeHeader />
            <ResumeBody />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default injectSheet(styles)(App);

import React, { Component } from 'react';
import QuestionsList from './components/questionsList';
import QuestionDetails from './components/questionDetails';
import NewQuestion from './components/newQuestion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

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
            <QuestionsList />
          </Route>
          <Route path="/questions/:questionid">
            <QuestionDetails />
          </Route>
          <Route path="/add/question">
            <NewQuestion />
          </Route>
        </Switch>
    </Router>
    );
  }
}

export default App;

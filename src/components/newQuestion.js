import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postQuestion } from "../actions";
import "./newquestion.css";

/**
 * @description - Renders the new question component.
 * @returns {Node} - Returns html.
 */
class NewQuestion extends Component {
  /**
   * @description - Constructor for the class.
   * @param {Object} props - Object props.
   */
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      choices: "",
    };
  }

  /**
   * @description - Function that adds question.
   */
  addQuestion = () => {
    const { dispatch, history } = this.props;
    const { question, choices } = this.state;
    const questionVal = question;
    const choicesVal = choices.split(",");
    const payload = {
      question: questionVal,
      choices: choicesVal,
    };
    dispatch(postQuestion(payload));
    history.push("/");
  };

  /**
   * @description - Function to set the question.
   * @param {Object} e - Event object.
   */
  updateQuestion = (e) => {
    this.setState({
      question: e.target.value,
    });
  };

  /**
   * @description - Function to set the choices.
   * @param {Object} e - Event object.
   */
  updateChoice = (e) => {
    this.setState({
      choices: e.target.value,
    });
  };

  /**
   * @description - Navigates to the questions page.
   */
  goToQuestions = () => {
    const { history } = this.props;
    history.push("/");
  };

  /**
   * @description - Renders the new questions page.
   * @returns {Node} - Returns html.
   */
  render() {
    return (
      <Fragment>
        <div className="quesDiv">Question: </div>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Enter Question"
            onChange={this.updateQuestion}
          ></input>
        </div>
        <div className="choiceDiv">Enter choices separated by comma: </div>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Enter choices separated by value"
            onChange={this.updateChoice}
          ></input>
        </div>
        <div className="buttonDiv">
          <button className="addBtn" type="button" onClick={this.addQuestion}>
            Create Question
          </button>
          <button
            className="backBtn"
            type="button"
            onClick={this.goToQuestions}
          >
            Go back to Questions
          </button>
        </div>
      </Fragment>
    );
  }
}

NewQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  questionDetails: PropTypes.object.isRequired,
  postVoteData: PropTypes.object.isRequired,
};

NewQuestion.defaultProps = {};

export default withRouter(connect()(NewQuestion));

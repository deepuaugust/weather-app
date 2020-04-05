import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Skeleton from "@yisheng90/react-loading";
import { connect } from "react-redux";
import { getQuestionDetails, postVote, clearQuestionDetails } from "../actions";
import "./questiondetails.css";

/**
 * @description - Renders the questiondetails component.
 * @returns {Node} - Returns the html.
 */
class QuestionDetails extends Component {
  /**
   * @description - Constructor for the class.
   * @param {Object} props - Object props.
   */
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  /**
   * @description - Lifecycle hook.
   */
  componentDidMount() {
    const { match, dispatch } = this.props;
    const questionid = match.params.questionid;
    dispatch(clearQuestionDetails());
    dispatch(getQuestionDetails(questionid));
  }

  /**
   * @description - Function to save vote value.
   */
  saveVote = () => {
    const { dispatch, history, questionDetails } = this.props;
    const { url } = this.state;
    const array = url.split("/");
    const questionid = array[2];
    const choiceid = array[array.length - 1];
    const payload = {
      questionid,
      choiceid,
      question: questionDetails.question,
    };
    dispatch(postVote(payload));
    history.push("/");
  };

  /**
   * @description - Function to set vote value on selection of radio button.
   * @param {Object} event - Event object.
   */
  getVoteValue = (event) => {
    const value = event.target.value;
    this.setState({
      url: value,
    });
  };

  /**
   * @description - Navigates to the question list page.
   */
  goToQuestions = () => {
    const { history } = this.props;
    history.push("/");
  };

  /**
   * @description - Renders the question details page.
   * @returns {Node} - Returns the html.
   */
  render() {
    const { questionDetails } = this.props;
    return (
      <Fragment>
        {questionDetails.question === undefined ? (
          <Skeleton height={1000} row={6} />
        ) : (
          <Fragment>
            <div className="heading">Question: {questionDetails.question}</div>
            {questionDetails.choices !== undefined ? (
              <Fragment>
                <div className="gridMain">
                  <table>
                    <thead>
                      <th>Choice</th>
                      <th>Votes</th>
                      <th>Select your option</th>
                    </thead>
                    <tbody>
                      {questionDetails.choices.map((val) => (
                        <tr>
                          <td>{val.choice}</td>
                          <td>{val.votes} votes</td>
                          <td>
                            <input
                              onClick={this.getVoteValue.bind(this)}
                              type="radio"
                              name="vote"
                              value={val.url}
                            ></input>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="buttonDiv">
                  <button
                    className="saveBtn"
                    type="button"
                    onClick={this.saveVote}
                  >
                    Save Vote
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
            ) : null}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

/**
 * @description Map all form state to props.
 * @param {Object} state - State.
 * @returns {Object} - Props.
 */
function mapStateToProps(state) {
  return {
    questionDetails: state.questionDetailsReducer.data,
    postVoteData: state.postVoteReducer.data,
  };
}

QuestionDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  questionDetails: PropTypes.object.isRequired,
  postVoteData: PropTypes.object.isRequired,
};

QuestionDetails.defaultProps = {};

export default withRouter(connect(mapStateToProps)(QuestionDetails));

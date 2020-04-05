import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Skeleton from "@yisheng90/react-loading";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getQuestions } from "../actions";
import "./questionslist.css";

/**
 * @description - Render the questionlist class.
 * @returns {Node} - Returns html.
 */
class QuestionsList extends Component {
  /**
   * @description - Constructor for the class.
   * @param {Object} props - Object props.
   */
  constructor(props) {
    super(props);
  }

  /**
   * @description - Lifecycle hook.
   */
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getQuestions());
  }

  /**
   * @description - Navigates to question detail page.
   * @param {string} url - Url value.
   */
  questionDetail = (url) => {
    const { history } = this.props;
    const arr = url.split("/");
    const id = arr[arr.length - 1];
    history.push(`/questions/${id}`);
  };

  /**
   * @description - Navigates to the add question page.
   */
  addQuestionPage = () => {
    const { history } = this.props;
    history.push("/add/question");
  };

  /**
   * @description - Renders the question list page.
   * @returns {Node} - Returns the html.
   */
  render() {
    const { questionsData } = this.props;
    return (
      <Fragment>
        {questionsData.data.length <= 0 ? (
          <Skeleton height={1000} row={6} />
        ) : (
          <Fragment>
            <div className="heading">QUESTIONS</div>
            <ul className="mainDiv">
              {questionsData.data.map((val) => (
                <li
                  className="questionDiv"
                  onClick={() => this.questionDetail(val.url)}
                >
                  <div>
                    <b>Question:</b> {val.question}
                  </div>
                  <div>
                    <b>Published:</b>{" "}
                    {moment(val.published_at).format("MMMM Do YYYY, h:mm:ss a")}
                  </div>
                  <div>
                    <b>Choices:</b> {val.choices.length}
                  </div>
                </li>
              ))}
            </ul>
            <div className="btnDiv">
              <button
                className="addButton"
                type="button"
                onClick={this.addQuestionPage}
              >
                Add Question
              </button>
            </div>
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
    questionsData: state.questionsReducer,
  };
}

QuestionsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  questionsData: PropTypes.array.isRequired,
};

QuestionsList.defaultProps = {};

export default withRouter(connect(mapStateToProps)(QuestionsList));

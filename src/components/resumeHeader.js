import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./resumeHeader.style.js";
import { getUserDetails, getRepoDetails, clearUserDetails, clearRepoDetails } from "../actions";

/**
 * @description - Renders the new question component.
 * @returns {Node} - Returns html.
 */
class ResumeHeader extends Component {
  /**
   * @description - Constructor for the class.
   * @param {Object} props - Object props.
   */
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  /**
   * @description - Function which handles the generate button click.
   */
  handleClick = () => {
    const { username } = this.state;
    const { dispatch } = this.props;
    dispatch(clearUserDetails());
    dispatch(clearRepoDetails());
    dispatch(getUserDetails(username));
    dispatch(getRepoDetails(username));
  };

  /**
   * @description - Updates the state with input value.
   * @param {Object} e - Event object
   */
  updateValue = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  /**
   * @description - Renders the new questions page.
   * @returns {Node} - Returns html.
   */
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.container}>
          <h1 style={{margin: '50px'}}>My Github Resume</h1>
          <div className={classes.userDiv}>
            <div className={classes.title}>Github username</div>
            <div className={classes.inputDiv}>
              <div style={{ flex: 5 }}>
                <input
                  className={classes.inputStyles}
                  type="text"
                  placeholder="Enter github username"
                  onChange={this.updateValue}
                />
              </div>
              <div style={{ flex: 2 }}>
                <button
                  className={classes.buttonStyles}
                  type="button"
                  onClick={this.handleClick}
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ResumeHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

ResumeHeader.defaultProps = {};

export default injectSheet(styles)(withRouter(connect()(ResumeHeader)));

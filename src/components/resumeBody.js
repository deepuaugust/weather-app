import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./resumeBody.style.js";
import Skeleton from "@yisheng90/react-loading";

/**
 * @description - Renders the new question component.
 * @returns {Node} - Returns html.
 */
class ResumeBody extends Component {
  /**
   * @description - Constructor for the class.
   * @param {Object} props - Object props.
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @description - Renders the basic profile information.
   * @returns {Node} - Returns the html for basic profile info.
   */
  renderProfileInfo = () => {
    const { classes, userData } = this.props;
    return (
      <Fragment>
        <div className={classes.title}>
          <h2 style={{ marginBottom: "5px" }}>{userData.data.login}</h2>
        </div>
        <div className={classes.subtitle}>
          {userData.data.bio !== null
            ? userData.data.bio
            : "A passionate Github user"}
        </div>
        <div className={classes.urlDiv}>{userData.data.html_url}</div>
        <div className={classes.infoDiv}>
          On Github since {new Date(userData.data.created_at).getUTCFullYear()},{" "}
          {userData.data.login} is a developer based in{" "}
          {userData.data.location !== null
            ? userData.data.location
            : "Not specified"}{" "}
          with{" "}
          <span className={classes.redDiv}>
            {userData.data.public_repos} public repositories
          </span>{" "}
          and{" "}
          <span className={classes.redDiv}>
            {userData.data.followers} followers
          </span>
          .
        </div>
      </Fragment>
    );
  };

  /**
   * @description - Renders the programming languages for the profile.
   * @returns {Node} - Returns the html for programming languages.
   */
  renderLanguagesInfo = () => {
    const { classes, repoData } = this.props;
    const languages =
      repoData.data.languages !== undefined
        ? Object.keys(repoData.data.languages)
        : {};
    const styles = {
      height: "5px",
      backgroundColor: "gray",
    };
    return (
      <Fragment>
        <div>
          <h3>Languages</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {repoData.data.languages !== undefined
            ? languages.map((val, index) => (
                <div key={index} className={classes.columnFlex}>
                  <div className={classes.rowFlex}>
                    <div className={classes.languageTitle}>{val}</div>
                    {/* Calculates the percentage by dividing the total byte codes of languages with the overall total and then multiplying by 100 */}
                    <div className={classes.percentageDiv}>
                      (
                      {(
                        (repoData.data.languages[val] / repoData.data.total) *
                        100
                      ).toFixed(2)}
                      %)
                    </div>
                  </div>
                  <div className={classes.percentageBackground}>
                    <div
                      style={{
                        ...styles,
                        width: `${
                          (repoData.data.languages[val] / repoData.data.total) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </Fragment>
    );
  };

  /**
   * @description - Renders the repository info for the profile.
   * @returns {Node} - Returns the html for repository info.
   */
  renderRepoInfo = () => {
    const { classes, repoData } = this.props;
    return (
      <Fragment>
        <div style={{ marginTop: "35px" }}>
          <h3>Popular Respositories</h3>
          {/* Checks whether data has been obtained from API call and then only render */}
          {repoData.data.data !== undefined
            ? repoData.data.data.map((val, index) => (
                <div key={index} className={classes.repoDiv}>
                  <div className={classes.repoTitle}>
                    <div className={classes.repoName}>{val.name}</div>
                    <div className={classes.repoYear}>
                      {/* Gets the year from UTC date format */}
                      {new Date(val.created_at).getUTCFullYear()}-
                      {new Date(val.updated_at).getUTCFullYear()}
                    </div>
                  </div>
                  <div className={classes.languageDiv}>
                    {/* Renders the language used for the repository along with its rights */}
                    {val.language !== null ? val.language : "NIL"} -{" "}
                    {val.private ? "Private" : "Public"}
                  </div>
                  <div className={classes.descriptionDiv}>
                    <div className={classes.description}>
                      {val.description
                        ? val.description
                        : "No description avaible"}
                    </div>
                    This repository has {val.stargazers_count} stars and{" "}
                    {val.forks} forks. If you would like more information about
                    this repository and my contributed code, please visit{" "}
                    <a href={val.html_url} target="_blank">
                      {val.html_url}
                    </a>{" "}
                    on github.
                  </div>
                </div>
              ))
            : null}
        </div>
      </Fragment>
    );
  };

  /**
   * @description - Renders the corresponding error msg.
   * @param {String} error - Error string.
   * @returns {String} - Returns the error string.
   */
  renderErrors = (error) => {
    if (error.indexOf("403") !== -1)
      return "API Rate Limit exceeded for your IP. Please try after sometime";
    else if (error.indexOf("404") !== -1) return "User not found";
    else return "Please enter a github username to display the details.";
  };

  /**
   * @description - Renders the new questions page.
   * @returns {Node} - Returns html.
   */
  render() {
    const { classes, userData, repoData } = this.props;
    return (
      <Fragment>
        {userData.data.login ? (
          <div className={classes.container}>
            {repoData.data.data !== undefined ? (
              <div className={classes.resumeDiv}>
                {this.renderProfileInfo()}
                {this.renderLanguagesInfo()}
                {this.renderRepoInfo()}
              </div>
            ) : (
              <div style={{ marginTop: "50px" }}>
                <Skeleton width="100vw" height="400px" />
              </div>
            )}
          </div>
        ) : (
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            {this.renderErrors(userData.errormsg)}
          </h1>
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
  console.log(state);
  return {
    userData: state.userDetailsReducer,
    repoData: state.repoDetailsReducer,
  };
}

ResumeBody.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

ResumeBody.defaultProps = {};

export default injectSheet(styles)(
  withRouter(connect(mapStateToProps)(ResumeBody))
);

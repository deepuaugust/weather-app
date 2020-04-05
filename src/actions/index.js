import * as actionTypes from './actionTypes';

/**
 * @description - Function to get questions.
 * @returns {Object} - Actions type.
 */
export const getQuestions = () => ({
    type: actionTypes.QUESTIONS_LIST.GET,
  });
  
/**
 * @description - Function to save questions.
 * @param {Object} data - Payload data.
 * @returns {Object} - Returns type and payload.
 */
export function storeQuestions(data) {
  return {
    type: actionTypes.QUESTIONS_LIST.SUCCESS,
    payload: data,
  };
}

/**
 * @description - Function to clear questions.
 * @returns {Object} - Returns type and payload.
 */
export function clearQuestions() {
  return {
    type: actionTypes.QUESTIONS_LIST.CLEAR,
  };
}

/**
 * @description - Function to get question details.
 * @returns {Object} - Actions type.
 */
export const getQuestionDetails = (id) => ({
  type: actionTypes.QUESTION_DETAILS.GET,
  payload: id,
});

/**
 * @description - Function to save question detail.
 * @param {Object} data - Payload data.
 * @returns {Object} - Returns type and payload.
 */
export function storeQuestionDetails(data) {
  return {
    type: actionTypes.QUESTION_DETAILS.SUCCESS,
    payload: data,
  };
}

/**
 * @description - Function to clear question detail.
 * @returns {Object} - Returns type and payload.
 */
export function clearQuestionDetails() {
  return {
    type: actionTypes.QUESTION_DETAILS.CLEAR,
  };
}

/**
 * @description - Function to post vote.
 * @param {Object} data - Payload data.
 * @returns {Object} - Returns type and payload.
 */
export function postVote(data) {
  return {
    type: actionTypes.POST_VOTE.POST,
    payload: data,
  };
}

/**
 * @description - Function to post vote.
 * @param {Object} data - Payload data.
 * @returns {Object} - Returns type and payload.
 */
export function storeVote(data) {
  return {
    type: actionTypes.POST_VOTE.SUCCESS,
    payload: data,
  };
}

/**
 * @description - Function to post question.
 * @param {Object} data - Payload data.
 * @returns {Object} - Returns type and payload.
 */
export function postQuestion(data) {
  return {
    type: actionTypes.POST_QUESTION.POST,
    payload: data,
  };
}
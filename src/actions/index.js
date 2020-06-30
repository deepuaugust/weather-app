import * as actionTypes from './actionTypes';

/**
 * @description - Function to get user details.
 * @returns {Object} - Actions type.
 */
export const getUserDetails = (data) => ({
  type: actionTypes.USER_DETAILS.GET,
  payload: data,
});

/**
 * @description - Function to save user detail.
 * @param {Object} data - Payload data.
 * @returns {Object} - Returns type and payload.
 */
export function storeUserDetails(data) {
  return {
    type: actionTypes.USER_DETAILS.SUCCESS,
    payload: data,
  };
}

/**
 * @description - Function to clear user detail.
 * @returns {Object} - Returns type and payload.
 */
export function clearUserDetails() {
  return {
    type: actionTypes.USER_DETAILS.CLEAR,
  };
}

/**
 * @description - Function to get repo details.
 * @returns {Object} - Actions type.
 */
export const getRepoDetails = (data) => ({
  type: actionTypes.REPO_DETAILS.GET,
  payload: data,
});

/**
 * @description - Function to save repo detail.
 * @param {Object} data - Payload data.
 * @returns {Object} - Returns type and payload.
 */
export function storeRepoDetails(data) {
  return {
    type: actionTypes.REPO_DETAILS.SUCCESS,
    payload: data,
  };
}

/**
 * @description - Function to clear repo detail.
 * @returns {Object} - Returns type and payload.
 */
export function clearRepoDetails() {
  return {
    type: actionTypes.REPO_DETAILS.CLEAR,
  };
}
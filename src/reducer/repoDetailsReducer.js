import { REPO_DETAILS } from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: false,
  data: {},
  errormsg: '',
};
/**
 * @description Reducer for repo details.
 * @param {Object} state - State.
 * @param {Object} action - Action.
 * @returns {Object} State.
 */
const repoDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPO_DETAILS.SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: false,
        errormsg: "",
      });
    case REPO_DETAILS.FAIL:
      return Object.assign({}, state, {
        errormsg: action.message,
        data: {},
        error: true,
        loading: false,
      });
    case REPO_DETAILS.CLEAR:
      return Object.assign({}, state, {
        errormsg: "",
        data: {},
        error: false,
        loading: false,
      });
    default:
      return state;
  }
};

export default repoDetailsReducer;

import { POST_VOTE } from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: false,
  data: [],
  errormsg: '',
};
/**
 * @description Reducer for post vote response.
 * @param {Object} state - State.
 * @param {Object} action - Action.
 * @returns {Object} State.
 */
const postVoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_VOTE.SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: false,
      });
    default:
      return state;
  }
};

export default postVoteReducer;

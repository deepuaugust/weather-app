import { USER_DETAILS } from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: false,
  data: {},
  errormsg: '',
};
/**
 * @description Reducer for user details.
 * @param {Object} state - State.
 * @param {Object} action - Action.
 * @returns {Object} State.
 */
const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS.SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: false,
        errormsg: "",
      });
    case USER_DETAILS.FAIL:
      return Object.assign({}, state, {
        errormsg: action.message,
        data: {},
        error: true,
        loading: false,
      });
    case USER_DETAILS.CLEAR:
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

export default userDetailsReducer;

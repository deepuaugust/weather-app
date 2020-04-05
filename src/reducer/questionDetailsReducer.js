import { QUESTION_DETAILS } from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: false,
  data: {},
  errormsg: '',
};
/**
 * @description Reducer for question details.
 * @param {Object} state - State.
 * @param {Object} action - Action.
 * @returns {Object} State.
 */
const questionDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_DETAILS.SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: false,
      });
    case QUESTION_DETAILS.FAIL:
      return Object.assign({}, state, {
        errormsg: action.message,
        data: {},
        error: true,
        loading: false,
      });
    case QUESTION_DETAILS.CLEAR:
      return Object.assign({}, state, {
        errormsg: action.message,
        data: {},
        error: false,
        loading: false,
      });
    default:
      return state;
  }
};

export default questionDetailsReducer;

import { QUESTIONS_LIST } from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: false,
  data: [],
  errormsg: '',
};
/**
 * @description Reducer for question list.
 * @param {Object} state - State.
 * @param {Object} action - Action.
 * @returns {Object} State.
 */
const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_LIST.SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        error: false,
      });
    case QUESTIONS_LIST.FAIL:
      return Object.assign({}, state, {
        errormsg: action.message,
        data: [],
        error: true,
        loading: false,
      });
    case QUESTIONS_LIST.CLEAR:
      return Object.assign({}, state, {
        errormsg: action.message,
        data: [],
        error: false,
        loading: false,
      });
    default:
      return state;
  }
};

export default questionsReducer;

import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import questionDetailsReducer from '../reducer/questionDetailsReducer';
import postVoteReducer from '../reducer/postVoteReducer';

/**
 * @description - Core reducers combining all other reducers.
 */
const coreReducer = combineReducers({
  questionsReducer,
  questionDetailsReducer,
  postVoteReducer
});

export default coreReducer;

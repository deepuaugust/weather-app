import { combineReducers } from 'redux';
import userDetailsReducer from './userDetailsReducer';
import repoDetailsReducer from './repoDetailsReducer';

/**
 * @description - Core reducers combining all other reducers.
 */
const coreReducer = combineReducers({
  userDetailsReducer,
  repoDetailsReducer,
});

export default coreReducer;

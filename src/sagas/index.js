import { spawn } from 'redux-saga/effects';
import watchGetUserDetails from '../sagas/getUserDetails';
import watchGetRepoDetails from '../sagas/getRepoDetails';

/**
 * @description - Core saga function.
 */
export default function* rootSaga() {
  yield 'RootSaga';
  yield spawn(watchGetUserDetails);
  yield spawn(watchGetRepoDetails);
}

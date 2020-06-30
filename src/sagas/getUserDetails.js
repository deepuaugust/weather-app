/**
 * @description - Saga function to call user details api.
 */
import { takeEvery, call, put } from 'redux-saga/effects';
import fetchAPI from './fetchAPI';
import { httpMethod } from '../enums/httpMethod';
import { USER_DETAILS } from '../actions/actionTypes';
import { storeUserDetails } from '../actions';

/**
 * @description - Takes endpoint,calls API function & update the store.
 * @param {Object} endPoint - Endpoint for getData.
 * @param {Object} payload - Payload data.
 */
function* fetchUserDetails(endPoint, {payload}) {
  try {
    const response = yield call(fetchAPI, `${endPoint}/${payload}`, httpMethod.GET);
    yield put(storeUserDetails(response));
  } catch (e) {
    yield put({ type: USER_DETAILS.FAIL, message: e.message });
  }
}

/**
 * @description - Watches for the action getUserDetails & calls fetchUserDetails.
 */
export default function* watchGetUserDetails() {
  yield takeEvery(USER_DETAILS.GET, fetchUserDetails, 'https://api.github.com/users');
}

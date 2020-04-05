/**
 * @description - Saga function to call question details api.
 */
import { takeEvery, call, put } from 'redux-saga/effects';
import fetchAPI from './fetchAPI';
import { httpMethod } from '../enums/httpMethod';
import { QUESTION_DETAILS } from '../actions/actionTypes';
import { storeQuestionDetails } from '../actions';

/**
 * @description - Takes endpoint,calls API function & update the store.
 * @param {Object} endPoint - Endpoint for getData.
 * @param {Object} payload - Payload data.
 */
function* fetchQuestionDetails(endPoint, {payload}) {
  try {
    const response = yield call(fetchAPI, `${endPoint}/${payload}`, httpMethod.GET);
    yield put(storeQuestionDetails(response));
  } catch (e) {
    yield put({ type: QUESTION_DETAILS.FAIL, message: e.message });
  }
}

/**
 * @description - Watches for the action getQuestionDetails & calls fetchQuestionDetails.
 */
export default function* watchGetQuestionDetails() {
  yield takeEvery(QUESTION_DETAILS.GET, fetchQuestionDetails, 'https://polls.apiblueprint.org/questions');
}

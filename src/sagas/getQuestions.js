/**
 * @description - Saga function to call questions api.
 */
import { takeEvery, call, put } from 'redux-saga/effects';
import fetchAPI from './fetchAPI';
import { httpMethod } from '../enums/httpMethod';
import { QUESTIONS_LIST } from '../actions/actionTypes';
import { storeQuestions } from '../actions';

/**
 * @description - Takes endpoint,calls API function & update the store.
 * @param {Object} endPoint - Endpoint for getData.
 */
function* fetchQuestions(endPoint) {
  try {
    const response = yield call(fetchAPI, endPoint, {}, httpMethod.GET);
    yield put(storeQuestions(response));
  } catch (e) {
    yield put({ type: QUESTIONS_LIST.FAIL, message: e.message });
  }
}

/**
 * @description - Watches for the action getQuestions & calls fetchQuestions.
 */
export default function* watchGetQuestions() {
  yield takeEvery(QUESTIONS_LIST.GET, fetchQuestions, 'https://polls.apiblueprint.org/questions');
}

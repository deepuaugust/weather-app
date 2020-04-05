/**
 * @description - Saga function to vote for questions.
 */
import { takeEvery, call, put } from "redux-saga/effects";
import fetchAPI from "./fetchAPI";
import { httpMethod } from "../enums/httpMethod";
import { POST_VOTE } from "../actions/actionTypes";
import { storeVote } from '../actions';

/**
 * @description - Takes endpoint,calls API function & update the store.
 * @param {Object} endPoint - Endpoint to post vote.
 * @param {Object} payload - Payload data.
 */
function* postVote(endPoint, { payload }) {
  try {
    const response = yield call(
      fetchAPI,
      `${endPoint}/${payload.questionid}/choices/${payload.choiceid}`,
      {},
      httpMethod.POST
    );
    if (response.choice !== undefined) alert(`Voted '${response.choice}' for question '${payload.question}'.`);
    yield put(storeVote(response));
  } catch (e) {
    alert(e.message);
  }
}

/**
 * @description - Watches for the action postVote & calls postVote.
 */
export default function* watchPostVote() {
  yield takeEvery(
    POST_VOTE.POST,
    postVote,
    "https://polls.apiblueprint.org/questions"
  );
}

/**
 * @description - Saga function to post questions.
 */
import { takeEvery, call, put } from "redux-saga/effects";
import fetchAPI from "./fetchAPI";
import { httpMethod } from "../enums/httpMethod";
import { POST_QUESTION } from "../actions/actionTypes";

/**
 * @description - Takes endpoint,calls API function & update the store.
 * @param {Object} endPoint - Endpoint to post question.
 * @param {Object} payload - Payload data.
 */
function* postVote(endPoint, { payload }) {
  try {
    const response = yield call(
      fetchAPI,
      endPoint,
      payload,
      httpMethod.POST
    );
    if (response.question !== undefined) alert(`Question (${response.question}) added.`);
  } catch (e) {
    alert(e.message);
  }
}

/**
 * @description - Watches for the action postVote & calls postVote.
 */
export default function* watchPostQuestion() {
  yield takeEvery(
    POST_QUESTION.POST,
    postVote,
    "https://polls.apiblueprint.org/questions"
  );
}

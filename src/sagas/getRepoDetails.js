/**
 * @description - Saga function to call repos details api.
 */
import { takeEvery, call, put, all } from "redux-saga/effects";
import fetchAPI from "./fetchAPI";
import { httpMethod } from "../enums/httpMethod";
import { REPO_DETAILS } from "../actions/actionTypes";
import { storeRepoDetails } from "../actions";
import getReposAndLanguages from "../factories/getReposAndLanguges.factory";

/**
 * @description - Takes endpoint,calls API function & update the store.
 * @param {Object} endPoint - Endpoint for getData.
 * @param {Object} payload - Payload data.
 */
function* fetchRepoDetails(endPoint, { payload }) {
  try {
    const response = yield call(
      fetchAPI,
      `${endPoint}/${payload}/repos`,
      httpMethod.GET
    );
    let languages = [];
    languages = yield all(
      response.map((val) => {
        return call(fetchAPI, val.languages_url, httpMethod.GET);
      })
    );
    const data = getReposAndLanguages(response, languages);
    yield put(storeRepoDetails(data));
  } catch (e) {
    yield put({ type: REPO_DETAILS.FAIL, message: e.message });
  }
}

/**
 * @description - Watches for the action getRepoDetails & calls fetchRepoDetails.
 */
export default function* watchGetRepoDetails() {
  yield takeEvery(
    REPO_DETAILS.GET,
    fetchRepoDetails,
    "https://api.github.com/users"
  );
}

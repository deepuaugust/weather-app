/**
 * @description - Saga function to call user details api.
 */
import { takeEvery, call, put } from 'redux-saga/effects';
import fetchAPI from './fetchAPI';
import { httpMethod } from '../enums/httpMethod';
import { WEATHER_DETAILS } from '../actions/actionTypes';
import { storeWeatherDetails } from '../actions';

/**
 * @description - Takes endpoint,calls API function & update the store.
 * @param {Object} endPoint - Endpoint for getData.
 * @param {Object} payload - Payload data.
 */
function* fetchWeatherDetails(endPoint) {
  try {
    const response = yield call(fetchAPI, `${endPoint}`, httpMethod.GET);
    yield put(storeWeatherDetails(response));
  } catch (e) {
    yield put({ type: WEATHER_DETAILS.FAIL, message: e.message });
  }
}

/**
 * @description - Watches for the action getUserDetails & calls fetchUserDetails.
 */
export default function* watchGetWeatherDetails() {
  yield takeEvery(WEATHER_DETAILS.GET, fetchWeatherDetails, 'http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40');
}
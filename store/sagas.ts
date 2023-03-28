import { call, put, takeLatest } from "redux-saga/effects";
import { getWeather } from "./api";

function* fetchWeather(): any { // TODO: put a type here
  try {
    // Make an Axios request
    const response = yield call(getWeather);
    // Dispatch an action to update the store with the response data
    yield put({ type: "FETCH_SUCCESS", payload: response.data });
  } catch (error) {
    // Dispatch an action to update the store with the error
    yield put({ type: "FETCH_ERROR", payload: error });
  }
}

function* watchFetchData() {
  yield takeLatest("FETCH_DATA", fetchWeather);
}

export default watchFetchData;

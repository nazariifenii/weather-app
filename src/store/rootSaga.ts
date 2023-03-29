import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { Types, Creators } from "./actions";
import { getWeather } from "../api/api";
import { weatherByWeek } from "../helpers/weather";

type FetchWeatherError = {
  message: string;
};

type FetchWeatherAction = {
  type: string;
  daysCount: number;
};

function* fetchWeatherForecast(
  action: FetchWeatherAction
): Generator<any, void, any> {
  try {
    const response: WeatherApiResp = yield call(getWeather, action.daysCount);
    const data: WeatherDataByWeek = yield weatherByWeek(response);
    yield put(Creators.fetchWeatherForecastSuccess(data));
  } catch (error) {
    const payload: FetchWeatherError = { message: (error as Error).message };
    yield put(Creators.fetchWeatherForecastFailure(payload));
  }
}

function* watchGetWeather(): Generator<any, void, any> {
  yield takeLatest(Types.FETCH_WEATHER_FORECAST, fetchWeatherForecast);
}

export default function* rootSaga() {
  yield all([fork(watchGetWeather)]);
}

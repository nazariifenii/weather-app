import R from "ramda";
import { Types } from "./actions";

type WeatherState = {
  weatherForecastByWeek: Array<WeatherData>;
};

export type RootState = {
  isFetching: boolean;
  weather: WeatherState;
};

const INITIAL_STATE = {
  isFetching: true,
  weather: { weatherForecastByWeek: [] },
  errors: {},
};

//FIXME: Any is not a propper type for action
const rootReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Types.FETCH_WEATHER_FORECAST_SUCCESS:
      return R.assocPath(
        ["weather", "weatherForecastByWeek"],
        action.payload,
        state
      );
    case Types.FETCH_WEATHER_FORECAST_FAILURE:
      return R.assocPath(["errors", "message"], action.message, state);
    default:
      return state;
  }
};

export default rootReducer;

import R from "ramda";
import { Types } from "./actions";
import INITIAL_STATE from "./initialState";

const rootReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case Types.FETCH_WEATHER_FORECAST_SUCCESS:
      return R.assoc("weather", action.payload, state);
    case Types.FETCH_WEATHER_FORECAST_FAILURE:
      return R.assocPath(["errors", "message"], action.message, state);
    default:
      return state;
  }
};

export default rootReducer;

import { IWeather } from "../../types/weather.ts";
import { WeatherActions } from '../actions/weatherActions';

interface WeatherState {
  loading: boolean;
  data: IWeather | null;
  error: string | null;
}

const initialState: WeatherState = {
  loading: false,
  data: null,
  error: null,
};

const weatherReducer = (state = initialState, action: { type: WeatherActions; payload: unknown; }) => {
  switch (action.type) {
    case WeatherActions.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: initialState.error
      }

    case WeatherActions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: initialState.error
      }

    case WeatherActions.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: initialState.loading,
        data: initialState.data,
      }

    default:
      return state;
  }
};

export default weatherReducer;

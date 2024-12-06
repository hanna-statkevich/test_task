import { ofType } from "redux-observable";
import { catchError, map, mergeMap, of } from "rxjs";
import { getWeather } from "../../services/weatherService.ts";
import { IWeather } from "../../types/weather.ts";
import { fetchWeatherFailure, fetchWeatherSuccess, WeatherActions } from "../actions/weatherActions.ts";

export const weatherEpic = (action$: any) =>
  action$.pipe(
    ofType(WeatherActions.FETCH_WEATHER_REQUEST),
    mergeMap((action: any) => getWeather(action.payload).pipe(
      map((response) => fetchWeatherSuccess(response as IWeather)),
      catchError((error) => of(fetchWeatherFailure(error.message)))
    ))
  );

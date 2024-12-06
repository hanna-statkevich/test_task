import { IWeather } from "../../types/weather.ts";

export enum WeatherActions {
  FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'
}

export const fetchWeatherRequest = (city: string) => ({type: WeatherActions.FETCH_WEATHER_REQUEST, payload: city});
export const fetchWeatherSuccess = (payload: IWeather) => ({type: WeatherActions.FETCH_WEATHER_SUCCESS, payload});
export const fetchWeatherFailure = (payload: Error) => ({type: WeatherActions.FETCH_WEATHER_FAILURE, payload});

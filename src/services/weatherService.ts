import { ajax } from 'rxjs/ajax';

export const getWeather = (city: string) =>
  ajax.getJSON(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=RY6MUMHSERNPYXCRL86MUE4HN&contentType=json`);

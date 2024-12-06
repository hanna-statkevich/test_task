export interface IWeather {
  resolvedAddress: 'string',
  currentConditions: {
    conditions: 'string',
    temp: 'string',
    feelslike: 'string',
  }
}

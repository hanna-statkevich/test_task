import { combineEpics } from 'redux-observable';
import { stockEpic } from './stockEpic';
import { weatherEpic } from './weatherEpic';

export const rootEpic = combineEpics(
  stockEpic,
  weatherEpic
);

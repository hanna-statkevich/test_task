import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics/epics';
import { stockReducer } from './reducers/stockReducer';
import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  stocks: stockReducer,
});

const epicMiddleware = createEpicMiddleware();

// @ts-ignore
export const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

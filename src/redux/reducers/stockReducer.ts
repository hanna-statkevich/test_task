import { ITradeRecord } from "../../types/trade.ts";
import { StockAction } from "../actions/stockActions.ts";

interface StockState {
  symbol: string | null;
  data: ITradeRecord[];
  connected: boolean;
  error: string | null;
}

const initialState: StockState = {
  symbol: null,
  data: [],
  connected: false,
  error: null,
};

const MAX_DATA_LENGTH = 15;

export const stockReducer = (state = initialState, action: { type: StockAction; payload: any; }) => {
  switch (action.type) {
    case StockAction.START_WEBSOCKET:
      if (state.symbol !== action.payload) {
        return {
          ...state,
          symbol: action.payload,
          data: initialState.data,
          connected: true,
          error: null,
        };
      }
      return state;

    case StockAction.STOCK_PRICE_UPDATE:
      if (action.payload.type === 'trade') {
        return {
          ...state,
          data: [...state.data, ...action.payload.data].slice(-MAX_DATA_LENGTH),
          error: null,
        };
      }
      return state;

    case StockAction.STOP_WEBSOCKET:
      return {
        ...state,
        ...initialState,
      };

    case StockAction.STOCK_WEBSOCKET_ERROR:
      return {
        ...state,
        error: action.payload,
        connected: false,
      };

    default:
      return state;
  }
};

import { ITradeTdo } from "../../types/trade.ts";

export enum StockAction {
  START_WEBSOCKET = 'START_WEBSOCKET',
  STOP_WEBSOCKET = 'STOP_WEBSOCKET',
  STOCK_PRICE_UPDATE = 'STOCK_PRICE_UPDATE',
  STOCK_WEBSOCKET_ERROR = 'STOCK_WEBSOCKET_ERROR',
}

export const startStocksWebSocket = (symbol: string) => ({type: StockAction.START_WEBSOCKET, payload: symbol});
export const stopStocksWebSocket = (symbol: string) => ({type: StockAction.STOP_WEBSOCKET, payload: symbol});
export const stocksWebSocketError = (payload: Error) => ({type: StockAction.STOCK_WEBSOCKET_ERROR, payload});
export const stocksWebSocketPriceUpdate = (payload: ITradeTdo) => ({type: StockAction.STOCK_PRICE_UPDATE, payload});

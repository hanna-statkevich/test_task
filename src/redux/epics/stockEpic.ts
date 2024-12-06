import { ofType } from 'redux-observable';
import { catchError, delay, of } from "rxjs";
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { createWebSocketConnection } from "../../services/websocket.ts";
import { ITradeTdo } from "../../types/trade.ts";
import {
  startStocksWebSocket,
  StockAction,
  stocksWebSocketError,
  stocksWebSocketPriceUpdate
} from "../actions/stockActions.ts";

const wsConnection = createWebSocketConnection();

export const stockEpic = (action$: any) =>
  action$.pipe(
    ofType(StockAction.START_WEBSOCKET),
    mergeMap((action: any) => {
      const symbol = action.payload;

      wsConnection.subscribe(symbol);

      return wsConnection.socket.pipe(
        map((message) => stocksWebSocketPriceUpdate(message as ITradeTdo)),
        takeUntil(action$.pipe(ofType(StockAction.STOP_WEBSOCKET))),
        catchError((error) =>
          of(
            stocksWebSocketError(error.message || 'WebSocket Error'),
            startStocksWebSocket(symbol)
          ).pipe(delay(3000))
        )
      );
    })
  );

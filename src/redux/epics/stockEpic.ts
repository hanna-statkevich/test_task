import {catchError, delay, of, share } from "rxjs";
import { map, mergeMap } from 'rxjs/operators';
import { createWebSocketConnection } from "../../services/websocket.ts";
import { ITradeTdo } from "../../types/trade.ts";
import {
    startStocksWebSocket,
    StockAction,
    stocksWebSocketError,
    stocksWebSocketPriceUpdate
} from "../actions/stockActions.ts";
import {ofType} from "redux-observable";

const wsConnection = createWebSocketConnection();
const sharedSocket$ = wsConnection.socket.pipe(
    map((message) => stocksWebSocketPriceUpdate(message as ITradeTdo)),
    share()
);

export const stockEpic = (action$: any) =>
    action$.pipe(
        ofType(StockAction.START_WEBSOCKET, StockAction.STOP_WEBSOCKET),
        mergeMap((action: any) => {
            const symbol = action.payload;

            if (action.type === StockAction.START_WEBSOCKET) {
                wsConnection.subscribe(symbol);
            } else {
                wsConnection.unsubscribe(symbol);
            }

            return sharedSocket$.pipe(
                catchError((error) =>
                    of(
                        stocksWebSocketError(error.message || 'WebSocket Error'),
                        startStocksWebSocket(symbol)
                    ).pipe(delay(3000))
                )
            );
        })
    );

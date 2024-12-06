import { webSocket } from 'rxjs/webSocket';

export const createWebSocketConnection = () => {
  const socket$ = webSocket('wss://ws.finnhub.io?token=cr8qn19r01qr4gd9udkgcr8qn19r01qr4gd9udl0');

  const subscribe = (symbol: string) => {
    socket$.next({type: 'subscribe', symbol: symbol});
  };

  return {
    socket: socket$,
    subscribe,
  };
};

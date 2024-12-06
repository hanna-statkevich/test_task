import { Alert, Box, Button, Grid, Stack } from "@mui/material";
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { startStocksWebSocket, stopStocksWebSocket } from "../redux/actions/stockActions.ts";
import { stocksSelector } from "../redux/selectors/stocksSelector.ts";
import SearchBar from './Search';
import TradesTable from "./TradesTable.tsx";

const Stocks = () => {
  const dispatch = useDispatch();
  const {data, symbol, connected, error} = useSelector(stocksSelector);

  const onSubmit = useCallback((values: { search: string }) => {
    dispatch(startStocksWebSocket(values.search))

    return Promise.resolve()
  }, [dispatch])

  useEffect(() => {
    () => dispatch(stopStocksWebSocket(symbol))
  }, [])

  return (
    <Box sx={{width: '500px'}}>
      <h2>
        <center>Stocks</center>
      </h2>
      <Grid container direction={"column"} spacing={2}>
        <>
          <Grid item>
            <SearchBar onSubmit={onSubmit}/>
          </Grid>

          <Grid item>
            <Stack
              direction="row"
              spacing={'auto'}
            >
              <Button variant="outlined" onClick={() => dispatch(startStocksWebSocket('AAPL'))}>
                AAPL
              </Button>
              <Button variant="outlined" onClick={() => dispatch(startStocksWebSocket('GOOG'))}>
                GOOG
              </Button>
              <Button variant="outlined" onClick={() => dispatch(startStocksWebSocket('BINANCE:BTCUSDT'))}>
                BTC
              </Button>
            </Stack>
          </Grid>

          {!!data.length &&
            <Grid item sx={{margin: 'auto'}}>
              <TradesTable data={data}/>
            </Grid>}

          {!data.length && connected &&
            <Grid item sx={{margin: 'auto'}}>
              <p>No stocks data available for symbol {symbol}</p>
            </Grid>}

          {!data.length && !connected &&
            <Grid item sx={{margin: 'auto'}}>
              <p>Select symbol to display data</p>
            </Grid>}

          {error &&
            <Grid item>
              <Alert severity="error">
                {String(error)}
              </Alert>
            </Grid>}
        </>
      </Grid>
    </Box>
  );
};

export default Stocks;

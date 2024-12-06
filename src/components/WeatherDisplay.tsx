import { Alert, Box, Button, CircularProgress, Grid, Stack } from "@mui/material";
import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherRequest } from "../redux/actions/weatherActions.ts";
import { weatherSelector } from "../redux/selectors/weatherSelector.ts";
import { IWeather } from "../types/weather.ts";
import SearchBar from './Search';
import WeatherTable from "./WeatherTable.tsx";

const WeatherDisplay = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(weatherSelector);


  const onSubmit = useCallback((values: { search: string }) => {
    dispatch(fetchWeatherRequest(values.search))

    return Promise.resolve()
  }, [dispatch])

  return (
    <Box sx={{width: '500px'}}>
      <h2>
        <center>Weather Search</center>
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
              <Button variant="outlined" onClick={() => dispatch(fetchWeatherRequest('Cracow'))}>
                Cracow
              </Button>
              <Button variant="outlined" onClick={() => dispatch(fetchWeatherRequest('Warsaw'))}>
                Warsaw
              </Button>
              <Button variant="outlined" onClick={() => dispatch(fetchWeatherRequest('Gdansk'))}>
                Gdansk
              </Button>
            </Stack>
          </Grid>

          {loading &&
            <Grid item sx={{margin: 'auto', height: '150px', display: 'flex', alignItems: 'center'}}>
              <CircularProgress/>
            </Grid>}

          {data && !loading &&
            <Grid item sx={{margin: 'auto', height: '150px'}}>
              <WeatherTable data={data as IWeather}/>
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

export default WeatherDisplay;

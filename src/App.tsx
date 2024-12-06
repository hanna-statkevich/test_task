import './App.css'
import { Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stocks from './components/Stocks';
import WeatherDisplay from './components/WeatherDisplay'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100vw',
        gap: 10,
        padding: '0 50px'
      }}>
        <WeatherDisplay/>
        <Stocks/>
      </Box>
    </ThemeProvider>
  )
}

export default App

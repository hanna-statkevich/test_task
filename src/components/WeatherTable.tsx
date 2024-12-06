import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { IWeather } from "../types/weather.ts";

export default function WeatherTable({data}: { data: IWeather }) {

  return (
    <TableContainer component={Paper} sx={{width: 500}}>
      <Table sx={{minWidth: 500}} size="small">
        <TableBody>
          <TableRow
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
          >
            <TableCell component="th" scope="row">
              Address
            </TableCell>
            <TableCell align="right">{data.resolvedAddress}</TableCell>
          </TableRow>
          <TableRow
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
          >
            <TableCell component="th" scope="row">
              Conditions
            </TableCell>
            <TableCell align="right">{data.currentConditions.conditions}</TableCell>
          </TableRow>
          <TableRow
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
          >
            <TableCell component="th" scope="row">
              Temperature
            </TableCell>
            <TableCell align="right">{data.currentConditions.temp}</TableCell>
          </TableRow>
          <TableRow
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
          >
            <TableCell component="th" scope="row">
              Feels like
            </TableCell>
            <TableCell align="right">{data.currentConditions.feelslike}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

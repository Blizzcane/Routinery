import * as React from "react";
import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const columns = [
  { id: "sunday", label: "S", minWidth: 10 },
  { id: "monday", label: "M", minWidth: 10 },
  { id: "tuesday", label: "T", minWidth: 10 },
  { id: "wednesday", label: "W", minWidth: 10 },
  { id: "thursday", label: "T", minWidth: 10 },
  { id: "friday", label: "F", minWidth: 10 },
  { id: "saturday", label: "S", minWidth: 10 },
];

function createData(
  name,
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday
) {
  return {
    name,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  };
}

const rows = [
  createData("Frozen", true, false, false, true, false, false, true),
  createData("yoghurt", false, true, false, true, true, false, false),
  createData("Froz", false, true, true, false, false, false, false), 
];

const Routines = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Habit</TableCell>
            {columns.map((column) => (
              <TableCell key={column.id} align="center">
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.sunday} />
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.monday} />
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.tuesday} />
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.wednesday} />
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.thursday} />
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.friday} />
              </TableCell>
              <TableCell align="center">
                <Checkbox checked={row.saturday} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Routines;

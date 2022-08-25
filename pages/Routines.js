import React, { useState } from "react";
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

const Routines = () => {
  const [routines, setRoutines] = useState([
    { name: "Work", days: [false, true, true, false, false, true, true] },
    { name: "Shower", days: [true, true, true, false, false, false, false] },
    { name: "Read", days: [false, true, false, false, false, true, false] },
  ]);

  const onChange = (name, day) => {
    const newState = routines.map((routine) => {
      if (routine.name === name) {
        const newDays = routine.days;
        newDays[day] = !newDays[day];
        return { ...routine, newDays };
      }
      return routine;
    });
    setRoutines(newState);
  };

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
          {routines.map(({ name, days }) => (
            <TableRow
              key={name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>{" "}
              {days.map((day, idx) => (
                <TableCell align="center" key={"day" + idx}>
                  <Checkbox
                    onChange={() => onChange(name, idx)}
                    checked={day}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Routines;

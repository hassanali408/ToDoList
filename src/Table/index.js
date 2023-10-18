import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function BasicTable({inputValue}) {
    const [status,setstatus]=React.useState("Pending");

   
  return (
    <>
   
    <TableContainer component={Paper} sx={{
        width: "80%",
        height: "200px",
        backgroundColor: "white",
        marginLeft:"90px",
        marginTop:'20px',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
      }}>
        <h2 style={{paddingLeft:'20px',paddingTop:'10px',paddingBottom:'10px'}}>List</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Task</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputValue.map((row ,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">{row}</TableCell>
              <TableCell align="right">{status}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"><FontAwesomeIcon icon="fa-solid fa-trash" style={{color: "#f50000",}} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


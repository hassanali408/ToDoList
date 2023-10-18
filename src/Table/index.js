import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';



export default function BasicTable({inputValue}) {
    const [status,setstatus]=React.useState("Pending");

const tableContainerStyle = {
  width: "80%",
  maxWidth: "800px",
  margin: "0 auto", 
  marginTop: '-50px',
  borderRadius: '10px', 


};

const tableStyle = {
  width: '100%',
};

const tableHeaderCell = {
  fontWeight: "bold",
  backgroundColor: "#f0f0f0",
};

const tableBodyCell = {
  borderBottom: "1px solid #ccc",
};

   
  return (
    <>
   
   <TableContainer component={Paper} sx={tableContainerStyle}>
  <h2 style={{ paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }}>List</h2>
  <Table sx={tableStyle} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell style={tableHeaderCell}>#</TableCell>
        <TableCell align="right" style={tableHeaderCell}>Task</TableCell>
        <TableCell align="right" style={tableHeaderCell}>Status</TableCell>
        <TableCell align="right" style={tableHeaderCell}>Edit</TableCell>
        <TableCell align="right" style={tableHeaderCell}>Remove</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {inputValue.map((row, index) => (
        <TableRow key={index}>
          <TableCell component="th" scope="row" style={tableBodyCell}>
            {index}
          </TableCell>
          <TableCell align="right" style={tableBodyCell}>{row}</TableCell>
          <TableCell align="right" style={tableBodyCell}>{status}</TableCell>
          <TableCell align="right" style={tableBodyCell}>
            <FontAwesomeIcon icon={faEdit} style={{ color: "#2196F3" }} />
          </TableCell>
          <TableCell align="right" style={tableBodyCell}>
            <FontAwesomeIcon icon={faTrash} style={{ color: "#f50000" }} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

    </>
  );
}


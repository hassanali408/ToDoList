import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const CompleteList = ({todoList}) => {
    const tableContainerStyle = {
        width: "80%",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: '14%',
        borderRadius: '10px',
        overflowY: 'auto',
        maxHeight: '300px',
    
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
        <h2 style={{ paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px' }}>Task Completed</h2>
        <Table sx={tableStyle} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={tableHeaderCell}>#</TableCell>
              <TableCell align="right" style={tableHeaderCell}>Task</TableCell>
              <TableCell align="right" style={tableHeaderCell}>Status</TableCell>
              <TableCell align="right" style={tableHeaderCell}>Undo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" style={tableBodyCell}>
                  {index + 1}
                </TableCell>
                <TableCell align="right" style={tableBodyCell}>{row.task}</TableCell>
                <TableCell align="right" style={tableBodyCell}>{row.status === 'Pending' ? 
                   <span style={{ backgroundColor: "#DC381F", padding: "3px 6px", borderRadius: '5px', color: 'white' }}>Pending</span> :
                  <span style={{ backgroundColor: "green", padding: "3px 5px", borderRadius: '5px', color: 'white' }}>Complete</span>}
                </TableCell>

           
             
             

            
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>

    </> 
    );

}
 

export default CompleteList;
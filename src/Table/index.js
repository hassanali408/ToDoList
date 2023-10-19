import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '@mui/material/Checkbox';

import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BasicTable({ setTodoList, todoList }) {
  const [isPressed, setisPressed] = useState(false);
  const [taskNameChange, settaskNameChange] = useState('');


  function handleRemove(index) {
    const newList = todoList.filter((item, id) => id !== index);
    setTodoList(newList);
  }

  const tableContainerStyle = {
    width: "80%",
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: '-50px',
    borderRadius: '10px',
    overflowY: 'auto',
    maxHeight: '250px',

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



  const handleCompleteChange = (index) => {
    if (index !== null) {
      const updatedTodoList = [...todoList];
      if (isPressed === false) {
        updatedTodoList[index].status = "Complete";
        setTodoList(updatedTodoList);
        setisPressed(true);
      } else {
        updatedTodoList[index].status = "Pending";
        setTodoList(updatedTodoList);
        setisPressed(false);
      }


    }
  };

  const statusChange = (index) => {
    if (index !== null) {
      const updatedTodoList = [...todoList];
      if (taskNameChange.trim() !== '') {
        updatedTodoList[index].task = taskNameChange;
      }
      setTodoList(updatedTodoList);
    }
    settaskNameChange('');
    
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
              <TableCell align="right" style={tableHeaderCell}>Complete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" style={tableBodyCell}>
                  {index + 1}
                </TableCell>
                <TableCell align="right" style={tableBodyCell}>{row.task}</TableCell>
                <TableCell align="right" style={tableBodyCell}>{row.status === 'Pending' ? <span style={{ backgroundColor: "#DC381F", padding: "3px 6px", borderRadius: '5px', color: 'white' }}>Pending</span> :
                  <span style={{ backgroundColor: "green", padding: "3px 5px", borderRadius: '5px', color: 'white' }}>Complete</span>}
                </TableCell>

                <TableCell align="right" style={tableBodyCell}>
                  {row.status === "Pending" ? (<FontAwesomeIcon icon={faEdit} style={{ color: "#2196F3" }} />) : (
                    <FontAwesomeIcon icon={faEdit} style={{ color: "#dddddd" }} />
                  )}
                </TableCell>
                <TableCell align="right" style={tableBodyCell}>
                  <FontAwesomeIcon icon={faTrash} style={{ color: "#f50000", marginRight: '20px' }} onClick={() => handleRemove(index)} />
                </TableCell>

                <TableCell align="right" style={tableBodyCell}>
                  <Checkbox {...label} color="success" value={isPressed} onClick={() => handleCompleteChange(index)} />
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>


    </>
  );
}


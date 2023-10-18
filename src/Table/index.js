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
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function BasicTable({ setTodoList, todoList }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [isPressed, setisPressed] = useState(false);
  const [textEnabled, settextEnabled] = useState(false);
  const [selectedEditIndex, setSelectedEditIndex] = useState(null);
  const [taskNameChange, settaskNameChange] = useState('');


  function handleRemove(index) {
    const newList = todoList.filter((item, id) => id !== index);
    setTodoList(newList);
  }

  const handleOpen = (index) => {
    setSelectedEditIndex(index);
    setOpen(true);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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

  const handleChange = event => {
    if (event.target.checked) {
      settextEnabled(true)
    } else {
      settextEnabled(false);
    }
    setisPressed(current => !current);
  };

  const statusChange = () => {
    if (selectedEditIndex !== null) {
      const updatedTodoList = [...todoList];
      if (isPressed === true) {
        updatedTodoList[selectedEditIndex].status = "Complete";
        settextEnabled(false);
        setisPressed(false);
      }
      if (taskNameChange.trim() !== '') {
        updatedTodoList[selectedEditIndex].task = taskNameChange;
      }
      setTodoList(updatedTodoList);

    }

    settaskNameChange('');
    handleClose();
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
            {todoList.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" style={tableBodyCell}>
                  {index}
                </TableCell>
                <TableCell align="right" style={tableBodyCell}>{row.task}</TableCell>
                <TableCell align="right" style={tableBodyCell}>{row.status === 'Pending' ? <span style={{ backgroundColor: "#DC381F", padding: "3px 6px", borderRadius: '5px', color: 'white' }}>Pending</span> :
                  <span style={{ backgroundColor: "green", padding: "3px 5px", borderRadius: '5px', color: 'white' }}>Complete</span>}
                </TableCell>

                <TableCell align="right" style={tableBodyCell}>
                {row.status==="Pending" ? (<FontAwesomeIcon icon={faEdit} style={{ color: "#2196F3" }} onClick={() => handleOpen(index)} />):(
                  <FontAwesomeIcon icon={faEdit} style={{ color: "#dddddd" }}/>
                )}  
                </TableCell>
                <TableCell align="right" style={tableBodyCell}>
                  <FontAwesomeIcon icon={faTrash} style={{ color: "#f50000", marginRight: '20px' }} onClick={() => handleRemove(index)} />
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField id="standard-basic" variant="outlined" size="medium" disabled={textEnabled} value={taskNameChange}
            onChange={(e) => settaskNameChange(e.target.value)} />
          <Button variant="contained" color="success" style={{ marginLeft: '20px', marginTop: '10px' }} onClick={statusChange}>Update</Button><br></br>
          <FormControlLabel control={<Checkbox {...label} color="success" value={isPressed} onChange={handleChange} />} label="Complete" />
        </Box>
      </Modal>
    </>
  );
}


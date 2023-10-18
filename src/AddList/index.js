import React, { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddList = ({ inputValue, handleClick, handleChange }) => {


  return (
    <div className="AddList">
      <Box
        sx={{
          width: '80%',
          height: '100px',
          backgroundColor: 'white',
          marginTop: '20px',
          borderRadius: "10px",

        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField id="standard-basic" placeholder="Would you like to Add Something?" variant="standard"
            style={{ width: '350px', marginTop: '10px' }} value={inputValue} onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" style={{ backgroundColor: '#ef5350', width: '130px', marginTop: '10px' }}
            onClick={handleClick}>
            Add
          </Button>
        </div>

      </Box>
    </div>
  );
};

export default AddList;

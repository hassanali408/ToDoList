import React, { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddList = ({inputValue,handleClick,handleChange}) => {



  return (
    <Box
      sx={{
        width: '80%',
        height: '100px',
        backgroundColor: 'white',
        marginLeft: '90px',
        marginTop: '20px',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          id="standard-basic"
          placeholder="Would you like to Add Something?"
          variant="standard"
          style={{ width: '400px', marginTop: '10px' }}
          value={inputValue}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#ef5350', width: '130px', marginTop: '10px' }}
          onClick={handleClick}
        >
          Add
        </Button>
      </div>
    </Box>
  );
};

export default AddList;

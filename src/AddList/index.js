import React, { useState } from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddList = ({ inputValue, handleClick, handleChange, isEditing }) => {


  return (
    <div className="AddList">
      <Box
        sx={{
          width: '80%',
          height: '110px',
          backgroundColor: 'white',
          marginTop: '20px',
          borderRadius: "10px",

        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField id="standard-basic" placeholder={isEditing===false ? "Would you like to Add Something?" : "Update the name"} variant="standard"
            style={{ width: '350px', marginTop: '10px' }} value={inputValue} onChange={handleChange}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained"
            style={{ backgroundColor: isEditing ? '#2196F3' : '#ef5350', width: '12vw',height:"6vh", marginTop: '10px' }}
            onClick={handleClick}
          >
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </div>

      </Box>
    </div>
  );
};

export default AddList;

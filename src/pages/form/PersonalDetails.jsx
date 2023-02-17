import React from 'react';
import '../../Form.css';
import { Avatar, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { pink } from '@mui/material/colors';

const PersonalDetails = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="formContainer">
      <h1>Welcome to DogSpace</h1>
      <p>Please add your profile.</p>
      <br></br>
      <FormControl variant="standard" sx={{ width: '100%', textAlign: 'center' }}>
        <div className="avatar">
          <Avatar sx={{ width: '45vw', height: '45vw' }} />
        </div>
        <br></br>
        <TextField
          type="text"
          variant="filled"
          placeholder="Name"
          value={values.name}
          onChange={handleChange('name')}
          hiddenLabel
          InputProps={{
            style: {
              background: '#d9d9d9',
              fontSize: '0.8rem',
              width: '90%',
              marginLeft: '5%',
              display: 'flex',
              alignText: 'center',
              borderRadius: '0'
            },
            disableUnderline: true
          }}
        />
        <br></br>
        <TextField
          type="number"
          variant="filled"
          placeholder="Age"
          value={values.age}
          onChange={handleChange('age')}
          hiddenLabel
          InputProps={{
            style: {
              background: '#d9d9d9',
              fontSize: '0.8rem',
              width: '90%',
              marginLeft: '5%',
              display: 'flex',
              alignText: 'center',
              borderRadius: '0'
            },
            disableUnderline: true,
          }}
        />
        <br></br>
        <h2>
          How do you identify? <span>(Optional)</span>
        </h2>
        <RadioGroup value={values.gender} onChange={handleChange('gender')}>
          <FormControlLabel
            value="female"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Female"
            labelPlacement="start"
            sx={{
              fontSize: '0.8rem',
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #d9d9d9'
            }}
          />
          <FormControlLabel
            value="male"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Male"
            labelPlacement="start"
            sx={{
              fontSize: '0.8rem',
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #d9d9d9'
            }}
          />
          <FormControlLabel
            value="non-binary"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Non-binary"
            labelPlacement="start"
            sx={{
              fontSize: '0.8rem',
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #d9d9d9'
            }}
          />
          <FormControlLabel
            value="rather not to say"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Rather not to say"
            labelPlacement="start"
            sx={{
              fontSize: '0.8rem',
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #d9d9d9'
            }}
          />
          <FormControlLabel
            value="other"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Other"
            labelPlacement="start"
            sx={{
              fontSize: '0.8rem',
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%'
            }}
          />
        </RadioGroup>
        <button onClick={Continue} className="nextButton">
          Next
        </button>
      </FormControl>
    </div>
  );
};

export default PersonalDetails;

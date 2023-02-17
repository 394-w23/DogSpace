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
    <div>
      <h1>Welcome to DogSpace</h1>
      <p>Please add your profile.</p>
      <br></br>
      <FormControl variant="standard" sx={{ width: '90%' }}>
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
          InputProps={{
            style: {
              fontSize: '1rem'
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
          InputProps={{
            style: {
              fontSize: '1rem'
            },
            disableUnderline: true
          }}
        />
        <br></br>
        <h2>
          How do you identify? <span>(Optional)</span>
        </h2>
        <RadioGroup value={values.gender} onChange={handleChange('gender')}>
          <FormControlLabel
            value="female"
            control={<Radio sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }} />}
            label="Female"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="male"
            control={<Radio sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }} />}
            label="Male"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="non-binary"
            control={<Radio sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }} />}
            label="Non-binary"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="rather not to say"
            control={<Radio sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }} />}
            label="Rather not to say"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="other"
            control={<Radio sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }} />}
            label="Other"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
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

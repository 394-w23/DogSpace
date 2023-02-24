import React from 'react';
import '../../Form.css';
import { Avatar, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';

const PersonalDetails = ({ previousStep, nextStep, handleChange, values }) => {
  const GoBack = (e) => {
    e.preventDefault();
    previousStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const labelStyle = {
    color: '#2c604d',
    fontSize: '0.8rem',
    fontStyle: 'bold',
    width: '100%'
  };

  return (
    <div className="formContainer">
      <br></br>
      <br></br>
      <div className="center">
        <div className="circleContainer">
          <div className="circle current"></div>
          <div className="circle other"></div>
          <div className="circle other"></div>
          <div className="circle other"></div>
        </div>
      </div>
      <h1>Welcome to ZenDog</h1>
      <h6>Please add your profile.</h6>
      <br></br>
      <FormControl variant="standard" sx={{ width: '100%', textAlign: 'center' }}>
        <div className="avatar">
          <Avatar sx={{ width: '45vw', height: '45vw' }} />
        </div>
        <h6 className="upload"><b>Upload your photo</b></h6>
        <br></br>
        <TextField
          type="text"
          placeholder="Name"
          variant="filled"
          value={values.name}
          onChange={handleChange('name')}
          hiddenLabel
          InputProps={{
            style: {
              background: 'white',
              fontSize: '0.8rem',
              width: '90%',
              marginLeft: '5%',
              display: 'flex',
              alignText: 'center',
              borderRadius: '8px',
              boxShadow: 'inset 0 2px 8px #e5e5e5'
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
              background: 'white',
              fontSize: '0.8rem',
              width: '90%',
              marginLeft: '5%',
              display: 'flex',
              alignText: 'center',
              borderRadius: '8px',
              boxShadow: 'inset 0 2px 8px #e5e5e5'
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
            control={<Radio sx={{ color: '#d9d9d9', '&.Mui-checked': { color: '#d9d9d9' } }} />}
            label={<h6 style={labelStyle}>Female</h6>}
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #dfdfdf'
            }}
          />
          <FormControlLabel
            value="male"
            control={<Radio sx={{ color: '#d9d9d9', '&.Mui-checked': { color: '#d9d9d9' } }} />}
            label={<h6 style={labelStyle}>Male</h6>}
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #dfdfdf'
            }}
          />
          <FormControlLabel
            value="non-binary"
            control={<Radio sx={{ color: '#d9d9d9', '&.Mui-checked': { color: '#d9d9d9' } }} />}
            label={<h6 style={labelStyle}>Non-binary</h6>}
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #dfdfdf'
            }}
          />
          <FormControlLabel
            value="rather not to say"
            control={<Radio sx={{ color: '#d9d9d9', '&.Mui-checked': { color: '#d9d9d9' } }} />}
            label={<h6 style={labelStyle}>Rather not to say</h6>}
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #dfdfdf'
            }}
          />
          <FormControlLabel
            value="other"
            control={<Radio sx={{ color: '#d9d9d9', '&.Mui-checked': { color: '#d9d9d9' } }} />}
            label={<h6 style={labelStyle}>Other</h6>}
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%'
            }}
          />
        </RadioGroup>
        <button onClick={Continue} className="nextButton">
          <b>Next</b>
        </button>
      </FormControl>
    </div>
  );
};

export default PersonalDetails;

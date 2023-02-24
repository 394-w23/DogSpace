import React from 'react';
import '../../Form.css';
import { FormControl, Grid, IconButton, ToggleButtonGroup, ToggleButton } from '@mui/material';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';

const DogBehavior = ({ previousStep, nextStep, handleChange, values }) => {
  const GoBack = (e) => {
    e.preventDefault();
    previousStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="formContainer">
      <br></br>
      <div className="backButton">
        <IconButton onClick={GoBack}>
          <ArrowBackIos />
        </IconButton>
      </div>
      <br></br>
      <div className="center">
        <div className="circleContainer">
          <div className="circle other"></div>
          <div className="circle other"></div>
          <div className="circle current"></div>
          <div className="circle other"></div>
        </div>
      </div>
      <h1>Behavior</h1>
      <br></br>
      <FormControl component="fieldset" variant="standard" sx={{ width: '100%', margin: '0' }}>
        <Grid
          container
          spacing={2}
          sx={{ width: '100%', marginLeft: '0.5%' }}
          justify="center"
          alignItems="center">
          <Grid item xs={6}>
            <ToggleButtonGroup
              orientation="vertical"
              value={values.dogBehavior}
              onChange={(e, newValue) => {
                handleChange('dogBehavior')(newValue);
              }}
              >
              <ToggleButton
                value="barking"
                disableRipple
                sx={{
                  backgroundColor: '#d9d9d9',
                  mb: 3,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '24px !important',
                    mx: 0,
                    border: 'none'
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#d0ebc7',
                    border: '4px solid #60c35d'
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#d0ebc7',
                    border: '4px solid #60c35d'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px',
                  textTransform: 'none',
                  color: 'black'
                }}
                >
                  <div className="toggleButton">
                    <img className="toggleButtonImage" src="src\svgs\barking.svg" alt="barking" />
                    <b>Barking</b>
                  </div>
              </ToggleButton>
              <ToggleButton
                value="crying"
                sx={{
                  backgroundColor: '#d9d9d9',
                  mb: 3,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '24px !important',
                    mx: 0,
                    border: 'none'
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#d0ebc7',
                    border: '4px solid #60c35d'
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#d0ebc7',
                    border: '4px solid #60c35d'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px',
                  textTransform: 'none',
                  color: 'black'
                }}
                >
                <div className="toggleButton">
                  <img className="toggleButtonImage" src="src\svgs\dog.svg" alt="crying" />
                  <b>Crying</b>
                </div>
              </ToggleButton>
              {/* <ToggleButton
                value="howling"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Howling
              </ToggleButton>
              <ToggleButton
                value="food guarding"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Food guarding
              </ToggleButton>
              <ToggleButton
                value="biting"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Biting
              </ToggleButton>
              <ToggleButton
                value="digging"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Digging
              </ToggleButton>
              <ToggleButton
                value="refusing to eat"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Refusing to eat
              </ToggleButton> */}
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <ToggleButtonGroup 
              orientation="vertical"
              value={values.dogBehavior}
              onChange={(e, newValue) => {
                handleChange('dogBehavior')(newValue);
              }}
              >
              <ToggleButton
                value="potty training"
                sx={{
                  backgroundColor: '#d9d9d9',
                  mb: 3,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '24px !important',
                    mx: 0,
                    border: 'none'
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#d0ebc7',
                    border: '4px solid #60c35d'
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#d0ebc7',
                    border: '4px solid #60c35d'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px',
                  textTransform: 'none',
                  color: 'black'
                }}
                >
                <div className="toggleButton">
                  <img className="toggleButtonImage" src="src\svgs\pooping.svg" alt="potty training" />
                  <b>Potty Training</b>
                </div>
              </ToggleButton>
              <ToggleButton
                value="aggression"
                sx={{
                  backgroundColor: '#d9d9d9',
                  mb: 3,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '24px !important',
                    mx: 0,
                    border: 'none'
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#d0ebc7',
                    border: '4px solid #60c35d'
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#d0ebc7',
                    border: '4px solid #60c35d'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px',
                  textTransform: 'none',
                  color: 'black'
                }}
                >
                <div className="toggleButton">
                  <img className="toggleButtonImage" src="src\svgs\aggression.svg" alt="aggression" />
                  <b>Aggression</b>
                </div>
              </ToggleButton>
              {/* <ToggleButton
                value="licking body"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Licking body
              </ToggleButton>
              <ToggleButton
                value="destructive chewing"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Destructive chewing
              </ToggleButton>
              <ToggleButton
                value="mounting/humping"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Mounting / Humping
              </ToggleButton>
              <ToggleButton
                value="shaking"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Shaking
              </ToggleButton>
              <ToggleButton
                value="refusing to play"
                sx={{
                  background: '#d9d9d9',
                  mb: 2,
                  '&.MuiToggleButtonGroup-grouped': {
                    borderRadius: '8px !important',
                    mx: 1,
                    border: 'none'
                  },
                  boxShadow: '0px 4px 4px 0px #7e7e7e',
                  aspectRatio: '1/1',
                  width: '150px'
                }}>
                Refusing to play
              </ToggleButton> */}
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <button onClick={Continue} className="nextButton">
          <b>Next</b>
        </button>
      </FormControl>
    </div>
  );
};

export default DogBehavior;

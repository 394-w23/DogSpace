import React from 'react';
import '../../Form.css';
import { Checkbox, FormControl, FormControlLabel, Grid, IconButton, RadioGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';

const DogTraining = ({ previousStep, nextStep, handleChange, values }) => {
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
          <div className="circle other"></div>
          <div className="circle current"></div>
        </div>
      </div>
      <h1>Tools at Home</h1>
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
              value={values.dogToolsAtHome}
              onChange={(e, newValue) => {
                handleChange('dogToolsAtHome')(newValue);
              }}>
              <ToggleButton
                value="dog treat"
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
                  <img className="toggleButtonImage" src="../../../src/svgs/treats.svg" alt="dog treat" />
                  <b>Dog Treat</b>
                </div>
              </ToggleButton>
              <ToggleButton
                value="crate"
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
                  <img className="toggleButtonImage" src="../../../src/svgs/crate.svg" alt="crate" />
                  <b>Crate</b>
                </div>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <ToggleButtonGroup
              orientation="vertical"
              value={values.dogToolsAtHome}
              onChange={(e, newValue) => {
                handleChange('dogToolsAtHome')(newValue);
              }}>
              <ToggleButton
                value="toy"
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
                  <img className="toggleButtonImage" src="../../../src/svgs/toys.svg" alt="toy" />
                  <b>Toy</b>
                </div>
              </ToggleButton>
              <ToggleButton
                value="electric collar"
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
                  <img className="toggleButtonImage" src="../../../src/svgs/electric collar.svg" alt="electric collar" />
                  <b>Electric Collar</b>
                </div>
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
        <br></br>
        <h1>Training Preference</h1>
        <br></br>
        <br></br>
        <RadioGroup
          value={values.dogTrainingPreference}
          onChange={(e, newValue) => {
            handleChange('dogTrainingPreference')(newValue);
          }}
          // onChange={handleChange('dogTrainingPreference')}
        >
          <FormControlLabel
            value="positive reinforcement training"
            control={<Checkbox sx={{ color: '#d9d9d9', '&.Mui-checked': { color: '#d9d9d9' } }} />}
            label={<h6 style={labelStyle}>Positive reinforcement training</h6>}
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #d9d9d9',
              borderTop: '2px solid #d9d9d9'
            }}
          />
          <FormControlLabel
            value="clicker training"
            control={<Checkbox sx={{ color: '#d9d9d9', '&.Mui-checked': { color: '#d9d9d9' } }} />}
            label={<h6 style={labelStyle}>Clicker training</h6>}
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #d9d9d9'
            }}
          />
          <FormControlLabel
            value="classical conditioning"
            control={<Checkbox sx={{ color: '#d9d9d9', '&.Mui-checked': { color: '#d9d9d9' } }} />}
            labelPlacement="start"
            label={<h6 style={labelStyle}>Classical conditioning</h6>}
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%',
              borderBottom: '2px solid #d9d9d9'
            }}
          />
        </RadioGroup>
        <button onClick={Continue} className="nextButton">
          <b>Next</b>
        </button>
      </FormControl>
    </div>

  );
}

export default DogTraining;
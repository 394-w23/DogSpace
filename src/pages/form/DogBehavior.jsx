import React from 'react';
import '../../Form.css';
import { FormControl,  
  Grid,
  ToggleButtonGroup,
  ToggleButton} from '@mui/material';

const DogBehavior = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleButtonColor = (event, newButtonValue) => {
    if (values.dogBehavior.includes(newButtonValue)) {
      // If the button is already selected, set the color back to the default color
      return {
        background: '#d9d9d9',
        color: 'initial'
      };
    } else {
      // If the button is not selected, set the color to the selected color
      return {
        background: '#3f51b5',
        color: '#fff'
      };
    }
  };

  return (
    <>
      <h1>What are your dog's issues?</h1>
      <FormControl component="fieldset" variant="standard" sx={{ width: '100%', margin: '0' }}>
        <Grid
          container
          spacing={2}
          sx={{ width: '100%', marginLeft: '-1.5%' }}
          justify="center"
          alignItems="center">
          <Grid item xs={6}>
            <ToggleButtonGroup
              orientation="vertical"
              value={values.dogBehavior}
              onChange={(e, newValue) => {
                handleChange('dogBehavior')(newValue);
              }}>
              <ToggleButton
                value="barking"
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
                }}
                // onClick={(event) => {
                //   handleChange((e, newValue) => {
                //     'dogIssues');
                //   handleButtonColor(event, 'barking');
              >
                Barking
              </ToggleButton>
              <ToggleButton
                value="crying"
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
                Crying
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
            <ToggleButtonGroup orientation="vertical" value={values.dogIssues}>
              {/* // onChange={handleChange('dogIssues')}> */}
              <ToggleButton
                value="potty training"
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
                Potty training
              </ToggleButton>
              <ToggleButton
                value="aggression"
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
                Aggression
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
        {/* need to implement the finish button to upload to firebase? */}
        <button onClick={Continue} className="nextButton">
          Finish
        </button>
      </FormControl>
    </>
  );
};

export default DogBehavior;

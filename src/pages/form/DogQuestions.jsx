import React from 'react';
import '../../Form.css';
import {
  Checkbox,
  FormControl,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@mui/material';

const DogQuestions = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ width: '100%' }}>
        <h2>Meeting place</h2>
        <RadioGroup value={values.dogMeetingPlace} onChange={handleChange('dogMeetingPlace')}>
          <FormControlLabel
            value="breeder"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Breeder"
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
            value="sheltered"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Sheltered"
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
            value="stray"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Stray"
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
            value="other"
            control={<Radio sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Other"
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%'
            }}
          />
        </RadioGroup>
        <h2>Personality</h2>
        <FormGroup value={values.dogPersonality} onChange={handleChange('dogPersonality')}>
          <FormControlLabel
            value="happy"
            control={<Checkbox sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Happy"
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
            value="inquisitive"
            control={<Checkbox sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Inquisitive"
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
            value="melancholic"
            control={<Checkbox sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Melancholic"
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
            value="aggressive"
            control={<Checkbox sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Aggressive"
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
            value="confused"
            control={<Checkbox sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Confused"
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
            value="other"
            control={<Checkbox sx={{ color: '#7e7e7e', '&.Mui-checked': { color: '#7e7e7e' } }} />}
            label="Other"
            labelPlacement="start"
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              marginLeft: '5%'
            }}
          />
        </FormGroup>
        {/* i do not understand how to do the training part? */}
        <button onClick={Continue} className="nextButton">
          Next
        </button>
      </FormControl>
    </div>
  );
};

export default DogQuestions;

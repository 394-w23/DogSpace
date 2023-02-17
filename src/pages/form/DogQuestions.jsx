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
      <FormControl variant="standard" sx={{ width: '90%' }}>
        <h2>Meeting place</h2>
        <RadioGroup value={values.dogMeetingPlace} onChange={handleChange('dogMeetingPlace')}>
          <FormControlLabel
            value="breeder"
            control={<Radio sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }} />}
            label="Breeder"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="sheltered"
            control={<Radio sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }} />}
            label="Sheltered"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="stray"
            control={<Radio sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }} />}
            label="Stray"
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
        <h2>Personality</h2>
        <FormGroup value={values.dogPersonality} onChange={handleChange('dogPersonality')}>
          <FormControlLabel
            value="happy"
            control={<Checkbox sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }}/>}
            label="Happy"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="inquisitive"
            control={<Checkbox sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }}/>}
            label="Inquisitive"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="melancholic"
            control={<Checkbox sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }}/>}
            label="Melancholic"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="aggressive"
            control={<Checkbox sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }}/>}
            label="Aggressive"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="confused"
            control={<Checkbox sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }}/>}
            label="Confused"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
          />
          <FormControlLabel
            value="other"
            control={<Checkbox sx={{ color: '#134f0e', '&.Mui-checked': { color: '#134f0e' } }}/>}
            label="Other"
            labelPlacement="start"
            sx={{ width: '90%', display: 'flex', justifyContent: 'space-between' }}
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

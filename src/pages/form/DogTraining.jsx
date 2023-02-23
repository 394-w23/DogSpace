import React from 'react';
import '../../Form.css';

const DogTraining = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h1>hi</h1>
    </div>

  );
}

export default DogTraining;
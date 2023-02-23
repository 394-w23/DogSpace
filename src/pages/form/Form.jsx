import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import PersonalDetails from './PersonalDetails';
import DogDetails from './DogDetails';
import DogBehavior from './DogBehavior';
import DogTraining from './DogTraining';
import { submitForm } from '../../utils/firebase.js';

export default class Form extends Component {
  state = {
    step: 1,
    name: '',
    age: '',
    gender: '',
    dogName: '',
    dogBreed: '',
    dogBirthday: '',
    dogGender: '',
    dogBehavior: [],
    dogToolsAtHome: [],
    dogTrainingPreference: []
  };

  // proceeds to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handles field changes
  handleChange = (input) => (e) => {
      if (Array.isArray(e) || e.hasOwnProperty('label')) {
        console.log(e);
        this.setState({ [input]: e });
      } else {
        console.log(e);
        this.setState({ [input]: e.target.value });
        console.log(e.target.value);
      }
    console.log(this.state);
  };

  render() {
    const { step } = this.state;
    const {
      name,
      age,
      gender,
      dogName,
      dogBreed,
      dogBirthday,
      dogGender,
      dogBehavior,
      dogToolsAtHome,
      dogTrainingPreference
    } = this.state;
    const values = {
      name,
      age,
      gender,
      dogName,
      dogBreed,
      dogBirthday,
      dogGender,
      dogBehavior,
      dogToolsAtHome,
      dogTrainingPreference
    };

    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <DogDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        );
      case 3:
        return (
          <DogBehavior nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        );
      case 4:
        return (
          <DogTraining nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        );
      case 5:
        // call firebase submit function w/ state
        submitForm(this.state);

        return (
          <Navigate to='/' />
        );
      default:
      // do nothing
    }
  }
}
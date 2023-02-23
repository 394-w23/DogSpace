import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import DogDetails from './DogDetails';
import DogBehavior from './DogBehavior';
import DogTraining from './DogTraining';
import { Home } from '../Home';

export default class Form extends Component {
  state = {
    step: 1,
    name: '',
    age: '',
    gender: '',
    dogName: '',
    dogBreed: '',
    dogBirthday: Date(),
    dogGender: '',
    dogBehavior: [],
    dogToolsAtHome: [],
    dogTrainingPreference: ''
  };

  // proceeds to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handles field changes
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    console.log("set state of " + input + " to " + e.target.value);
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
        return (
          <Home />
          // will probably have to pass these values to the home page or something idk
          // unless it's just retrieved from firebase... then probably not
          // todo: this is causing a weird error with loading the home page from finishing the form?
        );
      default:
      // do nothing
    }
  }
}
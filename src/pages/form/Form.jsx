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
    userPhoto: '',
    userPhotoPreviewUrl: null,
    dogName: '',
    dogPhoto: '',
    dogPhotoPreviewUrl: null,
    dogBreed: '',
    dogBirthday: '',
    dogGender: '',
    dogBehavior: [],
    dogToolsAtHome: [],
    dogTrainingPreference: []
  };

  // goes back to the previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceeds to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // handles field changes
  handleChange = (input) => (e) => {
    if (e.target?.files) {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({ [input]: file });
        this.setState({ [`${input}PreviewUrl`]: reader.result });
      };
      reader.readAsDataURL(file);
      return;
    }

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
      dogTrainingPreference,
      userPhotoPreviewUrl,
      dogPhotoPreviewUrl
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
      dogTrainingPreference,
      userPhotoPreviewUrl,
      dogPhotoPreviewUrl
    };

    switch (step) {
      case 1:
        return (
          <PersonalDetails
            previousStep={this.previousStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <DogDetails
            previousStep={this.previousStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <DogBehavior
            previousStep={this.previousStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <DogTraining
            previousStep={this.previousStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        // call firebase submit function w/ state
        submitForm(this.state);

        return <Navigate to="/" />;
      default:
      // do nothing
    }
  }
}
